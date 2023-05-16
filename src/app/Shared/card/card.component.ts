import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { IDataCard } from 'src/app/Interface/IDataCard';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})


export class CardComponent implements OnInit {

  @Input() data: IDataCard[] = []
  @Input() size: string = '10rem';
  @Input() location: string = '';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  ViewMore(id: number,) {
    console.log(id, 'aca');
    console.log(this.location, 'Locacion');

    this.router.navigateByUrl(`${this.location}/${id}`)
  }

}
