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
var api_service_1 = require("./api.service");
var rxjs_1 = require("rxjs");
var AppUserService = (function () {
    function AppUserService(api) {
        this.api = api;
        this.userPath = 'user/';
        this.animalPath = 'animal/';
        this.advertPath = 'advert/';
        this.dataStore = { animals: [], adverts: [], user: undefined, breeds: [] };
        this._animals = new rxjs_1.BehaviorSubject([]);
        this._adverts = new rxjs_1.BehaviorSubject([]);
        this._user = new rxjs_1.BehaviorSubject(undefined);
        this._breeds = new rxjs_1.BehaviorSubject([]);
        this.animals = this._animals.asObservable();
        this.adverts = this._adverts.asObservable();
        this.user = this._user.asObservable();
        this.breeds = this._breeds.asObservable();
    }
    AppUserService.prototype.getUsers = function () {
        var _this = this;
        this.api.get(this.userPath)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.dataStore.user = res;
            delete _this.dataStore.user.adverts;
            delete _this.dataStore.user.animals;
            _this.dataStore.animals = res.animals;
            _this.dataStore.adverts = res.adverts;
            _this._user.next(Object.assign({}, _this.dataStore).user);
            _this._animals.next(Object.assign({}, _this.dataStore).animals);
            _this._adverts.next(Object.assign({}, _this.dataStore).adverts);
        });
    };
    AppUserService.prototype.updateUser = function (user) {
        var _this = this;
        return this.api.put(this.userPath, user)
            .map(function (response) { return response.json(); })
            .map(function (data) {
            _this.dataStore.user = data;
            _this._user.next(Object.assign({}, _this.dataStore).user);
        });
    };
    AppUserService.prototype.createAnimal = function (animal) {
        var _this = this;
        return this.api.post(this.animalPath, animal)
            .map(function (response) { return response.json(); })
            .map(function (data) {
            _this.dataStore.animals.push(data);
            _this._animals.next(Object.assign({}, _this.dataStore).animals);
        });
    };
    AppUserService.prototype.getAnimalById = function (id) {
        return this.dataStore.animals.filter(function (elem) { return elem.id == id; })[0];
    };
    AppUserService.prototype.updateAnimal = function (animal) {
        var _this = this;
        return this.api.put("" + this.animalPath + animal.id, animal)
            .map(function (response) { return response.json(); })
            .map(function (data) {
            _this.dataStore.animals.forEach(function (t, i) {
                if (t.id === data.id) {
                    _this.dataStore.animals[i] = data;
                }
            });
            return _this._animals.next(Object.assign({}, _this.dataStore).animals);
        });
    };
    AppUserService.prototype.deleteAnimal = function (id) {
        var _this = this;
        this.api.delete("" + this.animalPath + id)
            .map(function (response) { return response.json(); })
            .subscribe(function () {
            _this.dataStore.animals.forEach(function (t, i) {
                if (t.id === id) {
                    _this.dataStore.animals.splice(i, 1);
                }
            });
            return _this._animals.next(Object.assign({}, _this.dataStore).animals);
        });
    };
    AppUserService.prototype.createAdvert = function (advert) {
        var _this = this;
        return this.api.post(this.advertPath, advert)
            .map(function (response) { return response.json(); })
            .map(function (data) {
            _this.dataStore.adverts.push(data);
            return _this._adverts.next(Object.assign({}, _this.dataStore).adverts);
        });
    };
    AppUserService.prototype.updateAdvert = function (advert) {
        var _this = this;
        return this.api.put("" + this.animalPath + advert.id, advert)
            .map(function (response) { return response.json(); })
            .map(function (data) {
            _this.dataStore.adverts.forEach(function (t, i) {
                if (t.id === data.id) {
                    _this.dataStore.adverts[i] = data;
                }
            });
            return _this._adverts.next(Object.assign({}, _this.dataStore).adverts);
        });
    };
    AppUserService.prototype.getAdvertById = function (id) {
        return this.dataStore.adverts.filter(function (elem) { return elem.id === id; })[0];
    };
    AppUserService.prototype.deleteAdvert = function (id) {
        var _this = this;
        this.api.delete("" + this.advertPath + id)
            .map(function (response) { return response.json(); })
            .subscribe(function () {
            _this.dataStore.adverts.forEach(function (t, i) {
                if (t.id === id) {
                    _this.dataStore.adverts.splice(i, 1);
                }
            });
            _this._adverts.next(Object.assign({}, _this.dataStore).adverts);
        });
    };
    AppUserService.prototype.addPhoto = function (base, url) {
        return this.api.post("photo/" + url, JSON.stringify({ photo: base }))
            .map(function (response) { return response.text(); });
    };
    AppUserService.prototype.getBreeds = function () {
        var _this = this;
        this.api.get("/breeds")
            .map(function (response) { return response.json(); })
            .subscribe(function (data) {
            _this.dataStore.breeds = data;
            _this._breeds.next(Object.assign({}, _this.dataStore).breeds);
        });
    };
    return AppUserService;
}());
AppUserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [api_service_1.ApiService])
], AppUserService);
exports.AppUserService = AppUserService;
//# sourceMappingURL=app.user.service.js.map