/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 10/03/2023 - 13:00:51
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 10/03/2023
    * - Author          : 
    * - Modification    : 
**/
import { Component } from '@angular/core';
import { EnrollService } from './Services/enroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EnrollService]
})
export class AppComponent {
  constructor(private enrollService: EnrollService){

  }
  title = 'subscribeservice';
}
