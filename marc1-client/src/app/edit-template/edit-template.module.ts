import { NgModule } from '@angular/core';
import { SharedModule } from '../Modules/shared.module';
import { EditTemplateRoutingModule } from './edit-template-routing.module';
import { EditTemplateComponent } from './edit-template.component';

@NgModule({
  declarations: [EditTemplateComponent],
  imports: [SharedModule, EditTemplateRoutingModule],
  entryComponents: [EditTemplateComponent],
})
export class EditTemplateModule {}
