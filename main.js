(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



const _c0 = function (a0) { return { "selected": a0 }; };
const _c1 = function (a0) { return { "hidden": a0 }; };
class AppComponent {
    constructor() {
        this.title = 'resource';
        this.selectedC1 = false;
        this.selectedC2 = false;
        this.selectedC3 = true;
        this.selectedC4 = true;
        this.selectedC5 = false;
        this.selectedC6 = false;
        this.selectedC7 = false;
    }
    btnClickHandler(section) {
        switch (section) {
            case 1:
                this.selectedC1 = !this.selectedC1;
                break;
            case 2:
                this.selectedC2 = !this.selectedC2;
                break;
            case 3:
                this.selectedC3 = !this.selectedC3;
                break;
            case 4:
                this.selectedC4 = !this.selectedC4;
                break;
            case 5:
                this.selectedC5 = !this.selectedC5;
                break;
            case 6:
                this.selectedC6 = !this.selectedC6;
                break;
            case 7:
                this.selectedC7 = !this.selectedC7;
                break;
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 41, vars: 42, consts: [[1, "pianoKeyboard"], [1, "mainContainer"], [1, "sectionNav"], [1, "secBtn", "c1", 3, "ngClass", "click"], [1, "number"], [1, "secBtn", "c2", 3, "ngClass", "click"], [1, "secBtn", "c3", 3, "ngClass", "click"], [1, "secBtn", "c4", 3, "ngClass", "click"], [1, "secBtn", "c5", 3, "ngClass", "click"], [1, "secBtn", "c6", 3, "ngClass", "click"], [1, "secBtn", "c7", 3, "ngClass", "click"], ["src", "assets/keyboard.jpg"], [1, "notesWrapper"], [1, "notes", 3, "ngClass"], ["src", "assets/c1.png"], ["src", "assets/c2.png"], ["src", "assets/c3.png"], ["src", "assets/c4.png"], ["src", "assets/c5.png"], ["src", "assets/c6.png"], ["src", "assets/c7.png"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_span_click_3_listener() { return ctx.btnClickHandler(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "c1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_span_click_6_listener() { return ctx.btnClickHandler(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "c2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_span_click_9_listener() { return ctx.btnClickHandler(3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "c3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_span_click_12_listener() { return ctx.btnClickHandler(4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "c4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_span_click_15_listener() { return ctx.btnClickHandler(5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "c5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_span_click_18_listener() { return ctx.btnClickHandler(6); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "c6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_span_click_21_listener() { return ctx.btnClickHandler(7); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "c7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, ctx.selectedC1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, ctx.selectedC2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c0, ctx.selectedC3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c0, ctx.selectedC4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c0, ctx.selectedC5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](24, _c0, ctx.selectedC6));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](26, _c0, ctx.selectedC7));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](28, _c1, !ctx.selectedC1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](30, _c1, !ctx.selectedC2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](32, _c1, !ctx.selectedC3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](34, _c1, !ctx.selectedC4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](36, _c1, !ctx.selectedC5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](38, _c1, !ctx.selectedC6));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](40, _c1, !ctx.selectedC7));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: [".pianoKeyboard[_ngcontent-%COMP%] {\n  height: 100%;\n  background: #000;\n  padding-top: 100px;\n}\n.pianoKeyboard[_ngcontent-%COMP%]   .sectionNav[_ngcontent-%COMP%] {\n  padding-top: 40px;\n}\n.pianoKeyboard[_ngcontent-%COMP%]   .sectionNav[_ngcontent-%COMP%]   .secBtn[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 60px;\n  width: 60px;\n  font-size: 35px;\n  vertical-align: middle;\n  text-align: center;\n  border-radius: 999px;\n  border: 2px solid #000;\n  cursor: pointer;\n}\n.pianoKeyboard[_ngcontent-%COMP%]   .sectionNav[_ngcontent-%COMP%]   .secBtn[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n  position: relative;\n  top: 8px;\n}\n.pianoKeyboard[_ngcontent-%COMP%]   .sectionNav[_ngcontent-%COMP%]   .secBtn.selected[_ngcontent-%COMP%] {\n  color: #fff;\n  background: #000;\n}\n.pianoKeyboard[_ngcontent-%COMP%]   .sectionNav[_ngcontent-%COMP%]   .c1[_ngcontent-%COMP%] {\n  margin-left: 266px;\n}\n.pianoKeyboard[_ngcontent-%COMP%]   .sectionNav[_ngcontent-%COMP%]   .c2[_ngcontent-%COMP%] {\n  margin-left: 182px;\n}\n.pianoKeyboard[_ngcontent-%COMP%]   .sectionNav[_ngcontent-%COMP%]   .c3[_ngcontent-%COMP%] {\n  margin-left: 190px;\n}\n.pianoKeyboard[_ngcontent-%COMP%]   .sectionNav[_ngcontent-%COMP%]   .c4[_ngcontent-%COMP%] {\n  margin-left: 182px;\n}\n.pianoKeyboard[_ngcontent-%COMP%]   .sectionNav[_ngcontent-%COMP%]   .c5[_ngcontent-%COMP%] {\n  margin-left: 182px;\n}\n.pianoKeyboard[_ngcontent-%COMP%]   .sectionNav[_ngcontent-%COMP%]   .c6[_ngcontent-%COMP%] {\n  margin-left: 182px;\n}\n.pianoKeyboard[_ngcontent-%COMP%]   .sectionNav[_ngcontent-%COMP%]   .c7[_ngcontent-%COMP%] {\n  margin-left: 190px;\n}\n.pianoKeyboard[_ngcontent-%COMP%]   .mainContainer[_ngcontent-%COMP%] {\n  width: 2050px;\n  margin: 0 auto;\n  min-height: 400px;\n  background: #fff;\n}\n.pianoKeyboard[_ngcontent-%COMP%]   .mainContainer[_ngcontent-%COMP%]   .notesWrapper[_ngcontent-%COMP%] {\n  padding-left: 97px;\n  margin-top: -5px;\n}\n.pianoKeyboard[_ngcontent-%COMP%]   .mainContainer[_ngcontent-%COMP%]   .notesWrapper[_ngcontent-%COMP%]   .notes[_ngcontent-%COMP%] {\n  display: inline;\n}\n.pianoKeyboard[_ngcontent-%COMP%]   .mainContainer[_ngcontent-%COMP%]   .notesWrapper[_ngcontent-%COMP%]   .notes.hidden[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.pianoKeyboard[_ngcontent-%COMP%]   .handBtnWrapper[_ngcontent-%COMP%] {\n  padding-right: 100px;\n  padding-bottom: 30px;\n  padding-top: 30px;\n  text-align: right;\n}\n.pianoKeyboard[_ngcontent-%COMP%]   .handBtnWrapper[_ngcontent-%COMP%]   .handBtn[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: 40px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUNKO0FBQUk7RUFDSSxpQkFBQTtBQUVSO0FBRFE7RUFDSSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQUdaO0FBRlk7RUFDSSxrQkFBQTtFQUNBLFFBQUE7QUFJaEI7QUFGWTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQUloQjtBQURRO0VBQUssa0JBQUE7QUFJYjtBQUhRO0VBQUssa0JBQUE7QUFNYjtBQUxRO0VBQUssa0JBQUE7QUFRYjtBQVBRO0VBQUssa0JBQUE7QUFVYjtBQVRRO0VBQUssa0JBQUE7QUFZYjtBQVhRO0VBQUssa0JBQUE7QUFjYjtBQWJRO0VBQUssa0JBQUE7QUFnQmI7QUFkSTtFQUNJLGFBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQWdCUjtBQWZRO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQWlCWjtBQWhCWTtFQUNJLGVBQUE7QUFrQmhCO0FBakJnQjtFQUNJLFVBQUE7QUFtQnBCO0FBYkk7RUFDSSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQWVSO0FBZFE7RUFDSSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQWdCWiIsImZpbGUiOiJhcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBpYW5vS2V5Ym9hcmR7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xyXG4gICAgLnNlY3Rpb25OYXZ7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDQwcHg7XHJcbiAgICAgICAgLnNlY0J0bntcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDA7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgLm51bWJlcntcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogOHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYuc2VsZWN0ZWR7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjojZmZmO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuYzF7IG1hcmdpbi1sZWZ0OiAyNjZweDt9XHJcbiAgICAgICAgLmMyeyBtYXJnaW4tbGVmdDogMTgycHg7fVxyXG4gICAgICAgIC5jM3sgbWFyZ2luLWxlZnQ6IDE5MHB4O31cclxuICAgICAgICAuYzR7IG1hcmdpbi1sZWZ0OiAxODJweDt9XHJcbiAgICAgICAgLmM1eyBtYXJnaW4tbGVmdDogMTgycHg7fVxyXG4gICAgICAgIC5jNnsgbWFyZ2luLWxlZnQ6IDE4MnB4O31cclxuICAgICAgICAuYzd7IG1hcmdpbi1sZWZ0OiAxOTBweDt9XHJcbiAgICB9XHJcbiAgICAubWFpbkNvbnRhaW5lcntcclxuICAgICAgICB3aWR0aDogMjA1MHB4O1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgLm5vdGVzV3JhcHBlcntcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA5N3B4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtNXB4O1xyXG4gICAgICAgICAgICAubm90ZXN7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAgICAgICAgICAgICAmLmhpZGRlbntcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIC5oYW5kQnRuV3JhcHBlcntcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMDBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAuaGFuZEJ0bntcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNDBweDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");




class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Documents\GitHub\pianoKeyboard\resource\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map