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
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
