import{k as b,t as p,v as _,x as n,M as k,o as h,c as w,b as $,C as v,D as N,e as c,z as j,A as C,_ as x,H as E,s as r,ag as u,N as O,n as g,ah as S}from"./index-600590e7.js";const R=Symbol("rowContextKey"),K=["start","center","end","space-around","space-between","space-evenly"],P=["top","middle","bottom"],A=b({tag:{type:String,default:"div"},gutter:{type:Number,default:0},justify:{type:String,values:K,default:"start"},align:{type:String,values:P}}),B=p({name:"ElRow"}),D=p({...B,props:A,setup(f){const t=f,l=_("row"),a=n(()=>t.gutter);k(R,{gutter:a});const i=n(()=>{const e={};return t.gutter&&(e.marginRight=e.marginLeft="-".concat(t.gutter/2,"px")),e}),m=n(()=>[l.b(),l.is("justify-".concat(t.justify),t.justify!=="start"),l.is("align-".concat(t.align),!!t.align)]);return(e,d)=>(h(),w(C(e.tag),{class:N(c(m)),style:j(c(i))},{default:$(()=>[v(e.$slots,"default")]),_:3},8,["class","style"]))}});var L=x(D,[["__file","/home/runner/work/element-plus/element-plus/packages/components/row/src/row.vue"]]);const F=E(L),H=b({tag:{type:String,default:"div"},span:{type:Number,default:24},offset:{type:Number,default:0},pull:{type:Number,default:0},push:{type:Number,default:0},xs:{type:r([Number,Object]),default:()=>u({})},sm:{type:r([Number,Object]),default:()=>u({})},md:{type:r([Number,Object]),default:()=>u({})},lg:{type:r([Number,Object]),default:()=>u({})},xl:{type:r([Number,Object]),default:()=>u({})}}),I=p({name:"ElCol"}),J=p({...I,props:H,setup(f){const t=f,{gutter:l}=O(R,{gutter:n(()=>0)}),a=_("col"),i=n(()=>{const e={};return l.value&&(e.paddingLeft=e.paddingRight="".concat(l.value/2,"px")),e}),m=n(()=>{const e=[];return["span","offset","pull","push"].forEach(s=>{const o=t[s];g(o)&&(s==="span"?e.push(a.b("".concat(t[s]))):o>0&&e.push(a.b("".concat(s,"-").concat(t[s]))))}),["xs","sm","md","lg","xl"].forEach(s=>{g(t[s])?e.push(a.b("".concat(s,"-").concat(t[s]))):S(t[s])&&Object.entries(t[s]).forEach(([o,y])=>{e.push(o!=="span"?a.b("".concat(s,"-").concat(o,"-").concat(y)):a.b("".concat(s,"-").concat(y)))})}),l.value&&e.push(a.is("guttered")),[a.b(),e]});return(e,d)=>(h(),w(C(e.tag),{class:N(c(m)),style:j(c(i))},{default:$(()=>[v(e.$slots,"default")]),_:3},8,["class","style"]))}});var M=x(J,[["__file","/home/runner/work/element-plus/element-plus/packages/components/col/src/col.vue"]]);const G=E(M);export{F as E,G as a};
