import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-elements-page',
  templateUrl: './elements-page.component.html',
  styleUrls: ['./elements-page.component.scss']
})
export class ElementsPageComponent implements OnInit {

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
