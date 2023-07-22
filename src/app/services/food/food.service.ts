import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/food';
import { Tag } from './tags';
@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}
  getfoodbyid(foodId:string):Foods{
    return this.getAll().find((food:any) => food.id == foodId) ?? new Foods();
  }
  getAll(): Foods[] {
    return [
      {
        id: 1,
        name: 'Pizza pepperoni',
        cookTime: '10-20',
        price: 10,
        origins: ['italy'],
        favourite: true,
        star: 3,
        src: '/assets/food-1.jpg',
        tags: [ 'Lunch','Pizza'],
      },
      {
        id: 2,
        name: 'Meat',
        cookTime: '15-20',
        price: 100,
        origins: ['egyption'],
        favourite: false,
        star: 2,
        src: '/assets/food-2.jpg',
        tags: ['FastFood', 'Lunch'],
      },
      {
        id: 3,
        name: 'Burger',
        cookTime: '5-20',
        price: 20,
        origins: ['saud-arabya'],
        favourite: false,
        star:1,
        src: '/assets/food-3.jpg',
        tags: ['FastFood','Burger'],
      },
      {
        id: 4,
        name: 'Potatos',
        cookTime: '8-15',
        price: 8,
        origins: ['Fransh'],
        favourite: false,
        star: 2,
        src: '/assets/food-4.jpg',
        tags: [ 'Fry'],
      },
      {
        id: 5,
        name: 'Soup',
        cookTime: '7-10',
        price: 8,
        origins: ['marco'],
        favourite: false,
        star: 4,
        src: '/assets/food-5.jpg',
        tags: ['Soup'],
      },
      {
        id: 6,
        name: 'Pizza Egyption',
        cookTime: '10-20',
        price: 100,
        origins: ['italy'],
        favourite: true,
        star: 5,
        src: '/assets/food-6.jpg',
        tags: ['FastFood','Pizza'],
      },
      {
        id: 7,
        name: 'Large Burger',
        cookTime: '30-35',
        price: 30,
        origins: ['Espanish'],
        favourite: false,
        star: 3,
        src: '/assets/food-7.jpg',
        tags: ['Burger', 'Lunch'],
      },
      {
        id: 8,
        name: 'Pizza With Ranch',
        cookTime: '5-10',
        price: 100,
        origins: ['egyption'],
        favourite: true,
        star: 4,
        src: '/assets/food-8.jpg',
        tags: ['FastFood', 'Pizza'],
      },
    ];
  }
  getAllFoodByTages(tag: string): Foods[] {
    if (tag === 'All') {
      return this.getAll();
    } else {
      return this.getAll().filter((food) => food.tags?.includes(tag));
    }
  }
  getAllTages():Tag[]{
    return [
      {name:'All',count:8},
      {name:'Pizza',count:3},
      {name:'Fry',count:1},
      {name:'Lunch',count:3},
      {name:'FastFood',count:4},
      {name:'Burger',count:2},
      {name:'Soup',count:1},
    ]
  }
}
