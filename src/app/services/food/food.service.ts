import { Injectable } from '@angular/core';
import { Tag } from 'src/app/shared/models/Tag';
import { Foods } from 'src/app/shared/models/food';


@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() {

   }
   getFoodById(id:number):Foods{
    return this.getAll().find(food=>food.id == id)!;
   }

   getAllFoodByTag(tag:string):Foods[]{
    if(tag=='All')
    return this.getAll()
    else
    return this.getAll().filter(food=>food.tags?.includes(tag))
   }

   getAllTag():Tag[]{
    return[
      {name:'All',count:8},
      {name:'fastfood',count:8},
      {name:'snacks',count:4},
      {name:'lunch',count:3},
      {name:'beverage',count:1},
    ]
   }



  getAll():Foods[]{
    return [
      // '/assets/download.jpg',
      // '/assets/download(7).jpg',
      // '/assets/download(1).jpg',
      // '/assets/download(3).jpg',
      // '/assets/download(4).jpg',
      // '/assets/download(5).jpg',
      // '/assets/download(2).jpg',
      // '/assets/download(6).jpg'

{
  id:1,
  name:'pizza',
  price:55,
  cookTime:'20-min',
  favorite:false,
  origins:['italy'],
  stars:4.5,
  imageUrl:'/assets/download.jpg',
  tags:['fastfood','pizza','lunch'],

},
{
  id:2,
  name:'burger',
  price:35,
  cookTime:'10-min',
  favorite:false,
  origins:['italy','america'],
  stars:4.5,
  imageUrl:'/assets/download(1).jpg',
  tags:['fastfood','burger','lunch'],

},
{
  id:3,
  name:'nachos',
  price:25,
  cookTime:'20-min',
  favorite:false,
  origins:['italy','mexico'],
  stars:4.5,
  imageUrl:'/assets/download(2).jpg',
  tags:['fastfood','nachos','lunch'],

},
{
  id:4,
  name:'french-fries',
  price:55,
  cookTime:'10-min',
  favorite:false,
  origins:['italy','belgium'],
  stars:4.5,
  imageUrl:'/assets/download(3).jpg',
  tags:['fastfood','french-fries','snacks'],

},
{
  id:5,
  name:'hot-dog',
  price:35,
  cookTime:'40-min',
  favorite:false,
  origins:['italy'],
  stars:4.5,
  imageUrl:'/assets/download(5).jpg',
  tags:['fastfood','hot-dog','snacks'],

},
{
  id:6,
  name:'coke',
  price:15,
  cookTime:'20-min',
  favorite:false,
  origins:['italy'],
  stars:4.5,
  imageUrl:'/assets/download(4).jpg',
  tags:['fastfood','coke','beverage'],

},
{
  id:7,
  name:'momos',
  price:25,
  cookTime:'20-min',
  favorite:false,
  origins:['italy'],
  stars:4.5,
  imageUrl:'/assets/download(6).jpg',
  tags:['fastfood','momos','snacks'],

},
{
  id:8,
  name:'sandwich',
  price:35,
  cookTime:'20-min',
  favorite:false,
  origins:['italy'],
  stars:4.5,
  imageUrl:'/assets/download(7).jpg',
  tags:['fastfood','sandwich','snacks'],

},


    ];
  }



}
