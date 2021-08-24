import { Routes } from '@angular/router';

export const AppRoutes: Routes = [
  //{
  //  path: 'auth',
  //  loadChildren: () => import('@core/auth/auth.module').then(m => m.AuthModule),
  //  data: { animation: 'LoginPage' }
  //},
  {
    path: 'app',
    component: LayoutComponent,
    data: { animation: 'MainPage' },
    runGuardsAndResolvers: 'always',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      {
        path: 'home',
        //loadChildren: () => import('@modules/home/home.module').then(m => m.HomeModule),
        pathMatch: 'full',
        redirectTo: 'events/owner/1'
      },
      {
        path: 'utilities',
        loadChildren: () => import('@modules/recipes/recipes.module').then(m => m.RecipesModule)
      },
      {
        path: 'game-report',
        loadChildren: () => import('@modules/travel-blog/travel-blog.module').then(m => m.TravelBlogModule)
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'app/home'
  }
];
