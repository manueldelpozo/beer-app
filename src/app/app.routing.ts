import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { BeerListComponent } from './beer-list/beer-list.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: BeerListComponent
  },
  {
    path: 'details/:id',
    component: BeerListComponent
  }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);
