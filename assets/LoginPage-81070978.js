import{u as R,r as g,a as $,w as q,o as w,c as v,b as s,d as e,e as i,f as u,g as x,U as N,E as c,h as P,i as b,l as y,p as z,j as F}from"./index-600590e7.js";import{E as M,a as T}from"./el-col-efa2f3c5.js";import{E as j}from"./el-checkbox-3f65f922.js";import{E as A,a as D}from"./el-form-item-0e65acbd.js";import{E as G}from"./el-link-85591e18.js";import{_ as H,E as J}from"./_plugin-vue_export-helper-e998ce82.js";import{E as K}from"./el-input-1d2406b5.js";import"./el-message-378b593e.js";import"./isEqual-6f3d6966.js";const S=m=>(z("data-v-3428fd2e"),m=m(),F(),m),O=S(()=>x("h1",null,"注册",-1)),Q=S(()=>x("h1",null,"登录",-1)),W={class:"flex"},X={__name:"LoginPage",setup(m){const U=R(),n=g(!0),h=$(),o=g({username:"",password:"",repassword:""}),V={username:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:5,max:10,message:"用户名必须是5-10位的字符",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{pattern:/^\S{6,15}$/,message:"密码必须是6-15位的非空字符",trigger:"blur"}],repassword:[{required:!0,message:"请输入密码",trigger:"blur"},{pattern:/^\S{6,15}$/,message:"密码必须是6-15位的非空字符",trigger:"blur"},{validator:(t,a,p)=>{a!==o.value.password?p(new Error("两次密码不一致")):p()},trigger:"blur"}]},f=g(),C=async()=>{await f.value.validate();const{data:t}=await N(o.value);t.code===0?(n.value=!1,c({message:t.message,type:"success"})):c({message:t.message,type:"error"})},I=async()=>{await f.value.validate();const{data:t}=await P(o.value);t.code===0?(U.setToken(t.token),c.success(t.message),h.push("/")):c.error(t.message)};return q(n,()=>{o.value={username:"",password:"",repassword:""}}),(t,a)=>{const p=T,l=A,d=K,E=J,_=G,k=D,L=j,B=M;return w(),v(B,{class:"login-page bg"},{default:s(()=>[e(p,{span:12}),e(p,{span:6,offset:3,class:"form"},{default:s(()=>[n.value?(w(),v(k,{key:0,model:o.value,rules:V,ref_key:"form",ref:f,size:"large",autocomplete:"off"},{default:s(()=>[e(l,null,{default:s(()=>[O]),_:1}),e(l,{prop:"username"},{default:s(()=>[e(d,{modelValue:o.value.username,"onUpdate:modelValue":a[0]||(a[0]=r=>o.value.username=r),"prefix-icon":i(b),placeholder:"请输入用户名"},null,8,["modelValue","prefix-icon"])]),_:1}),e(l,{prop:"password"},{default:s(()=>[e(d,{modelValue:o.value.password,"onUpdate:modelValue":a[1]||(a[1]=r=>o.value.password=r),"prefix-icon":i(y),type:"password",placeholder:"请输入密码","show-password":""},null,8,["modelValue","prefix-icon"])]),_:1}),e(l,{prop:"repassword"},{default:s(()=>[e(d,{modelValue:o.value.repassword,"onUpdate:modelValue":a[2]||(a[2]=r=>o.value.repassword=r),"prefix-icon":i(y),type:"password",placeholder:"请输入再次密码","show-password":""},null,8,["modelValue","prefix-icon"])]),_:1}),e(l,null,{default:s(()=>[e(E,{onClick:C,class:"button",type:"primary","auto-insert-space":""},{default:s(()=>[u(" 注册 ")]),_:1})]),_:1}),e(l,{class:"flex"},{default:s(()=>[e(_,{style:{color:"#c3c8c6"},type:"info",underline:!1,onClick:a[3]||(a[3]=r=>n.value=!1)},{default:s(()=>[u(" ← 登录 ")]),_:1})]),_:1})]),_:1},8,["model"])):(w(),v(k,{key:1,ref_key:"form",ref:f,size:"large",autocomplete:"off",model:o.value,rules:V},{default:s(()=>[e(l,null,{default:s(()=>[Q]),_:1}),e(l,{prop:"username"},{default:s(()=>[e(d,{modelValue:o.value.username,"onUpdate:modelValue":a[4]||(a[4]=r=>o.value.username=r),"prefix-icon":i(b),placeholder:"请输入用户名"},null,8,["modelValue","prefix-icon"])]),_:1}),e(l,{prop:"password"},{default:s(()=>[e(d,{modelValue:o.value.password,"onUpdate:modelValue":a[5]||(a[5]=r=>o.value.password=r),name:"password","prefix-icon":i(y),type:"password",placeholder:"请输入密码","show-password":""},null,8,["modelValue","prefix-icon"])]),_:1}),e(l,{class:"flex"},{default:s(()=>[x("div",W,[e(L,{style:{color:"#c3c8c6"}},{default:s(()=>[u("记住我")]),_:1}),e(_,{type:"primary",underline:!1},{default:s(()=>[u("忘记密码？")]),_:1})])]),_:1}),e(l,null,{default:s(()=>[e(E,{onClick:I,class:"button",type:"primary","auto-insert-space":""},{default:s(()=>[u("登录")]),_:1})]),_:1}),e(l,{class:"flex"},{default:s(()=>[e(_,{style:{color:"#c3c8c6"},type:"info",underline:!1,onClick:a[6]||(a[6]=r=>n.value=!0)},{default:s(()=>[u(" 注册 → ")]),_:1})]),_:1})]),_:1},8,["model"]))]),_:1})]),_:1})}}},ue=H(X,[["__scopeId","data-v-3428fd2e"]]);export{ue as default};
