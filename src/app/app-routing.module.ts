import { CaskComponent } from './cask/cask.component';
import { PaginaNaoEncontradaComponent } from './util/pagina-nao-encontrada.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: 'cask', component: CaskComponent, data: { title: 'Cask' }},
      {path: '', redirectTo: '/cask',pathMatch: 'full' } ,
      { path: '**', component: PaginaNaoEncontradaComponent }  
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
