import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { CategoryListCompoment } from './category-list/category-list.component';
import { CategoryFormCompoment } from './category-form/category-form.component';
import { CategoryViewCompoment } from './category-view/category-view.component';


const CategoryRoutes: Routes = [
    {path: 'list', component: CategoryListCompoment},
    {path: 'form', component: CategoryFormCompoment},
    {path: 'view', component: CategoryViewCompoment},

];

@NgModule({
    imports: [RouterModule.forChild(CategoryRoutes)],
    exports: [RouterModule]
})

export class CategoryRouting {

}