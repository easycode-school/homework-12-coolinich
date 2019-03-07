import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'auth', loadChildren: './modules/auth/auth.module#AuthModule' },
  { path: 'users', loadChildren: './modules/user/user.module#UserModule', canActivate: [AuthGuard] },
  { path: 'users:id', loadChildren: './modules/user/user.module#UserModule', canActivate: [AuthGuard] },
  { path: 'challenges', loadChildren: './modules/challenges/challenges.module#ChallengesModule', canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
