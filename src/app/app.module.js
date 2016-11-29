"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var ng_bootstrap_1 = require('@ng-bootstrap/ng-bootstrap');
// Imports for loading & configuring the in-memory web api
var angular2_in_memory_web_api_1 = require('angular2-in-memory-web-api');
var app_data_1 = require('./shared/app.data');
var app_component_1 = require('./app.component');
var app_main_component_1 = require('./components/main/app.main.component');
var app_sidebar_component_1 = require('./components/sidebar/app.sidebar.component');
var app_service_1 = require('./shared/app.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                ng_bootstrap_1.NgbModule,
                http_1.HttpModule,
                angular2_in_memory_web_api_1.InMemoryWebApiModule.forRoot(app_data_1.InMemoryDataService),
            ],
            declarations: [
                app_component_1.AppComponent,
                app_sidebar_component_1.AppSidebarComponent,
                app_main_component_1.AppMainComponent
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: [app_service_1.AppService, ng_bootstrap_1.NgbModule],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map