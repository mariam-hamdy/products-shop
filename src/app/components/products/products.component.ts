import { Component, Input, OnInit, Output } from '@angular/core';
import { IOneProduct } from 'src/app/models/oneProduct';
import { IProduct } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  //products[0].products[0].title

  products: IProduct[] = []
  oneProduct: IOneProduct[] =[]
  @Input() search!: string


  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadProducts()
  }

  loadProducts() {
    this.productService.getProductSubject().subscribe((data: IProduct[]) => {
      this.products = data


    })

    this.productService.getProducts()

  }


  get filteredProducts() {
    if(!this.search) {
      return this.products[0]?.products

    }

    let filtered = this.products[0]?.products.filter(item => {
      let newItem = item.title.toLowerCase()
      return newItem.startsWith(this.search.toLowerCase())
    })
    console.log(filtered, this.search)
    return filtered

  }

}
