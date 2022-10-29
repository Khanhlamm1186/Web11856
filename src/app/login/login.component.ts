import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public value1:string="";
  public value2:string="";

  onSubmit(){
    if(this.value1=="Khanhlam1186" && this.value2=="Khanhyeulam1186"){
      window.open("/crud");
      console.log("TT chinh sac")
    }else{
      alert("sai thong tin")
    }
  }
}
