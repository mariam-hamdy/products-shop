import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categorySubject = new Subject<string[]>()
  categories: string[]=[]

  constructor(private http: HttpClient) { }

  getCategorySubject(): Observable<string[]> {
    return this.categorySubject.asObservable()
  }

  getCategories() {
    this.http.get(`${environment.serverUrl}products/categories`).subscribe((data:any) =>{
      this.categories =data as string[]
      this.categorySubject.next([...this.categories])
    })
  }

}
