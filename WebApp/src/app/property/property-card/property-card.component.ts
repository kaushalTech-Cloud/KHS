import { Component } from '@angular/core';

@Component({
  selector:'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})

export class PropertyCardComponent{

  Property:any = {
    "PropertyId":10001,
    "PropertName": 'Gaur Sons',
    "Price":100000
  }
}
