import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgxUiLoaderModule, SPINNER } from 'ngx-ui-loader';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,    
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,    
    NgxUiLoaderModule.forRoot({
      delay: 100,
      maxTime: 300000,
      fgsSize: 200,
      fgsType: SPINNER.doubleBounce,
      fgsPosition: 'center-center',
      hasProgressBar: false,
      overlayColor: "rgba(40, 40, 40, 0.8)",
      fgsColor: "#cacaca",
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
