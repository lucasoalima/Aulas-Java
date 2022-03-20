(window.webpackJsonp=window.webpackJsonp||[]).push([[1,145],{"3C2s":function(e,n){e.exports='<button ng-if="!overflowMenu.isSingleMode() && overflowMenu.menuItems.length > 0"\n        ng-show="overflowMenu.show()"\n        ng-disabled="isDisabled()"\n        class="overflow-menu-button"\n        data-dropdown="{{elementId}}-menu-icon-dropdown"\n        data-options="{{::overflowMenu.menuDirection}}"\n        aria-haspopup="true"\n        title="{{overflowMenu.getButtonAriaLabel()}}"\n        ng-click="overflowMenu.showMenu=true"\n        aria-label="{{overflowMenu.getButtonAriaLabel()}}"\n        analytics-id="{{analyticsIdTagPrefix}}.showMenu.button">\n  <bb-svg-icon size="small" icon="menu"></bb-svg-icon>\n</button>\n\n\x3c!--Single mode toggle button--\x3e\n<button ng-if="overflowMenu.isSingleMode() && overflowMenu.menuItems.length > 0"\n        ng-show="overflowMenu.singleMenuItem.show()"\n        ng-click="overflowMenu.showMenu=true; overflowMenu.singleMenuItem.onClick()"\n        ng-disabled="isDisabled()"\n        class="overflow-menu-button"\n        bb-click-focus="{{overflowMenu.singleMenuItem.hasConfirmation() ? \'\' : overflowMenu.singleMenuItem.bbClickFocus}}"\n        data-dropdown="{{elementId}}-menu-icon-dropdown"\n        data-options="{{::overflowMenu.menuDirection}}"\n        aria-haspopup="true"\n        title="{{overflowMenu.singleMenuItem.ariaLabel()}}"\n        aria-label="{{overflowMenu.singleMenuItem.ariaLabel()}}"\n        analytics-id="{{analyticsIdTagPrefix}}.showSingleMenu.button">\n  <bb-svg-icon size="small" icon="{{overflowMenu.singleMenuItem.icon}}" status="{{overflowMenu.singleMenuItem.status}}"></bb-svg-icon>\n</button>\n\n\x3c!--Menu --\x3e\n<div id="{{::elementId}}-menu-icon-dropdown" ng-if="overflowMenu.showMenu" ng-show="overflowMenu.show()" class="f-dropdown f-dropdown-overflow-menu"\n     data-dropdown-content aria-autoclose="false">\n  \x3c!--Menu item list--\x3e\n  <ul ng-show="!overflowMenu.isSingleMode()"\n      class="js-menu-item-list"\n      ng-class="{\'with-option-text\': overflowMenu.hasOptionText(), \'ignore-accordion\': overflowMenu.ignoreAccordion()}"\n      role="menu">\n    <li ng-repeat="menuItem in overflowMenu.menuItems | filter:overflowMenu.visibleMenuItemsFilter track by menuItem.id"\n      bb-click-to-invoke-child="a.js-menu-item-link"\n      custom-attributes="{{ ::menuItem.addAdditionalAttributes() }}"\n      id="{{ ::menuItem.id + \'_li\' }}"\n      role="menuitem">\n      <a href="javascript:void(0);"\n         ng-if="!menuItem.disable()"\n         class="js-menu-item-link"\n         id="{{::menuItem.id}}"\n         ng-click="menuItem.onClick()"\n         bb-click-focus="{{menuItem.hasConfirmation() ? \'\' : menuItem.bbClickFocus}}"\n         aria-label="{{menuItem.ariaLabel()}}"\n         ng-keydown="overflowMenu.onOptionKeydown($event)"\n         analytics-id="{{::overflowMenu.buildAnalyticsId(menuItem)}}">\n        \x3c!-- Icon --\x3e\n        <bb-overflow-menu-icon icon-name="{{menuItem.icon}}" status="{{menuItem.status}}"></bb-overflow-menu-icon>\n        \x3c!-- Label --\x3e\n        <span bb-translate>{{::menuItem.labelKey}}</span>\n        <p ng-if="::menuItem.textKey" class="option-text" bb-translate>{{::menuItem.textKey}}</p>\n      </a>\n      <a href="javascript:void(0);"\n         ng-if="menuItem.disable()"\n         class="js-menu-item-link disable"\n         ng-click="menuItem.onClick()"\n         aria-disabled="true"\n         bb-tooltip\n         enhanced-tooltip="true"\n         tooltip-position="bottom"\n         title="{{menuItem.disableInfo}}"\n         analytics-id="{{analyticsIdTagPrefix}}.{{::menuItem.labelKey}}.disabled.link">\n        \x3c!-- Icon --\x3e\n        <bb-overflow-menu-icon icon-name="{{menuItem.icon}}" status="{{menuItem.status}}"></bb-overflow-menu-icon>\n        \x3c!-- Label --\x3e\n        <span bb-translate>{{::menuItem.labelKey}}</span>\n        <p ng-if="::menuItem.textKey" class="option-text" bb-translate>{{::menuItem.textKey}}</p>\n        <span class="sr-only">{{menuItem.disableInfo}}</span>\n      </a>\n    </li>\n  </ul>\n\n  \x3c!-- Confirmation - shows when the corresponding button is pressed from the menu --\x3e\n  <div role="alertdialog"\n       aria-label="{{overflowMenu.getTextByKey(menuItem.options.confirmationOptions.titleKey)}}"\n       ng-repeat="menuItem in overflowMenu.confirmationNeededMenuItems"\n       ng-show="menuItem.show()" id="{{::menuItem.confirmationId}}"\n       class="menu-icon-confirmation"\n       ng-class="{\'menu-icon-confirmation-single-mode\': overflowMenu.isSingleMode()}">\n    <h1 aria-describedby="{{::(\'overflow-confirmation-instructions\' + menuItem.confirmationId)}}"\n        bb-focus="menuItem.isConfirmationMenuVisible()"\n        ng-blur="menuItem.blur()"\n        keep-trigger-focus="true">{{overflowMenu.getTextByKey(menuItem.options.confirmationOptions.titleKey)}}</h1>\n    <p id="{{\'overflow-confirmation-instructions\' + menuItem.confirmationId}}">{{overflowMenu.getTextByKey(menuItem.options.confirmationOptions.instructionsKey)}}</p>\n    <div class="choice" ng-show="menuItem.hasChoices()" ng-repeat="choice in menuItem.options.confirmationOptions.choices">\n      <input id="{{choice.key + elementId}}"\n             ng-disabled="choice.isDisable"\n             ng-model="choice.value"\n             type="checkbox"\n             ng-keydown="overflowMenu.onOptionKeydown($event)"\n             analytics-id="{{analyticsIdTagPrefix}}.isDisabled.input.checkbox"/>\n      <label for="{{choice.key + elementId}}" bb-translate="{{choice.localizedKey}}"></label>\n    </div>\n    <hr>\n    <div class="menu-icon-confirmation-footer">\n      <button class="button button--secondary"\n              ng-click="menuItem.onCancel()"\n              analytics-id="{{analyticsIdTagPrefix}}.cancel.button">\n        <span bb-translate>global.cancel</span>\n      </button>\n      <button class="button js-delete-confirm"\n              ng-click="menuItem.onConfirm($event)"\n              bb-click-focus="{{::menuItem.bbClickFocus}}"\n              analytics-id="{{analyticsIdTagPrefix}}.confirm.button">\n        <span bb-translate>{{::menuItem.options.comfirmLabelKey || menuItem.labelKey}}</span>\n      </button>\n    </div>\n  </div>\n</div>\n'},"9SWV":function(e,n){e.exports='<span ng-switch on="$ctrl.iconName" class="overflow-menu-icon">\n  <bb-ui-icon-small-course-complete ng-switch-when="course-complete"></bb-ui-icon-small-course-complete>\n  <bb-ui-icon-small-notes ng-switch-when="notes"></bb-ui-icon-small-notes>\n  <bb-ui-icon-small-safe-assign ng-switch-when="safe-assign"></bb-ui-icon-small-safe-assign>\n  <bb-ui-icon-small-numbered-list ng-switch-when="numbered-list"></bb-ui-icon-small-numbered-list>\n  <bb-svg-icon ng-switch-default size="small" icon="{{::$ctrl.iconName}}" status="{{::$ctrl.status}}"></bb-svg-icon>\n</span>\n'},GgSu:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var i=t("D57K"),o=t("yC9S"),s=t("9SWV");const l="ultra.components.directives.overflow-menu.overflow-menu-icon";let a=class{};a=Object(i.__decorate)([Object(o.a)({moduleName:l,componentName:"bbOverflowMenuIcon",template:s,bindings:{iconName:"@",status:"@"}})],a)},JNtI:function(e,n,t){"use strict";(function(e){t.d(n,"b",(function(){return w})),t.d(n,"a",(function(){return v}));var i=t("D57K"),o=(t("zbCZ"),t("aAQ7"),t("l+9M"),t("dV61"),t("Vdys"),t("RJjh"),t("xN03"),t("f80m"),t("kQ8a"),t("PeCP"),t("dvAF"),t("nsO7")),s=t("Llzl"),l=t("+g6d"),a=t("lmMM"),r=t("0JpG"),c=t("lEL+"),m=t("7+Tq"),u=t("d7QB"),d=t("yC9S"),h=t("aHpC"),b=t("+4Px"),p=t("GgSu"),f=t("3C2s");const w="ultra.components.directives.overflowMenu.overflowMenu";function v(e){return{titleKey:Object(a.c)(e,"title"),instructionsKey:Object(a.c)(e,"instructions")}}class g{constructor(e,n,t,i){this.menu=e,this.name=n,this.options=t,this.integrationEventEmitterService=i,this.isConfirmationActive=!1,this.id=e.elementId+"_"+n,this.hasConfirmation()&&(this.confirmationId=this.id+"_confirmation"),this.textKey=t.textKey||"",this.bbClickFocus=t.bbClickFocus||"",this.ariaLabel=t.ariaLabel||(()=>""),this.disableInfo=t.disableInfo||"",this.additionalAttributes=t.additionalAttributes||null}show(){return!this.options.show||this.options.show()}disable(){return!!this.options.disable&&this.options.disable()}onClick(){this.disable()||(this.options.confirmationOptions?this.options.confirmationOptions.lazyLoadTitleKeyAndInstructionsKey?this.options.confirmationOptions.lazyLoadTitleKeyAndInstructionsKey().then(e=>{this.options.confirmationOptions.titleKey=e.titleKey||this.options.confirmationOptions.titleKey,this.options.confirmationOptions.instructionsKey=e.instructionsKey||this.options.confirmationOptions.instructionsKey,this.menu.showConfirmation(this.confirmationId),this.isConfirmationActive=!0}):(this.menu.showConfirmation(this.confirmationId),this.isConfirmationActive=!0):this.onConfirm())}isConfirmationMenuVisible(){return this.isConfirmationActive}blur(){this.isConfirmationActive=!1}getLabelKey(){return this.labelKey}onConfirm(e){e&&(this.integrationEventEmitterService.emitIntegrationEvent(e),e.preventDefault(),e.stopImmediatePropagation()),this.persistChoices(),this.menu.closeDropdown(),this.options.onClick(),this.isConfirmationActive=!1}onCancel(){this.menu.closeDropdown(),this.isConfirmationActive=!1}hasConfirmation(){return null!=this.options.confirmationOptions}hasChoices(){return this.hasConfirmation()&&this.options.confirmationOptions.choices&&this.options.confirmationOptions.choices.length>0}hasTextKey(){return this.textKey.length>0}persistChoices(){this.hasChoices()&&this.menu.persistChoices(this.options.confirmationOptions.choices)}addAdditionalAttributes(){if(this.additionalAttributes){const e=this.menu.menuElement.find("#"+this.id+"_li");Object.keys(this.additionalAttributes).forEach(n=>{e.attr(n,this.additionalAttributes[n])})}return!0}}let I=class extends g{constructor(e,n,t){super(e,n.uniqueId?n.uniqueId:"edit",n,t),this.icon=n.icon||"draw",this.labelKey=n.labelKey||"global.edit"}};I=Object(i.__decorate)([Object(i.__param)(0,Object(h.b)("menu")),Object(i.__param)(1,Object(h.b)("options")),Object(i.__param)(2,Object(h.b)("integrationEventEmitterService"))],I);let M=class extends g{constructor(e,n,t){super(e,n.uniqueId?n.uniqueId:"delete",n,t),this.icon=n.icon||"trash",this.labelKey=n.labelKey||"global.delete"}};M=Object(i.__decorate)([Object(i.__param)(0,Object(h.b)("menu")),Object(i.__param)(1,Object(h.b)("options")),Object(i.__param)(2,Object(h.b)("integrationEventEmitterService"))],M);let y=class extends g{constructor(e,n,t){super(e,n.uniqueId?n.uniqueId:n.icon,n,t),this.icon=n.icon,this.status=n.status,this.uniqueId=n.uniqueId,this.labelKey=n.labelKey}};y=Object(i.__decorate)([Object(i.__param)(0,Object(h.b)("menu")),Object(i.__param)(1,Object(h.b)("options")),Object(i.__param)(2,Object(h.b)("integrationEventEmitterService"))],y);let x=class{constructor(e,n,t,i,s,l,a,r){this.scope=e,this.element=n,this.$injector=t,this.$sce=i,this.bbLocalize=s,this.timeout=l,this.dropdownInit=a,this.integrationEventEmitterService=r,this.menuItems=[],this.confirmationNeededMenuItems=[],this.visibleMenuItemsFilter=e=>e.show(),this.ignoreCloseEvent=!1,this.dialogMap={},this.initDropdownMenu=o.once(()=>{this.dropdownInit(this.element,this.scope),this.timeout(()=>{this.element.find(".js-menu-item-list a").first().focus()},this.scope,100)}),this.isRtl=s.isRTL(e),this.menuElement=n,this.elementId=e.elementId,this.menuDirection=`align:${this.isRtl?"right":"left"}`;let c=[];e.menuItems&&e.menuItems()&&(c=e.menuItems()),this.addOptionsToMenuItems(c),this.initWindowResizeHandler(),this.element.on("closed.fndtn.dropdown",".f-open-dropdown",()=>{e.menuWasToggled(!1),this.ignoreCloseEvent||(this.element.find(".menu-icon-confirmation").hide(),this.element.find("[data-dropdown-content]").removeClass("bb-foundation-dropdown-tab-override"),this.element.find(".js-menu-item-list").show())}),this.element.on("opened.fndtn.dropdown",".f-dropdown-overflow-menu",()=>{e.menuWasToggled(!0),this.initDropdownMenu(),this.repositionMenuIfNeeded()}),e.menuItems&&e.$on("menuItems.update",(e,n,t)=>{this.elementId===n&&(this.menuItems=[],this.addOptionsToMenuItems(t))})}addOptionsToMenuItems(e){this.scope.editOptions&&this.scope.editOptions()&&this.menuItems.push(this.$injector.instantiate(I,{menu:this,options:this.scope.editOptions(),integrationEventEmitterService:this.integrationEventEmitterService})),e&&e.length>0&&e.forEach(e=>{this.menuItems.push(this.$injector.instantiate(y,{menu:this,options:e,integrationEventEmitterService:this.integrationEventEmitterService}))}),this.scope.deleteOptions&&this.scope.deleteOptions()&&this.menuItems.push(this.$injector.instantiate(M,{menu:this,options:this.scope.deleteOptions(),integrationEventEmitterService:this.integrationEventEmitterService})),this.checkAndUpdateForSingleMenu(),this.confirmationNeededMenuItems=o.filter(this.menuItems,e=>e.hasConfirmation())}repositionMenuIfNeeded(){const n=this.element.find(".f-dropdown-overflow-menu"),t=this.element.find(".overflow-menu-button");if(0!==n.length&&(n.removeClass("align-top"),n.offset().top+n.outerHeight()+8>=e(document).height())){n.addClass("align-top");const e=t.position().top+parseInt(t.css("margin-top"),10);n.css("top",0-n.outerHeight()+4+e)}}initWindowResizeHandler(){d.b.OnWindow("resize",()=>{this.resetDropdownMenuStyles(),this.repositionMenuIfNeeded()},this.scope)}resetDropdownMenuStyles(){const n=e(".guidance-wrapper .f-dropdown.f-dropdown-overflow-menu");n.each(t=>{e(n[t]).removeAttr("style")})}show(){return this.menuItems.length>0&&this.menuItems.some(e=>e.show())}hasUniqueId(e){return!!this.element.find('a[id*="'+e+'"]').length}closeDropdown(){const e=this.element.find(".f-open-dropdown:visible");this.element.foundation("dropdown","close",e)}toggleDropdown(){const e=this.element.find(".overflow-menu-button");this.element.foundation("dropdown","toggle",e)}showConfirmation(n){this.timeout(()=>{this.element.find("[data-dropdown-content]").addClass("bb-foundation-dropdown-tab-override"),null==this.dialogMap[n]&&(this.dialogMap[n]=this.element.find("#"+n)),this.dialogMap[n].show(),this.element.find(".js-menu-item-list").hide(),this.menuItems.some(e=>s.isDefined(e.disable))&&e("body").find(".enhanced-tooltip").attr("aria-hidden","true").css({top:0,left:0}),this.ignoreCloseEvent=!0,this.toggleDropdown(),this.toggleDropdown(),this.ignoreCloseEvent=!1},this.scope)}getButtonAriaLabel(){let e;e=null!=this.scope.elementName?"components.directives.overflow-menu.menu-button.aria-label":"components.directives.overflow-menu.menu-button.title";const n={locale:this.bbLocalize.getLocale(this.scope),key:e,noWrap:!0};return null!=this.scope.elementName&&(n.params={elementName:this.$sce.trustAsHtml(this.scope.elementName)}),this.bbLocalize.translateSync(n)}getTextByKey(e){const n={locale:this.bbLocalize.getLocale(this.scope),key:e,noWrap:!0};return this.bbLocalize.translateSync(n)}hasOptionText(){return this.menuItems.length>0&&this.menuItems.some(e=>e.hasTextKey())}persistChoices(e){e&&e.length&&e.forEach(e=>{this.scope.$emit(e.key,e.value)})}addMenuItem(e){const n=this.$injector.instantiate(y,{menu:this,options:e,integrationEventEmitterService:this.integrationEventEmitterService});this.indexOfExistingMenuItem(e,this.menuItems)>-1||(this.menuItems.push(n),this.checkAndUpdateForSingleMenu(),this.confirmationNeededMenuItems=o.filter(this.menuItems,e=>e.hasConfirmation()))}indexOfExistingMenuItem(e,n){return o.findIndex(n,n=>e.labelKey===n.getLabelKey())}onOptionKeydown(e){e.keyCode!==b.f&&e.keyCode!==b.t||e.preventDefault()}isSingleMode(){var e,n;return null===(n=(e=this.scope).isSingleMode)||void 0===n?void 0:n.call(e)}ignoreAccordion(){var e,n;return null===(n=(e=this.scope).ignoreAccordion)||void 0===n?void 0:n.call(e)}checkAndUpdateForSingleMenu(){this.isSingleMode()&&this.menuItems.length&&(this.menuItems=this.menuItems.slice(0,1),this.singleMenuItem=this.menuItems[0])}buildAnalyticsId(e){return e.additionalAttributes&&e.additionalAttributes.analyticsIdOverride?e.additionalAttributes.analyticsIdOverride:`${this.scope.analyticsIdTagPrefix}.${e.labelKey}.link`}};Object(i.__decorate)([Object(h.d)("elementName","locale")],x.prototype,"getButtonAriaLabel",null),x=Object(i.__decorate)([Object(i.__param)(0,Object(h.b)("scope")),Object(i.__param)(1,Object(h.b)("element")),Object(i.__param)(2,Object(h.b)("$injector")),Object(i.__param)(3,Object(h.b)("$sce")),Object(i.__param)(4,Object(h.b)(r.serviceName)),Object(i.__param)(5,Object(h.b)(c.b)),Object(i.__param)(6,Object(h.b)(m.b)),Object(i.__param)(7,Object(h.b)(u.b))],x);class O{constructor(e){this.$injector=e,this.queuedMenuItems=[]}setMenu(e){this.menu=e,this.queuedMenuItems.length>0&&this.queuedMenuItems.forEach(e=>{this.addMenuItem(e)})}addMenuItem(e){this.menu?this.menu.addMenuItem(e):this.queuedMenuItems.push(e)}destroyMenu(){this.menu=null,this.queuedMenuItems=[]}}O.$inject=["$injector"];let j=class{constructor(e,n,t){this.$compile=e,this.$injector=n,this.bbLocalize=t,this.restrict="E",this.template=f,this.require="?^^bbOverflowMenuContainer",this.scope={elementId:"@",elementName:"@?",editOptions:"&?",deleteOptions:"&?",menuItems:"&?",isDisabled:"&?",isSingleMode:"&?",onMenuToggle:"&?",analyticsIdTagPrefix:"@",ignoreAccordion:"&?"},this.link=(e,n,t,i)=>{this.bbLocalize.loadBundle("components/directives/overflow-menu"),this.bbLocalize.loadBundle("components/directives/confirmation-needed"),e.menuWasToggled=n=>{e.onMenuToggle&&e.$applyAsync(()=>e.onMenuToggle({isOpen:n}))},e.overflowMenu=this.$injector.instantiate(x,{scope:e,element:n}),i&&(i.setMenu(e.overflowMenu),e.$on("$destroy",()=>{i.destroyMenu()}))}}};j=Object(i.__decorate)([Object(i.__param)(0,Object(h.b)("$compile")),Object(i.__param)(1,Object(h.b)("$injector")),Object(i.__param)(2,Object(h.b)(r.serviceName))],j);class k{constructor(e,n){this.$compile=e,this.$injector=n,this.restrict="A",this.controller=O}}k.$inject=["$compile","$injector"],s.module(w,[l.a,a.d,r.moduleName,p.a,c.a,m.a,u.a]).directive("bbOverflowMenu",["$injector",e=>e.instantiate(j)]).directive("bbOverflowMenuContainer",["$injector",e=>e.instantiate(k)])}).call(this,t("5iHu"))},PeCP:function(e,n,t){var i=t("ziER"),o=t("5JeM"),s=new i({id:"icon-small-ally-indicator-unscored",use:"icon-small-ally-indicator-unscored-usage",viewBox:"0 0 16 17",content:'<symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 17" id="icon-small-ally-indicator-unscored"><path d="M7 11.6667c0 .4602.4477.8333 1 .8333s1-.3731 1-.8333L8 7.5l-1 4.1667z" stroke-width="2" stroke-linejoin="round" /><path d="M2 11.5H1v-1c0-3.866 3.134-7 7-7s7 3.134 7 7v1h-1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /><path d="M8 3.5v1M13.25 6l-1 1M3.75 7l-1-1" stroke-width="2" stroke-linecap="round" /></symbol>'});o.add(s);e.exports=s},RJjh:function(e,n,t){var i=t("ziER"),o=t("5JeM"),s=new i({id:"icon-small-invisible",use:"icon-small-invisible-usage",viewBox:"0 0 16 16",content:'<symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="icon-small-invisible"><path d="M8 3C4.6406 3 1 8 1 8s3.6406 5 7 5 7-5 7-5-3.6406-5-7-5zM1 13L15 3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /><circle cx="8" cy="8" r="1" stroke-width="2" /></symbol>'});o.add(s);e.exports=s},Vdys:function(e,n,t){var i=t("ziER"),o=t("5JeM"),s=new i({id:"icon-small-visible",use:"icon-small-visible-usage",viewBox:"0 0 16 16",content:'<symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="icon-small-visible"><path d="M8 3C4.6406 3 1 8 1 8s3.6406 5 7 5 7-5 7-5-3.6406-5-7-5z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /><circle cx="8" cy="8" r="1" stroke-width="2" /></symbol>'});o.add(s);e.exports=s},aAQ7:function(e,n,t){var i=t("ziER"),o=t("5JeM"),s=new i({id:"icon-small-menu",use:"icon-small-menu-usage",viewBox:"0 0 16 16",content:'<symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="icon-small-menu"><circle cx="2" cy="8" r="1" stroke-width="2" /><circle cx="8" cy="8" r="1" stroke-width="2" /><circle cx="14" cy="8" r="1" stroke-width="2" /></symbol>'});o.add(s);e.exports=s},dV61:function(e,n,t){var i=t("ziER"),o=t("5JeM"),s=new i({id:"icon-small-trash",use:"icon-small-trash-usage",viewBox:"0 0 16 16",content:'<symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="icon-small-trash"><path d="M4 4l2-3h4l2 3M2 5l1 10h10l1-10M1 4h14M8 7v5M11 7l-.5 5M5 7l.5 5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></symbol>'});o.add(s);e.exports=s},dvAF:function(e,n,t){var i=t("ziER"),o=t("5JeM"),s=new i({id:"icon-small-ally-alt-formats",use:"icon-small-ally-alt-formats-usage",viewBox:"0 0 16 17",content:'<symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 17" id="icon-small-ally-alt-formats"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 16.5l8-13 8 13h-4s-.5-3-4-3-4 3-4 3H0zm8-4c1.1046 0 2-.8954 2-2s-.8954-2-2-2-2 .8954-2 2 .8954 2 2 2z" fill="#262626" /><path d="M16 3.5l-3 5-3-5h2v-3h2v3h2z" fill="#262626" /></symbol>'});o.add(s);e.exports=s},f80m:function(e,n,t){var i=t("ziER"),o=t("5JeM"),s=new i({id:"icon-small-import-export",use:"icon-small-import-export-usage",viewBox:"0 0 16 16",content:'<symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="icon-small-import-export"><path d="M15 9.091V15H1V1h5.909" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /><path d="M6 7v3h3M12 1h3v3M6 10l9-9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></symbol>'});o.add(s);e.exports=s},kQ8a:function(e,n,t){var i=t("ziER"),o=t("5JeM"),s=new i({id:"icon-small-accessibility",use:"icon-small-accessibility-usage",viewBox:"0 0 16 16",content:'<symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="icon-small-accessibility"><path d="M8 5c1.1046 0 2-.8954 2-2s-.8954-2-2-2-2 .8954-2 2 .8954 2 2 2zM3 6l5 1 5-1M3 15l5-5 5 5M8 7v3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></symbol>'});o.add(s);e.exports=s},"l+9M":function(e,n,t){var i=t("ziER"),o=t("5JeM"),s=new i({id:"icon-small-draw",use:"icon-small-draw-usage",viewBox:"0 0 16 16",content:'<symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="icon-small-draw"><path d="M15 4l-3-3L2 11l-1 4 4-1L15 4zM12 6l-2-2M6 12l-2-2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></symbol>'});o.add(s);e.exports=s},xN03:function(e,n,t){var i=t("ziER"),o=t("5JeM"),s=new i({id:"icon-small-download",use:"icon-small-download-usage",viewBox:"0 0 16 16",content:'<symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="icon-small-download"><path d="M4 4H1v11h14V4h-3M8 1v11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /><path d="M6 10l2 2 2-2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></symbol>'});o.add(s);e.exports=s},zbCZ:function(e,n,t){}}]);