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
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var app_main_component_1 = require("./components/main/app.main.component");
var app_sidebar_component_1 = require("./components/sidebar/app.sidebar.component");
var app_user_data_component_1 = require("./components/main/user/app.user-data.component");
var app_ad_component_1 = require("./components/main/ad/app.ad.component");
var app_animal_component_1 = require("./components/main/animal/app.animal.component");
var app_home_component_1 = require("./components/main/home/app.home.component");
var app_ads_component_1 = require("./components/main/ads/app.ads.component");
var file_uploader_component_1 = require("./components/main/file-uploader.component");
var advert_items_component_1 = require("./components/main/ad/advert-items/advert-items.component");
var api_service_1 = require("./shared/api.service");
var app_user_service_1 = require("./shared/app.user.service");
var app_routing_module_1 = require("./shared/app.routing.module");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.ReactiveFormsModule,
            app_routing_module_1.AppRoutingModile,
            forms_1.FormsModule,
            http_1.HttpModule,
        ],
        declarations: [
            app_component_1.AppComponent,
            app_sidebar_component_1.AppSidebarComponent,
            app_main_component_1.AppMainComponent,
            app_user_data_component_1.AppUserComponent,
            app_animal_component_1.AppAnimalComponent,
            app_ad_component_1.AppAdComponent,
            app_home_component_1.AppHomeComponent,
            app_ads_component_1.AppAdsComponent,
            file_uploader_component_1.FileUploaderComponent,
            advert_items_component_1.AdvertItemsComponent
        ],
        bootstrap: [app_component_1.AppComponent],
        providers: [api_service_1.ApiService, app_user_service_1.AppUserService],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map