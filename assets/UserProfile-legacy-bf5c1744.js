System.register(["./index-legacy-b1cc00e0.js","./el-form-item-legacy-3035d3d9.js","./_plugin-vue_export-helper-legacy-5be645ab.js","./el-input-legacy-62a78cf3.js","./PageContainer-legacy-ef3370da.js","./el-message-legacy-43ca4834.js"],(function(e,l){"use strict";var a,u,t,r,n,s,i,m,d,o,c,g,f,p;return{setters:[e=>{a=e.u,u=e.r,t=e.o,r=e.c,n=e.b,s=e.d,i=e.f,m=e.bZ,d=e.E},e=>{o=e.E,c=e.a},e=>{g=e.E},e=>{f=e.E},e=>{p=e.P},null],execute:function(){e("default",{__name:"UserProfile",setup(e){const l=a(),y=u(),v=u({username:"",nickname:"",email:""});v.value=l.user;const b={nickname:[{required:!0,message:"昵称不能为空",trigger:"blur"},{pattern:/^\S{2,10}$/,message:"昵称长度在2-10个非空字符之间",trigger:"blur"}],email:[{required:!0,message:"邮箱不能为空",trigger:"blur"},{type:"email",message:"邮箱格式不正确",trigger:["blur","change"]}]},_=async()=>{await y.value.validate(),await m(v.value),d.success("更新成功"),l.getUser()};return(e,l)=>{const a=f,u=o,m=g,d=c;return t(),r(p,{title:"基本资料"},{default:n((()=>[s(d,{model:v.value,rules:b,ref_key:"form",ref:y,"label-width":"100px",style:{"max-width":"460px"}},{default:n((()=>[s(u,{label:"登录名称"},{default:n((()=>[s(a,{modelValue:v.value.username,"onUpdate:modelValue":l[0]||(l[0]=e=>v.value.username=e),disabled:!0},null,8,["modelValue"])])),_:1}),s(u,{label:"用户昵称",prop:"nickname"},{default:n((()=>[s(a,{modelValue:v.value.nickname,"onUpdate:modelValue":l[1]||(l[1]=e=>v.value.nickname=e)},null,8,["modelValue"])])),_:1}),s(u,{label:"用户邮箱",prop:"email"},{default:n((()=>[s(a,{modelValue:v.value.email,"onUpdate:modelValue":l[2]||(l[2]=e=>v.value.email=e)},null,8,["modelValue"])])),_:1}),s(u,{style:{"justify-content":"flex-end"}},{default:n((()=>[s(m,{style:{"justify-content":"flex-end"},type:"primary",onClick:_},{default:n((()=>[i("提交修改")])),_:1})])),_:1})])),_:1},8,["model"])])),_:1})}}})}}}));
