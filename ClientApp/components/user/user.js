var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
var options = {};
var UserComponent = (function (_super) {
    __extends(UserComponent, _super);
    function UserComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.user = {};
        return _this;
    }
    UserComponent.prototype.created = function () {
        var _this = this;
        if (this.$route.params.id) {
            this.$http.get("/api/User/" + this.$route.params.id)
                .then(function (response) {
                _this.user = response.data;
            });
        }
    };
    UserComponent.prototype.saveUser = function () {
        if (this.isValid()) {
            this.$http.post('/api/user', this.user)
                .then(function (response) {
                var data = response.data;
                alert("Successfully saved data for user " + data.firstName + " " + data.lastName);
            });
        }
    };
    UserComponent.prototype.isValid = function () {
        return this.user.firstName && this.user.lastName;
    };
    return UserComponent;
}(Vue));
UserComponent = __decorate([
    Component(options)
], UserComponent);
export default UserComponent;
//# sourceMappingURL=user.js.map