import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageLayoutComponent } from './layouts/page-layout/page-layout.component';
import { FullWidthLayoutComponent } from './layouts/full-width-layout/full-width-layout.component';

const routes: Routes = [
  {
    path: 'home',
    component: FullWidthLayoutComponent,
    loadChildren: () => import('./pages/home-page/home-page.module').then(m => m.HomePageModule)
  },
  {
    path: 'console',
    component: PageLayoutComponent,
    loadChildren: () => import('./pages/console-page/console-page.module').then(m => m.ConsolePageModule)
  },
  {
    path: 'settings',
    component: PageLayoutComponent,
    loadChildren: () => import('./pages/settings-page/settings-page.module').then(m => m.SettingsPageModule)
  },
  {
    path: 'e',
    component: PageLayoutComponent,
    loadChildren: () => import('./pages/exercise-page/exercise-page.module').then(m => m.ExercisePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
