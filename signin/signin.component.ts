import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor() { }

  model: any = {};

  ngOnInit() {
  }
  onSubmit() {
    alert('SUCCESS!! :')
  }

}
