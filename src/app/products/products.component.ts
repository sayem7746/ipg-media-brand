import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  //type ProductType = Array<{id: number, category: number, name: string, image: string, description: string, price: number, rating: number},>
  public productList = [
    {id: 1, category: 1, name: "Display", image:"product1.jpg", description:"Desc 1", price: "100", rating: '5'},
  ]

  constructor() { }

  ngOnInit() {
  }

}
