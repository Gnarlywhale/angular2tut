System.register(['angular2/core', './ai-detail.component', './ai.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, ai_detail_component_1, ai_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ai_detail_component_1_1) {
                ai_detail_component_1 = ai_detail_component_1_1;
            },
            function (ai_service_1_1) {
                ai_service_1 = ai_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_aiService) {
                    this._aiService = _aiService;
                    this.title = "Salty AIs";
                }
                ;
                AppComponent.prototype.onSelect = function (ai) {
                    console.log(ai);
                    this.selectedAI = ai;
                };
                AppComponent.prototype.ngOnInit = function () {
                    this.getAIs();
                };
                AppComponent.prototype.getAIs = function () {
                    var _this = this;
                    this._aiService.getAIs().then(function (ais) { return _this.ais = ais; });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        directives: [ai_detail_component_1.AIDetailComponent],
                        providers: [ai_service_1.AIService],
                        template: "\n    <h2>My Heroes</h2>\n    <ul class=\"heroes\">\n      <li *ngFor=\"#ai of ais\"\n      [class.selected]=\"ai === selectedAI\"\n      (click)=\"onSelect(ai)\">\n      <span class=\"badge\">{{ai.id}}</span> {{ai.name}}\n\n    </ul>\n    <my-ai-detail [ai]=\"selectedAI\"></my-ai-detail>\n      ",
                        styles: ["\n    .selected {\n      background-color: #CFD8DC !important;\n      color: white;\n    }\n    .heroes {\n      margin: 0 0 2em 0;\n      list-style-type: none;\n      padding: 0;\n      width: 10em;\n    }\n    .heroes li {\n      cursor: pointer;\n      position: relative;\n      left: 0;\n      background-color: #EEE;\n      margin: .5em;\n      padding: .3em 0em;\n      height: 1.6em;\n      border-radius: 4px;\n    }\n    .heroes li.selected:hover {\n      color: white;\n    }\n    .heroes li:hover {\n      color: #607D8B;\n      background-color: #EEE;\n      left: .1em;\n    }\n    .heroes .text {\n      position: relative;\n      top: -3px;\n    }\n    .heroes .badge {\n      display: inline-block;\n      font-size: small;\n      color: white;\n      padding: 0.8em 0.7em 0em 0.7em;\n      background-color: #607D8B;\n      line-height: 1em;\n      position: relative;\n      left: -1px;\n      top: -4px;\n      height: 1.8em;\n      margin-right: .8em;\n      border-radius: 4px 0px 0px 4px;\n    }\n  "]
                    }), 
                    __metadata('design:paramtypes', [ai_service_1.AIService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map