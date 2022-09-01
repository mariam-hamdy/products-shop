import { Component, Input, OnInit } from '@angular/core';
import { IOneProduct } from 'src/app/models/oneProduct';
import { IProduct } from 'src/app/models/product';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: string[]=[]
  products: IProduct[]=[]

  constructor(private categoryService: CategoryService, private productService:ProductService) { }

  ngOnInit(): void {
    this.loadCategories()
    this.loadProducts()
  }
  loadCategories() {
    this.categoryService.getCategorySubject().subscribe( (data: string[]) =>{
      this.categories= data
    })
    this.categoryService.getCategories()
  }

  loadProducts() {
    this.productService.getProductSubject().subscribe((data: IProduct[]) => {
      this.products = data
      console.log(this.products)
    })

    this.productService.getProducts()

  }

}
