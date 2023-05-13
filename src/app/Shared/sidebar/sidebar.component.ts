import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() isPublic: boolean = true;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  routes(routerName: string) {
    switch (routerName) {
      case 'addProduct':
        this.router.navigateByUrl('/admin/add-product')
        break;
      case 'categorias':
        this.router.navigateByUrl('/admin/categorias')
        break;
      default:
        break;
    }
  }

  displaylist() {

  }


}
