import { Component, Input, OnInit } from '@angular/core';
import { IOneProduct } from 'src/app/models/oneProduct';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  oneProduct: IOneProduct[]= []
  @Input() product!: IOneProduct
  imageUrl: string=''
  newPrice: string=''
  constructor() { }

  ngOnInit(): void {
    this.imageUrl=this.product.images[0]
    this.newPrice = JSON.stringify(this.product.price)

  }

}
