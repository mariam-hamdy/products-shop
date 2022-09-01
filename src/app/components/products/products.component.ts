import { Component, OnInit } from '@angular/core';
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

}
