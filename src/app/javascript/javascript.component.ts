/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 06/03/2023 - 16:02:57
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
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css'],
  // providers: [EnrollService]
})
export class JavascriptComponent implements OnInit {
  title = 'Javascript'

  constructor(private enrollService: EnrollService){
        
  } 
  
  OnEnroll(){
    this.enrollService.OnEnrollClicked(this.title)
  }
 
  ngOnInit(): void {
  }

}
