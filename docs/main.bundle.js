webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Carousel app</h2>\n<carousel [delay]=\"3000\">\n  <carousel-item>\n    <img src=\"https://unsplash.it/200/?image=1\" alt=\"\">\n  </carousel-item>\n  <carousel-item>\n    <img src=\"https://unsplash.it/200/?image=2\" alt=\"\">\n  </carousel-item>\n  <carousel-item>\n    <img src=\"https://unsplash.it/200/?image=3\" alt=\"\">\n  </carousel-item>\n</carousel>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__carousel_carousel_component__ = __webpack_require__("../../../../../src/app/carousel/carousel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__carousel_item_carousel_item_component__ = __webpack_require__("../../../../../src/app/carousel-item/carousel-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__carousel_navigation_carousel_navigation_component__ = __webpack_require__("../../../../../src/app/carousel-navigation/carousel-navigation.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__carousel_carousel_component__["a" /* CarouselComponent */],
                __WEBPACK_IMPORTED_MODULE_4__carousel_item_carousel_item_component__["a" /* CarouselItemComponent */],
                __WEBPACK_IMPORTED_MODULE_5__carousel_navigation_carousel_navigation_component__["a" /* CarouselNavigationComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/carousel-item/carousel-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/carousel-item/carousel-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"carousel-item text-center\" [hidden]=\"isHidden\">\n  <ng-content></ng-content>\n</div>"

/***/ }),

/***/ "../../../../../src/app/carousel-item/carousel-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CarouselItemComponent = (function () {
    function CarouselItemComponent() {
        this.isHidden = true;
    }
    CarouselItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'carousel-item',
            template: __webpack_require__("../../../../../src/app/carousel-item/carousel-item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/carousel-item/carousel-item.component.css")]
        })
    ], CarouselItemComponent);
    return CarouselItemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/carousel-navigation/carousel-navigation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/carousel-navigation/carousel-navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<button (click)=\"onNavigate()\">\n  {{arrow}}\n</button>\n"

/***/ }),

/***/ "../../../../../src/app/carousel-navigation/carousel-navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselNavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CarouselNavigationComponent = (function () {
    function CarouselNavigationComponent() {
        // @Output('navigate') navigate: any;
        this.navigate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* EventEmitter */]();
    }
    CarouselNavigationComponent.prototype.ngOnInit = function () {
        this.arrow = this.direction === 'next' ? '>' : '<';
    };
    CarouselNavigationComponent.prototype.onNavigate = function () {
        this.navigate.emit(this.direction);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])('direction'),
        __metadata("design:type", String)
    ], CarouselNavigationComponent.prototype, "direction", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* Output */])(),
        __metadata("design:type", Object)
    ], CarouselNavigationComponent.prototype, "navigate", void 0);
    CarouselNavigationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'carousel-navigation',
            template: __webpack_require__("../../../../../src/app/carousel-navigation/carousel-navigation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/carousel-navigation/carousel-navigation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CarouselNavigationComponent);
    return CarouselNavigationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/carousel/carousel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navigation,\r\n.carousel-inner {\r\n    float: left;\r\n}\r\n\r\n.bullets {\r\n    clear: both;\r\n    margin: 10px;\r\n    list-style: none;\r\n}\r\n.bullets li {\r\n    float: left;\r\n}\r\n.active {\r\n    background-color: grey;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/carousel/carousel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"carousel slide\">\n  <carousel-navigation class=\"navigation\" [direction]=\"'prev'\" (navigate)=\"onNavigate($event)\"></carousel-navigation>\n  <div class=\"carousel-inner\" role=\"listbox\">\n      <!-- View component  -->\n      <carousel-item>\n        <img src=\"https://unsplash.it/200/?image=4\" alt=\"\">\n      </carousel-item>\n      <carousel-item>\n        <img src=\"https://unsplash.it/200/?image=5\" alt=\"\">\n      </carousel-item>\n       <!-- end View component  -->      \n      <ng-content></ng-content> <!-- Conten components  -->\n  </div>\n  <carousel-navigation class=\"navigation\" [direction]=\"'next'\" (navigate)=\"onNavigate($event)\"></carousel-navigation>\n  <ul class=\"bullets\" [hidden]=\"!carouselItems.length\">\n    <li *ngFor=\"let item of carouselItems; let i = index\">\n      <button [ngClass]=\"{'active':i + 1 === currentIndex}\" (click)=\"navigateByIndex(i)\">{{i + 1}}</button>\n    </li>\n  </ul>\n</div>"

/***/ }),

/***/ "../../../../../src/app/carousel/carousel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__carousel_item_carousel_item_component__ = __webpack_require__("../../../../../src/app/carousel-item/carousel-item.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { setInterval } from 'timers';
var CarouselComponent = (function () {
    function CarouselComponent() {
        this.currentIndex = 1;
        this.carouselItems = [];
    }
    CarouselComponent.prototype.ngAfterContentInit = function () {
        console.log('carouselContentItems', this.carouselContentItems.toArray());
    };
    CarouselComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        console.log('carouselViewItems', this.carouselViewItems.toArray());
        setTimeout(function () {
            _this.carouselItems = _this.carouselContentItems.toArray().concat(_this.carouselViewItems.toArray()); // merge content and view items;
            _this.carouselItems[0].isHidden = false; //set first item visible by default;
            _this.intervalId = setInterval(function () { _this.changeCarousel(false); }, +_this.delay);
        });
    };
    CarouselComponent.prototype.changeCarousel = function (isManual) {
        var _this = this;
        var items = this.carouselItems;
        if (!isManual)
            this.currentIndex++;
        if (this.currentIndex > items.length)
            this.currentIndex = 1;
        else if (this.currentIndex === 0)
            this.currentIndex = items.length;
        items.forEach(function (item, i) { return item.isHidden = _this.currentIndex !== i + 1; });
    };
    ;
    CarouselComponent.prototype.OnDestroy = function () {
        this.intervalId.clearInterval()();
    };
    CarouselComponent.prototype.onNavigate = function (event) {
        if (event === 'next') {
            this.currentIndex++;
        }
        else if (event === 'prev') {
            this.currentIndex--;
        }
        this.changeCarousel(true);
    };
    CarouselComponent.prototype.navigateByIndex = function (index) {
        this.currentIndex = index;
        this.changeCarousel(false);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])('delay'),
        __metadata("design:type", String)
    ], CarouselComponent.prototype, "delay", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ContentChildren */])(__WEBPACK_IMPORTED_MODULE_1__carousel_item_carousel_item_component__["a" /* CarouselItemComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* QueryList */])
    ], CarouselComponent.prototype, "carouselContentItems", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* ViewChildren */])(__WEBPACK_IMPORTED_MODULE_1__carousel_item_carousel_item_component__["a" /* CarouselItemComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* QueryList */])
    ], CarouselComponent.prototype, "carouselViewItems", void 0);
    CarouselComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'carousel',
            template: __webpack_require__("../../../../../src/app/carousel/carousel.component.html"),
            styles: [__webpack_require__("../../../../../src/app/carousel/carousel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CarouselComponent);
    return CarouselComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map