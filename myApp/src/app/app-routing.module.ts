import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'culturas-recomendadas',
    loadChildren: () => import('./culturas-recomendadas/culturas-recomendadas.module').then( m => m.CulturasRecomendadasPageModule)
  },
  {
    path: 'lista-culturas',
    loadChildren: () => import('./lista-culturas/lista-culturas.module').then( m => m.ListaCulturasPageModule)
  },
  {
    path: 'mandioca',
    loadChildren: () => import('./mandioca/mandioca.module').then( m => m.MandiocaPageModule)
  },
  {
    path: 'soja',
    loadChildren: () => import('./soja/soja.module').then( m => m.SojaPageModule)
  },
  {
    path: 'feijao',
    loadChildren: () => import('./feijao/feijao.module').then( m => m.FeijaoPageModule)
  },
  {
    path: 'cafe',
    loadChildren: () => import('./cafe/cafe.module').then( m => m.CafePageModule)
  },
  {
    path: 'milho',
    loadChildren: () => import('./milho/milho.module').then( m => m.MilhoPageModule)
  },
  {
    path: 'trigo',
    loadChildren: () => import('./trigo/trigo.module').then( m => m.TrigoPageModule)
  },
  {
    path: 'arroz',
    loadChildren: () => import('./arroz/arroz.module').then( m => m.ArrozPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
