(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{GZxO:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=l(n("ERkP")),i=l(n("aWzz")),s=l(n("O94r")),d=l(n("E/ZA")),c=n("REHy");function l(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}n("SSOa");var f=300;t.default=function(e){var t=function(t){function n(){var e,t,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);for(var a=arguments.length,i=Array(a),s=0;s<a;s++)i[s]=arguments[s];return t=o=u(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(i))),o.previewWidth=null,o.resetPreviewWidth=(0,d.default)((function(){o.previewWidth=null}),f),o.havePropsChanged=function(e){var t=r({},(0,c.omit)(e,"state","key","actions","onReorderItem","index")),n=!0,a=!1,i=void 0;try{for(var s,d=Object.keys(t)[Symbol.iterator]();!(n=(s=d.next()).done);n=!0){var l=s.value;if(t[l]!==o.props[l])return!0}}catch(e){a=!0,i=e}finally{try{!n&&d.return&&d.return()}finally{if(a)throw i}}return!1},o.onSetImageDragStart=function(e){var t=o.props,n=t.index,r=t.actions;e.dataTransfer.setDragImage&&e.dataTransfer.setDragImage(document.getElementsByClassName("dnd-drag-placeholder")[0],0,0),e.dataTransfer.setData("text",""),r.onDragStart(e,n)},o.onTouchStart=function(e){e.preventDefault();var t=o.props,n=t.index;t.actions.onDragStart(e,n)},o.onClick=function(e){e.stopPropagation();var t=o.props,n=t.index,r=t.actions,a=t.preview;r.onClickDrag(e,n,a)},o.onEnter=function(e){"Enter"!==e.key&&13!==e.keyCode||o.onClick(e)},o.onSpace=function(e){"Space"!==e.key&&32!==e.keyCode||o.onClick(e)},o.onDropNextIndex=function(e){var t=o.props,n=t.index;t.actions.onDrop(e,n+1)},o.onDragOverNextIndex=function(e){var t=o.props,n=t.index;t.actions.onDragOver(e,n+1)},o.onDragLeave=function(e){o.props.actions.onDragLeave(e)},o.onDragOver=function(e){var t=o.props,n=t.index;t.actions.onDragOver(e,n)},o.onDrop=function(e){var t=o.props,n=t.index;t.actions.onDrop(e,n)},u(o,t)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,t),o(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.actions;window.addEventListener("resize",this.resetPreviewWidth),this.dragPointElem&&(this.dragPointElem.addEventListener("touchstart",this.onTouchStart),this.dragPointElem.addEventListener("touchend",t.onTouchDrop),this.dragPointElem.addEventListener("drag",(function(n){t.onDrag(n,e.dragPreviewRef)})),this.dragPointElem.addEventListener("dragstart",this.onSetImageDragStart),this.dragPointElem.addEventListener("dragend",t.onDragEnd),this.dragPointElem.addEventListener("touchmove",(function(n){t.onTouchMove(n,e.dragPreviewRef)})),this.dragPointElem.addEventListener("click",this.onClick),this.dragPointElem.addEventListener("keyup",this.onEnter),this.dragPointElem.addEventListener("keyup",this.onSpace),this.itemRef.addEventListener("keydown",t.onKeyChangeOrder))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resetPreviewWidth)}},{key:"shouldComponentUpdate",value:function(e){var t=this.props,n=t.state,r=t.index;return e.state.isDragging!==n.isDragging||(e.state.isKeyboardMoving!==n.isKeyboardMoving||(n.isDragging?e.state.sourceIndex===r||n.sourceIndex===r||e.state.lastOverIndex===r||-1===e.state.overIndex||e.state.overIndex!==n.overIndex:!(!n.isKeyboardMoving||r+1!==n.keyInsertIndex&&r+1!==e.state.keyInsertIndex&&0!==r)||this.havePropsChanged(e)))}},{key:"componentDidUpdate",value:function(){this.dragPointElem&&(this.dragPointElem.removeEventListener("touchstart",this.onTouchStart),this.dragPointElem.addEventListener("touchstart",this.onTouchStart),this.dragPointElem.removeEventListener("dragstart",this.onSetImageDragStart),this.dragPointElem.addEventListener("dragstart",this.onSetImageDragStart),this.dragPointElem.removeEventListener("click",this.onClick),this.dragPointElem.addEventListener("click",this.onClick),this.dragPointElem.removeEventListener("keyup",this.onEnter),this.dragPointElem.addEventListener("keyup",this.onEnter),this.dragPointElem.removeEventListener("keyup",this.onSpace),this.dragPointElem.addEventListener("keyup",this.onSpace)),this.firstKeyInsertPlaceHolderRef&&this.firstKeyInsertPlaceHolderRef.className.includes("show")?this.firstKeyInsertPlaceHolderRef.focus():this.downKeyInsertPlaceHolderRef.className.includes("show")?this.downKeyInsertPlaceHolderRef.focus():this.itemRef.className.includes("is-keyboard-moving")&&this.itemRef.className.includes("should-on-focus")&&this.itemRef.focus(),this.dragPreviewRef&&this.dragPreviewRef.style&&this.dragPreviewRef.className&&this.dragPreviewRef.className.includes("show")&&(null==this.previewWidth&&(this.previewWidth=getComputedStyle(this.itemRef).getPropertyValue("width")),this.dragPreviewRef.style.width=this.previewWidth)}},{key:"render",value:function(){var t=this,n=this.props,o=n.state,i=n.index,d=n.actions,l=n.preview,u=(0,s.default)({"module-section":!0,"is-dragging":o.isDragging&&o.sourceIndex===i,"is-keyboard-moving":o.isKeyboardMoving&&i===o.sourceIndex,"should-on-focus":o.isKeyboardMoving&&i===o.keyInsertIndex}),f=(0,s.default)({"drop-up-half":!0,show:o.isDragging&&i!==o.sourceIndex}),g=(0,s.default)({"drop-down-half":!0,show:o.isDragging&&i!==o.sourceIndex}),v=(0,s.default)({"key-insert-placeholder":!0,show:o.isKeyboardMoving&&0===o.keyInsertIndex&&0!==o.sourceIndex}),p=(0,s.default)({"insert-placeholder":!0,"first-insert-placeholder":!0,show:o.isDragging&&0===o.overIndex}),h=(0,s.default)({"insert-placeholder":!0,show:o.isDragging&&i===o.overIndex-1}),y=(0,s.default)({"drag-preview-item":!0,show:o.isDragging&&i===o.sourceIndex}),m=(0,s.default)({"key-insert-placeholder":!0,show:o.isKeyboardMoving&&(o.sourceIndex>o.keyInsertIndex?i===o.keyInsertIndex-1:i===o.keyInsertIndex)&&i!==o.sourceIndex});return a.default.createElement("div",{className:u,ref:function(e){t.itemRef=e},tabIndex:"-1"},0===i?a.default.createElement("div",{className:p}):"",0===i?a.default.createElement("div",{tabIndex:"-1",className:v,onKeyDown:d.onKeyChangeOrder,ref:function(e){t.firstKeyInsertPlaceHolderRef=e}},o.curPreview):"",a.default.createElement("div",{className:"item-container"},a.default.createElement(e,r({},(0,c.omit)(this.props,"state","key","actions","onReorderItem"),{dragPointRef:function(e){t.dragPointElem=e}}))),a.default.createElement("div",{className:h}),a.default.createElement("div",{className:g,"data-position":i+1,onDrop:this.onDropNextIndex,onDragOver:this.onDragOverNextIndex,onDragLeave:this.onDragLeave}),a.default.createElement("div",{className:f,"data-position":i,onDrop:this.onDrop,onDragOver:this.onDragOver,onDragLeave:this.onDragLeave}),a.default.createElement("div",{className:y,ref:function(e){t.dragPreviewRef=e}},l),a.default.createElement("div",{tabIndex:"-1",className:m,onKeyDown:d.onKeyChangeOrder,ref:function(e){t.downKeyInsertPlaceHolderRef=e}},o.curPreview))}}]),n}(a.default.Component);return t.propTypes={index:i.default.number.isRequired,actions:i.default.object.isRequired,state:i.default.object.isRequired,preview:i.default.element.isRequired},t.displayName="DragNDropItem("+(0,c.getDisplayName)(e)+")",t}},REHy:function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0});t.moveItem=function(e,t,n){var o=[].concat(r(e.slice(0,n)),r(e.slice(n+1)));return[].concat(r(o.slice(0,t)),[e[n]],r(o.slice(t)))},t.omit=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Object.keys(e).reduce((function(t,r){return-1===n.indexOf(r)&&(t[r]=e[r]),t}),{})},t.getDisplayName=function(e){return e.displayName||e.name||"Component"},t.isEdge=function(){return document.documentMode||/Edge/.test(navigator.userAgent)}},SSOa:function(e,t,n){"use strict";n.r(t)},ULr6:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={ESC:27,ENTER:13,SPACE:32,ARROW_UP:38,ARROW_DOWN:40}},gQ44:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=c(n("ERkP")),i=c(n("aWzz")),s=c(n("ULr6")),d=n("REHy");function c(e){return e&&e.__esModule?e:{default:e}}var l=150,u=10;t.default=function(e){var t=function(t){function n(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={isDragging:!1,sourceIndex:-1,lastOverIndex:-1,overIndex:-1,isKeyboardMoving:!1,curPreview:"",keyInsertIndex:-1},t.setClientY=function(e){t.clientY=e.clientY},t.leaveKeyboardMoving=function(){t.state.isKeyboardMoving&&t.setState({isDragging:!1,isKeyboardMoving:!1,sourceIndex:-1,keyInsertIndex:-1,overIndex:-1})},t.onDrag=function(e,n){n&&n.style&&(t.props.boundingElementId&&!(0,d.isEdge)()?n.style.top=t.clientY-document.getElementById(t.props.boundingElementId).getBoundingClientRect().top+"px":n.style.top=t.clientY+"px"),t.clientY<l?t.scrollContainer?t.scrollContainer.scrollTop-=u:scrollBy(0,0-u):innerHeight-t.clientY<l&&(t.scrollContainer?t.scrollContainer.scrollTop+=u:scrollBy(0,u))},t.onDragStart=function(e,n){e.stopPropagation(),setTimeout((function(){t.setState({isDragging:!0,isKeyboardMoving:!1,sourceIndex:n,overIndex:-1})}))},t.onDragEnd=function(e){t.containerRef&&(e.preventDefault(),t.setState({isDragging:!1,isKeyboardMoving:!1,sourceIndex:-1,overIndex:-1}))},t.onDrop=function(e,n){var r=t.props.items;e.preventDefault();var o=t.state.sourceIndex>=n?n:n-1,a=(0,d.moveItem)(r,o,t.state.sourceIndex),i=r[t.state.sourceIndex];t.props.onReorderItem(a,i)},t.onDragOver=function(e,n){e.preventDefault();var r=n;n!==t.state.sourceIndex&&n!==t.state.sourceIndex+1||(r=-1),t.setState({lastOverIndex:parseInt(e.target.dataset.position,10),overIndex:r})},t.onDragLeave=function(e){e.preventDefault();var n=parseInt(e.target.dataset.position,10);t.state.lastOverIndex===n||t.state.sourceIndex===n&&t.state.sourceIndex+1===n||t.setState({lastOverIndex:n,overIndex:-1})},t.onTouchMove=function(e,n){var r=e.touches[0],o=document.elementFromPoint(r.clientX,r.clientY);if(o&&o.dataset&&o.dataset.position){var a=parseInt(o.dataset.position,10),i=a;a!==t.state.sourceIndex&&a!==t.state.sourceIndex+1||(i=-1),t.setState({lastOverIndex:a,overIndex:i})}else t.onDragLeave(e);n&&n.style&&(n.style.top=r.clientY+"px"),r.clientY<l?t.scrollContainer?t.scrollContainer.scrollTop-=u:scrollBy(0,0-u):innerHeight-r.clientY<l&&(t.scrollContainer?t.scrollContainer.scrollTop+=u:scrollBy(0,u))},t.onTouchDrop=function(e){var n=e.changedTouches[0],r=document.elementFromPoint(n.clientX,n.clientY);r&&r.dataset&&r.dataset.position&&t.onDrop(e,parseInt(r.dataset.position,10)),t.onDragEnd(e)},t.onClickDrag=function(e,n,r){e.stopPropagation(),t.setState({isDragging:!1,isKeyboardMoving:!0,sourceIndex:n,keyInsertIndex:n,curPreview:r})},t.onKeyChangeOrder=function(e){var n=t.props.items;if(t.state.isKeyboardMoving)switch(e.preventDefault(),e.stopPropagation(),e.keyCode){case s.default.ESC:t.leaveKeyboardMoving();break;case s.default.SPACE:case s.default.ENTER:var r=(0,d.moveItem)(n,t.state.keyInsertIndex,t.state.sourceIndex),o=n[t.state.sourceIndex];t.props.onReorderItem(r,o),t.setState({isKeyboardMoving:!1,sourceIndex:-1,keyInsertIndex:-1,curPreview:""});break;case s.default.ARROW_UP:t.setState((function(e){return{keyInsertIndex:e.keyInsertIndex>0?e.keyInsertIndex-1:0}}));break;case s.default.ARROW_DOWN:t.setState((function(e){return{keyInsertIndex:e.keyInsertIndex<n.length-2?e.keyInsertIndex+1:n.length-1}}))}},t.actions={onDrag:t.onDrag,onDragStart:t.onDragStart,onDragEnd:t.onDragEnd,leaveKeyboardMoving:t.leaveKeyboardMoving,onDrop:t.onDrop,onDragOver:t.onDragOver,onDragLeave:t.onDragLeave,onTouchMove:t.onTouchMove,onTouchDrop:t.onTouchDrop,onClickDrag:t.onClickDrag,onKeyChangeOrder:t.onKeyChangeOrder},t.clientY=0,t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,t),o(n,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("dragover",this.setClientY),window.addEventListener("click",this.leaveKeyboardMoving),setTimeout((function(){e.scrollContainer=document.getElementById(e.props.scrollContainerId)}),0)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("dragover",this.setClientY),window.removeEventListener("click",this.leaveKeyboardMoving)}},{key:"shouldComponentUpdate",value:function(e,t){return t.isDragging!==this.state.isDragging||(t.overIndex!==this.state.overIndex||t.lastOverIndex!==this.state.lastOverIndex||!this.state.isDragging)}},{key:"render",value:function(){var t=this;return a.default.createElement("div",{ref:function(e){t.containerRef=e}},a.default.createElement("div",{className:"dnd-drag-placeholder"}),a.default.createElement(e,r({},this.props,{state:this.state,actions:this.actions,keyInsertIndex:this.state.keyInsertIndex,isKeyboardMoving:this.state.isKeyboardMoving})))}}]),n}(a.default.Component);return t.propTypes={items:i.default.arrayOf(i.default.object).isRequired,onReorderItem:i.default.func.isRequired,boundingElementId:i.default.string,scrollContainerId:i.default.string},t.displayName="DragNDropContainer("+(0,d.getDisplayName)(e)+")",t}},nBlB:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DragNDropItem=t.DragNDropContainer=void 0;var r=a(n("gQ44")),o=a(n("GZxO"));function a(e){return e&&e.__esModule?e:{default:e}}t.DragNDropContainer=r.default,t.DragNDropItem=o.default}}]);