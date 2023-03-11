import { Component, OnInit } from '@angular/core';
import { Iloging } from 'src/app/Interface/Iloging';

@Component({
  selector: 'app-loging',
  templateUrl: './loging.component.html',
  styleUrls: ['./loging.component.css']
})
export class LogingComponent implements OnInit {

  userInfo: Iloging = {
    email: '',
    password: '',
  };
  constructor() { }

  ngOnInit(): void {
  }
  login() { }
}
