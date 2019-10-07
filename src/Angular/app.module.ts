import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { AngularUserComponent } from './angular-user/angular-user.component';
import { RouteManagerService } from './utils/route-manager.service';
import { UserDirective } from './utils/userDirective';
import { AppComponent } from './app.component';   
import { AppRouteModule } from './app.route.module';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import { UpperCasePipe } from './utils/upper-case.pipe';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    AppRouteModule,
    UserModule,
    AdminModule,
  ],
  declarations: [
    AngularUserComponent,
    UserDirective,
    UpperCasePipe,
    AppComponent
  ],
  providers: [
    RouteManagerService
  ],
  bootstrap: [ AppComponent ],
  entryComponents: [
  ]
})
export class AppModule {
  constructor() { 
  }
}
