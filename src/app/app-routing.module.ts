import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryListComponent } from './pages/categories/category-list/category-list.component';


const routes: Routes = [
  { path: 'categories', 
  component: CategoryListComponent, children:[{
    path:'',
    loadChildren: './pages/categories/categories.module#CategoriesModule' }

  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
