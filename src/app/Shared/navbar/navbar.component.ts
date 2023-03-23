import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() isPublic: boolean = true;
  constructor() { }
  busqueda: string = "";
  ngOnInit(): void {
  }

  abrir() {
    const sidebar = (<HTMLInputElement>document.getElementById('sidebar'));
    sidebar.classList.toggle("centerList");

  }

  search() {
    console.log('click');
    // this.Sdata.filter$.emit(this.busqueda);


  }
}
