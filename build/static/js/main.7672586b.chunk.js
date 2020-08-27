(this["webpackJsonpcode-practice"]=this["webpackJsonpcode-practice"]||[]).push([[0],{27:function(e,t,n){n(57),e.exports=n(56)},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t){e.exports="<h2 id=createtextelement>createTextElement</h2> <p><code>createTextElement</code>\u51fd\u6570\u4e3b\u8981\u529f\u80fd\u8fd4\u56de\u4e00\u4e2a\u5b57\u7b26\u8282\u70b9\u5bf9\u8c61</p> <p><strong>\u76ee\u6807</strong></p> <ol> <li>\u521b\u5efa\u4e00\u4e2acreateTextElement\u51fd\u6570;</li> <li>\u8fd4\u56de\u6587\u5b57\u7c7b\u578b\u5bf9\u8c61;</li> </ol> <p><strong>\u4f8b\u5b50</strong></p> <pre><code class=language-js>createTextElement(&quot;hi React&quot;);</code></pre> <p><strong>\u8f93\u51fa</strong></p> <pre><code class=language-js>{\n    type: &quot;TEXT_ELEMENT&quot;,\n    props: {\n      nodeValue: &quot;hi React&quot;,\n      children: [],\n    },\n  }\n}\n</code></pre> "},40:function(e,t){e.exports="<h2 id=createelement>CreateElement</h2> <p><code>createElement</code>\u51fd\u6570\u4e3b\u8981\u529f\u80fd\u662f\u8fd4\u56de\u4e00\u4e2a\u6570\u636e\u5bf9\u8c61\u3002</p> <p><strong>\u76ee\u6807</strong></p> <ol> <li>\u521b\u5efa\u4e00\u4e2aCreateElement\u51fd\u6570;</li> <li>\u8fd4\u56de\u7279\u5b9a\u7684\u5bf9\u8c61;</li> </ol> <p><strong>\u4f8b\u5b50</strong></p> <pre><code class=language-js>var element = `&lt;h1&gt;hi React&lt;/h1&gt;`;\ncreateElement(element);</code></pre> <p><strong>\u8f93\u51fa</strong></p> <pre><code class=language-js>{\n    type: &quot;h1&quot;,\n    props: null,\n    children: {\n        type: &quot;TEXT_ELEMENT&quot;,\n        props: null\uff0c\n        children: &quot;Hi React&quot;\n    }\n}</code></pre> <p><strong>\u8282\u70b9\u5d4c\u5957</strong></p> <pre><code class=language-js>var element = `&lt;h1&gt;&lt;i&gt;hi React&lt;/i&gt;&lt;/h1&gt;`;\ncreateElement(element);</code></pre> <p><strong>\u8f93\u51fa</strong></p> <pre><code class=language-js>{\n    type: &quot;h1&quot;,\n    props: null,\n    children: [{\n        type: &quot;i&quot;,\n        props: null,\n        children: [{\n            type: &quot;TEXT_ELEMENT&quot;,\n            props: null,\n            children: &quot;Hi React&quot;\n        }]\n    }]\n}</code></pre> "},41:function(e,t){e.exports="<h2 id=render>render</h2> <p><code>render</code>\u51fd\u6570\u4f5c\u7528\u662f\u5c06<code>createElement</code>\u751f\u6210\u7684\u5bf9\u8c61\u53d8\u6210DOM\u8282\u70b9;</p> <p><strong>\u76ee\u6807</strong></p> <ol> <li>\u521b\u5efa\u4e00\u4e2arender\u51fd\u6570;</li> </ol> <p><strong>\u4f8b\u5b50</strong></p> <pre><code class=language-js>var element = `&lt;h1&gt;hi React&lt;/h1&gt;`;\nrender(element, document.getElementByID(&quot;root&quot;));</code></pre> <p><strong>\u8f93\u51fa</strong> \u5728<code>id</code>\u4e3a<code>root</code>\u8282\u70b9\u4e0a\u751f\u6210\u4e00\u4e2a<code>h1</code>\u6807\u7b7e\uff0c\u6807\u7b7e\u7684\u5185\u5bb9\u662f<code>hi React</code></p> "},43:function(e,t,n){},53:function(e,t,n){},56:function(e,t){},57:function(e,t,n){"use strict";n.r(t);n(28),n(29),n(30),n(31);var a=n(0),r=n.n(a),l=n(24),c=n.n(l),o=n(17),s=n(1),i=n(7),u=n(8),d=n(10),m=n(11);n(36),n(37);function p(e){return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"nav shadow"},r.a.createElement("h1",null,"React Render\u5b9e\u73b0","home"==e.path?null:r.a.createElement("button",{className:"btn btn-small",style:{marginLeft:"20px"},onClick:function(){window.location.href="/"}},"\u8fd4\u56de\u5217\u8868"))))}n(38);function E(e,t){var n=--t;return n<0||"object"==typeof e[n]&&"success"==e[n].status}function h(e){return r.a.createElement("ul",{className:"steps"},e.data.map((function(t,n){return r.a.createElement("li",{className:"clearfix",key:n},r.a.createElement("span",{className:"index"},t.id,"."),r.a.createElement("span",{className:"title"},t.title),r.a.createElement("button",{className:E(e.data,n)?"btn btn-small":"btn btn-small btn-disable",onClick:function(){1==E(e.data,n)&&(window.location.href="#/problem?id="+t.id)}},"lock"!=t.status?"\u7ec3\u4e60":"\u672a\u89e3\u9501"))})))}var g=function(){var e=localStorage.getItem("_DATA_");return void 0!=e&&"string"==typeof e?JSON.parse(e):{title:"React Render\u5b9e\u73b0",steps:[{id:1,title:"createTextElement",markdown:n(39),codes:"/*\n* \u521b\u5efacreateTextElement\u65b9\u6cd5\n* @type: \u6587\u672c\u5185\u5bb9\n*/ \nfunction createTextElement(text){\n    /* \u586b\u5199\u4ee3\u7801 */ \n    return {\n        \n    }\n}\n",cases:[{title:'createTextElement("hi react!")',fn:'createTextElement("hi react!")',value:{type:"TEXT_ELEMENT",props:{nodeValue:"hi react!",children:[]}}}]},{id:2,title:"createElement",markdown:n(40),codes:'/*\n* \u521b\u5efacreateTextElement\u65b9\u6cd5\n* @type: \u6587\u672c\u5185\u5bb9\n*/             \nfunction createTextElement(text){    \n    return {\n        type: "TEXT_ELEMENT",\n        props: {\n            nodeValue: text,\n            children:[]\n        }\n    }\n}\n            \n/*\n* \u521b\u5efacreateElement\u65b9\u6cd5\n* @type: \u6807\u7b7e\u7c7b\u578b\n* @props: \u6807\u7b7e\u5c5e\u6027\n* @children: \u5b50\u6807\u7b7e\n*/ \nfunction createElement(type, props, ...children){\n    /* \u586b\u5199\u4ee3\u7801 */ \n}            \n',cases:[{title:'createElement("hi", null, "hi react!")',fn:'createElement("hi", null, "hi react!")',value:{type:"hi",props:{children:[{type:"TEXT_ELEMENT",props:{nodeValue:"hi react!",children:[]}}]}}}]},{id:3,title:"render",markdown:n(41),codes:'/*\n* \u521b\u5efacreateTextElement\u65b9\u6cd5\n* @type: \u6587\u672c\u5185\u5bb9\n*/             \nfunction createTextElement(text){    \n    return {\n        type: "TEXT_ELEMENT",\n        props: {\n            nodeValue: text,\n            children:[]\n        }\n    }\n}\n            \n/*\n* \u521b\u5efacreateElement\u65b9\u6cd5\n* @type: \u6807\u7b7e\u7c7b\u578b\n* @props: \u6807\u7b7e\u5c5e\u6027\n* @children: \u5b50\u6807\u7b7e\n*/ \nfunction createElement(type, props, ...children){    \n    return {\n        type: type,\n        props: {\n            ...props,\n            children: children.map((child)=>{\n                return typeof child == "object" \n                        ? child \n                        : createTextElement(child)\n                    \n            })\n        }\n    }\n}\n\n/*\n* @element: createElement\u521b\u5efa\u7684\u503c\n* @container: \u663e\u793a\u7684\u5bb9\u5668\n*/ \nfunction render(element, container){\n    /*\u7f16\u5199\u4ee3\u7801*/  \n    console.log(container)\n}\n    ',cases:[{title:'var element = "<h1>hi react!</h1>";\nrender(element, document.getElementById("root"))',fn:'var test = function(){ document.getElementById("root").innerHTML=""; render(createElement("h1", null, "hi react!"), document.getElementById("root")); return document.getElementById("root").innerHTML;}; test();',value:"<h1>hi react!</h1>"}]}]}}(),f=[{index:0,title:"\u603b\u6c47",actived:!0},{index:0,title:"createElement",codes:[{value:""}]}];r.a.createContext(f);var v=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={HEADER:f},a}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return console.log("Data",g),r.a.createElement("div",null,r.a.createElement(p,{data:this.state.HEADER,path:"home"}),r.a.createElement("div",{className:"home"},r.a.createElement(h,{data:g.steps,onChange:function(t){e.setState({activeIndex:t})}})))}}]),n}(a.Component),T=n(9);function y(e){for(var t=window.location.href.indexOf("?"),n=window.location.href.substr(t+1,window.location.href.length).split("&"),a=0;a<n.length;a++){var r=n[a].split("=");if(r[0]==e)return r.shift(),r.join("=")}}n(42),n(43);function b(e){return r.a.createElement("div",{className:"markdown markdown-body",id:"markdown"},r.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}))}var x=n(25),N=n.n(x);n(51),n(52);function w(e){return r.a.createElement("div",{className:"edit shadow"},r.a.createElement(N.a,{style:{width:"100%",height:"100%"},fontSize:16,mode:"java",theme:"github",value:e.codes,onBlur:function(t,n){e.onBlur&&e.onBlur(n.getValue())}}))}var j={error:"\u6d4b\u8bd5\u9519\u8bef",unequal:"\u6d4b\u8bd5\u6ca1\u6709\u901a\u8fc7",equal:"\u6d4b\u8bd5\u901a\u8fc7"};n(53);function q(e){return r.a.createElement(r.a.Fragment,null,"end"!=e.status?r.a.createElement("h2",{className:"showStatus"},"upload"==e.status?"\u4ee3\u7801\u4e0a\u4f20\u4e2d......":"run"==e.status?"\u4ee3\u7801\u8fd0\u884c\u4e2d......":""):null,r.a.createElement("div",{className:"markdown markdown-body"},r.a.createElement("div",{className:"cases"},e.data.map((function(e,t){return console.log("unit",e,"index",t),r.a.createElement("div",{className:"case",key:t},r.a.createElement("h3",{className:"equal"==e.status?"successStatus":"errorStatus"},j[e.status]),r.a.createElement("p",null,r.a.createElement("strong",null,"\u6267\u884c: ")),r.a.createElement("pre",null,r.a.createElement("code",{className:"language-js"},e.title)),r.a.createElement("p",null,r.a.createElement("strong",null,"\u671f\u671b: ")),r.a.createElement("pre",null,r.a.createElement("code",{className:"language-js"},void 0==e.correctValue?"undefined":"object"==typeof e.correctValue?JSON.stringify(e.correctValue,null,4):e.correctValue.toString())),r.a.createElement("p",null,r.a.createElement("strong",null,"\u5b9e\u9645: ")),r.a.createElement("pre",null,r.a.createElement("code",{className:"language-js"},void 0==e.value?"undefined":"object"==typeof e.value?JSON.stringify(e.value,null,4):e.value.toString())))})))))}var S=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(e){var a;Object(i.a)(this,n),(a=t.call(this,e)).state={id:y("id"),HEADER:f,UnitTest:[]};var r=Object(T.a)(a);return window.onmessage=function(e){r.state.UnitTest.push(e.data);var t=r.getStep();"equal"!=e.data.status?t.status="fail":t.status="success",r.state.UnitTestStatus="end",r.forceUpdate(),r.scrollTop(window.innerHeight-50),r.forceUpdate(),r.saveData()},a}return Object(u.a)(n,[{key:"saveData",value:function(){localStorage.setItem("_DATA_",JSON.stringify(g))}},{key:"getStep",value:function(){var e=this.state.id;return g.steps[e-1]}},{key:"scrollTop",value:function(e){document.querySelector(".content-right").scrollTop=e}},{key:"render",value:function(){var e=this,t=this.getStep();return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{data:this.state.HEADER}),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"content-left"},r.a.createElement(b,{html:"object"==typeof t?t.markdown:""})),r.a.createElement("div",{className:"content-right"},r.a.createElement(w,{codes:"object"==typeof t?t.codes:"no code",onBlur:function(e){t.codes=e}}),r.a.createElement("p",{className:"clearfix"},r.a.createElement("button",{className:"run"!=this.state.UnitTestStatus?"btn":"btn btn-disable",style:{float:"right",marginTop:"15px",marginLeft:"0px"},onClick:function(n){if("run"==e.state.UnitTestStatus)return!1;e.saveData(),delete t.status,e.state.UnitTest=[],e.state.UnitTestStatus="run",e.forceUpdate(),e.scrollTop(window.innerHeight+500);setTimeout((function(){var e=t.cases[0];window.frames[0].postMessage([0,t.codes,e.fn,e.value,e.title],"*")}),2e3)}},"run"!=this.state.UnitTestStatus?"\u8fd0\u884c\u4ee3\u7801":"\u8fd0\u884c\u4e2d...")),r.a.createElement(q,{status:this.state.UnitTestStatus,data:this.state.UnitTest}),r.a.createElement("iframe",{id:"runner",src:"./runner.html",style:{display:"none"}}))))}}]),n}(a.Component);console.log(o.a,s.a,v,S),c.a.render(r.a.createElement(o.a,null,r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:v}),r.a.createElement(s.a,{path:"/problem",component:S}))),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.7672586b.chunk.js.map