(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,function(e,t,a){e.exports={fon:"Message_fon__LMfNC",img:"Message_img__1zR1E",fonSMS:"Message_fonSMS__1ybXs",content:"Message_content__1K0av",name:"Message_name__qDl9I",text:"Message_text__2lIgI",time:"Message_time__2wCZl"}},,,,function(e,t,a){e.exports={input:"SuperInputText_input__37-s5",superInput:"SuperInputText_superInput__3dgbn",errorInput:"SuperInputText_errorInput__34zsh",error:"SuperInputText_error___AYLm"}},function(e,t,a){e.exports={link:"Header_link__eZ-xb",active:"Header_active__3vCYF",block:"Header_block__rE8fn",header:"Header_header__Js13l"}},,function(e,t,a){e.exports={default:"SuperButton_default__2BlXL",red:"SuperButton_red__WrFmG",button:"SuperButton_button__CpDSE",blink:"SuperButton_blink__3qdQY"}},function(e,t,a){e.exports={someClass:"Greeting_someClass__3FRIj",error:"Greeting_error__2WH4K"}},function(e,t,a){e.exports={blue:"HW4_blue__1gmLs",column:"HW4_column__14AHh",testSpanError:"HW4_testSpanError__KtYMA"}},function(e,t,a){e.exports={label:"SuperCheckbox_label__2MKDP",checkbox:"SuperCheckbox_checkbox__8kivs",spanClassName:"SuperCheckbox_spanClassName__2NgGH"}},,,,,function(e,t,a){e.exports={App:"App_App__38gb2"}},function(e,t,a){e.exports={del:"Affair_del__2teaF"}},,,function(e,t,a){e.exports=a(31)},,,,,function(e,t,a){},,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(18),c=a.n(l),o=(a(28),a(19)),u=a.n(o),s=a(5),i=a(1),m=a(4),E=a.n(m);var d=function(e){return r.a.createElement("div",{className:E.a.fon},r.a.createElement("img",{className:E.a.img,src:e.avatar,alt:""}),r.a.createElement("div",{className:E.a.fonSMS},r.a.createElement("div",{className:E.a.content},r.a.createElement("span",{className:E.a.name},e.name),r.a.createElement("br",null),r.a.createElement("span",{className:E.a.text},e.message),r.a.createElement("br",null),r.a.createElement("span",{className:E.a.time},e.time))))},p="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",_="Artem",f="npm start \u043d\u0430\u0436\u0438\u043c\u0430\u043b?",h="22:00";var b=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1 should work (\u0434\u043e\u043b\u0436\u043d\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c)",r.a.createElement(d,{avatar:p,name:_,message:f,time:h}),r.a.createElement("hr",null),r.a.createElement("hr",null))},v=a(2),k=a(20),g=a.n(k);var C=function(e){return r.a.createElement("div",null,r.a.createElement("span",null,e.affair.name," - [",e.affair.priority,"] -- "),r.a.createElement("button",{className:g.a.del,onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X"))};var N=function(e){var t=e.data.map((function(t){return r.a.createElement(C,{key:t._id,affair:t,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,t,r.a.createElement("button",{onClick:function(){e.setFilter("all")}},"All"),r.a.createElement("button",{onClick:function(){e.setFilter("high")}},"High"),r.a.createElement("button",{onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement("button",{onClick:function(){e.setFilter("low")}},"Low"))},S=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var j=function(){var e=Object(n.useState)(S),t=Object(v.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)("all"),o=Object(v.a)(c,2),u=o[0],s=o[1],i=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(a,u);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(N,{data:i,setFilter:s,deleteAffairCallback:function(e){return l(function(e,t){return e.filter((function(e){return e._id!==t}))}(a,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},x=a(22),O=a(12),w=a.n(O),y=function(e){var t=e.name,a=e.setNameCallback,n=e.onEnter,l=e.addUser,c=e.error,o=e.totalUsers,u=c?w.a.errorInput:w.a.input;return r.a.createElement("div",null,r.a.createElement("input",{value:t,onChange:a,className:u,onKeyDown:n,onBlur:a}),r.a.createElement("div",null,c),r.a.createElement("button",{onClick:l},"add"),r.a.createElement("div",null,o))},A=function(e){var t=e.users,a=e.addUserCallback,l=Object(n.useState)(""),c=Object(v.a)(l,2),o=c[0],u=c[1],s=Object(n.useState)(""),i=Object(v.a)(s,2),m=i[0],E=i[1],d=function(){a(o),alert("Hello ".concat(o," !")),u("")},p=t.length;return r.a.createElement(y,{name:o,setNameCallback:function(e){var t=e.currentTarget.value.trim();t?(u(t),m&&E("")):(o&&u(""),E("name is require!"))},addUser:d,error:m,totalUsers:p,onEnter:function(e){"Enter"===e.key&&o&&d()}})},I=a(21);var M=function(){var e=Object(n.useState)([]),t=Object(v.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(A,{users:a,addUserCallback:function(e){var t={_id:Object(I.v1)(),name:e};l([t].concat(Object(x.a)(a)))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},H=a(7),T=a(8),F=a.n(T),B=["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"],W=function(e){e.type;var t=e.onChange,a=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=e.className,u=e.spanClassName,s=Object(H.a)(e,B),i="".concat(F.a.error," ").concat(u||""),m="".concat(F.a.input," ").concat(F.a.error?F.a.errorInput:F.a.superInput," ").concat(o);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){t&&t(e),a&&a(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),l&&"Enter"===e.key&&l()},className:m},s)),c&&r.a.createElement("span",{className:i},c))},K=a(13),P=a.n(K),J=a(11),U=a.n(J),G=["red","className"],L=function(e){var t=e.red,a=e.className,n=Object(H.a)(e,G),l="".concat(U.a.button," ").concat(t?U.a.red:U.a.default," ").concat(a);return r.a.createElement("button",Object.assign({className:l},n))},Y=a(14),q=a.n(Y),D=["type","onChange","onChangeChecked","className","spanClassName","children"],X=function(e){e.type;var t=e.onChange,a=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(H.a)(e,D),o="".concat(q.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){t&&t(e),a&&a(e.currentTarget.checked)},className:o},c)),l&&r.a.createElement("span",{className:q.a.spanClassName},l))};var R=function(){var e=Object(n.useState)(""),t=Object(v.a)(e,2),a=t[0],l=t[1],c=a?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(a)},u=Object(n.useState)(!1),s=Object(v.a)(u,2),i=s[0],m=s[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:P.a.column},r.a.createElement(W,{value:a,onChangeText:l,onEnter:o,error:c}),r.a.createElement(W,{className:P.a.blue}),r.a.createElement(L,null,"default"),r.a.createElement(L,{red:!0,onClick:o},"delete "),r.a.createElement(L,{disabled:!0},"disabled"),r.a.createElement(X,{checked:i,onChangeChecked:m},"some text "),r.a.createElement(X,{checked:i,onChange:function(e){return m(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))};var Z=function(){return r.a.createElement("div",null,r.a.createElement(b,null),r.a.createElement(j,null),r.a.createElement(M,null),r.a.createElement(R,null))};var z=function(){return r.a.createElement("div",null,r.a.createElement("div",null,"404"),r.a.createElement("div",null,"Page not found!"),r.a.createElement("div",null,"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"))},Q=function(){return r.a.createElement("div",null,"Junior")},$=function(){return r.a.createElement("div",null,"JuniorPlus")},V="/pre-junior",ee="/junior",te="/junior_plus";var ae=function(){return r.a.createElement("div",null,r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/",element:r.a.createElement(i.a,{to:V})}),r.a.createElement(i.b,{path:V,element:r.a.createElement(Z,null)}),r.a.createElement(i.b,{path:ee,element:r.a.createElement(Q,null)}),r.a.createElement(i.b,{path:te,element:r.a.createElement($,null)}),"// add routes",r.a.createElement(i.b,{path:"/*",element:r.a.createElement(z,null)})))},ne=a(9),re=a.n(ne);var le=function(){return r.a.createElement("div",{className:re.a.header},r.a.createElement(s.b,{to:V,className:re.a.link},"pre-junior"),r.a.createElement(s.b,{to:ee,className:re.a.link},"junior"),r.a.createElement(s.b,{to:te,className:re.a.link},"junior_plus"),r.a.createElement("div",{className:re.a.block}))};var ce=function(){return r.a.createElement("div",null,r.a.createElement(s.a,null,r.a.createElement(le,null),r.a.createElement(ae,null)))};var oe=function(){return r.a.createElement("div",{className:u.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(ce,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(oe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[23,1,2]]]);
//# sourceMappingURL=main.128c0f25.chunk.js.map