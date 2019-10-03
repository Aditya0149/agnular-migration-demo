import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { AngularUserComponent } from '../Angular/angular-user/angular-user.component';
import { RouteManagerService } from '../Angular/utils/route-manager.service';
import { UserDirective } from '../Angular/utils/userDirective';

declare var angular: angular.IAngularStatic;

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,
    UserModule,
    AdminModule
  ],
  declarations: [
    AngularUserComponent,
    UserDirective,
    UpperCasePipe
  ],
  providers: [
    RouteManagerService
  ],
  entryComponents: [
    AngularUserComponent,
    UserDirective
  ]
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) { 
  }
  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, ['cloudlex'], { strictDi: false });
  }
}


require('angular');
require('angular-ui-router');



import { downgradeComponent } from '@angular/upgrade/static';
import { UserModule } from '../Angular/user/user.module';
import { AdminModule } from '../Angular/admin/admin.module';
import { UpperCasePipe } from '../Angular/utils/upper-case.pipe';   

// Declare app level module which depends on views, and components
angular.module('cloudlex', [
    'ui.router',
    'cloudlex.filters',
    'cloudlex.directives',
    'cloudlex.user',
    'cloudlex.admin'
])
.directive(
  'angularUser',
  downgradeComponent({ component: AngularUserComponent}) as any
)
    

require("./utils/routeManager.ts");
require("./utils/filters.ts");
require("./utils/directives.ts");
require("./rootController.ts");
require("./user/user-module.ts");
require("./user/home/user-home-controller.ts");
require("./admin/admin-module.ts");
require("./admin/home/admin-controller.ts");