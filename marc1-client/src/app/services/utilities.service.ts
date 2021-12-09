import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
declare let config: any;
@Injectable({
  providedIn: 'root',
})
export class Utilities {
  constructor(
    private translateService: TranslateService,
    private snackBar: MatSnackBar
  ) {}

  public getLangString(key: string) {
    let langValue = '';
    this.translateService.get(key).subscribe((translation) => {
      langValue = translation;
    });
    return langValue;
  }
  public showMessage(val: string) {
    const msg = this.getLangString(val);
    this.snackBar.open(msg);
  }

  public showErrorMessage() {
    this.showMessage('languageMap.NETWORK_ERROR');
  }

  public openSnackbar(msg: string) {
    this.snackBar.open(msg);
  }

  public getUuid() {
    const uuid = localStorage.getItem('uuid')
      ? localStorage.getItem('uuid')
      : null;
    return uuid;
  }
}
