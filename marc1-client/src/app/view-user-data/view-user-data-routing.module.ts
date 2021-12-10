import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewUserDataComponent } from './view-user-data.component';

const routes: Routes = [{ path: '', component: ViewUserDataComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewUserDataRoutingModule {}
