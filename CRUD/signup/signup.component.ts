import { Component } from '@angular/core';
import { StudentsService } from 'src/app/service/students.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor (private c:StudentsService, private route:Router){}

  regForm = new FormGroup({
    fname: new FormControl(),
    lname: new FormControl(),
    gender: new FormControl(),
    email: new FormControl(),
    phoneno: new FormControl(),
    pwd: new FormControl(),
    project_name: new FormControl()
  })

  reg () {
    this.c.saveData(this.regForm.value).subscribe();
    alert("Data Added!!")

    this.route.navigate(['table'])
    
  }
}
