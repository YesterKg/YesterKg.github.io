"use strict";(self["webpackChunkgame_web"]=self["webpackChunkgame_web"]||[]).push([[68],{4068:function(e,t,s){s.r(t),s.d(t,{default:function(){return m}});var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"UpdataLogBox"},[t("div",{staticClass:"LeftBox"},[t("p"),t("div",{staticClass:"block"},[t("el-timeline",{attrs:{reverse:!0}},e._l(e.getUpdate,(function(s){return t("el-timeline-item",{key:s.id,attrs:{timestamp:s.UpdataTime,placement:"top",size:"large",icon:"el-icon-more"}},[t("el-card",e._l(s.UpdataText,(function(s){return t("h4",{key:s.index},[e._v(" "+e._s(s.UpdateTitle)+" ")])})),0)],1)})),1)],1)]),e._m(0),t("div",{staticClass:"RightBox"},[t("p"),t("el-form",{ref:"addNewRef",attrs:{model:e.addNewForm,rules:e.addNewRules}},[t("el-form-item",{attrs:{prop:"email"}},[t("el-input",{attrs:{placeholder:"邮箱地址"},model:{value:e.addNewForm.email,callback:function(t){e.$set(e.addNewForm,"email",t)},expression:"addNewForm.email"}})],1),t("el-form-item",[t("el-input",{attrs:{type:"textarea",placeholder:"建议箱",rows:e.minTextRows},model:{value:e.addNewForm.textBody,callback:function(t){e.$set(e.addNewForm,"textBody",t)},expression:"addNewForm.textBody"}})],1),t("el-form-item",{staticClass:"btnBox"},[t("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("提交意见")]),t("el-button",{on:{click:e.onEmpty}},[e._v("清空建议箱")])],1)],1)],1)])},i=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"logoBox"},[t("img",{attrs:{src:s(1053),alt:""}})])}],o=s(3822),r={name:"UpdataLog",data(){return{addNewForm:{email:"",textBody:""},minTextRows:15,addNewRules:{email:[{required:!0,message:"请输入邮箱地址",trigger:["blur","change"]},{type:"email",message:"请输入格式正确的邮箱地址"}]}}},computed:{...(0,o.Se)(["getUpdate"])},methods:{onSubmit(){this.$refs.addNewRef.validate((e=>{e?(this.addNewForm={},this.$message.success("提交成功，感谢您的建议！")):this.$message.error("请按正确格式输入！")}))},onEmpty(e){this.addNewForm.textBody?this.$confirm("确认清空所以辛苦写的意见吗?").then((t=>{e(this.addNewForm.textBody="",this.$message("已清空，请继续编写!"))})).catch((e=>{})):this.$message.warning("您还没有写任何建议哦！")},scrollWidth(){const e=document.body.clientWidth;this.minTextRows=e<800?5:15}},mounted(){window.addEventListener("resize",this.scrollWidth),this.$nextTick(this.scrollWidth())},beforeDestroy(){window.removeEventListener("resize",this.scrollWidth)}},d=r,l=s(1001),n=(0,l.Z)(d,a,i,!1,null,"3851dbba",null),m=n.exports},1053:function(e,t,s){e.exports=s.p+"img/logo.60108810.png"}}]);
//# sourceMappingURL=68.d053b397.js.map