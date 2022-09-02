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

  //new
  currentProduct!: IOneProduct;
  currentIndex = -1;
  title = '';
  page = 1;
  count = 0;
  pageSize = 9;


  constructor(private productService: ProductService, private route: Router) { }

  ngOnInit(): void {
    this.loadProducts()
  }


  getRequestParams(page: number, pageSize: number): any {
    let params: any = {};


    if (page) {
      params[`page`] = page - 1;
    }

    if (pageSize) {
      params[`size`] = pageSize;
    }


    return params;
  }


  loadProducts() {
    const params = this.getRequestParams(this.page, this.pageSize);


    this.productService.getProductSubject().subscribe((data: IProduct[]) => {
      this.products= data



    })

    this.productService.getProducts(params)

  }

  handlePageChange(event: number): void {
    this.page = event;
    this.loadProducts();
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





}
