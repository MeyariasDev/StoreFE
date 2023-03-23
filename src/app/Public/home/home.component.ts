import { Component, OnInit } from '@angular/core';
import { IDataCard } from '../../Interface/IDataCard';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products:IDataCard[]=[
    {img:'assets/reloj.png', name:'Reloj Caballero', price:50, size:'160px' },
    {img:'assets/EquipoLG.png', name:'EquipoLG', price:50, size:'160px' },
    {img:'assets/CAMARAWIFI.png', name:'Camara WIFI', price:50, size:'160px' },
    {img:'assets/LGREPRODUCTOR.png', name:'Reproductor LG', price:50, size:'160px' },
    {img:'assets/TVLED55.png', name:'VL TCL 55 pulg', price:50, size:'160px' },
    {img:'assets/AZUSPC.png', name:'Laptop Azus', price:50, size:'160px' },
    {img:'assets/TelMororola.png', name:'Smart Phone', price:50, size:'160px' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
