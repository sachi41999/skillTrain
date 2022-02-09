import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
 public joinerDetail:FormGroup
  constructor() { 
    this.joinerDetail=new FormGroup({
      joinerName:new FormControl('',[Validators.required]),
      joinerPhone:new FormControl('',[Validators.required,Validators.pattern('[789]{1}[0-9]{9}')]),
      joinerEmail:new FormControl('',[Validators.required,Validators.pattern('[a-b0-9]*@.com')]),
      joinerDOB:new FormControl('',[Validators.required]),
      joinerGender:new FormControl('',[Validators.required]),
      joinerStream:new FormControl('',Validators.required),
      joinerResume:new FormControl('',Validators.required),
      joinerPY:new FormControl('',[Validators.required,Validators.pattern('[0-9]*')])
    });
  }

  display(){
    console.log(this.joinerDetail);
  }

  ngOnInit(): void {
  }

}
