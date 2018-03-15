import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

// Component

import { CategoryListCompoment } from './category-list/category-list.component';
import { CategoryFormCompoment } from './category-form/category-form.component';

//routing 
import {CategoryRouting} from './category-routing.module';

//Service
import {CategoryService} from './category.service';

@NgModule({
    declarations: [
        //Componentes
        CategoryListCompoment,
        CategoryFormCompoment

    ],
    imports: [
      // angular
      HttpModule,
      RouterModule,
      CommonModule,

      // Routing
      CategoryRouting
    ],
    
    providers: [
      // services
      CategoryService
    ]
  })
  export class CategoryModule { }