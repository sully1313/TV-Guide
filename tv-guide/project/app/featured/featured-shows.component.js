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
var featured_service_1 = require("./featured.service");
var FeaturedShowsComponent = (function () {
    function FeaturedShowsComponent(_featuredService) {
        this._featuredService = _featuredService;
    }
    FeaturedShowsComponent.prototype.ngOnInit = function () {
        this.getFeaturedShows();
    };
    FeaturedShowsComponent.prototype.getFeaturedShows = function () {
        var _this = this;
        this._featuredService.featuredShows()
            .subscribe(function (shows) {
            console.log(shows);
            _this.shows = shows;
        }, function (error) { return _this.errorMessage = error; });
    };
    return FeaturedShowsComponent;
}());
FeaturedShowsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'tv-featured-shows',
        templateUrl: 'featured-shows.template.html',
        styleUrls: ['styles.css']
    }),
    __metadata("design:paramtypes", [featured_service_1.FeaturedService])
], FeaturedShowsComponent);
exports.FeaturedShowsComponent = FeaturedShowsComponent;
//# sourceMappingURL=featured-shows.component.js.map