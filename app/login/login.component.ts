import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


export class User {
  constructor(public name: string, public password: string) {  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  user = new User("bob","myPassword");
  userSubmitted = new User("","");

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(f:NgForm){
    this.userSubmitted.name = f.value.name;
    this.userSubmitted.password = f.value.password;
    if(this.userSubmitted.name == f.value.name && this.userSubmitted.password == f.value.password){
      this.router.navigate(['/contactus']);
    }
  }
}
