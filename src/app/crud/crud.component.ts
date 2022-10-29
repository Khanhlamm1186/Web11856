import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product.model';
import { ProductService } from '../product.service';
import { Bill } from '../model/bill.model';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  datas:Product[]=[];
  bills:Bill[]=[];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getAll();
    this.getAllbill();
  }
  getAll(){
    this.productService.getAll().subscribe((res:any)=>{
      this.datas=res
    })
  }
  getAllbill(){
    this.productService.getAllbill().subscribe((res1:any)=>{
      this.bills=res1
    })
  }
  muaHang(){

  }
  spthem(data:any){
    var name = data.name;
    var price = data.giasp;
    var linkimg = data.image;
    this.productService.themSanPham(data).subscribe ( data => alert('Thêm thành công'));
  }
  deleteDH(id:number){
    if (confirm('Xóa thật không')==true){
      this.productService.xoaDonHang(id).subscribe(data => alert('Xóa thành công'))
    }
  }
  deleteSP(id:number){
    if (confirm('Xóa thật không')==true){
      this.productService.xoaSanPham(id).subscribe(data => alert('Xóa thành công'))
    }
  }

}
