import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {
  MatSnackBarModule,
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
} from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransModuleModule } from './Modules/lang-trans/lang-trans.module';
import { EditTemplateComponent } from './edit-template/edit-template.component';
import { UserDataComponent } from './user-data/user-data.component';
import { ViewTemplateComponent } from './view-template/view-template.component';
import { ViewUserDataComponent } from './view-user-data/view-user-data.component';
@NgModule({
  declarations: [AppComponent, EditTemplateComponent, UserDataComponent, ViewTemplateComponent, ViewUserDataComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TransModuleModule,
    HttpClientModule,
    MatProgressBarModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
  ],
  providers: [
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: {
        duration: 2500,
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
