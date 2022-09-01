import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../models/product';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  products: IProduct[]= []
  productSubject = new Subject<IProduct[]>()



  getProducts() {
    if(this.products.length === 0) {
      this.http.get(environment.serverUrl+'products').subscribe((data: any) => {
        this.products = this.products.concat(data as IProduct[])
        this.productSubject.next([...this.products])
      });
    } else {
      this.productSubject.next([...this.products])
    }
  }

  getProductSubject(): Observable<IProduct[]> {
    return this.productSubject.asObservable()
  }
}
