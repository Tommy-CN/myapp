webpackJsonp([8],{B8tX:function(t,e){},MbHr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("qmEX"),s={name:"Article",data:function(){return{loading:!1,article:{title:"前端技术日异月新",content:"大巴司机停下车后发现，这哪是什么“鬼影”，分明是一个人啊!因为当时是晚上九点多，而且这个人躺在超车道上，大巴车司机看到他的时候已经来不及刹车，最终男子被撞身亡。后来经过调查发现，其实这两宗报警都是同一件事，这名男子就是那台“幽灵车”的车主。更可怕的是，过了不到五分钟，一个大巴司机又打电话报警说高速公路上突现“鬼影”。车主开车开到一半自己滚到了高速路上。"}}},methods:{getArticlesDetails:function(t){var e=this;this.loading=!0,a.a.post("/api//article",{id:t}).then(function(t){200===t.code?e.article=t.data:(e.article={},e.$store.dispatch("timer"))}).catch(function(t){e.$store.dispatch("timer"),e.article={}})}}},n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"article"},[e("h2",{staticClass:"title"},[this._v(this._s(this.article.title))]),this._v(" "),e("div",{staticClass:"content",domProps:{innerHTML:this._s(this.article.content)}})])},staticRenderFns:[]},c=i("8AGX")(s,n,!1,function(t){i("B8tX")},"data-v-0a5d3620",null);e.default=c.exports}});
//# sourceMappingURL=8.cf0845f058d88aa1d33a.js.map