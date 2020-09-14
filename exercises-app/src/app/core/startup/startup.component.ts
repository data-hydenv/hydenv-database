import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-startup',
  templateUrl: './startup.component.html',
  styleUrls: ['./startup.component.scss']
})
export class StartupComponent implements OnInit {
  // component logic
  active = true;
  pending = true;

  // content triggers
  triggerFinished = false;
  triggerOptions = false;


  constructor(private settings: SettingsService) { }

  ngOnInit(): void {
    this.settings.backend.subscribe({
      next: url => {
        if (url) {
          this.findBackend();
        } else {
          this.retry();
        }
      }
    });
  }

  onChangeBackend(address?: string): void {
    if (address) {
      this.settings.changeBackend(address);
    } else {
      this.settings.changeBackend('http://localhost:5000/');
    }
  }

  findBackend(): void {
    this.settings.checkBackendConnection().then(online => {
      this.pending = false;
      if (online) {
        this.startCollapsing();
      } else {
        this.triggerOptions = true;
      }
    });
  }

  retry(): void {
    this.pending = true;
    this.triggerOptions = false;
    this.findBackend();
  }

  private startCollapsing(): void {
    this.pending = false;
    this.triggerOptions = false;
    this.triggerFinished = true;
    setTimeout(() => this.active = false, 800);
  }

}
