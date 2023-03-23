import { Component, OnInit, Input } from '@angular/core';
import { IDataCard } from 'src/app/Interface/IDataCard';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})


export class CardComponent implements OnInit {

  @Input() data: IDataCard[] = []
  constructor() { }

  ngOnInit(): void {
  }
  ViewMore(id: number) {

  }

}
