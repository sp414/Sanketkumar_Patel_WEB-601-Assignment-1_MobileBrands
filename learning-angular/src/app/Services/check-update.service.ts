import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class CheckUpdateService {
  applicationRequiresUpdate: boolean = false;
  constructor(private updates: SwUpdate, private snackBar: MatSnackBar) { }
  public init() {
    this.updates.versionUpdates.subscribe(event => {
      switch (event.type) {
        case 'VERSION_DETECTED':
          console.log(`Downloading new app version:
          ${event.version.hash}`);
          break;
        case 'VERSION_READY':
          const snackBarRef = this.snackBar.open('Application Updated with new content. Hit ok to reload', 'OK');
          snackBarRef.onAction().subscribe((item) => {
            this.updates.activateUpdate().then(() =>
            document.location.reload());
          });
          console.log(`Current app version:
          ${event.currentVersion.hash}`);
          console.log(`New app version ready for use:
          ${event.latestVersion.hash}`);
          break;
      }
    });
  }
  getApplicationUpdateFlag(): boolean {
    return this.applicationRequiresUpdate;
  }
}
