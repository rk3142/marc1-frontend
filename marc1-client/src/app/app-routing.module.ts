import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth-guard';

const routes: Routes = [
  {
    path: 'register',
    loadChildren: () =>
      import('./register/register.module').then((m) => m.HomeModule),
  },
  {
    path: 'addTemplate',
    loadChildren: () =>
      import('./add-template/add-template.module').then(
        (m) => m.AddTemplateModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'viewUserData',
    loadChildren: () =>
      import('./view-user-data/view-user-data.module').then(
        (m) => m.ViewUserDataModule
      ),
    // canActivate: [AuthGuard],
  },
  {
    path: 'viewTemplate',
    loadChildren: () =>
      import('./view-template/view-template.module').then(
        (m) => m.ViewTemplateModule
      ),
    canActivate: [AuthGuard],
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      onSameUrlNavigation: 'reload',
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
  public constructor(private router: Router) {}
}
