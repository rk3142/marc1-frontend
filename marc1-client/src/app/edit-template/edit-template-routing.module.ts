import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditTemplateComponent } from './edit-template.component';

const routes: Routes = [{ path: '', component: EditTemplateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditTemplateRoutingModule {}
