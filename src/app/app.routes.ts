import { Routes, RouterModule } from '@angular/router';

import { ProdutoComponent } from './produto/produto.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';

export const routes : Routes =[
    { path: '', redirectTo: 'produto', pathMatch: 'full' },
    {path: 'produto', component: ProdutoComponent},
    {path: 'carrinho', component: CarrinhoComponent}
];

export const appRoutingProviders: any[] = [];
    
export const routing = RouterModule.forRoot(routes);