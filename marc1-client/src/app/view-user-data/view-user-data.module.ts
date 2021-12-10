import { NgModule } from '@angular/core';
import { SharedModule } from '../Modules/shared.module';
import { ViewUserDataRoutingModule } from './view-user-data-routing.module';
import { ViewUserDataComponent } from './view-user-data.component';
@NgModule({
  declarations: [ViewUserDataComponent],
  imports: [SharedModule, ViewUserDataRoutingModule],
  entryComponents: [ViewUserDataComponent],
})
export class ViewUserDataModule {}
