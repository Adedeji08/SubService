/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 06/03/2023 - 16:08:18
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 06/03/2023
    * - Author          : 
    * - Modification    : 
**/
import { Component, OnInit } from '@angular/core';
import { EnrollService } from '../Services/enroll.service';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css'],
  // providers: [EnrollService]
})
export class AngularComponent implements OnInit {
  title = 'Angular'
  constructor(private enrollService: EnrollService){

  }
  OnEnroll(){
   
   this.enrollService.OnEnrollClicked(this.title)
  }

  ngOnInit(): void {
  }

}
