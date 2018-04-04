import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StockComponent } from './stock/stock.component';
import { Code404Component } from './code404/code404.component';

const routes: Routes = [
  {path: '', component: HomeComponent},  // 不需要加  '/', 默认写法
  {path: 'stock', component: StockComponent},
  {path: '**', component: Code404Component},  // 通配符路由,其它不存在的跳转到404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
