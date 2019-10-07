import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './user/home/home.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AngularUserComponent } from './angular-user/angular-user.component';
import { RouteGuard } from './guards/route.guard';

const routes = [
  {
    path:'user',
    component: HomeComponent,
    canActivate: [RouteGuard]
  },
  {
    path:'admin',
    component: AdminHomeComponent,
    canActivate: [RouteGuard]
  },
  {
    path:'angularUser',
    component: AngularUserComponent,
    canActivate: [RouteGuard]
  },
  {
    path:'',
    redirectTo:'/user',
    pathMatch: 'full'
    
  }
  
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouteModule { }
