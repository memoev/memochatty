(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{44:function(e,t,n){},45:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),o=n(7),i=n.n(o),r=(n(44),n.p+"static/media/logo.6ce24c58.svg"),s=(n(45),new WebSocket("wss://memochatty.herokuapp.com//ws")),l=n(34),d=n(82),u=n(87),f=n(86),j=n(10),m=Object(d.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}},form:{"& > *":{margin:e.spacing(1),width:"25ch"}},field:{backgroundColor:"#FFF"}}}));var b=function(){var e=m(),t=Object(c.useState)(""),n=Object(l.a)(t,2),a=n[0],o=n[1],i=function(e){e.preventDefault(),function(e){s.send(e)}(a),o("")};return Object(j.jsxs)("div",{children:[Object(j.jsx)("form",{className:e.form,noValidate:!0,autoComplete:"off",onSubmit:i,children:Object(j.jsx)(f.a,{className:e.field,id:"filled-basic",label:"mssg goes here foo",variant:"filled",value:a,onChange:function(e){o(e.target.value)}})}),Object(j.jsx)("div",{className:e.root,children:Object(j.jsx)(u.a,{variant:"contained",color:"primary",onClick:i,children:"Primary"})})]})};var g=function(){return Object(c.useEffect)((function(){s.addEventListener("message",(function(e){console.log("Message from server here:",e.data);var t=document.createElement("li");t.innerText=e.data,document.querySelector("ul").appendChild(t)}))}),[]),Object(j.jsx)("div",{children:Object(j.jsx)("ul",{})})};var h=function(){return Object(c.useEffect)((function(e){s.addEventListener("open",(function(e){s.send("Hello Server!")}))}),[]),Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)("header",{className:"App-header",children:[Object(j.jsx)("img",{src:r,className:"App-logo",alt:"logo"}),Object(j.jsx)(g,{}),Object(j.jsx)(b,{})]})})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,89)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),o(e),i(e)}))};n(50);i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(h,{})}),document.getElementById("root")),p()}},[[51,1,2]]]);
//# sourceMappingURL=main.8b48c6e0.chunk.js.map