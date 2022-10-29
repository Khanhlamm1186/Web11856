import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../model/product.model';
import { ProductService } from '../product.service';
import { Bill } from '../model/bill.model';

@Component({
  selector: 'app-chitietsp',
  templateUrl: './chitietsp.component.html',
  styleUrls: ['./chitietsp.component.css']
})
export class ChitietspComponent implements OnInit {
  product=new Product;
  bill=new Bill;
  value1:string="";
  value2:string="";
  value3:string="";
  value4:string="";
  constructor(private route:ActivatedRoute,private productService:ProductService) { }

  ngOnInit(): void {
    this.getRouter(this.route.snapshot.params['id']);
  }
  getRouter(id:any){
    this.productService.find(id).subscribe((res:any)=>{
      this.product=res;
    });
  }

  muaHang(){
    if(this.value1=="" || this.value2=="" || this.value3==""||this.value4==""){
      console.log("thieu thong tin")
    }

  }
  spthem(data:any){
    if(this.value1=="" || this.value2=="" || this.value3==""){
      alert("Hay dien thong tin")
    }else{
      this.bill.customer = data.customer;
      this.bill.address = data.address;
      this.bill.phonenumber = data.phonenumber;
      this.productService.themDonHang(data).subscribe ( data => alert('Thêm thành công'));
    }

  }

}
