import{resolveComponent as p,openBlock as e,createElementBlock as E,createVNode as t,withCtx as o,createElementVNode as s,createTextVNode as a}from"vue";import{_ as C}from"./app.29e2ae43.js";const _=JSON.parse('{"title":"Button","description":"","frontmatter":{"title":"Button","lang":"zh-CN"},"headers":[{"level":2,"title":"\u57FA\u672C\u4F7F\u7528","slug":"\u57FA\u672C\u4F7F\u7528"},{"level":2,"title":"\u70B9\u51FB\u4E8B\u4EF6","slug":"\u70B9\u51FB\u4E8B\u4EF6"}],"relativePath":"zh-CN/component/button.md","lastUpdated":1661354573000}'),r={name:"zh-CN/component/button.md"},c=s("h1",{id:"\u6309\u94AE-button",tabindex:"-1"},[a("\u6309\u94AE Button "),s("a",{class:"header-anchor",href:"#\u6309\u94AE-button","aria-hidden":"true"},"#")],-1),l=s("h2",{id:"\u57FA\u672C\u4F7F\u7528",tabindex:"-1"},[a("\u57FA\u672C\u4F7F\u7528 "),s("a",{class:"header-anchor",href:"#\u57FA\u672C\u4F7F\u7528","aria-hidden":"true"},"#")],-1),D=s("p",null,"button/basic",-1),F=s("h2",{id:"\u70B9\u51FB\u4E8B\u4EF6",tabindex:"-1"},[a("\u70B9\u51FB\u4E8B\u4EF6 "),s("a",{class:"header-anchor",href:"#\u70B9\u51FB\u4E8B\u4EF6","aria-hidden":"true"},"#")],-1),k=s("p",null,"button/event",-1);function i(u,A,d,B,b,h){const n=p("Demo");return e(),E("div",null,[c,l,t(n,{source:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3Ediv%20%3Cspan%20class%3D%22token%20keyword%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3E%22button-basic%22%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3Ewe%3Cspan%20class%3D%22token%20operator%22%3E-%3C%2Fspan%3Ebutton%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3EDefault%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%2F%3C%2Fspan%3Ewe%3Cspan%20class%3D%22token%20operator%22%3E-%3C%2Fspan%3Ebutton%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3Ewe%3Cspan%20class%3D%22token%20operator%22%3E-%3C%2Fspan%3Ebutton%20type%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3E%22primary%22%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3EPrimary%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%2F%3C%2Fspan%3Ewe%3Cspan%20class%3D%22token%20operator%22%3E-%3C%2Fspan%3Ebutton%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%2F%3C%2Fspan%3Ediv%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%2F%3C%2Fspan%3Etemplate%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3Escript%20lang%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3E%22ts%22%3C%2Fspan%3E%20setup%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function-variable%20function%22%3EhandleClick%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20function%22%3Ealert%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3E'click%20me'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%2F%3C%2Fspan%3Escript%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3Estyle%20scoped%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Ewe%3Cspan%20class%3D%22token%20operator%22%3E-%3C%2Fspan%3Ebutton%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20margin%3Cspan%20class%3D%22token%20operator%22%3E-%3C%2Fspan%3Eright%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%2012px%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%2F%3C%2Fspan%3Estyle%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",path:"button/basic","raw-source":"%3Ctemplate%3E%0A%20%20%20%20%3Cdiv%20class%3D%22button-basic%22%3E%0A%20%20%20%20%20%20%20%20%3Cwe-button%3EDefault%3C%2Fwe-button%3E%0A%20%20%20%20%20%20%20%20%3Cwe-button%20type%3D%22primary%22%3EPrimary%3C%2Fwe-button%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aconst%20handleClick%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20alert('click%20me')%3B%0A%7D%0A%3C%2Fscript%3E%0A%0A%3Cstyle%20scoped%3E%0A.we-button%20%7B%0A%20%20%20%20margin-right%3A%2012px%3B%0A%7D%0A%3C%2Fstyle%3E%0A",description:"%3Cp%3E%E4%BD%BF%E7%94%A8%20%3Ccode%3Etype%3C%2Fcode%3E%E3%80%81%3Ccode%3Esize%3C%2Fcode%3E%E3%80%81%3Ccode%3Eround%3C%2Fcode%3E%20%E5%92%8C%20%3Ccode%3Eloading%3C%2Fcode%3E%20%E6%9D%A5%E5%AE%9A%E4%B9%89%E6%8C%89%E9%92%AE%E7%9A%84%E6%A0%B7%E5%BC%8F%E3%80%82%3C%2Fp%3E%0A"},{default:o(()=>[D]),_:1}),F,t(n,{source:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3Ediv%20%3Cspan%20class%3D%22token%20keyword%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3E%22button-basic%22%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3Ewe%3Cspan%20class%3D%22token%20operator%22%3E-%3C%2Fspan%3Ebutton%20%40click%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3E%22handleClick%22%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3E%E7%82%B9%E5%87%BB%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%2F%3C%2Fspan%3Ewe%3Cspan%20class%3D%22token%20operator%22%3E-%3C%2Fspan%3Ebutton%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%2F%3C%2Fspan%3Ediv%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%2F%3C%2Fspan%3Etemplate%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3Escript%20lang%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3E%22ts%22%3C%2Fspan%3E%20setup%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function-variable%20function%22%3EhandleClick%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20function%22%3Ealert%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3E'click%20me'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%2F%3C%2Fspan%3Escript%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3Estyle%20scoped%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Ewe%3Cspan%20class%3D%22token%20operator%22%3E-%3C%2Fspan%3Ebutton%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20margin%3Cspan%20class%3D%22token%20operator%22%3E-%3C%2Fspan%3Eright%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%2012px%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%2F%3C%2Fspan%3Estyle%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",path:"button/event","raw-source":"%3Ctemplate%3E%0A%20%20%20%20%3Cdiv%20class%3D%22button-basic%22%3E%0A%20%20%20%20%20%20%20%20%3Cwe-button%20%40click%3D%22handleClick%22%3E%E7%82%B9%E5%87%BB%3C%2Fwe-button%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aconst%20handleClick%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20alert('click%20me')%3B%0A%7D%0A%3C%2Fscript%3E%0A%0A%3Cstyle%20scoped%3E%0A.we-button%20%7B%0A%20%20%20%20margin-right%3A%2012px%3B%0A%7D%0A%3C%2Fstyle%3E%0A",description:"%3Cp%3E%E7%82%B9%E5%87%BB%E4%BA%8B%E4%BB%B6%3C%2Fp%3E%0A"},{default:o(()=>[k]),_:1})])}const w=C(r,[["render",i]]);export{_ as __pageData,w as default};
