import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsComponent } from './views.component';
import { ViewsRoutingModule } from './views-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ViewsComponent
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule
  ]
})
export class ViewsModule { }
