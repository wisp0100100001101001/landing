import './polyfills.server.mjs';
import{Aa as g,Ba as u,Ca as h,Da as w,Ea as C,Fa as y,Ga as v,I as _,Q as O,R as P,db as b,eb as M,ja as r,ka as d,ma as e,ta as f,xa as n,ya as m,za as l}from"./chunk-IR3HB4SS.mjs";import"./chunk-VVCT4QZE.mjs";var p=class{constructor(){this.iconMap=new Map([["twoStar","twoStar.png"],["grass1","assets/grass1.png"],["branch1","assets/branch1.png"],["tree1","assets/tree1.png"],["tree2","assets/tree2.png"],["leaf1","assets/leaf1.png"],["branch2","assets/branch2.png"],["flower1","assets/flower1.png"],["flower1","assets/flower1.png"],["girlContur","assets/girlContur.png"],["girlLights","assets/girlLights.png"],["girl","assets/girl.png"],["phoneBackground","assets/phoneBackground.png"],["phoneFrame1","assets/phoneFrame1.png"],["butterfly1","assets/butterfly1.png"],["grass2","assets/grass2.png"],["flower2","assets/flower2.png"],["grass3","assets/grass3.png"],["twoStar2","assets/twoStar2.png"],["twoStar3","assets/twoStar3.png"],["butterfly2","assets/butterfly2.png"],["twoStar4","assets/twoStar4.png"],["grass4","assets/grass4.png"],["grass5","assets/grass5.png"],["flower4","assets/flower4.png"],["leaf2","assets/leaf2.png"],["flower5","assets/flower5.png"],["mushroom1","assets/mushroom1.png"],["flower7","assets/flower7.png"],["mushroom2","assets/mushroom2.png"],["grass6","assets/grass6.png"],["leaf3","assets/leaf3.png"],["grass7","assets/grass7.png"],["leaf4","assets/leaf4.png"],["mushroom3","assets/mushroom3.png"],["mushroom4","assets/mushroom4.png"],["mushroom5","assets/mushroom5.png"],["grass8","assets/grass8.png"],["grass9","assets/grass9.png"],["branch3","assets/branch3.png"],["branch4","assets/branch4.png"]]),this.iconMap.forEach((o,U)=>{Object.defineProperty(this,U,{configurable:!0,get(){return o}})})}};var z=(()=>{let o=class o{};o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=P({type:o}),o.\u0275inj=_({imports:[M,M]});let s=o;return s})();var D=["phoneDiv"],H=["phoneBg"],B=s=>({height:s}),I=(()=>{let o=class o{constructor(){this.icon=new p,this.phoneDivHeight=f("100%")}ngAfterViewInit(){this.adjustDivHeight()}onResize(){this.adjustDivHeight()}adjustDivHeight(){let c=this.phoneBg.nativeElement.clientHeight;this.phoneDivHeight.set(c+"px")}};o.\u0275fac=function(i){return new(i||o)},o.\u0275cmp=O({type:o,selectors:[["app-welcome"]],viewQuery:function(i,t){if(i&1&&(h(D,5),h(H,5)),i&2){let a;w(a=C())&&(t.phoneDiv=a.first),w(a=C())&&(t.phoneBg=a.first)}},hostBindings:function(i,t){i&1&&u("resize",function(){return t.onResize()},!1,d)},standalone:!0,features:[y],decls:38,vars:36,consts:[["phoneDiv",""],["phoneBg",""],[1,"welcome-wrap"],["alt","","srcset","",1,"branch3",3,"src"],["alt","","srcset","",1,"branch4",3,"src"],[1,"center"],[1,"phone",3,"ngStyle"],["alt","","srcset","",3,"src"],["alt","","srcset","",1,"mushroom3",3,"src"],["alt","","srcset","",1,"leaf4",3,"src"],["alt","","srcset","",1,"leaf3",3,"src"],["alt","","srcset","",1,"mushroom1",3,"src"],["alt","","srcset","",1,"flower4",3,"src"],["alt","","srcset","",1,"grass5",3,"src"],["alt","","srcset","",1,"grass4",3,"src"],["alt","","srcset","",1,"twoStar4",3,"src"],["alt","","srcset","",1,"grass6",3,"src"],["alt","","srcset","",1,"grass9",3,"src"],["alt","","srcset","",1,"grass3",3,"src"],["alt","","srcset","",1,"mushroom4",3,"src"],["alt","","srcset","",1,"flower5",3,"src"],["alt","","srcset","",1,"grass8",3,"src"],["alt","","srcset","",1,"mushroom5",3,"src"],["alt","","srcset","",1,"leaf2",3,"src"],["alt","","srcset","",1,"flower7",3,"src"],["alt","","srcset","",1,"twoStar2",3,"src"],["alt","","srcset","",1,"butterfly1",3,"src"],["alt","","srcset","",1,"butterfly2",3,"src"],["alt","","srcset","",1,"twoStar3",3,"src"],["alt","","srcset","",1,"phoneFrame1",3,"src"],["alt","",1,"girl",3,"src"],["alt","","srcset","",1,"branch1",3,"src"],["alt","","srcset","",1,"branch2",3,"src"],["alt","","srcset","",1,"leaf1",3,"src"],["alt","","srcset","",1,"tree2",3,"src"],["alt","","srcset","",1,"tree1",3,"src"],["alt","","srcset","",1,"grass1",3,"src"]],template:function(i,t){i&1&&(m(0,"div",2),g(1,"img",3)(2,"img",4),m(3,"div",5)(4,"div",6,0),g(6,"img",7,1)(8,"img",8)(9,"img",9)(10,"img",10)(11,"img",11)(12,"img",12)(13,"img",13)(14,"img",14)(15,"img",15)(16,"img",16)(17,"img",17)(18,"img",18)(19,"img",19)(20,"img",20)(21,"img",21)(22,"img",22)(23,"img",23)(24,"img",24)(25,"img",25)(26,"img",26)(27,"img",27)(28,"img",28)(29,"img",29),l(),g(30,"img",30),l(),g(31,"img",31)(32,"img",32)(33,"img",20)(34,"img",33)(35,"img",34)(36,"img",35)(37,"img",36),l()),i&2&&(e(),n("src",t.icon.branch3,r),e(),n("src",t.icon.branch4,r),e(2),n("ngStyle",v(34,B,t.phoneDivHeight())),e(2),n("src",t.icon.phoneBackground,r),e(2),n("src",t.icon.mushroom3,r),e(),n("src",t.icon.leaf4,r),e(),n("src",t.icon.leaf3,r),e(),n("src",t.icon.mushroom1,r),e(),n("src",t.icon.flower4,r),e(),n("src",t.icon.grass5,r),e(),n("src",t.icon.grass4,r),e(),n("src",t.icon.twoStar4,r),e(),n("src",t.icon.grass6,r),e(),n("src",t.icon.grass9,r),e(),n("src",t.icon.grass3,r),e(),n("src",t.icon.mushroom4,r),e(),n("src",t.icon.flower5,r),e(),n("src",t.icon.grass8,r),e(),n("src",t.icon.mushroom5,r),e(),n("src",t.icon.leaf2,r),e(),n("src",t.icon.flower7,r),e(),n("src",t.icon.twoStar2,r),e(),n("src",t.icon.butterfly1,r),e(),n("src",t.icon.butterfly2,r),e(),n("src",t.icon.twoStar3,r),e(),n("src",t.icon.phoneFrame1,r),e(),n("src",t.icon.girl,r),e(),n("src",t.icon.branch1,r),e(),n("src",t.icon.branch2,r),e(),n("src",t.icon.flower5,r),e(),n("src",t.icon.leaf1,r),e(),n("src",t.icon.tree2,r),e(),n("src",t.icon.tree1,r),e(),n("src",t.icon.grass1,r))},dependencies:[z,b],styles:[".welcome-wrap[_ngcontent-%COMP%]{background-color:#abccfb;height:100vh;max-height:100vh;overflow:hidden;position:relative}.welcome-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute}.welcome-wrap[_ngcontent-%COMP%]   img.tree2[_ngcontent-%COMP%]{bottom:0;width:20%}.welcome-wrap[_ngcontent-%COMP%]   img.tree1[_ngcontent-%COMP%]{bottom:0;right:0;width:20%}.welcome-wrap[_ngcontent-%COMP%]   img.grass1[_ngcontent-%COMP%]{bottom:0;right:11%;width:7%}.welcome-wrap[_ngcontent-%COMP%]   img.flower5[_ngcontent-%COMP%]{width:12%;bottom:11%;left:2%}.welcome-wrap[_ngcontent-%COMP%]   img.leaf1[_ngcontent-%COMP%]{width:9%;bottom:19%;left:0%}.welcome-wrap[_ngcontent-%COMP%]   img.branch2[_ngcontent-%COMP%]{width:27%}.welcome-wrap[_ngcontent-%COMP%]   img.branch1[_ngcontent-%COMP%]{width:35%;right:0}.welcome-wrap[_ngcontent-%COMP%]   img.branch4[_ngcontent-%COMP%]{width:127%}.welcome-wrap[_ngcontent-%COMP%]   img.branch3[_ngcontent-%COMP%]{width:77%;right:0}.welcome-wrap[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]{position:absolute;width:65%;left:50%;top:50%;transform:translate(-50%,-50%)}.welcome-wrap[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .girl[_ngcontent-%COMP%]{width:20%;left:18%;margin-top:-31%}.welcome-wrap[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%]{width:100%;overflow:hidden}.welcome-wrap[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}.welcome-wrap[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%]   img.grass6[_ngcontent-%COMP%]{width:14%;right:6%;bottom:3%}.welcome-wrap[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%]   img.grass5[_ngcontent-%COMP%]{width:15%;right:1%;bottom:3%}.welcome-wrap[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%]   img.grass4[_ngcontent-%COMP%]{width:15%;right:18%;bottom:3%}.welcome-wrap[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%]   img.flower4[_ngcontent-%COMP%]{width:35%;bottom:3%;right:23%}.welcome-wrap[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%]   img.mushroom1[_ngcontent-%COMP%]{width:25%;bottom:3%;right:15%}.welcome-wrap[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%]   img.mushroom3[_ngcontent-%COMP%]{width:27%;bottom:20%;right:0}.welcome-wrap[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%]   img.leaf3[_ngcontent-%COMP%]{width:24%;bottom:3%;right:5%}.welcome-wrap[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%]   img.leaf4[_ngcontent-%COMP%]{width:15%;bottom:3%;right:1%}.welcome-wrap[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%]   img.twoStar4[_ngcontent-%COMP%]{width:10%;bottom:27%;right:3%}.welcome-wrap[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%]   img.grass8[_ngcontent-%COMP%]{width:25%;left:15%;bottom:3%}.welcome-wrap[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%]   img.mushroom5[_ngcontent-%COMP%]{width:13%;left:23%;bottom:3%}.welcome-wrap[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%]   img.leaf2[_ngcontent-%COMP%]{width:18%;left:3%;bottom:3%}.welcome-wrap[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%]   img.flower5[_ngcontent-%COMP%]{width:18%;bottom:3%;left:1.5%}.welcome-wrap[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%]   img.grass3[_ngcontent-%COMP%]{width:18%;bottom:23%;left:3%}.welcome-wrap[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%]   img.grass9[_ngcontent-%COMP%]{width:30%;bottom:3%;left:14%}.welcome-wrap[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%]   img.flower7[_ngcontent-%COMP%]{width:13%;bottom:31%;left:5%}.welcome-wrap[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%]   img.mushroom4[_ngcontent-%COMP%]{width:18%;bottom:31%;left:13%}.welcome-wrap[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%]   img.twoStar2[_ngcontent-%COMP%]{width:8%;top:14%;left:2%}.welcome-wrap[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%]   img.butterfly1[_ngcontent-%COMP%]{width:3%;top:14%;left:32%}.welcome-wrap[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%]   img.butterfly2[_ngcontent-%COMP%]{width:4%;top:14%;left:64%}.welcome-wrap[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%]   img.twoStar3[_ngcontent-%COMP%]{width:6%;top:4%;right:21%}"]});let s=o;return s})();export{I as WelcomeComponent};