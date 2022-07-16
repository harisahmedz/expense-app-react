(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(8),l=n.n(s),i=(n(14),n(5)),r=n(2),u=n(7),j=(n(15),n(16),n(0)),o=function(e){var t=Object(a.useState)(""),n=Object(r.a)(t,2),c=n[0],s=n[1],l=Object(a.useState)(""),i=Object(r.a)(l,2),u=i[0],o=i[1],d=Object(a.useState)(""),b=Object(r.a)(d,2),x=b[0],O=b[1];return Object(j.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={title:c,amount:+u,date:new Date(x)};s(""),o(""),O(""),e.onSaveExpenseData(n)},children:[Object(j.jsxs)("div",{className:"new-expense__controls",children:[Object(j.jsxs)("div",{className:"new-expense__control",children:[Object(j.jsx)("label",{children:"Title"}),Object(j.jsx)("input",{type:"text",value:c,onChange:function(e){s(e.target.value)}})]}),Object(j.jsxs)("div",{className:"new-expense__control",children:[Object(j.jsx)("label",{children:"Amount"}),Object(j.jsx)("input",{type:"number",min:"0.01",step:"0.01",value:u,onChange:function(e){o(e.target.value)}})]}),Object(j.jsxs)("div",{className:"new-expense__control",children:[Object(j.jsx)("label",{children:"Amount"}),Object(j.jsx)("input",{type:"date",min:"01-01-2019",max:"12-31-2021",value:x,onChange:function(e){O(e.target.value)}})]})]}),Object(j.jsx)("div",{className:".new-expense__actions",children:Object(j.jsx)("button",{type:"submit",children:"Add Expense"})})]})},d=function(e){return Object(j.jsx)("div",{className:"new-expense",children:Object(j.jsx)(o,{onSaveExpenseData:function(t){var n=Object(u.a)(Object(u.a)({},t),{},{id:Math.random().toString()});e.onAddExpense(n)}})})},b=(n(18),function(e){var t="card "+e.className;return Object(j.jsxs)("div",{className:t,children:[e.children," "]})}),x=(n(19),n(20),function(e){return Object(j.jsx)("div",{className:"expenses-filter",children:Object(j.jsxs)("div",{className:"expenses-filter__control",children:[Object(j.jsx)("label",{children:"Filter by year"}),Object(j.jsxs)("select",{value:e.selected,onChange:function(t){e.onChangeFilter(t.target.value)},children:[Object(j.jsx)("option",{value:"2022",children:"2022"}),Object(j.jsx)("option",{value:"2021",children:"2021"}),Object(j.jsx)("option",{value:"2020",children:"2020"}),Object(j.jsx)("option",{value:"2019",children:"2019"})]})]})})}),O=(n(21),n(22),function(e){var t=e.date.toLocaleString("en-US",{month:"long"}),n=e.date.getDate(),a=e.date.getFullYear();return Object(j.jsxs)("div",{className:"expense-date",children:[Object(j.jsx)("div",{className:"expense-date__month",children:t}),Object(j.jsx)("div",{className:"expense-date__year",children:n}),Object(j.jsx)("div",{className:"expense-date__day ",children:a})]})}),h=function(e){return Object(j.jsx)("li",{children:Object(j.jsxs)(b,{className:"expense-item",children:[Object(j.jsx)(O,{date:e.date}),Object(j.jsxs)("div",{className:"expense-item__description",children:[Object(j.jsx)("h2",{children:e.title}),Object(j.jsxs)("div",{className:"expense-item__price",children:["$",e.amount]})]})]})})},m=(n(23),function(e){return 0===e.items.length?Object(j.jsx)("h2",{className:"expenses-list__fallback ",children:"No Expenses Found"}):Object(j.jsx)("ul",{className:"expenses-list",children:e.items.map((function(e){return Object(j.jsx)(h,{title:e.title,amount:e.amount,date:e.date},e.id)}))})}),p=n(9),v=(n(24),function(e){var t=0;return e.maxValue>0&&(t=Math.round(e.value/e.maxValue*100)+"%"),Object(j.jsxs)("div",{className:"chart-bar",children:[Object(j.jsx)("div",{className:"chart-bar__inner",children:Object(j.jsx)("div",{className:"chart-bar__fill",style:{height:t}})}),Object(j.jsx)("div",{className:"chart-bar__label",children:e.label})]})}),f=(n(25),function(e){var t=e.dataPoints.map((function(e){return e.Value})),n=Math.max.apply(Math,Object(i.a)(t));return Object(j.jsx)("div",{className:"chart",children:e.dataPoints.map((function(e){return Object(j.jsx)(v,{value:e.Value,maxValue:n,label:e.label},e.label)}))})}),_=function(e){var t,n=[{label:"Jan",Value:0},{label:"Feb",Value:0},{label:"Mar",Value:0},{label:"Apr",Value:0},{label:"May",Value:0},{label:"Jun",Value:0},{label:"Jul",Value:0},{label:"Aug",Value:0},{label:"Oct",Value:0},{label:"Nov",Value:0},{label:"Dec",Value:0}],a=Object(p.a)(e.expenses);try{for(a.s();!(t=a.n()).done;){var c=t.value;n[c.date.getMonth()].Value+=c.amount}}catch(s){a.e(s)}finally{a.f()}return Object(j.jsx)(f,{dataPoints:n})},N=function(e){var t=Object(a.useState)("2021"),n=Object(r.a)(t,2),c=n[0],s=n[1],l=e.items.filter((function(e){return e.date.getFullYear().toString()===c}));return Object(j.jsxs)(b,{className:"expenses-items",children:[Object(j.jsx)(x,{selected:c,onChangeFilter:function(e){s(e)}}),Object(j.jsx)(_,{expenses:l}),Object(j.jsx)(m,{items:l})]})},g=[{id:"1",title:"Toilet Paper",amount:94.75,date:new Date(2020,2,28)},{id:"2",title:"Car Insurance",amount:294.75,date:new Date(2021,2,28)},{id:"3",title:"Book",amount:12.75,date:new Date(2021,4,28)}],V=function(){var e=Object(a.useState)(g),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)(d,{onAddExpense:function(e){c((function(t){return[e].concat(Object(i.a)(n))}))}}),Object(j.jsx)(N,{items:n})]})};l.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(V,{})}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.ceff98f2.chunk.js.map