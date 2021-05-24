import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'soja',
    loadChildren: () => import('./soja/soja.module').then( m => m.SojaPageModule)
  },
  {
    path: 'cafe',
    loadChildren: () => import('./cafe/cafe.module').then( m => m.CafePageModule)
  },
  {
    path: 'trigo',
    loadChildren: () => import('./trigo/trigo.module').then( m => m.TrigoPageModule)
  },
  {
    path: 'arroz',
    loadChildren: () => import('./arroz/arroz.module').then( m => m.ArrozPageModule)
  },
  {
    path: 'milho',
    loadChildren: () => import('./milho/milho.module').then( m => m.MilhoPageModule)
  },
  {
    path: 'feijao',
    loadChildren: () => import('./feijao/feijao.module').then( m => m.FeijaoPageModule)
  },
  {
    path: 'mandioca',
    loadChildren: () => import('./mandioca/mandioca.module').then( m => m.MandiocaPageModule)
  },
  {
    path: 'lista-culturas',
    loadChildren: () => import('./lista-culturas/lista-culturas.module').then( m => m.ListaCulturasPageModule)
  },
  {
    path: 'culturas-recomendadas',
    loadChildren: () => import('./culturas-recomendadas/culturas-recomendadas.module').then( m => m.CulturasRecomendadasPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
