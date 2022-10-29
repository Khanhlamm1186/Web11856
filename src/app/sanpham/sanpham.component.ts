import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-sanpham',
  templateUrl: './sanpham.component.html',
  styleUrls: ['./sanpham.component.css']
})
export class SanphamComponent implements OnInit {
  datas:Product[]=[];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this.productService.getAll().subscribe((res:any)=>{
      this.datas=res
    })
  }
  muaHang(){
    
  }

}
