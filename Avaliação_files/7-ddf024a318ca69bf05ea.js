(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"+iNq":function(e,t,i){var n=i("ziER"),s=i("5JeM"),o=new n({id:"icon-small-visible",use:"icon-small-visible-usage",viewBox:"0 0 16 16",content:'<symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="icon-small-visible"><path d="M8 3C4.6406 3 1 8 1 8s3.6406 5 7 5 7-5 7-5-3.6406-5-7-5z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /><circle cx="8" cy="8" r="1" stroke-width="2" /></symbol>'});s.add(o);e.exports=o},"1NX5":function(e,t,i){var n=i("ziER"),s=i("5JeM"),o=new n({id:"icon-small-information",use:"icon-small-information-usage",viewBox:"0 0 16 16",content:'<symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="icon-small-information"><circle cx="8" cy="8" r="7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /><path d="M7 7h1v4M6 11h4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /><circle cx="8" cy="4" r=".5" /></symbol>'});s.add(o);e.exports=o},"3+vU":function(e,t,i){"use strict";i.d(t,"a",(function(){return o}));var n=i("1ZbL"),s=i("TUnR");const o="ultra.components.directives.content.guidance-feature-announcement",l=Object(n.a)({Class:s.GuidanceFeatureAnnouncement,bindingNames:["announcementTitle","content","componentKey","doneButtonText","buttonAriaLabel","linkHref","linkText","onCloseAnnouncement","closeLabel"],withProvider:!0});angular.module(o,[]).component("bbGuidanceFeatureAnnouncement",l)},DUMb:function(e,t,i){var n=i("ziER"),s=i("5JeM"),o=new n({id:"icon-medium-information",use:"icon-medium-information-usage",viewBox:"0 0 24 24",content:'<symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="icon-medium-information"><path d="M12 23c6.0751 0 11-4.9249 11-11S18.0751 1 12 1 1 5.9249 1 12s4.9249 11 11 11z" stroke-width="2" /><path d="M12 6.5a.5.5 0 100-1 .5.5 0 000 1z" stroke-linecap="round" stroke-linejoin="round" /><path d="M10 9h2v9M10 18h4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></symbol>'});s.add(o);e.exports=o},FpRh:function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));var n=i("D57K"),s=i("yC9S"),o=i("aHpC"),l=i("t3aq"),c=i.n(l);const a="ultra.directives.bbAllyContentRef";let r=class{constructor(e){this.$element=e}$postLink(){c.a.renderContentId(this.$element[0],{contentId:this.contentId,fileId:this.fileId,filePreviewUrl:this.filePreviewUrl})}$onDestroy(){c.a.destroyComponent(this.$element[0])}};r=Object(n.__decorate)([Object(s.a)({module:angular.module(a,[]),componentName:"bbAllyContentRef",bindings:{contentId:"@",fileId:"@",filePreviewUrl:"@"}}),Object(n.__param)(0,Object(o.b)("$element"))],r)},Igru:function(e,t,i){var n=i("ziER"),s=i("5JeM"),o=new n({id:"icon-small-invisible",use:"icon-small-invisible-usage",viewBox:"0 0 16 16",content:'<symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="icon-small-invisible"><path d="M8 3C4.6406 3 1 8 1 8s3.6406 5 7 5 7-5 7-5-3.6406-5-7-5zM1 13L15 3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /><circle cx="8" cy="8" r="1" stroke-width="2" /></symbol>'});s.add(o);e.exports=o},Jedz:function(e,t,i){var n=i("ziER"),s=i("5JeM"),o=new n({id:"icon-small-time",use:"icon-small-time-usage",viewBox:"0 0 16 16",content:'<symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="icon-small-time"><path d="M15 8c0 3.866-3.134 7-7 7s-7-3.134-7-7 3.134-7 7-7 7 3.134 7 7zM5 11l1-1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /><path d="M8 4v4l3 2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></symbol>'});s.add(o);e.exports=o},"M8+u":function(e,t,i){"use strict";i.d(t,"a",(function(){return r}));var n=i("D57K"),s=i("3+vU"),o=i("0JpG"),l=i("yC9S"),c=i("aHpC"),a=i("Xdju");const r="ultra.components.directives.content.content-visibility.membership-ftue";let d=class{constructor(e,t,i){this.$scope=e,this.$q=t,this.localizeService=i,this.translate("components.directives.content-visibility.usersAndGroupsAnnouncement.buttonAriaLabel").then(e=>this.buttonAriaLabel=e),this.translate("components.directives.content-visibility.usersAndGroupsAnnouncement.title").then(e=>this.title=e),this.translate("components.directives.content-visibility.usersAndGroupsAnnouncement.content").then(e=>this.content=e),this.translate("global.close").then(e=>this.closeLabel=e),this.translate("components.directives.content-visibility.usersAndGroupsAnnouncement.doneButtonText").then(e=>this.doneButtonText=e),this.translate("components.directives.content-visibility.usersAndGroupsAnnouncement.moreInfoLinkText").then(e=>this.linkText=e),this.translate("components.directives.content-visibility.usersAndGroupsAnnouncement.moreInfoLinkUrl").then(e=>this.linkHref=e)}translate(e){return this.localizeService.translate({locale:this.localizeService.getLocale(this.$scope),key:e,noWrap:!0,noEscape:!0})}};d=Object(n.__decorate)([Object(l.a)({moduleName:r,componentName:"bbContentVisibilityMembershipFtue",template:a,bindings:{},requireModules:[s.a]}),Object(n.__param)(0,Object(c.b)("$scope")),Object(n.__param)(1,Object(c.b)("$q")),Object(n.__param)(2,Object(c.b)(o.serviceName))],d)},NNy8:function(e,t,i){var n=i("ziER"),s=i("5JeM"),o=new n({id:"icon-medium-visible",use:"icon-medium-visible-usage",viewBox:"0 0 24 24",content:'<symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="icon-medium-visible"><circle cx="12" cy="12" r="2" stroke-width="2" /><path d="M12 6C7.1067 6 1 12 1 12s6.1067 6 11 6 11-6 11-6-6.1067-6-11-6z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></symbol>'});s.add(o);e.exports=o},SqHH:function(e,t,i){var n=i("ziER"),s=i("5JeM"),o=new n({id:"icon-medium-lock",use:"icon-medium-lock-usage",viewBox:"0 0 24 24",content:'<symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="icon-medium-lock"><path d="M11 16c0-.5523.4477-1 1-1v0c.5523 0 1 .4477 1 1v2c0 .5523-.4477 1-1 1v0c-.5523 0-1-.4477-1-1v-2z" stroke-width="2" /><path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M3 11h18v12H3z" /><path d="M6 11V6s0-5 6-5 6 5 6 5v5" stroke-width="2" /></symbol>'});s.add(o);e.exports=o},W6wm:function(e,t,i){"use strict";var n;i.d(t,"a",(function(){return n})),function(e){e.CourseOutline="course-outline",e.Discussions="discussions"}(n||(n={}))},Xdju:function(e,t){e.exports='<bb-guidance-feature-announcement\n  component-key="\'contentVisibility.membersAndGroups\'"\n  button-aria-label="$ctrl.buttonAriaLabel"\n  announcement-title="$ctrl.title"\n  content="$ctrl.content"\n  done-button-text="$ctrl.doneButtonText"\n  link-href="$ctrl.linkHref"\n  link-text="$ctrl.linkText"\n  close-label="$ctrl.closeLabel"\n></bb-guidance-feature-announcement>\n'},Ycix:function(e,t,i){var n=i("ziER"),s=i("5JeM"),o=new n({id:"icon-medium-people",use:"icon-medium-people-usage",viewBox:"0 0 24 24",content:'<symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="icon-medium-people"><path d="M1 23c1.096-4.3157 4.5473-7 9-7s7.904 2.6843 9 7M10 16c2.7614 0 5-2.2386 5-5s-2.2386-5-5-5-5 2.2386-5 5 2.2386 5 5 5zM18.5 8C20.433 8 22 6.433 22 4.5S20.433 1 18.5 1 15 2.567 15 4.5 16.567 8 18.5 8zM23 12c-.2345-1.9862-2.5-4-4.5-4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></symbol>'});s.add(o);e.exports=o},Z6BI:function(e,t){e.exports='<div bb-foundation-defer bb-load-bundle="components/directives/content-visibility" class="item-selector-container content-visibility-selector" bb-cache-compilation="content-visibility-selector">\n  \x3c!-- To allow instructors to see visibility status in a completed course --\x3e\n  <div ng-if="!contentVisibilitySelector.isEditable() && contentVisibilitySelector.entitledToViewDesigner && content.isVisibleToStudents()" class="visibility-message visibility-label">\n    <bb-svg-icon size="{{::contentVisibilitySelector.getIconSize()}}" icon="visible" class="visibility-icon"></bb-svg-icon>\n    <span class="js-visibility js-visible-option vert-centered-label-text" bb-translate course-org-token-resolver>\n      components.directives.content-visibility.visible\n    </span>\n  </div>\n  \x3c!-- To allow instructors to see visibility status in a completed course --\x3e\n  <div ng-if="!contentVisibilitySelector.isEditable() && contentVisibilitySelector.entitledToViewDesigner && content.isHiddenFromStudents()" class="visibility-message visibility-label">\n    <bb-svg-icon size="{{::contentVisibilitySelector.getIconSize()}}" icon="invisible" class="visibility-icon"></bb-svg-icon>\n    <span bb-translate course-org-token-resolver>components.directives.content-visibility.hidden</span>\n  </div>\n  \x3c!-- To allow instructors to see visibility status in a completed course --\x3e\n  <div ng-if="!contentVisibilitySelector.isEditable() && contentVisibilitySelector.entitledToViewDesigner && content.isConditionalRelease()" class="visibility-message visibility-label">\n    <bb-svg-icon size="{{::contentVisibilitySelector.getIconSize()}}" icon="lock" class="visibility-icon"></bb-svg-icon>\n    <span class="js-visibility js-restricted-option js-conditional-release-option" bb-translate>components.directives.content-visibility.conditional-availability</span>\n  </div>\n  <button name="visibility-content" ng-model="content.visible" ng-show="contentVisibilitySelector.isEditable()"\n          bb-prevent-click-if="!contentVisibilitySelector.isVisibilitySelectorEnabled()" type="button"\n          class="button dropdown" aria-controls="item-visibility-selector_{{::contentVisibilitySelector.selectorId}}"\n          data-dropdown="item-visibility-selector_{{::contentVisibilitySelector.selectorId}}" aria-expanded="false"\n          analytics-id="course.content.visibility.button">\n    <div class="visibility-label" ng-if="contentVisibilitySelector.isVisibleToStudents()">\n      <bb-svg-icon size="{{::contentVisibilitySelector.getIconSize()}}" icon="visible" class="visibility-icon"></bb-svg-icon>\n      <span class="js-visibility js-visible-option vert-centered-label-text" bb-translate course-org-token-resolver>\n        components.directives.content-visibility.visible\n      </span>\n    </div>\n    <div class="visibility-label" ng-if="contentVisibilitySelector.isHiddenFromStudents()">\n      <bb-svg-icon size="{{::contentVisibilitySelector.getIconSize()}}" icon="invisible" class="visibility-icon"></bb-svg-icon>\n      <span class="js-visibility js-hidden-option vert-centered-label-text" bb-translate course-org-token-resolver>\n        components.directives.content-visibility.hidden\n      </span>\n    </div>\n    <div class="visibility-label" ng-if="contentVisibilitySelector.isConditionalRelease()">\n      <bb-svg-icon size="{{::contentVisibilitySelector.getIconSize()}}" icon="lock" class="visibility-icon"></bb-svg-icon>\n      <span class="js-visibility js-restricted-option vert-centered-label-text" bb-translate>components.directives.content-visibility.conditional-availability</span>\n    </div>\n    \x3c!-- LRN-114090 The native mobile select works by covering the button to intercept the click.\n          It needs to be nested inside the button properly fill the entirety of the button. --\x3e\n    <select ng-if="::contentVisibilitySelector.useNativeSelect()" class="button"\n            ng-model="contentVisibilitySelector.selectedVisibilityOption"\n            ng-options="option.text for option in contentVisibilitySelector.visibilityOptions | filter: {show: true}"\n            ng-change="contentVisibilitySelector.selectedVisibilityOption.onSelect()"\n            analytics-id="course.content.visibility.select">\n    </select>\n  </button>\n\n  <ul ng-if="::!contentVisibilitySelector.useNativeSelect()" ng-show="contentVisibilitySelector.isEditable()"\n      id="item-visibility-selector_{{::contentVisibilitySelector.selectorId}}" class="f-dropdown item-visibility-selector selection-full-width"\n      data-dropdown-content aria-hidden="true">\n    <li ng-class="{\'item-selected\': content.isVisibleToStudents()}" ng-if="contentVisibilitySelector.showVisibleHiddenMenuOptions()">\n      <a href="javascript:void(0);" ng-click="contentVisibilitySelector.selectVisible()" class="visible-option visibility-label"\n         analytics-id="components.directives.content-visibility.visible.link">\n        <bb-svg-icon size="{{::contentVisibilitySelector.getIconSize()}}" icon="visible"></bb-svg-icon>\n        <span bb-translate course-org-token-resolver>components.directives.content-visibility.visible</span>\n      </a>\n    </li>\n    <li ng-class="{\'item-selected\': content.isHiddenFromStudents()}" ng-if="contentVisibilitySelector.showVisibleHiddenMenuOptions()">\n      <a href="javascript:void(0);" ng-click="contentVisibilitySelector.selectHidden()" class="hidden-option visibility-label"\n         analytics-id="components.directives.content-visibility.hidden.link">\n          <bb-svg-icon size="{{::contentVisibilitySelector.getIconSize()}}" icon="invisible"></bb-svg-icon>\n          <span bb-translate course-org-token-resolver>components.directives.content-visibility.hidden</span>\n      </a>\n    </li>\n    <li ng-if="contentVisibilitySelector.showConditionalReleaseMenuOption()" ng-class="{\'item-selected\': content.isConditionalRelease()}">\n      <a href="javascript:void(0);" ng-click="contentVisibilitySelector.selectConditionalRelease()" class="restricted-option visibility-label conditional-release-restricted-option"\n         analytics-id="components.directives.content-visibility.conditional-availability.link">\n          <bb-svg-icon size="{{::contentVisibilitySelector.getIconSize()}}" icon="lock"></bb-svg-icon>\n          <span bb-translate>components.directives.content-visibility.conditional-availability</span>\n      </a>\n    </li>\n  </ul>\n</div>\n'},bxwa:function(e,t,i){var n=i("ziER"),s=i("5JeM"),o=new n({id:"icon-medium-invisible",use:"icon-medium-invisible-usage",viewBox:"0 0 24 24",content:'<symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="icon-medium-invisible"><circle cx="12" cy="12" r="2" stroke-width="2" /><path d="M12 6C7.1067 6 1 12 1 12s6.1067 6 11 6 11-6 11-6-6.1067-6-11-6zM1 23L23 1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></symbol>'});s.add(o);e.exports=o},cs5G:function(e,t,i){"use strict";i.d(t,"a",(function(){return m})),i.d(t,"b",(function(){return y}));var n=i("D57K"),s=i("nsO7"),o=i("t3aq"),l=i("Qbdf"),c=i("X455"),a=i("HAJP"),r=i("0JpG"),d=i("5MwF"),b=i("WSu0"),h=i("Q/M7"),u=i("pjml"),v=i("aHpC"),p=i("6fZB");const m="ultra.service.ally",y="ally";let g=class{constructor(e,t,i,n,s,o,l,c){this.$q=e,this.$timeout=t,this.$interval=i,this.allyModel=n,this.contextCourse=s,this.contextCourseMembership=o,this.bbLocalize=l,this.bbScriptLoader=c,this.cachedTokensMap=new Map,this._mockCourses={},this._xythosIdToContentIdMap={},this._xythosIdToInstructorFeedbackUpdateCallbackMap=new Map,this.getToken=e=>{const t=e?this._xythosIdToContentIdMap[e]:void 0;return this.cachedTokensMap.has(e)&&Date.now()<this.cachedTokensMap.get(e).exp?this.$q.resolve(this.cachedTokensMap.get(e).token):this.allyModel.getAllyToken(this.contextCourse.courseId,t).then(t=>{const i=this.getExpireMillisFromToken(t),n={bearer:t.authToken};return this.cachedTokensMap.set(e,{token:n,exp:i}),n})}}getAllySettings(){return this._allyConfig?this.$q.resolve(this._allyConfig):this.allyModel.getAllyConfig().then(e=>this._allyConfig=e)}getExpireMillisFromToken(e){return 1e3*b(e.authToken).exp}isAvailable(){return this.getAllySettings().then(e=>e.serviceAvailable)}getXythosIdFromContentFileUrl(e){const t=/(?:xid|_xy)-([^&]*)/.exec(e);let i=t&&t[1];return i&&"_"!==i.substr(0,1)&&(i="_"+i),i}getXythosIdFromContentItem(e){const t=s.get(e,"contentDetail['resource/x-bb-file'].file.permanentUrl");if(t)return this.getXythosIdFromContentFileUrl(t)}isAllySupportedContentItem(e){return e.isFile()&&!e.isConditionalReleaseLocked()}disable(){this._allyConfig?this._allyConfig.serviceAvailable=!1:this._allyConfig={serviceAvailable:!1}}ensureAlly(){const e=this,t=this.$q.defer();return this.ally?t.resolve():this.getAllySettings().then(i=>{if(i.serviceAvailable){let n,s=!1;const o=(e,i)=>{s||(e?t.resolve():(this.disable(),i&&console.error(i),t.reject()),s=!0,this.$timeout.cancel(n))};n=this.$timeout(()=>{o(!1,"Ally initialization timed out.  Disabling Ally Service.")},d.a.allyInitializationTimeout||1e4),this.bbScriptLoader.getScript(i.javascriptUrl,{attributes:{"data-ally-loader":""},exports:"ally"}).then(t=>{e.ally=t;try{e.ally.ready(()=>{o(!0)})}catch(e){console.error(e),o(!1,"Ally initialization error.  Disabling Ally Service.")}}).catch(()=>{o(!1,"Failed to load ally.js.  Disabling Ally Service.")})}else t.resolve()}),t.promise}getRole(){return this.contextCourseMembership.isActAsInstructorMembership()?"privileged":"unprivileged"}destroyCurrentAllyInstance(){this.cachedTokensMap.clear();const e=this.$q.defer();return this._xythosIdToInstructorFeedbackUpdateCallbackMap.clear(),this.allyUI?this.allyUI.destroy().then(()=>{e.resolve()}):e.resolve(),e.promise}ensureAllyUI(e){if(this.allyLoadInProgressPromise)return this.allyLoadInProgressPromise;const t=this.$q.defer();return this.allyLoadInProgressPromise=t.promise,this.ensureAlly().then(()=>{this.getAllySettings().then(i=>{if(!i.serviceAvailable||this.currentCourseId===this.contextCourse.courseId&&this.currentLocale===this.bbLocalize.getLocale(e))this.allyLoadInProgressPromise=void 0,t.resolve();else{this.currentCourseId!==this.contextCourse.courseId&&(this._xythosIdToContentIdMap={}),this.currentCourseId=this.contextCourse.courseId,this.currentLocale=this.bbLocalize.getLocale(e);const n={client:{auth:this.getToken.bind(this),baseUrl:h.i(i.ltiUrl),clientId:i.clientId},courseId:this.currentCourseId,locale:this.currentLocale,platformName:"learn",role:this.getRole(),instructorfeedback:{callbacks:{closed:()=>{this.allyUI.client.clearAllFromCache(),this.allyUI.update()},deleted:e=>void 0,replacedFile:(e,t)=>void 0,updated:e=>{this.instructorFeedbackUpdateCallback(e)}}}};d.a.features.devtools_allyMock&&(this.allyMock=this.ally.ui.$mock(this._mockCourses,void 0),n.client.jQuery=this.allyMock),this.destroyCurrentAllyInstance().then(()=>{this.allyUI=this.ally.ui(n),this.allyUI.autoUpdate({domWatch:d.a.allyAutoUpdateInterval||500}).then(()=>{this.allyLoadInProgressPromise=void 0,t.resolve()})})}})}).catch(()=>{this.allyLoadInProgressPromise=void 0,t.reject()}),this.allyLoadInProgressPromise}update(e,t,i){this.isAvailable().then(n=>{n&&this.ensureAllyUI(e).then(()=>{t&&i&&(this._xythosIdToContentIdMap[i]=t,this.allyUI.client.clearFileIdFromCache(i)),this.registerMockFileReference(i)})})}registerMockFileReference(e){d.a.features.devtools_allyMock&&e&&(s.merge(this._mockCourses,{[this.currentCourseId]:{[e]:{availableAlternativeFormats:["Tts","Epub","Translation","Braille","Html"],creator:null,decorative:null,description:"mock file",id:e,isVersioned:!1,libraryReference:null,name:"mockfile",producer:null,results:{},score:.75,size:12345,suggestions:{},type:"pdf"}}}),this.allyMock.set(this._mockCourses))}fileUploadEvent(){this._clearCacheInterval||"privileged"!==this.getRole()||(this._clearCacheInterval=this.$interval(()=>{this.allyUI&&this.allyUI.client&&this.allyUI.client.clearAllFromCache()},d.a.allyClearCacheInterval||1e4,0,!1))}getIndexMapFromBbML(e){const t=new Map;if(!e)return t;const i=e.match(/(<a[^>]+)/gi)||[];let n=0;return i.forEach(e=>{if(e.includes('data-bbfile="')){const i=e.match(/href="[^"]+xid-([0-9_]+)/)||[];i.length>=2&&("_"!==i[1].substr(0,1)&&(i[1]="_"+i[1]),t.set(i[1],n)),n++}}),t}instructorFeedbackUpdateCallback(e){const t=this._xythosIdToInstructorFeedbackUpdateCallbackMap.get(e.id);t&&t(e)}onUpdate(e,t,i){switch(e){case o.UpdateEvent.InstructorFeedback:this._xythosIdToInstructorFeedbackUpdateCallbackMap.set(t,i)}}destroyListeners(e){this._xythosIdToInstructorFeedbackUpdateCallbackMap.delete(e)}getReactService(e){return{getXythosIdFromContentFileUrl:this.getXythosIdFromContentFileUrl.bind(this),update:(t,i)=>this.update(e,t,i),isAvailable:()=>Object(p.a)(this.isAvailable()),getIndexMapFromBbML:this.getIndexMapFromBbML.bind(this),onUpdate:this.onUpdate.bind(this),destroyListeners:this.destroyListeners.bind(this)}}};g=Object(n.__decorate)([Object(n.__param)(0,Object(v.b)("$q")),Object(n.__param)(1,Object(v.b)("$timeout")),Object(n.__param)(2,Object(v.b)("$interval")),Object(n.__param)(3,Object(v.b)(u.a.serviceName)),Object(n.__param)(4,Object(v.b)(l.e)),Object(n.__param)(5,Object(v.b)(c.d)),Object(n.__param)(6,Object(v.b)(r.serviceName)),Object(n.__param)(7,Object(v.b)(a.b))],g);class w extends g{}angular.module(m,[l.b,c.a,r.moduleName,a.a]).service(y,g)},laCM:function(e,t,i){"use strict";i.d(t,"a",(function(){return d}));var n=i("D57K"),s=i("t3aq"),o=i.n(s),l=i("cs5G"),c=i("0JpG"),a=i("yC9S"),r=i("aHpC");const d="ultra.directives.bbAllyShow";let b=class{constructor(e,t,i){this.$element=e,this.$scope=t,this.localize=i,this.showIcon=!1}$postLink(){const e={contentRef:this.contentId,widgetType:this.showViewScoreLink?s.WidgetType.ScoreIndicator:s.WidgetType.AlternativeFormats},t=this.localize.getLocale(this.$scope);this.showIcon?this.iconSize&&(e.iconSize=this.iconSize):e.text=this.localize.translateSync({locale:t,key:this.showViewScoreLink?"ally.open_feedback_panel":"ally.download_alternative_formats"}),this.showAlternativeFormatsLink&&(e.ariaLabel=this.localize.translateSync({locale:t,key:"ally.download_alternative_formats"})),o.a.renderWidget(this.$element[0],e)}$onDestroy(){o.a.destroyComponent(this.$element[0])}};b=Object(n.__decorate)([Object(a.a)({module:angular.module(d,[l.a,c.moduleName]),componentName:"bbAllyShow",bindings:{contentId:"@",showViewScoreLink:"<?",showAlternativeFormatsLink:"<?",showIcon:"<?",iconSize:"@?"}}),Object(n.__param)(0,Object(r.b)("$element")),Object(n.__param)(1,Object(r.b)("$scope")),Object(n.__param)(2,Object(r.b)(c.serviceName))],b)},sLTT:function(e,t,i){"use strict";i("KCTV"),i("Jedz"),i("+iNq"),i("Igru"),i("ueuW"),i("xX6i"),i("NNy8"),i("bxwa"),i("SqHH");var n=i("Llzl"),s=i("nsO7"),o=i("Sa5G"),l=i("jhBu"),c=i("0JpG"),a=i("oQrK"),r=i("+4Px"),d=i("pjml"),b=i("e6jQ"),h=i("TnpK"),u=i("ZzYr"),v=i("Qbdf"),p=i("Z6BI"),m=i("umYj"),y=i("nmzr"),g=i("zGdY");i.d(t,"a",(function(){return w}));const w="ultra.directives.contentVisibilitySelector",k="components.directives.content-visibility.conditional-availability";class f{constructor(e,t,i,n,l,c,a,h,u){if(this.iScope=e,this.element=t,this.$q=i,this.$ngRedux=n,this.bbLocalize=l,this.entitlementService=c,this.ultraState=a,this.$modal=h,this.currentCourse=u,this.contentHandler="",this.isBbPage=!1,this.todayDate=new Date,this.visibilityOptions=[],this.scope=e,this.scope.contentVisibilitySelector=this,this.visibleOptionKey=`components.directives.content-visibility.${u.course.isOrganization?"organization.":""}visible`,this.hiddenOptionKey=`components.directives.content-visibility.${u.course.isOrganization?"organization.":""}hidden`,this.contentId=this.scope.content.id,this.contentHandler=this.scope.content.contentHandler?this.scope.content.contentHandler.toString():"",null==this.contentId){const e=this.scope.$watch(()=>this.scope.content.id,t=>{t&&(null==this.contentId&&(this.contentId=t),e())})}if(this.selectorId=b.a(),this.contentHandler&&(d.p.ContentHandler.CourseLink.isEqualTo(this.contentHandler)&&null!=this.scope.content.contentDetail&&this.scope.content.getLinkContentSource().$then(e=>{this.contentHandler=e.contentHandler&&e.contentHandler.toString(),this.contentId=e.id}),d.p.ContentHandler.Folder.isEqualTo(this.contentHandler)&&null!=this.scope.content.contentDetail)){const e=this.scope.content.contentDetail[d.p.ContentHandler.Folder.toString()];e&&e.isBbPage&&(this.isBbPage=!0)}if(this.useNativeSelect()&&this.initVisibilityOptions(),this.scope.content.permissions){const e=this.scope.content.permissions;this.entitledToViewDesigner=s.isFunction(this.scope.content.canViewAsInstructor)&&this.scope.content.canViewAsInstructor(),e.adaptiveRelease?(this.entitledToViewConditionalRelease=e.adaptiveRelease.view,this.entitledToDeleteConditionalRelease=e.adaptiveRelease.delete):this.loadAdaptiveReleaseEntitlements()}else this.entitlementService.hasCourseEntitlement(o.e.ViewAsDesigner,this.scope.content.courseId).then(e=>{this.entitledToViewDesigner=e}),this.loadAdaptiveReleaseEntitlements();t.find(".item-visibility-selector, .item-visibility-selector a").on("keydown",e=>{e.keyCode===r.f&&e.preventDefault()})}getIconSize(){return this.scope.hasMediumIcon?"medium":"small"}loadAdaptiveReleaseEntitlements(){const e=this.entitlementService.hasCourseEntitlement(o.i.ViewAdaptiveRelease,this.scope.content.courseId).then(e=>{this.entitledToViewConditionalRelease=e}),t=this.entitlementService.hasCourseEntitlement(o.i.DeleteAdaptiveRelease,this.scope.content.courseId).then(e=>{this.entitledToDeleteConditionalRelease=e});return this.$q.all([e,t])}onChange(){this.scope.onchangeFunc&&this.scope.onchangeFunc()}onBlur(){this.scope.onblurFunc&&this.scope.onblurFunc()}disableRestricted(){return!!this.scope.disableRestricted&&this.scope.disableRestricted()}onRestrictedSelected(){this.scope.onRestrictedSelectedFunc&&this.scope.onRestrictedSelectedFunc()}selectVisible(){this.visibilitySelected(g.ContentVisibility.Visible)}selectHidden(){this.visibilitySelected(g.ContentVisibility.Hidden)}selectConditionalRelease(){const e={contentId:this.contentId};this.ultraState.goPeekState(y.ContentRoutes.CONDITIONAL_RELEASE_PEEK_PANEL,e)}isEditable(){if(!this.isVisibilitySelectorMenuEmpty()){if(this.scope.content.canEdit())return!0;if(this.scope.content.canEditAvailability&&this.scope.content.canEditAvailability())return!0;if(!this.scope.content.id)return!0}return!1}validateChange(e){if(this.scope.validationFunc){const t=this.scope.validationFunc({visibility:e});return void 0===t||t}return!0}visibilitySelected(e){this.validateChange(e)&&this.confirmVisibilityChange().then(()=>{this.changeVisibility(e)})}confirmVisibilityChange(){var e,t,i,n;let s=null;return(null===(t=null===(e=this.scope.content)||void 0===e?void 0:e.isConditionalRelease)||void 0===t?void 0:t.call(e))&&!(null===(n=null===(i=this.scope.content)||void 0===i?void 0:i.hasOnlyForcedSequenceConditionalReleaseCriteria)||void 0===n?void 0:n.call(i))&&(s=m),s?this.bbLocalize.loadBundle("features/course/conditional-release/conditional-release").then(()=>this.$modal.open({template:s,scope:this.scope}).result):this.$q.resolve()}changeVisibility(e){this.scope.content&&this.scope.content.isConditionalRelease&&this.scope.content.isConditionalRelease()&&this.scope.content.conditionalReleaseAsync("DELETE"),this.scope.content.setVisibility(e),g.ContentVisibility.Restricted===e&&this.onRestrictedSelected(),this.onChange(),this.onBlur()}static getAdaptiveReleaseCriteria(e){return e&&e.rules?e.rules.map(e=>e.criteria).reduce((e,t)=>t.concat(e),[]):null}canDeleteCriteria(e){switch(e.type){case"Grade_Range":case"Grade_Range_Percentage":return this.scope.content.permissions.adaptiveRelease.criteria.performance.delete;case"Date_Range":return this.scope.content.permissions.adaptiveRelease.criteria.dates.delete;default:return this.scope.content.permissions.adaptiveRelease.delete}}canDeleteAllCriteria(e){return e.every(e=>this.canDeleteCriteria(e))}canShowVisibleHidden(){const e=f.getAdaptiveReleaseCriteria(this.scope.content.adaptiveReleaseRules);return this.entitledToDeleteConditionalRelease||!e||this.canDeleteAllCriteria(e)}showVisibleHiddenMenuOptions(){const e=this.scope.content.isConditionalRelease&&this.scope.content.isConditionalRelease();return!e||e&&this.canShowVisibleHidden()}showConditionalReleaseMenuOption(){return!this.disableRestricted()&&this.scope.content.id&&this.entitledToViewConditionalRelease}isVisibilitySelectorMenuEmpty(){return!this.showVisibleHiddenMenuOptions()&&!this.showConditionalReleaseMenuOption()}isVisibilitySelectorEnabled(){return!this.scope.isVisibilitySelectorEnabled||this.scope.isVisibilitySelectorEnabled()}useNativeSelect(){return!a.a.detect().desktop()}initVisibilityOptions(){this.bbLocalize.loadBundle("components/directives/content-visibility").then(()=>{this.visibilityOptions=[{show:!0,visibility:g.ContentVisibility.Visible,text:this.bbLocalize.translateSync({locale:this.bbLocalize.getLocale(this.scope),key:this.visibleOptionKey}),onSelect:()=>{this.selectVisible()}},{show:!0,visibility:g.ContentVisibility.Hidden,text:this.bbLocalize.translateSync({locale:this.bbLocalize.getLocale(this.scope),key:this.hiddenOptionKey}),onSelect:()=>{this.selectHidden()}},{show:this.showConditionalReleaseMenuOption(),visibility:g.ContentVisibility.Restricted,text:this.bbLocalize.translateSync({locale:this.bbLocalize.getLocale(this.scope),key:k}),onSelect:()=>{this.selectConditionalRelease()}}],this.selectedVisibilityOption=s.find(this.visibilityOptions,e=>e.visibility===this.scope.content.getVisibilityAsStudent())})}isVisibleToStudents(){var e,t,i,n;return(null===(t=null===(e=this.scope.content)||void 0===e?void 0:e.hasOnlyForcedSequenceConditionalReleaseCriteria)||void 0===t?void 0:t.call(e))?this.scope.content.isAvailable:!!(null===(n=null===(i=this.scope.content)||void 0===i?void 0:i.isVisibleToStudents)||void 0===n?void 0:n.call(i))}isHiddenFromStudents(){var e,t,i,n;return(null===(t=null===(e=this.scope.content)||void 0===e?void 0:e.hasOnlyForcedSequenceConditionalReleaseCriteria)||void 0===t?void 0:t.call(e))?!this.scope.content.isAvailable:!!(null===(n=null===(i=this.scope.content)||void 0===i?void 0:i.isHiddenFromStudents)||void 0===n?void 0:n.call(i))}isConditionalRelease(){var e,t;return!this.isVisibleToStudents()&&!this.isHiddenFromStudents()&&!!(null===(t=null===(e=this.scope.content)||void 0===e?void 0:e.isConditionalRelease)||void 0===t?void 0:t.call(e))}}f.$inject=["scope","element","$q","$ngRedux",c.serviceName,l.b,h.d,"$modal",v.e];class S{constructor(e){this.$injector=e,this.restrict="E",this.scope={content:"=",onblurFunc:"&?",onchangeFunc:"&?",onRestrictedSelectedFunc:"&?",openPanelOnRestricted:"&?",disableRestricted:"&?",validationFunc:"&?",isVisibilitySelectorEnabled:"&?",hasMediumIcon:"=?"},this.template=p,this.link=(e,t)=>{e.contentVisibilitySelector=this.$injector.instantiate(f,{scope:e,element:t})}}}S.$inject=["$injector"],n.module(w,[u.a,v.b]).directive("bbContentVisibilitySelector",["$injector",e=>e.instantiate(S)])},ueuW:function(e,t,i){var n=i("ziER"),s=i("5JeM"),o=new n({id:"icon-small-lock",use:"icon-small-lock-usage",viewBox:"0 0 16 16",content:'<symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="icon-small-lock"><path d="M3 8h10v7H3V8zM5 8V4c0-1.5 1-3 3-3m0 0c.5 0-.5 0 0 0zm0 0c2 0 3 1.5 3 3v4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></symbol>'});s.add(o);e.exports=o},umYj:function(e,t){e.exports='<bb-modal id="remove-conditional-availability-confirmation-modal" \n          class="notification js-dismiss-modal" \n          role="alertdialog" \n          bb-translate-attrs="{\'aria-label\': \'course.conditionalRelease.removeConditionalAvailability.title\'}"\n          modal-title-key="course.conditionalRelease.removeConditionalAvailability.title"\n          analytics-id-tag-prefix="course.conditionalRelease.removeConditionalAvailability">\n  <div name="modal-contents">\n    <p bb-translate>\n      course.conditionalRelease.removeConditionalAvailability.instructions\n    </p>\n  </div>\n  <button name="modal-footer-button-primary" \n          class="button js-primary-button" \n          ng-click="$parent.$close()" \n          bb-translate\n          analytics-id="global.continue">\n    global.continue\n  </button>\n  <button name="modal-footer-button-secondary" \n          class="button button--secondary js-secondary-button" \n          ng-click="$parent.$dismiss()" \n          bb-translate\n          analytics-id="global.cancel">\n    global.cancel\n  </button>\n</bb-modal>\n'},vgq2:function(e,t,i){var n=i("ziER"),s=i("5JeM"),o=new n({id:"icon-medium-discussion",use:"icon-medium-discussion-usage",viewBox:"0 0 24 24",content:'<symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="icon-medium-discussion"><path d="M8 21.4025a10.4446 10.4446 0 01-1.75-.8072L1 22l1.4318-5.2034C1.5217 15.2417 1 13.4318 1 11.5 1 5.701 5.701 1 11.5 1c4.5718 0 8.4611 2.9218 9.9025 7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /><path d="M9 16c0 3.866 3.134 7 7 7 1.3878 0 2.6812-.3803 3.7692-1.0769L23 23l-1.0769-3.2308C22.6197 18.6812 23 17.3878 23 16c0-3.866-3.134-7-7-7s-7 3.134-7 7z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /><circle cx="13" cy="16" r=".5" /><circle cx="16" cy="16" r=".5" /><circle cx="19" cy="16" r=".5" /></symbol>'});s.add(o);e.exports=o},xX6i:function(e,t,i){var n=i("ziER"),s=i("5JeM"),o=new n({id:"icon-medium-time",use:"icon-medium-time-usage",viewBox:"0 0 24 24",content:'<symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="icon-medium-time"><circle cx="12" cy="12" r="11" stroke-width="2" /><path d="M12 5v7l4 4M10 14l-3 3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></symbol>'});s.add(o);e.exports=o}}]);