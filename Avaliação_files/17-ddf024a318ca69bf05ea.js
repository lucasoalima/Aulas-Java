(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"6TNA":function(e,a){e.exports='<span class="schema-grade">{{displayGrade.fullDisplayGrade}}</span>\n'},O3Pz:function(e,a){e.exports='<div class="grade-callout-wrapper">\n  <div class="grade-callout readonly {{displayGrade.getCourseColorClass()}}"\n       ng-class="{ \'pending\': displayGrade.attempt.isNeedsGrading() }"\n       bb-load-bundle="components/directives/grade/display-grade"\n       bb-click-to-invoke-child="a.bb-click-grade-target">\n    <span class="value" bb-translate>{{displayGrade.attemptStatus}}</span>\n  </div>\n</div>\n'},S6sW:function(e,a){e.exports='<ng-switch on="displayGrade.shouldShowPointsPossible()">\n  <span ng-switch-when="true" ng-bind-html="displayGrade.fullDisplayGrade"></span>\n  <span ng-switch-default><strong>{{displayGrade.fullDisplayGrade}}</strong></span>\n</ng-switch>'},"cH+F":function(e,a){e.exports='<div class="grade-callout-wrapper">\n  <div class="grade-callout readonly {{displayGrade.colorClass || \'na\'}} overall-grade"\n       bb-load-bundle="components/directives/grade/display-grade"\n       bb-click-to-invoke-child="a.bb-click-grade-target"\n       ng-class="{\'defaultCursor\': displayGrade.cursorDefault}">\n    <span ng-if="!displayGrade.noGradeToDisplay()" class="sr-only" bb-translate>{{displayGrade.gradeDisplayItem.perfCodeDesc || translateKey}}</span>\n    <span ng-if="!overallGradePeekSref" class="value">{{displayGrade.fullDisplayGrade}}</span>\n    <a class="overall-grade value" \n       ng-if="overallGradePeekSref" \n       bb-peek-sref="{{overallGradePeekSref}}"\n       analytics-id="components.directives.grade.display-grade.overallGrade.link">\n      {{displayGrade.fullDisplayGrade}}\n    </a>  \n  </div>\n</div>\n'},dJ97:function(e,a,s){"use strict";s("w0/N");var i=s("Llzl"),l=s("nbDY"),t=s.n(l),r=s("Fvsw"),d=s("yMoE"),n=s("X/qj"),o=s("oi1r"),p=s("o5Lu"),c=s("0JpG"),u=s("fYJU"),h=s("zGdY"),y=s("O3Pz"),g=s("cH+F"),m=s("6TNA"),G=s("S6sW"),b=s("pHHL");s.d(a,"a",(function(){return v}));const v="ultra.grade.display";class D extends t.a{constructor(e,a){super(e),this.template=a}getTemplateHtml(){return this.template.template}}D.AttemptStatus=new D("AttemptStatus",{template:y}),D.FinalBase=new D("FinalBase",{template:g}),D.Column=new D("Column",{template:m}),D.Course=new D("Course",{template:G}),D.GradeColor=new D("GradeColor",{template:b});class S{constructor(e,a,s,l,t,r,n,o,p,c){this.scope=e,this.attrs=a,this.$q=s,this.$injector=l,this.gradebookPermissionService=r,this.localize=n,this.context=o,this.schemaService=p,this.contextUser=c,this.fullDisplayGrade=S.NO_GRADE_DISPLAY,this.bundlePromise=n.loadBundle("components/directives/grade/display-grade"),this.courseColorClass=e.courseColorClass,this.cursorPointer=e.cursorPointer&&e.cursorPointer(),this.cursorDefault=e.cursorDefault&&e.cursorDefault(),this.isStudent=c.userModel.isStudent(),this.isStudent||r.canViewGrades(this.scope.course&&this.scope.course().id)?(this.scope.$watch("::column",e=>{if(e){const a=e=>{let a;const s=this.scope.$watch("gradeDetail",i=>{i&&(this.schemaGrade=t.getGradeToDisplay(i.displayGrade,this.scope,this.schema.scaleType),this.setFullDisplayGrade(),(D.GradeColor.isEqualTo(this.scope.gradeType)||D.FinalBase.isEqualTo(this.scope.gradeType))&&(this.gradeDisplayItem=l.instantiate(d.a,{gradeDetail:i,scope:this.scope}),this.scope.$watch("::column",a=>{a&&this.gradeDisplayItem.init(a,e).then(()=>{this.gradeDisplayItem.displayGrade=this.scope.showNotGraded&&this.scope.showNotGraded()?null:i.displayGrade,this.gradeDisplayItem.displayValue&&(this.colorClass=this.gradeDisplayItem.getGradeColor())})})),s(),a())});a=this.scope.$watch("summary",e=>{this.colorClass="na",e&&(this.schemaGrade=e.averageGradeForStudentsSchemaValue,this.schemaGradeValue=e.averageGradeForStudents,this.setFullDisplayGrade(),D.FinalBase.isEqualTo(this.scope.gradeType)&&!i.isUndefined(e.averageGradeForStudents)&&(this.colorClass=t.getPercentileColor(e.averageGradeForStudents)),s())},!0)};this.scope.schema?(this.schema=this.scope.schema,a(this.scope.schema)):p.loadGradeSchema(e).then(e=>{this.schema=e,a()})}}),D.AttemptStatus.isEqualTo(this.scope.displayType)&&(this.courseColorClass="na",this.attempt?this.attempt.isNeedsGrading()?this.attemptStatus="components.directives.grade.display-grade.pending-grade":this.attempt.isInProgress()&&(this.attemptStatus="components.directives.grade.display-grade.NA"):this.attemptStatus="components.directives.grade.display-grade.NA")):(this.fullDisplayGrade=this.attemptStatus=S.NO_GRADE_DISPLAY,this.colorClass="na")}setFullDisplayGrade(){var e;let a;if(this.schema&&this.schema.scaleType&&(this.schema.scaleType===h.SchemaScaleType.Tabular||this.schema.scaleType===h.SchemaScaleType.Text||this.schema.scaleType===h.SchemaScaleType.Complete))this.fullDisplayGrade=this.scope.showNotGraded&&this.scope.showNotGraded()?S.NO_GRADE_DISPLAY:this.schemaGrade||S.NO_GRADE_DISPLAY;else if(a=this.scope.showNotGraded&&this.scope.showNotGraded()?S.NO_GRADE_DISPLAY:this.getSchemaGrade(),this.shouldShowPointsPossible()){let e="components.directives.grade.display-grade.";e+=D.Course.isEqualTo(this.scope.gradeType)?"course-score":"score",this.bundlePromise.then(()=>{this.fullDisplayGrade=this.localize.translateSync({locale:this.localize.getLocale(this.scope),key:e,params:{grade:a,possible:this.scope.gradeDetail&&this.scope.gradeDetail.pointsPossible||this.scope.column.possible},noWrap:!0,noEscape:!0})})}else(null===(e=this.schema)||void 0===e?void 0:e.scaleType)===h.SchemaScaleType.Percent&&a!==S.NO_GRADE_DISPLAY?this.bundlePromise.then(()=>{this.fullDisplayGrade=this.localize.translateSync({locale:this.localize.getLocale(this.scope),key:"components.directives.grade.display-grade.percent",params:{grade:a},noWrap:!0,noEscape:!0})}):this.fullDisplayGrade=a}get attempt(){return this.scope.attempt&&this.scope.attempt()||this.scope.gradeDetail&&(this.scope.gradeDetail.ui.groupAttempt||this.scope.gradeDetail.ui.attempt)}convertGrade(e){try{const a=e.replace(/[^0-9.,]/g,"");return this.localize.parseNumberSync(a)}catch(e){return null}}getSchemaGrade(){let e;return null!=(e=null==this.schemaGradeValue?this.convertGrade(this.schemaGrade):this.schemaGradeValue)&&this.localize.formatNumberSync(e,this.scope,{maximumFractionDigits:p.d.DEFAULT_GRADEBOOK_SETTINGS_AFTER_DECIMAL})||S.NO_GRADE_DISPLAY}shouldShowPointsPossible(){var e;return(null===(e=this.schema)||void 0===e?void 0:e.scaleType)===h.SchemaScaleType.Score&&(h.CalculationType.NonCalculated===this.scope.column.calculationType||this.scope.gradeDetail&&this.scope.gradeDetail.pointsPossible>0)}getCourseColorClass(){return this.courseColorClass}noGradeToDisplay(){return this.fullDisplayGrade===S.NO_GRADE_DISPLAY}getNoGradeDisplay(){return S.NO_GRADE_DISPLAY}shouldShowRubricButton(){return this.scope.showRubricButton&&this.scope.showRubricButton()&&this.scope.column.hasRubricAssociation&&this.scope.column.hasRubricAssociation()}shouldShowRubricDiv(){return this.scope.showRubricDiv&&this.scope.showRubricDiv()&&this.scope.column.hasRubricAssociation&&this.scope.column.hasRubricAssociation()}shouldShowRubricEvaluation(){return this.scope.column.hasRubricAssociation&&this.scope.column.hasRubricAssociation()&&null!=this.attempt&&this.attempt.isCompleted()&&!this.scope.gradeDetail.isOverrideGrade()}}S.NO_GRADE_DISPLAY="--",S.$inject=["scope","attrs","$q","$injector",p.i,n.b,c.serviceName,r.b,o.b,u.b];class f{constructor(e,a){this.$injector=e,this.$compile=a,this.restrict="E",this.scope={attempt:"&?",gradeDetail:"=",summary:"=",column:"=",schema:"=?",displayType:"@",finalGrade:"&?",translateKey:"@",courseColorClass:"=",isGroupGradeMultiple:"&?",showNotGraded:"&?",overallGradePeekSref:"@?",showRubricButton:"&?",showRubricDiv:"&?",cursorPointer:"&?",cursorDefault:"&?",course:"&?"},this.link=(e,a,s)=>{e.displayGrade=this.$injector.instantiate(S,{scope:e,attrs:s}),e.gradeType=D.parse(e.displayType)||D.Column,a.append(this.$compile(e.gradeType.getTemplateHtml())(e))}}}f.$inject=["$injector","$compile"],i.module(v,[p.h,n.a]).directive("bbDisplayGrade",["$injector",e=>e.instantiate(f)])},pHHL:function(e,a){e.exports='<div class="grade-color">\n  <div ng-if="!displayGrade.shouldShowRubricButton() && !displayGrade.shouldShowRubricDiv()">\n    <div ng-if="!(isGroupGradeMultiple() && !showNotGraded())"\n         ng-class="{ \'show-total\': displayGrade.gradeDisplayItem.shouldShowTotalPoints(),\n                     \'final-grade\': finalGrade(),\n                     \'na\': displayGrade.gradeDisplayItem.displayValue == null,\n                     \'cursor-pointer\': displayGrade.cursorPointer,\n                     \'defaultCursor\': displayGrade.cursorDefault}"\n         class="wrapping-input-style {{displayGrade.colorClass}}"\n         ready="{{::displayGrade.fullDisplayGrade && !displayGrade.noGradeToDisplay() || undefined}}">\n      <ng-switch on="displayGrade.schema.scaleType">\n        <span ng-switch-default>\n          <span ng-if="displayGrade.fullDisplayGrade != null && !overallGradePeekSref" class="grade-input-display ready" bb-translate-attrs="{ title: \'{{displayGrade.gradeDisplayItem.perfCodeDesc || translateKey}}\'}">{{displayGrade.fullDisplayGrade}}</span>\n          <a ng-if="displayGrade.fullDisplayGrade != null && overallGradePeekSref" \n             class="grade-input-display ready" \n             bb-peek-sref="{{overallGradePeekSref}}" \n             bb-translate-attrs="{ title: \'{{displayGrade.gradeDisplayItem.perfCodeDesc || translateKey}}\'}"\n             analytics-id="components.directives.grade.display-grade.scale.fullDisplayGrade.link">\n            {{displayGrade.fullDisplayGrade}}\n          </a>\n          <span ng-if="displayGrade.fullDisplayGrade == null && !overallGradePeekSref" class="grade-input-display" bb-translate-attrs="{ title: \'{{displayGrade.gradeDisplayItem.perfCodeDesc || translateKey}}\'}">{{::displayGrade.getNoGradeDisplay()}}</span>\n          <a ng-if="displayGrade.fullDisplayGrade == null && overallGradePeekSref" \n             class="grade-input-display" \n             bb-peek-sref="{{overallGradePeekSref}}" \n             bb-translate-attrs="{ title: \'{{displayGrade.gradeDisplayItem.perfCodeDesc || translateKey}}\'}"\n             analytics-id="components.directives.grade.display-grade.scale.getNoGradeDisplay.link">\n            {{::displayGrade.getNoGradeDisplay()}}\n          </a>\n        </span>\n        <span ng-switch-when="SCORE">\n          \x3c!-- Accommodate for hiding of points possible in small format --\x3e\n          <span ng-if="displayGrade.gradeDisplayItem.displayValue != null && !overallGradePeekSref" class="grade-input-display ready">{{displayGrade.gradeDisplayItem.displayValue}}</span>\n          <a ng-if="displayGrade.gradeDisplayItem.displayValue != null && overallGradePeekSref" \n             class="grade-input-display ready" \n             bb-peek-sref="{{overallGradePeekSref}}"\n             analytics-id="components.directives.grade.display-grade.score.fullDisplayGrade.link">\n            {{displayGrade.gradeDisplayItem.displayValue}}\n          </a>\n          <span ng-if="displayGrade.gradeDisplayItem.displayValue == null && !overallGradePeekSref" class="grade-input-display">{{::displayGrade.getNoGradeDisplay()}}</span>\n          <a ng-if="displayGrade.gradeDisplayItem.displayValue == null && overallGradePeekSref" \n             class="grade-input-display" \n             bb-peek-sref="{{overallGradePeekSref}}"\n             analytics-id="components.directives.grade.display-grade.score.getNoGradeDisplay.link">\n            {{::displayGrade.getNoGradeDisplay()}}\n          </a>\n          <span ng-if="displayGrade.shouldShowPointsPossible()" class="points-text" bb-translate translate-values="{total: gradeDetail.pointsPossible || column.possible}">components.directives.grade.display-grade.points</span>\n        </span>\n      </ng-switch>\n    </div>\n    <div ng-if="isGroupGradeMultiple() && !showNotGraded()" class="wrapping-input-style is-multiple">\n      <div ng-if="overallGradePeekSref" class="group-multiple" bb-peek-sref="{{overallGradePeekSref}}" bb-translate>components.directives.grade.display-grade.multiple</div>\n      <div ng-if="!overallGradePeekSref" class="group-multiple" bb-translate>components.directives.grade.display-grade.multiple</div>\n    </div>\n  </div>\n  <div ng-if="displayGrade.shouldShowRubricButton()">\n    <a ng-if="!displayGrade.shouldShowRubricEvaluation()"\n       bb-peek-sref="rubric-view"\n       class="js-rubric-view wrapping-input-style clear cursor-pointer"\n       ng-class="displayGrade.colorClass"\n       analytics-id="components.directives.grade.display-grade.rubric.link">\n      <span>\n        <bb-svg-icon size="small" icon="rubric"></bb-svg-icon>\n        <span class="grade-input-display ready" ng-if="displayGrade.gradeDisplayItem.displayValue != null">{{displayGrade.gradeDisplayItem.displayValue}}&nbsp</span>\n        <span class="grade-input-display ready" ng-if="displayGrade.gradeDisplayItem.displayValue == null">{{::displayGrade.getNoGradeDisplay()}}</span>&nbsp;\n        <span ng-if="displayGrade.shouldShowPointsPossible()" class="points-text" bb-translate translate-values="{total: gradeDetail.pointsPossible || column.possible}">components.directives.grade.display-grade.points</span>\n      </span>\n    </a>\n    <a ng-if="displayGrade.shouldShowRubricEvaluation()"\n       bb-peek-sref="rubric-evaluation({groupId: displayGrade.attempt.groupId})"\n       class="js-rubric-evaluation wrapping-input-style clear cursor-pointer"\n       ng-class="displayGrade.colorClass"\n       analytics-id="components.directives.grade.display-grade.rubricEvaluation.link">\n      <span>\n        <bb-svg-icon size="small" icon="rubric"></bb-svg-icon>\n        <span class="grade-input-display ready" ng-if="displayGrade.gradeDisplayItem.displayValue != null">{{displayGrade.gradeDisplayItem.displayValue}}&nbsp</span>\n        <span class="grade-input-display ready" ng-if="displayGrade.gradeDisplayItem.displayValue == null">{{::displayGrade.getNoGradeDisplay()}}&nbsp</span>&nbsp;\n        <span ng-if="displayGrade.shouldShowPointsPossible()" class="points-text" bb-translate translate-values="{total: gradeDetail.pointsPossible || column.possible}">components.directives.grade.display-grade.points</span>\n      </span>\n    </a>\n  </div>\n  <div ng-if="displayGrade.shouldShowRubricDiv() && displayGrade.shouldShowRubricEvaluation()"\n       class="wrapping-input-style clear"\n       ng-class="displayGrade.colorClass">\n    <span>\n      <bb-svg-icon size="small" icon="rubric"></bb-svg-icon>\n      <span class="grade-input-display ready" ng-if="displayGrade.gradeDisplayItem.displayValue != null">{{displayGrade.gradeDisplayItem.displayValue}}</span>\n      <span class="grade-input-display ready" ng-if="displayGrade.gradeDisplayItem.displayValue == null">{{::displayGrade.getNoGradeDisplay()}}</span>&nbsp;\n      <span ng-if="displayGrade.shouldShowPointsPossible()" class="points-text" bb-translate translate-values="{total: gradeDetail.pointsPossible || column.possible}">components.directives.grade.display-grade.points</span>\n    </span>\n  </div>\n</div>'},"w0/N":function(e,a,s){var i=s("ziER"),l=s("5JeM"),t=new i({id:"icon-small-rubric",use:"icon-small-rubric-usage",viewBox:"0 0 16 16",content:'<symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="icon-small-rubric"><path d="M11 12h4v3h-4v-3zM4 12h4v3H4v-3zM1 12v3M1 5v3M11 5h4v3h-4V5zM4 5h4v3H4V5zM8 1H4M15 1h-4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></symbol>'});l.add(t);e.exports=t},yMoE:function(e,a,s){"use strict";s.d(a,"a",(function(){return r}));var i=s("oi1r"),l=s("o5Lu"),t=s("zGdY");class r{constructor(e,a,s,i,l){this.grade=e,this.$q=a,this.gradeDetail=s,this.scope=i,this.schemaService=l,this.wasValueErased=!1}init(e,a){this.column=e;const s=e=>{this.schema=e,this.scaleType=null==e?void 0:e.scaleType};return a?this.$q.when(s(a)):this.schemaService.loadGradeSchema(e).then(e=>{s(e)})}shouldShowTotalPoints(){var e;return null!=this._displayValue&&((null===(e=this.schema)||void 0===e?void 0:e.scaleType)===t.SchemaScaleType.Score&&!this.isDisplayValueTooLargeForTotalPoints())}isDisplayValueTooLargeForTotalPoints(){return this._displayValue&&this._displayValue.toString().length>l.g.DEFAULT_GRADEBOOK_SETTINGS_BEFORE_DECIMAL}set displayGrade(e){var a,s;if(e){if(this.displayValue=this.grade.getGradeToDisplay(e,this.scope,null===(a=this.schema)||void 0===a?void 0:a.scaleType),this._nonFormattedScore=e.score,this._perfCode=e.perfCode,this._perfCode)return this.perfCodeDesc=this._perfCode.description,void(this._parsedValue=this.grade.getGradeToDisplay({perfCode:this._perfCode},this.scope,t.SchemaScaleType.Score));switch(this.perfCodeDesc="",null===(s=this.schema)||void 0===s?void 0:s.scaleType){case t.SchemaScaleType.Tabular:{let e=null;if(this.column.externalGrade&&this.gradeDetail&&this.gradeDetail.isOverrideGrade()){const a=this.gradeDetail.pointsPossible||this.column.possible||100;e={score:this._nonFormattedScore&&this._nonFormattedScore*a/100}}else e={score:this._nonFormattedScore};this._parsedValue=this.grade.getGradeToDisplay(e,this.scope,t.SchemaScaleType.Score);break}case t.SchemaScaleType.Percent:{let e=null;if(this.column.externalGrade)e={score:this._nonFormattedScore};else{e={score:this._nonFormattedScore&&this._nonFormattedScore/100*this.column.possible}}this._parsedValue=this.grade.getGradeToDisplay(e,this.scope,t.SchemaScaleType.Score);break}case t.SchemaScaleType.Score:this._parsedValue=this.displayValue;break;case t.SchemaScaleType.Complete:this._parsedValue=this.grade.getGradeToDisplay({...e,grade:null},this.scope,this.schema.scaleType);break;case t.SchemaScaleType.Text:this._parsedValue=e.grade}}}get displayValue(){return this._displayValue}set displayValue(e){this.wasValueErased=this.grade.wasGradeCleared(this.displayValue,e),this._displayValue=e}get parsedValue(){return this._parsedValue}set parsedValue(e){this._parsedValue=e}hasPerfCode(){return!!this._perfCode}getGradeColor(){var e,a;return(null===(a=null===(e=this.gradeDetail)||void 0===e?void 0:e.displayGrade)||void 0===a?void 0:a.isOverride)&&this.column.externalGrade||this.scaleType===t.SchemaScaleType.Text?"gray":this.displayValue?this.scaleType!==t.SchemaScaleType.Percent?this.getGradeColorScoreSchema():this.grade.getPercentileColor(this._nonFormattedScore):void 0}getGradeColorScoreSchema(){const e=this.gradeDetail?this.gradeDetail.pointsPossible:this.column.possible;if(e>0){const a=this._nonFormattedScore/e*100;return this.grade.getPercentileColor(a)}return"na"}}r.$inject=[l.i,"$q","gradeDetail","scope",i.b]}}]);