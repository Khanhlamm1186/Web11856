import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChitietspComponent } from './chitietsp/chitietsp.component';
import { CrudComponent } from './crud/crud.component';
import { LoginComponent } from './login/login.component';
import { SanphamComponent } from './sanpham/sanpham.component';

const routes: Routes = [
  {path:'sanpham',component:SanphamComponent},
  {path:'detail/:id',component:ChitietspComponent},
  {path:'crud',component:CrudComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
