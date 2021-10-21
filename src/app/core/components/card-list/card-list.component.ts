import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  @Input() title: string = "Default title";
  @Input() description: string = "Default description";
  @Input() list: any[] = []

  constructor() { }

  ngOnInit(): void {
  }

  trackByFn(index: number, item: any): number { 
    return item.id; 
  }

}
