import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
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
  @Input() checked!: string

  productPageCounter: number = 1
  additionalLoading: boolean= false



  constructor(private productService: ProductService, private route: Router) { }

  ngOnInit(): void {
    this.loadProducts()
  }



  loadProducts() {
    this.productService.getProductSubject().subscribe((data: IProduct[]) => {
      this.products = data



    })

    this.productService.getProducts(30)

  }




  get filteredProducts() {
    let filtered = this.products[0]?.products

    if(this.search) {
      filtered = this.products[0]?.products.filter(item => {
        let newItem = item.title.toLowerCase()
        return newItem.startsWith(this.search.toLowerCase())
      })

    }
    if(this.checked) {
      filtered = this.products[0]?.products.filter(item => {
        return item.category.startsWith(this.checked.toLowerCase())
      })

    }

    return filtered

  }


  // showMoreProducts() {
  //   this.additionalLoading = true
  //   this.productPageCounter = this.productPageCounter +1

  //   this.productService.getProductSubject().subscribe((data: any) => {
  //     this.products = [...this.products[0].products, ...data]
  //     this.additionalLoading = false
  //     console.log(data)

  //     this.route.navigate(['/product'], { queryParams: { page: this.productPageCounter } });

  //   })
  //   this.productService.getProducts(9,this.productPageCounter)




  // }

}
