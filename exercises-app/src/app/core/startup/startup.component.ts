import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-startup',
  templateUrl: './startup.component.html',
  styleUrls: ['./startup.component.scss']
})
export class StartupComponent implements OnInit {
  // component logic
  active = false;
  pending = true;

  // content triggers
  triggerFinished = false;
  triggerOptions = false;

  // save the collaping timeout
  collapseTimeoutId: number;

  // elements
  backendUrl: string;


  constructor(private settings: SettingsService) { }

  ngOnInit(): void {
    // subscribe to backend url
    // this.settings.backend.subscribe({
    //   next: url => {
    //     if (url) {
    //       this.findBackend();
    //     } else {
    //       this.retry();
    //     }
    //   }
    // });

    // listen to requests
    this.settings.connectRequested.subscribe({
      next: () => {
        // stop ongoing collapsing
        this.stopCollapsing();

        // reset and try to connect
        this.resetComponent();
        this.findBackend();
      }
    });
  }

  resetComponent(): void {
    this.active = true;
    this.pending = true;
    this.triggerFinished = false;
    this.triggerOptions = false;
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
    this.collapseTimeoutId = window.setTimeout(() => this.active = false, 800);
  }

  public stopCollapsing(): void {
    if (this.collapseTimeoutId) {
      clearTimeout(this.collapseTimeoutId);
      this.collapseTimeoutId = null;
    }
  }

}
