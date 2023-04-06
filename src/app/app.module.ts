/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 10/03/2023 - 13:23:26
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 10/03/2023
    * - Author          : 
    * - Modification    : 
**/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AngularComponent } from './angular/angular.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { EnrollService } from './Services/enroll.service';

@NgModule({
  declarations: [
    AppComponent,
    AngularComponent,
    JavascriptComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [EnrollService],
  bootstrap: [AppComponent]
})
export class AppModule { }
