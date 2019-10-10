import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuardGuard } from './guards/login-guard.guard';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate: [AuthGuard]
  },
  { 
    path: '', loadChildren: './login/login.module#LoginPageModule',
    canActivate: [LoginGuardGuard]
  },
  { 
    path: 'cadastro', loadChildren: './cadastro/cadastro.module#CadastroPageModule',
    canActivate: [LoginGuardGuard]
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
