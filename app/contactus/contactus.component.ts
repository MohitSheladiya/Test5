import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

export class User {
  constructor(public name: string, public email: string, public message: string) {  }
}

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  user = new User("bob","bob@gmail.com", "Hey this is bob");
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(f:NgForm){
    this.router.navigate(['/login']);
  }

}
