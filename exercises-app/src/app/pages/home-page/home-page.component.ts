import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';


import { SettingsService } from 'src/app/core/settings.service';
import { CustomEvent } from './custom-event.model';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  // connection to the backend
  isConnected = false;
  connectionSubscription: Subscription;

  constructor(private settings: SettingsService) { }

  ngOnInit(): void {
    // directly try to connect
    this.settings.checkBackendConnection().then(status => {
      this.isConnected = status;

      // now subscribe to changes
      this.connectionSubscription = this.settings.isConnected.subscribe({
        next: newStatus => this.isConnected = newStatus
      });

      // if the status is still false, open the dialog
      if (!this.isConnected) {
        this.settings.requestBackendConnect();
      }
    });
  }
}
