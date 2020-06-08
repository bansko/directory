"use strict";angular.module("directoryApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","hc.marked"]).config(["$routeProvider",function(e){e.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/tag/:tagId",{templateUrl:"views/tag.html",controller:"TagCtrl",controllerAs:"tag"}).when("/directory/:businessId",{templateUrl:"views/business.html",controller:"BusinessCtrl",controllerAs:"business"}).when("/privacy",{templateUrl:"views/privacy.html",controller:"PrivacyCtrl",controllerAs:"privacy"}).otherwise({redirectTo:"/"})}]).run(["$rootScope","util",function(e,s){e.util=s}]),angular.module("directoryApp").controller("MainCtrl",["$scope","BusinessApi","util",function(r,e,a){e.query({},function(e){var s=0,t=0,i={},n=[].concat.apply([],e.map(function(e){return e.tags}));for(var o in n.forEach(function(e){i[e]=(i[e]||0)+1}),i)Object.prototype.hasOwnProperty.call(i,o)&&(t=Math.max(t,i[o]),s=Math.min(s,i[o]));r.tags=a.shuffle(Array.from(new Set(n))).map(function(e){return{text:e,count:i[e],size:Math.round(i[e]/t*5)}})})}]),angular.module("directoryApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("directoryApp").controller("TagCtrl",["$scope","$routeParams","BusinessApi","util",function(t,s,i,n){t.tagId=s.tagId,i.query({},function(e){t.businesses=n.shuffle(e.filter(function(e){return e.live&&e.tags.includes(s.tagId)})),t.businesses=t.businesses.map(function(e,s){return i.get({businessId:e.id},function(e){t.businesses[s]=Object.assign(t.businesses[s],e)}),e})})}]),angular.module("directoryApp").controller("BusinessCtrl",["$scope","$http","$routeParams","BusinessApi",function(s,t,e,i){s.businessId=e.businessId,i.get({businessId:e.businessId},function(e){s.business=e,t.get(e.markdown+"?"+Math.floor(Date.now())).then(function(e){s.response=e,s.markdown=e.data},function(e){})})}]),angular.module("directoryApp").factory("BusinessApi",["$resource",function(e){var s="https://raw.githubusercontent.com/bansko/directory/master";return e(s,{businessId:"@_businessId"},{get:{url:s+"/directory/:businessId/index.json?"+Math.floor(Date.now())},query:{url:s+"/directory/index.json?"+Math.floor(Date.now()),isArray:!0}})}]),angular.module("directoryApp").factory("util",function(){return{shuffle:function(e){var s,t,i;for(i=e.length-1;0<i;i--)s=Math.floor(Math.random()*(i+1)),t=e[i],e[i]=e[s],e[s]=t;return e}}}),angular.module("directoryApp").controller("PrivacyCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("directoryApp").run(["$templateCache",function(e){e.put("views/about.html","<p>This is the about view.</p> "),e.put("views/business.html",'<h2>{{business.title}}</h2> <h4>{{business.subtitle}}</h4> <img src="{{business.cover[\'700\']}}" ng-show="business.cover[\'700\']"> <div marked="markdown" class="mc-lg" ng-show="markdown"></div> <h4>Contact</h4> <ul class="business-contact"> <li ng-repeat="telephone in business.contact.telephone" class="telephone"> {{telephone}} </li> <li ng-repeat="email in business.contact.email" class="email"> <a href="mailto:{{email}}">{{email}}</a> </li> <li ng-repeat="url in business.contact.url" class="url"> <a href="{{url}}">{{url.replace(\'https://\', \'\').replace(\'http://\', \'\')}}</a> </li> <li ng-repeat="facebook in business.contact.facebook" class="facebook"> <a href="{{facebook}}">{{facebook.replace(\'https://fb.com/\', \'\')}}</a> </li> </ul>'),e.put("views/main.html",'<div class="row"> <h2>Welcome!</h2> <img src="images/vasilashki-lakes-720x405.f296827a.jpg" class="img-rounded" alt="Vasilashki lakes in the Pirin Mountains, Bulgaria"> </div> <div class="row" style="margin-top: 20px"> <p> Bansko Directory is a non profit website listing activities, small businesses and service providers in or within easy reach of Bansko. It exists to promote the many wonderful and compelling reasons to visit the town and region in all seasons. </p> <p> Our special focus is on outdoor and healthy activities that take advantage of our beautiful scenery, rivers, mountains and lakes. </p> <p> If you wish to list your business or service for free, you can fill in this form: <a href="https://goo.gl/forms/POL7gQDLzeq4xBBH3">create a new listing</a>. </p> </div> <div class="row"> <h4>Things to enjoy in Bansko or nearby:</h4> <ul class="tag-cloud"> <li ng-repeat="tag in tags"> <a ng-href="/#!/tag/{{tag.text}}" class="tag-{{tag.size}}" title="{{tag.count}}">{{tag.text}}</a> </li> </ul> </div> '),e.put("views/privacy.html","<h1>Privacy Policy</h1> <p> We do not collect personal information of website visitors. Visitors to this site are anonymous. </p> <p> We do use an analytics tool that attempts to track visitor numbers and demographics. We review it for our amusement only. Information from the analytics tool is not shared or sold to anyone. </p> <p> Information provided by businesses and suppliers for the purpose of listing their business on this site is either in the public domain already or explicitly shared by the owner of that information. </p>"),e.put("views/tag.html",'<h2>{{tagId}}</h2> <ul class="business-list"> <li ng-repeat="business in businesses" class="clearfix"> <a ng-href="/#!/directory/{{business.id}}"> <img src="{{business.thumbnail[\'64x64\']}}" class="pull-left"> <strong>{{business.title}}</strong> </a> <br> {{business.subtitle}} </li> </ul> ')}]);