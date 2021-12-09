import {
  HttpClient,
  HttpHeaders,
  HttpParameterCodec,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, throwError as observableThrowError } from 'rxjs';
import { catchError, map, timeout } from 'rxjs/operators';
import { APP_CONFIG } from '../misc';
import { Utilities } from './utilities.service';
declare const config: any;

class CustomEncoder implements HttpParameterCodec {
  encodeKey(key: string): string {
    return encodeURIComponent(key);
  }

  encodeValue(value: string): string {
    return encodeURIComponent(value);
  }

  decodeKey(key: string): string {
    return decodeURIComponent(key);
  }

  decodeValue(value: string): string {
    return decodeURIComponent(value);
  }
}

const enum servicekeys {
  type = 'Content-Type',
  value = 'application/json',
}

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  public isLoading: Subject<boolean> = new Subject<boolean>();
  public timeoutVal: any;

  constructor(private http: HttpClient, private utilities: Utilities) {
    this.timeoutVal = config.httpTimeout ? config.httpTimeout : 60000;
  }

  getRequestHeader(api) {
    let headers = new HttpHeaders();
    headers = headers.set(servicekeys.type, servicekeys.value);
    if (localStorage.getItem('apiKey')) {
      headers = headers.set('API-KEY', localStorage.getItem('apiKey'));
    }
    if (api === 'saveUserData') {
      headers = headers.set('Referrer', config.referrer);
    }
    return headers;
  }
  public customServiceGet(
    api: string,
    body: any,
    showLoader = true,
    token = ''
  ): Observable<any> {
    this.isLoading.next(showLoader);
    let url = APP_CONFIG.requests[api].url;
    if (token) {
      url = url + '/' + token;
    }
    const httpOptions = {
      headers: this.getRequestHeader(api),
      params: {},
      withCredentials: true,
    };

    return this.http.get(url, httpOptions).pipe(
      timeout(this.timeoutVal),
      map((res: Response) => this.extractServiceData(res, api)),
      catchError((error) => this.handleServiceAPIError(error, api))
    );
  }

  public customServicePost(
    api: string,
    body: any,
    showLoader = true,
    token = ''
  ): Observable<any> {
    this.isLoading.next(showLoader);
    let url = APP_CONFIG.requests[api].url;
    if (token) {
      url = url + '/' + token;
    }
    const httpOptions = {
      headers: this.getRequestHeader(api),
      params: {},
      withCredentials: true,
    };
    return this.http.post(url, body, httpOptions).pipe(
      timeout(this.timeoutVal),
      map((res: Response) => this.extractServiceData(res, api)),
      catchError((error) => this.handleServiceAPIError(error, api))
    );
  }

  public customServicePut(
    api: string,
    body: any,
    showLoader = true,
    token = ''
  ): Observable<any> {
    this.isLoading.next(showLoader);
    let url = APP_CONFIG.requests[api].url;
    if (token) {
      url = url + '/' + token;
    }
    const httpOptions = {
      headers: this.getRequestHeader(api),
      params: {},
      withCredentials: false,
    };
    return this.http.put(url, body, httpOptions).pipe(
      timeout(this.timeoutVal),
      map((res: Response) => this.extractServiceData(res, api)),
      catchError((error) => this.handleServiceAPIError(error, api))
    );
  }

  public extractServiceData(res: Response, api) {
    const body = res;
    this.isLoading.next(false);
    switch (api) {
      case 'healthCheck':
        break;
      case 'saveUserData':
        this.utilities.showMessage('languageMap.SAVE_DATA_MSG');
        break;
      default:
        this.utilities.showMessage('languageMap.SUCCESS_MSG');
    }
    return body || {};
  }
  handleServiceAPIError(error, api) {
    this.isLoading.next(false);
    if (error && error.message && error.message.length > 0) {
      this.utilities.openSnackbar(error.message);
    } else {
      this.utilities.showMessage('languageMap.NETWORK_ERROR');
    }
    return observableThrowError(error);
  }
}
