import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewTemplateComponent } from './view-template.component';

const routes: Routes = [{ path: '', component: ViewTemplateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewTemplateRoutingModule {}
