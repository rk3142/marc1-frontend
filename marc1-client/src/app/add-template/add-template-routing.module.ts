import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTemplateComponent } from './add-template.component';

const routes: Routes = [{ path: '', component: AddTemplateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddTemplateRoutingModule {}
