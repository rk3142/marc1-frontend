import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
declare const config: any;

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(
    httpClient,
    './assets/i18n/',
    '.json?cb=' + new Date().getTime()
  );
}

const translationOptions = {
  loader: {
    deps: [HttpClient],
    provide: TranslateLoader,
    useFactory: HttpLoaderFactory,
  },
};

@NgModule({
  imports: [TranslateModule.forRoot(translationOptions)],
  exports: [TranslateModule],
  providers: [TranslateService],
})
export class TransModuleModule {
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
}
