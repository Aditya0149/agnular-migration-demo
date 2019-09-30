import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { AngularUserComponent } from '../Angular/angular-user/angular-user.component';

declare var angular: any;

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  declarations: [AngularUserComponent],
  providers: [
    
  ],
  entryComponents: [AngularUserComponent]
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) { 
  }
  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, ['cloudlex']);
  }
}


require('angular');
require('angular-ui-router');



import { downgradeComponent } from '@angular/upgrade/static';   

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
  downgradeComponent({ component: AngularUserComponent }) as any
);
    

require("./utils/routeManager.ts");
require("./utils/filters.ts");
require("./utils/directives.ts");
require("./rootController.ts");
require("./user/user-module.ts");
require("./user/home/user-home-controller.ts");
require("./admin/admin-module.ts");
require("./admin/home/admin-controller.ts");