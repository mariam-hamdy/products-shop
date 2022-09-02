import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  @Output() checked = new EventEmitter<any>()
  checkbox: boolean = false
  checkboxName: string=''
  // [checked]="checkbox"
  // (click)="changeChecked()"



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

    })

    this.productService.getProducts(30)

  }

  isChecked(value: any) {

    this.checked.emit(value)
  }
  changeChecked(e: any) {
     this.checkbox = !this.checkbox
     this.checkboxName = e.target.name
  }



}
