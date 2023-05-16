import { Component, OnInit } from '@angular/core';
import { IDataCard } from '../../Interface/IDataCard';
import { data } from 'src/app/Service/data';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: IDataCard[] = data;

  constructor() { }

  ngOnInit(): void {
  }

}
