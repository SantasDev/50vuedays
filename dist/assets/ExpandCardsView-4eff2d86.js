import{d,r as p,o as t,c as e,F as _,a as m,n as u,b as h,e as l,t as f,_ as x,f as y}from"./index-1f7afbf6.js";const b={class:"exp_card-container"},g=["onClick"],v=d({__name:"ExpandCards",props:{items:{type:Array,required:!0}},setup(o){const a=o,s=p(1),n=r=>{s.value=r};return(r,W)=>(t(),e("div",b,[(t(!0),e(_,null,m(a.items,(c,i)=>(t(),e("div",{key:i,class:u(["panel",{active:i==s.value}]),onClick:w=>n(i),style:h({"background-image":`url('${c.img}')`})},[l("h3",null,f(c.title),1)],14,g))),128))]))}});const E=x(v,[["__scopeId","data-v-6183b634"]]),C={class:"expand-cards"},B=l("h1",null,"Expand Card",-1),q=d({__name:"ExpandCardsView",setup(o){const a=[{img:"https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",title:"Explore The World"},{img:"https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",title:"Wild Forest"},{img:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80",title:"Sunny Beach"},{img:"https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",title:"City on Winter"},{img:"https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",title:"Mountains - Clouds"}];return(s,n)=>(t(),e("div",C,[B,y(E,{items:a})]))}});export{q as default};
