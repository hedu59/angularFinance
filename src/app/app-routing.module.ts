import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryListComponent } from './pages/categories/category-list/category-list.component';
import { CategoryFormComponent } from './pages/categories/category-form/category-form.component';


const routes: Routes = [
  // { path: 'categories', loadChildren: '/pages/categories/categories.module#CategoriesModule' },

  {
    path: '',
    component: CategoryListComponent,
    children: [
      {
        path: 'list',
        loadChildren: './pages/categories/category-list/category-list.component'
      }
    ]
  },
  {
    path: 'edit',
    component: CategoryFormComponent,
    children: [
      {
        path: 'form',
        loadChildren: './pages/categories/category-list/category-form.component'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
