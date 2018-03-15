import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { CategoryListCompoment } from './category-list/category-list.component';
import { CategoryFormCompoment } from './category-form/category-form.component';


const CategoryRoutes: Routes = [
    {path: 'list', component: CategoryListCompoment},
    {path: 'form', component: CategoryFormCompoment},

];

@NgModule({
    imports: [RouterModule.forChild(CategoryRoutes)],
    exports: [RouterModule]
})

export class CategoryRouting {

}