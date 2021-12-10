import { NgModule } from '@angular/core';
import { SharedModule } from '../Modules/shared.module';
import { AddTemplateRoutingModule } from './add-template-routing.module';
import { AddTemplateComponent } from './add-template.component';

@NgModule({
  declarations: [AddTemplateComponent],
  imports: [SharedModule, AddTemplateRoutingModule],
  entryComponents: [AddTemplateComponent],
})
export class AddTemplateModule {}
