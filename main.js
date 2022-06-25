(()=>{"use strict";var e=document.querySelector(".content"),t=e.querySelector(".profile__edit-button"),n=document.querySelector(".popup_type_profile-edit"),r=e.querySelector(".profile__avatar-overlay"),o=document.querySelector(".popup_type_avatar-edit").querySelector(".popup__input-container"),i=o.querySelector(".popup__input_type_avatar-link"),u=(e.querySelector(".profile__heading"),e.querySelector(".profile__subheading"),e.querySelector(".profile__avatar"),n.querySelector(".popup__input-container")),c=u.querySelector(".popup__input_type_name"),a=u.querySelector(".popup__input_type_job"),l=document.querySelector(".cards"),s=(document.querySelector(".cards__remove-button"),e.querySelector(".profile__add-button")),p=document.querySelector(".popup_type_new-place").querySelector(".popup__input-container"),f=p.querySelector(".popup__input_type_title"),h=p.querySelector(".popup__input_type_link"),_={formSelector:".popup__input-container",input:"popup__input",inputSelector:".popup__input",submitButtonSelector:".popup__submit-button",spanErrorSelector:".popup__input-error",inactiveButtonClass:"popup__submit-button_disabled",inputErrorClass:"popup__input_type_error"};function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var y=function(){function e(t,n,r,o,i){var u=t.data,c=t.userId,a=n.handleCardClick,l=r.handleDeleteCard,s=o.handleLikeClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=u.name,this._link=u.link,this._cardId=u._id,this._ownerId=u.owner._id,this._userId=c,this._likes=u.likes,this._handleCardClick=a,this._handleDeleteCard=l,this._handleLikeClick=s,this._templateSelector=i}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".cards__element").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._elementImage=this._element.querySelector(".cards__image"),this._elementName=this._element.querySelector(".cards__heading"),this._elementLikeBtn=this._element.querySelector(".cards__like-button"),this._likeCounter=this._element.querySelector(".cards__like-counter"),this._elementRemoveBtn=this._element.querySelector(".cards__remove-button"),this._elementImage.src=this._link,this._elementImage.alt=this._name,this._elementName.textContent=this._name,this._addRemoveButton(),this.addLikeActiveClass(),this.handleLikeCounter(this._likes),this._setEventListeners(),this._element}},{key:"getCardId",value:function(){return this._cardId}},{key:"_addRemoveButton",value:function(){this._userId===this._ownerId&&(this._elementRemoveBtn.style.visibility="visible")}},{key:"deleteCard",value:function(){this._element.remove()}},{key:"addLike",value:function(e){this._elementLikeBtn.classList.add("cards__like-button_active"),this.handleLikeCounter(e),this._likes=e}},{key:"removeLike",value:function(e){this._elementLikeBtn.classList.remove("cards__like-button_active"),this.handleLikeCounter(e),this._likes=e}},{key:"checkLike",value:function(){var e=this;return this._likes.find((function(t){return t._id===e._userId}))}},{key:"handleLikeCounter",value:function(e){this._likeCounter.textContent=e.length}},{key:"addLikeActiveClass",value:function(){this.checkLike(!0)&&this._elementLikeBtn.classList.add("cards__like-button_active")}},{key:"_setEventListeners",value:function(){var e=this;this._elementImage.addEventListener("click",(function(){return e._handleCardClick(e._link,e._name)})),this._elementRemoveBtn.addEventListener("click",(function(){return e._handleDeleteCard(e._cardId)})),this._elementLikeBtn.addEventListener("click",(function(){return e._handleLikeClick(e)}))}}])&&d(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var v=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formConfig=t,this._form=n,this._input=t.input,this._submitButtonSelector=t.submitButtonSelector,this._submitBtn=this._form.querySelector(this._submitButtonSelector),this._spanErrorSelector=t.spanErrorSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._formInputs=Array.from(this._form.querySelectorAll(t.inputSelector)),this._errors=Array.from(this._form.querySelectorAll(t.spanErrorSelector))}var t,n;return t=e,(n=[{key:"_validateFormInput",value:function(e){this._error=this._form.querySelector("#".concat(e.id,"-error")),e.validity.valid?(e.classList.remove(this._inputErrorClass),this._error.textContent=""):(e.classList.add(this._inputErrorClass),this._error.textContent=e.validationMessage)}},{key:"toggleSubmitBtn",value:function(){this._submitBtn.toggleAttribute("disabled",!this._form.checkValidity()),this._submitBtn.classList.toggle(this._inactiveButtonClass,!this._form.checkValidity())}},{key:"_setEventListeners",value:function(){var e=this;this.toggleSubmitBtn(),this._formInputs.forEach((function(t){t.addEventListener("input",(function(){e._validateFormInput(t),e.toggleSubmitBtn()}))}))}},{key:"clearValidationErrors",value:function(){this._errors.forEach((function(e){e.textContent="",e.classList.remove(_.spanErrorSelector)})),this._formInputs.forEach((function(e){e.classList.remove(_.inputErrorClass)}))}},{key:"enableValidation",value:function(){this._form.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var k=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=n}var t,n;return t=e,n=[{key:"renderItems",value:function(e,t){var n=this;this._renderedItems=e,this._userId=t,this._renderedItems.forEach((function(e){n._renderer(e,t)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}],n&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var S=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupSelector=t,this._popup=document.querySelector(t),this._popupCloseIcon=this._popup.querySelector(".popup__close-button"),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){(t.target.classList.contains("popup")||t.target.classList.contains("popup__close-button"))&&e.close()}))}}])&&g(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(){return C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=O(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},C.apply(this,arguments)}function O(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=P(e)););return e}function L(e,t){return L=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},L(e,t)}function j(e,t){if(t&&("object"===w(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function P(e){return P=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},P(e)}var I=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&L(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=P(r);if(o){var n=P(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return j(this,e)});function u(e){var t,n=e.popupSelector,r=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,n))._handleFormSubmit=r,t._inputs=t._popup.querySelectorAll(".popup__input"),t._form=t._popup.querySelector(".popup__input-container"),t._submitBtn=t._popup.querySelector(".popup__submit-button"),t._initialBtnText=t._submitBtn.textContent,t}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputValues={},this._inputs.forEach((function(t){e._inputValues[t.id]=[t.value]})),this._inputValues}},{key:"setEventListeners",value:function(){var e=this;C(P(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._submitBtn.textContent="Сохранение...",e._handleFormSubmit(e._getInputValues())}))}},{key:"close",value:function(){C(P(u.prototype),"close",this).call(this),this._form.reset()}},{key:"returnInitialBtnText",value:function(){return this._submitBtn.textContent=this._initialBtnText}}])&&E(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(S);function B(e){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B(e)}function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function R(){return R="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=T(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},R.apply(this,arguments)}function T(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=D(e)););return e}function x(e,t){return x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},x(e,t)}function A(e,t){if(t&&("object"===B(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function D(e){return D=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},D(e)}var V=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&x(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=D(r);if(o){var n=D(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return A(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupLink=t._popup.querySelector(".popup__image-link"),t._popupName=t._popup.querySelector(".popup__image-caption"),t}return t=u,(n=[{key:"open",value:function(e,t){R(D(u.prototype),"open",this).call(this),this._popupLink.src=e,this._popupLink.alt=t,this._popupName.textContent=t}}])&&q(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(S);function F(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var U=function(){function e(t){var n=t.nameSelector,r=t.jobSelector,o=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameElement=document.querySelector(n),this._jobElement=document.querySelector(r),this._avatarElement=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._nameElement.textContent,job:this._jobElement.textContent,avatar:this._avatarElement.src}}},{key:"setUserInfo",value:function(e,t){this._nameElement.textContent=e,this._jobElement.textContent=t}},{key:"setAvatar",value:function(e){this._avatarElement.src=e}}])&&F(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function N(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var H=function(){function e(t){var n=t.url,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=n,this._headers=r}var t,n;return t=e,(n=[{key:"_checkResponce",value:function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{headers:this._headers}).then(this._checkResponce).catch((function(e){console.log(e)}))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/cards"),{headers:this._headers}).then(this._checkResponce).catch((function(e){console.log(e)}))}},{key:"editProfile",value:function(e,t){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then(this._checkResponce).catch((function(e){console.log(e)}))}},{key:"addCard",value:function(e,t){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})}).then(this._checkResponce).catch((function(e){console.log(e)}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponce).catch((function(e){console.log(e)}))}},{key:"editAvatar",value:function(e){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then(this._checkResponce).catch((function(e){console.log(e)}))}},{key:"addLike",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then(this._checkResponce).catch((function(e){console.log(e)}))}},{key:"removeLike",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then(this._checkResponce).catch((function(e){console.log(e)}))}}])&&N(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function J(e){return J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},J(e)}function z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function M(){return M="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=$(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},M.apply(this,arguments)}function $(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=Q(e)););return e}function G(e,t){return G=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},G(e,t)}function K(e,t){if(t&&("object"===J(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function Q(e){return Q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},Q(e)}var W,X=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&G(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=Q(r);if(o){var n=Q(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return K(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._submitBtn=t._popup.querySelector(".popup__submit-button"),t._popupDeleteForm=t._popup.querySelector(".popup__delete-container"),t._initialBtnText=t._submitBtn.textContent,t}return t=u,(n=[{key:"makeSubmit",value:function(e){this._submitHandler=e}},{key:"setEventListeners",value:function(){var e=this;M(Q(u.prototype),"setEventListeners",this).call(this),this._popupDeleteForm.addEventListener("submit",(function(t){t.preventDefault(),e._submitHandler(e),e._submitBtn.textContent="Удаление..."}))}},{key:"returnInitialBtnText",value:function(){return this._submitBtn.textContent=this._initialBtnText}}])&&z(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(S);function Y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Z=new H({url:"https://mesto.nomoreparties.co/v1/cohort-43",headers:{authorization:"41f7ca70-8b6e-4b09-83a9-c8acb2ddbee8","Content-Type":"application/json"}});Promise.all([Z.getUserInfo(),Z.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],u=!0,c=!1;try{for(n=n.call(e);!(u=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);u=!0);}catch(e){c=!0,o=e}finally{try{u||null==n.return||n.return()}finally{if(c)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return Y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Y(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];ue.setUserInfo(o.name,o.about),ue.setAvatar(o.avatar),W=o._id,re.renderItems(i,o._id)})).catch((function(e){console.log(e)}));var ee=new v(_,u),te=new v(_,p),ne=new v(_,o),re=new k({renderer:function(e,t){re.addItem(se(e,t))}},l),oe=new V(".popup_type_image-zoom"),ie=new I({popupSelector:".popup_type_avatar-edit",handleFormSubmit:function(){Z.editAvatar(i.value).then((function(e){return ue.setAvatar(e.avatar)}),ie.close()).catch((function(e){console.log(e)})).finally((function(){ie.returnInitialBtnText()}))}}),ue=new U({nameSelector:".profile__heading",jobSelector:".profile__subheading",avatarSelector:".profile__avatar"}),ce=new I({popupSelector:".popup_type_profile-edit",handleFormSubmit:function(){Z.editProfile(c.value,a.value).then((function(e){ue.setUserInfo(e.name,e.about),ce.close()})).catch((function(e){console.log(e)})).finally((function(){ce.returnInitialBtnText()}))}}),ae=new I({popupSelector:".popup_type_new-place",handleFormSubmit:function(){Z.addCard(f.value,h.value).then((function(e){re.addItem(se(e,W)),ae.close()})).catch((function(e){console.log(e)}))}}),le=new X(".popup_type_delete-confirmation");function se(e,t){var n=new y({data:e,userId:t},{handleCardClick:function(e,t){oe.open(e,t)}},{handleDeleteCard:function(e){le.open(),le.makeSubmit((function(){Z.deleteCard(e).then((function(){le.close(),n.deleteCard()})).catch((function(e){console.log(e)})).finally((function(){le.returnInitialBtnText()}))}))}},{handleLikeClick:function(){n.checkLike()?Z.removeLike(n.getCardId()).then((function(e){return n.removeLike(e.likes)})).catch((function(e){console.log(e)})):Z.addLike(n.getCardId()).then((function(e){return n.addLike(e.likes)})).catch((function(e){console.log(e)}))}},".templateCards");return n.generateCard()}ee.enableValidation(),te.enableValidation(),ne.enableValidation(),ce.setEventListeners(),ae.setEventListeners(),oe.setEventListeners(),ie.setEventListeners(),le.setEventListeners(),r.addEventListener("click",(function(){ne.clearValidationErrors(),ne.toggleSubmitBtn(),ie.open()})),t.addEventListener("click",(function(){ee.clearValidationErrors();var e=ue.getUserInfo();ce.open(),ue.setUserInfo(e.name,e.job),ee.toggleSubmitBtn()})),s.addEventListener("click",(function(){te.clearValidationErrors(),te.toggleSubmitBtn(),ae.open()}))})();