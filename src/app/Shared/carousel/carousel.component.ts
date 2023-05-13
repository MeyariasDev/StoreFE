import { Component, OnInit } from '@angular/core';
import { IDataCard } from 'src/app/Interface/IDataCard';
import { data } from 'src/app/Service/data';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  size = '30rem'
  carroselData: IDataCard[] = data;
  constructor() { }

  ngOnInit(): void {
  }



}
