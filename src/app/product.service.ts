import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable,of} from 'rxjs';
import {Product} from './model/product.model';
import { Bill } from './model/bill.model';
const httpOptions ={
  headers:new HttpHeaders({'Content-Type':'Application/json'})
}
const apiUrl = 'https://6316b604cb0d40bc4141b385.mockapi.io/apireal1/Sanpham1186';
const apiUrl1 = 'https://6316b604cb0d40bc4141b385.mockapi.io/apireal1/donhang1186';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private httpClient:HttpClient) { }

  getAll():Observable<Product[]>{
    return this.httpClient.get<Product[]>(apiUrl).pipe(
    )
  }
  getAllbill():Observable<Bill[]>{
    return this.httpClient.get<Bill[]>(apiUrl1).pipe(
    )
  }
  find(id:number):Observable<Product>{
    return this.httpClient.get<Product>(`${apiUrl}/${id}`).pipe(
    )
  }
  save(data:any){
    return this.httpClient.post(apiUrl,data).pipe(
    )
  }
  themSanPham(data:any){
    return this.httpClient.post<Product[]>(apiUrl,data).pipe(
    )
  }
  themDonHang(data:any){
    return this.httpClient.post<Bill[]>(apiUrl1,data).pipe(
    )
  }
  xoaSanPham(id:number){
    return this.httpClient.delete<Product>(`${apiUrl}/${id}`).pipe(
    )
  }
  xoaDonHang(id:number){
  return this.httpClient.delete<Bill>(`${apiUrl1}/${id}`).pipe(
  )
}

}
