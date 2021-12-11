import { NgModule } from '@angular/core';
import { SharedModule } from '../Modules/shared.module';
import { UserDataRoutingModule } from './user-data-routing.module';
import { UserDataComponent } from './user-data.component';

@NgModule({
  declarations: [UserDataComponent],
  imports: [SharedModule, UserDataRoutingModule],
  entryComponents: [UserDataComponent],
})
export class UserDataModule {}
