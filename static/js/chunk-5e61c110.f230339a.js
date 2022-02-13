(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5e61c110"],{"094f":function(e,t,n){"use strict";n("f794")},9133:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-table",{staticStyle:{width:"100%"},attrs:{border:"",data:e.records}},[n("el-table-column",{attrs:{type:"index",label:"序号",width:"80",align:"center"}}),n("el-table-column",{attrs:{prop:"skuName",label:"名称",width:"width"}}),n("el-table-column",{attrs:{prop:"skuDesc",label:"描述",width:"width"}}),n("el-table-column",{attrs:{label:"默认图片",width:"110"},scopedSlots:e._u([{key:"default",fn:function(e){var t=e.row;e.$index;return[n("img",{staticStyle:{width:"80px",height:"80px"},attrs:{src:t.skuDefaultImg,alt:""}})]}}])}),n("el-table-column",{attrs:{prop:"weight",label:"重量",width:"80"}}),n("el-table-column",{attrs:{prop:"price",label:"价格",width:"80"}}),n("el-table-column",{attrs:{prop:"prop",label:"操作",width:"width"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;t.$index;return[0===r.isSale?n("el-button",{attrs:{type:"success",icon:"el-icon-bottom",size:"mini"},on:{click:function(t){return e.sale(r)}}}):n("el-button",{attrs:{type:"success",icon:"el-icon-top",size:"mini"},on:{click:function(t){return e.cancelSale(r)}}}),n("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"mini"},on:{click:e.edit}}),n("el-button",{attrs:{type:"info",icon:"el-icon-info",size:"mini"},on:{click:function(t){return e.getSkuInfo(r)}}}),n("el-popconfirm",{attrs:{title:"这是一段内容确定删除吗？"},on:{onConfirm:function(t){return e.deleteSku(r)}}},[n("el-button",{staticStyle:{"margin-left":"10px"},attrs:{slot:"reference",type:"danger",icon:"el-icon-delete",size:"mini"},slot:"reference"})],1)]}}])})],1),n("el-pagination",{staticStyle:{"text-align":"center"},attrs:{"current-page":e.page,"page-sizes":[3,5,10],"page-size":e.limit,layout:"prev, pager, next, jumper,->,sizes,total",total:e.total},on:{"current-change":e.getSkuList,"size-change":e.handleSizeChange}}),n("el-drawer",{attrs:{visible:e.show,"show-close":!1,size:"50%"},on:{"update:visible":function(t){e.show=t}}},[n("el-row",[n("el-col",{attrs:{span:5}},[e._v("名称")]),n("el-col",{attrs:{span:16}},[e._v(e._s(e.skuInfo.skuName))])],1),n("el-row",[n("el-col",{attrs:{span:5}},[e._v("描述")]),n("el-col",{attrs:{span:16}},[e._v(e._s(e.skuInfo.skuDesc))])],1),n("el-row",[n("el-col",{attrs:{span:5}},[e._v("价格")]),n("el-col",{attrs:{span:16}},[e._v(e._s(e.skuInfo.price)+"元")])],1),n("el-row",[n("el-col",{attrs:{span:5}},[e._v("平台属性")]),n("el-col",{attrs:{span:16}},[e._l(e.skuInfo.skuAttrValueList,(function(t){return n("el-tag",{key:t.id,staticStyle:{"margin-right":"10px"},attrs:{type:"success"}},[e._v(e._s(t.attrName)+"-"+e._s(t.valueName))])}))],2)],1),n("el-row",[n("el-col",{attrs:{span:5}},[e._v("商品图片")]),n("el-col",{attrs:{span:16}},[n("el-carousel",{attrs:{height:"450px"}},e._l(e.skuInfo.skuImageList,(function(e){return n("el-carousel-item",{key:e.id},[n("img",{attrs:{src:e.imgUrl}})])})),1)],1)],1)],1)],1)},a=[],s=n("1da1"),c=(n("96cf"),n("99af"),n("b775")),i=function(e,t){return Object(c["a"])({url:"/admin/product/list/".concat(e,"/").concat(t),method:"get"})},o=function(e){return Object(c["a"])({url:"/admin/product/onSale/".concat(e),method:"get"})},l=function(e){return Object(c["a"])({url:"/admin/product/cancelSale/".concat(e),method:"get"})},u=function(e){return Object(c["a"])({url:"/admin/product/deleteSku/".concat(e),method:"delete"})},d=function(e){return Object(c["a"])({url:"/admin/product/getSkuById/".concat(e),method:"get"})},p={name:"Sku",data:function(){return{page:1,limit:3,total:0,records:[],skuInfo:{},show:!1}},mounted:function(){this.getSkuList()},methods:{getSkuList:function(){var e=arguments,t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var r,a,s,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.length>0&&void 0!==e[0]?e[0]:1,t.page=r,a=t.page,s=t.limit,n.next=5,i(a,s);case 5:c=n.sent,200===c.code&&(t.records=c.data.records,t.total=c.data.total);case 7:case"end":return n.stop()}}),n)})))()},handleSizeChange:function(e){this.limit=e,this.getSkuList()},sale:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,o(e.id);case 2:r=n.sent,200===r.code&&(e.isSale=1,t.$message({type:"success",message:"上架成功"})),console.log(r);case 5:case"end":return n.stop()}}),n)})))()},cancelSale:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,l(e.id);case 2:r=n.sent,200===r.code&&(e.isSale=0,t.$message({type:"success",message:"下架成功"})),console.log(r);case 5:case"end":return n.stop()}}),n)})))()},edit:function(){this.$message("正在开发中")},deleteSku:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,u(e.id);case 2:r=n.sent,200===r.code&&(t.$message({type:"success",message:"删除成功"}),t.getSkuList(t.records.length>1?t.page:t.page-1));case 4:case"end":return n.stop()}}),n)})))()},getSkuInfo:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.show=!0,n.next=3,d(e.id);case 3:r=n.sent,200===r.code&&(t.skuInfo=r.data);case 5:case"end":return n.stop()}}),n)})))()}}},f=p,m=(n("b0fd"),n("094f"),n("2877")),g=Object(m["a"])(f,r,a,!1,null,"9ad0e866",null);t["default"]=g.exports},a6bf:function(e,t,n){},b0fd:function(e,t,n){"use strict";n("a6bf")},f794:function(e,t,n){}}]);