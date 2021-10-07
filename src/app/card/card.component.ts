import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  title: string = 'Default Title';
  text: string = 'Default Text';
  @Input() specie: specieType = { 
    characters: 9999,
    classification: 'Default classification',
    description: 'Default description',
    image: 'Default image',
    language: 'Default language',
    name: 'Default name',
    planet: 'Default planet'
  }

  constructor() { }

  ngOnInit(): void {
  }

}

type specieType =
  {
    characters: number,
    classification: string,
    description: string,
    image: string,
    language: string,
    name: string,
    planet: string
  }