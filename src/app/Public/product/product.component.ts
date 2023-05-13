import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IDataCard } from 'src/app/Interface/IDataCard';
import { data } from 'src/app/Service/data';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  dataP: IDataCard[] = data;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  backhome() {
    this.router.navigateByUrl('/home');

  }
}
