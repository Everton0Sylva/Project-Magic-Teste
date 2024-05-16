import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsComponent } from './views.component';
import { ViewsRoutingModule } from './views-routing.module';
import { FormsModule } from '@angular/forms';
import { ApirequestService } from '../services/apirequest.service';
import { NgxUiLoaderModule, SPINNER } from 'ngx-ui-loader';



@NgModule({
  declarations: [
    ViewsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ViewsRoutingModule,
    NgxUiLoaderModule
  ],
  providers:[
    ApirequestService
  ]
})
export class ViewsModule { }
