import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  // backend logic
  private backendUrl = 'http://localhost:5000/api/v1/';
  backend = new BehaviorSubject<string>(this.backendUrl);

  // connection status
  isConnected = new BehaviorSubject<boolean>(false);
  connectRequested = new EventEmitter<void>();
  checkTimoutId: number;
  checkConnection = new BehaviorSubject<boolean>(true);


  constructor(private http: HttpClient) { }

  changeBackend(address: string): void {
    if (address.endsWith('api/v1/')) {
      this.backendUrl = address;
    } else {
      this.backendUrl = `${address}api/v1/`;
    }
    this.backend.next(this.backendUrl);
  }

  /**
   * connectRequested Event is emitted, which will be consumed by the
   * startup component.
   */
  public requestBackendConnect():  void {
    this.connectRequested.emit();
  }

  /**
   * Starts the connection autocheck
   */
  public startCheckConnection(): void {
    this.checkTimoutId = setTimeout(this.checkBackendConnection.bind(this), 5000);
  }

  /**
   * Stops the connection autocheck
   */
  public stopCheckConnection(): void {
    if (this.checkTimoutId) {
      clearTimeout(this.checkTimoutId);
      this.checkTimoutId = null;
    }
  }

  public checkBackendConnection(): Promise<boolean> {
    return new Promise(resolve => {
      if (!this.backendUrl) {
        this.isConnected.next(false);
        resolve(false);
      }
      this.http.get(this.backendUrl + 'ping').subscribe({
        next: () =>  {
          this.isConnected.next(true);
          resolve(true);
        },
        error: () => {
          this.isConnected.next(false);
          resolve(false);
        }
      });
    });
  }
}
