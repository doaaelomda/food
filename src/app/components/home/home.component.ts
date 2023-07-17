import { FoodService } from './../../services/food/food.service';
import { Component, OnInit } from '@angular/core';
import { Foods } from 'src/app/shared/food';
import { StarRatingComponent } from 'ng-starrating';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods:Foods[]=[]
  constructor(private FoodService:FoodService,private route:ActivatedRoute){}
  ngOnInit(): void {
    this.route.params.subscribe((params:any)=>{
      if(params['searchItem']){
        this.foods=this.FoodService.getAll().
        filter(foods=>foods.name.
          toLowerCase().includes(params['searchItem'].toLowerCase()))
      }
      else if (params['tags']){
        this.foods=this.FoodService.getAllFoodByTages(params['tags'])
      }
      else{
        this.foods=this.FoodService.getAll()
      }
    })
    
  }
  onRateChange(event: any, food: Foods) {
    food.star = event.rating;
  }

}
