import{P as w}from"./PageContainer-b1730844.js";import{u as b,r as p,o as l,c as u,b as e,d as o,y as S,e as r,f as d,bM as h,E as x,B as A,aP as i,bN as B,p as C,j as I,g as R}from"./index-600590e7.js";import{a as N,E as P}from"./el-col-efa2f3c5.js";import{_ as V,E as z}from"./_plugin-vue_export-helper-e998ce82.js";import{E as F}from"./el-progress-cca1cad0.js";/* empty css                */import"./el-message-378b593e.js";import"./isEqual-6f3d6966.js";const M=s=>(C("data-v-b3f10da2"),s=s(),I(),s),$=["src"],j=M(()=>R("br",null,null,-1)),q={__name:"UserAvatar",setup(s){const f=b(),t=p(),n=p(),m=c=>{const a=new FileReader;a.readAsDataURL(c.raw),a.onload=()=>{t.value=a.result}},v=async()=>{await h(t.value),await f.getUser(),x.success("头像上传成功"),t.value=""};return(c,a)=>{const U=A,g=F,_=z,y=N,E=P,k=w;return l(),u(k,{title:"更换头像"},{default:e(()=>[o(E,null,{default:e(()=>[o(y,{span:12},{default:e(()=>[o(g,{ref_key:"uploadRef",ref:n,class:"avatar-uploader","auto-upload":!1,"show-file-list":!1,"on-change":m},{default:e(()=>[t.value?(l(),S("img",{key:0,src:t.value,class:"avatar"},null,8,$)):(l(),u(U,{key:1,class:"avatar-uploader-icon"},{default:e(()=>[o(r(i))]),_:1}))]),_:1},512),j,o(_,{onClick:a[0]||(a[0]=D=>n.value.$el.querySelector("input").click()),type:"primary",icon:r(i),size:"large"},{default:e(()=>[d(" 选择图片 ")]),_:1},8,["icon"]),o(_,{onClick:v,type:"success",icon:r(B),size:"large"},{default:e(()=>[d(" 上传头像 ")]),_:1},8,["icon"])]),_:1})]),_:1})]),_:1})}}},W=V(q,[["__scopeId","data-v-b3f10da2"]]);export{W as default};
