import { NgModule } from '@angular/core';
import { SharedModule } from '../Modules/shared.module';
import { ViewTemplateRoutingModule } from './view-template-routing.module';
import { ViewTemplateComponent } from './view-template.component';
@NgModule({
  declarations: [ViewTemplateComponent],
  imports: [SharedModule, ViewTemplateRoutingModule],
  entryComponents: [ViewTemplateComponent],
})
export class ViewTemplateModule {}
