webpackJsonp([6],{QCp4:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o("qmEX"),a={name:"signUp",data:function(){return{loading:!1,showCode:!1,email:"",password:"",code:""}},methods:{sendCode:function(){var t=this;i.a.post("/api/sign/sendEmail",{email:t.email}).then(function(e){200===e.code||t.prompt("error",e.msg)}).catch(function(e){t.loading=!1,t.prompt("error","通信错误稍后再试")})},prompt:function(t,e){this.$store.commit("timerStart",{time:3}),this.$store.dispatch("timer",{type:t,info:e})},forgetPassword:function(){var t=this;if(this.loading)return!1;this.loading=!0,i.a.post("/api/sign/forget",{email:t.email,password:t.password,code:t.code}).then(function(e){t.loading=!1,200===e.code?t.$router.replace("/"):t.prompt("error",e.msg)}).catch(function(e){t.loading=!1,t.prompt("error","通信错误稍后再试")})}}},s={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"sign"},[o("div",{staticClass:"signForm"},[o("h2",{staticClass:"signTitle"},[t._v("忘记密码")]),t._v(" "),o("div",{staticClass:"signInput"},[o("input",{directives:[{name:"model",rawName:"v-model.tirm",value:t.email,expression:"email",modifiers:{tirm:!0}}],attrs:{type:"text",placeholder:"请输入正确的邮箱地址",maxlength:"20",autocomplete:"off"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),o("div",{staticClass:"signInput"},[o("input",{directives:[{name:"model",rawName:"v-model.tirm",value:t.password,expression:"password",modifiers:{tirm:!0}}],attrs:{type:"password",placeholder:"请输入6-12密码",maxlength:"12",autocomplete:"off"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),o("div",{staticClass:"signInput"},[o("input",{directives:[{name:"model",rawName:"v-model.tirm",value:t.code,expression:"code",modifiers:{tirm:!0}}],attrs:{type:"password",placeholder:"请输入6位邮箱验证码",maxlength:"6",autocomplete:"off"},domProps:{value:t.code},on:{input:function(e){e.target.composing||(t.code=e.target.value)}}}),t._v(" "),o("div",{staticClass:"sendCode",class:[t.email?"active":""],on:{click:function(e){t.email&&t.sendCode()}}},[t._v("发送验证码")])]),t._v(" "),o("button",{staticClass:"submitBtn",class:[t.email&&t.password&&t.code?"active":"",t.loading?"loading":""],attrs:{type:"button"},on:{click:function(e){t.email&&t.password&&t.code&&t.forgetPassword()}}},[t._v("确定")])])])},staticRenderFns:[]},n=o("8AGX")(a,s,!1,function(t){o("sChf")},"data-v-44efda6c",null);e.default=n.exports},sChf:function(t,e){}});
//# sourceMappingURL=6.33afafcec5a6fcb44fdb.js.map