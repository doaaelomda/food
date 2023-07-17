import { FoodService } from './../../services/food/food.service';
import { Component, Input, OnInit } from '@angular/core';
import { Tag } from 'src/app/services/food/tags';

@Component({
  selector: 'app-tages',
  templateUrl: './tages.component.html',
  styleUrls: ['./tages.component.css']
})
export class TagesComponent  implements OnInit{
  @Input()
  foodpagetages?:string[]
  tags?:Tag[] =[]
  constructor(private FoodService:FoodService){}
  ngOnInit(): void {
  if(!this.foodpagetages)
    this.tags=this.FoodService.getAllTages()

  }

}
