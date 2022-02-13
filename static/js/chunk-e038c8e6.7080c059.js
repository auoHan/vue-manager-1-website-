(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e038c8e6"],{a4fa:function(e,t,i){"use strict";var n=i("b775"),s="/admin/acl/permission";t["a"]={getPermissionList:function(){return Object(n["a"])({url:"".concat(s),method:"get"})},removePermission:function(e){return Object(n["a"])({url:"".concat(s,"/remove/").concat(e),method:"delete"})},addPermission:function(e){return Object(n["a"])({url:"".concat(s,"/save"),method:"post",data:e})},updatePermission:function(e){return Object(n["a"])({url:"".concat(s,"/update"),method:"put",data:e})},toAssign:function(e){return Object(n["a"])({url:"".concat(s,"/toAssign/").concat(e),method:"get"})},doAssign:function(e,t){return Object(n["a"])({url:"".concat(s,"/doAssign"),method:"post",params:{roleId:e,permissionId:t}})}}},e296:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("el-table",{staticStyle:{"margin-bottom":"20px"},attrs:{border:"",data:e.menuPermissionList,"expand-row-keys":e.expandKeys,"row-key":"id"}},[i("el-table-column",{attrs:{prop:"name",label:"名称"}}),i("el-table-column",{attrs:{prop:"code",label:"权限值"}}),i("el-table-column",{attrs:{prop:"toCode",label:"跳转权限值"}}),i("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[i("HintButton",{attrs:{disabled:4===n.level,type:"primary",icon:"el-icon-plus",size:"mini",title:e.getAddTitle(n.level)},on:{click:function(t){return e.toAddPermission(n)}}}),i("HintButton",{attrs:{type:"primary",icon:"el-icon-edit",size:"mini",disabled:1===n.level,title:4===n.level?"修改功能":"修改菜单"},on:{click:function(t){return e.toUpdatePermission(n)}}}),i("HintButton",{attrs:{disabled:1===n.level,type:"danger",icon:"el-icon-delete",size:"mini",title:"删除"},on:{click:function(t){return e.removePermission(n)}}})]}}])})],1),i("el-dialog",{attrs:{visible:e.dialogPermissionVisible,title:e.dialogTitle},on:{"update:visible":function(t){e.dialogPermissionVisible=t},close:e.resetData}},[i("el-form",{ref:"permission",attrs:{model:e.permission,rules:e.permissionRules,"label-width":"120px"}},[e.permission.level>2&&!e.permission.id?i("el-form-item",{attrs:{label:"父级名称"}},[i("el-input",{attrs:{value:e.permission.pname,disabled:""}})],1):e._e(),i("el-form-item",{attrs:{label:"名称",prop:"name"}},[i("el-input",{model:{value:e.permission.name,callback:function(t){e.$set(e.permission,"name",t)},expression:"permission.name"}})],1),i("el-form-item",{attrs:{label:"功能权限值",prop:"code"}},[i("el-input",{model:{value:e.permission.code,callback:function(t){e.$set(e.permission,"code",t)},expression:"permission.code"}})],1),4===e.permission.level?i("el-form-item",{attrs:{label:"跳转路由权限值",prop:"toCode"}},[i("el-input",{model:{value:e.permission.toCode,callback:function(t){e.$set(e.permission,"toCode",t)},expression:"permission.toCode"}})],1):e._e()],1),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:e.resetData}},[e._v("取 消")]),i("el-button",{attrs:{type:"primary"},on:{click:e.addOrUpdatePermission}},[e._v("确 定")])],1)],1)],1)},s=[];i("a4d3"),i("b64b");function r(e,t){if(null==e)return{};var i,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(s[i]=e[i]);return s}function o(e,t){if(null==e)return{};var i,n,s=r(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(s[i]=e[i])}return s}var a=i("5530"),l=i("1da1"),c=(i("b0c0"),i("96cf"),i("a4fa")),m=["pname"],u={name:[{required:!0,message:"名称必须输入"}],code:[{required:!0,message:"权限值必须输入"}]},d={name:[{required:!0,message:"名称必须输入"}],code:[{required:!0,trigger:"blur",message:"功能权限值必须输入"}]},p={name:"PermissionList",data:function(){return{menuPermissionList:[],expandKeys:[],dialogPermissionVisible:!1,permission:{level:0,name:"",code:"",toCode:""}}},computed:{dialogTitle:function(){var e=this.permission,t=e.id,i=e.level;return t?4===i?"修改功能":"修改菜单":4===i?"添加功能":"添加".concat(2===i?"一级":"二级","菜单")},permissionRules:function(){return 4===this.permission.level?d:u}},mounted:function(){this.fetchPermissionList()},methods:{getAddTitle:function(e){return 1===e||2===e?"添加菜单":3===e?"添加功能":void 0},fetchPermissionList:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c["a"].getPermissionList();case 2:i=t.sent,e.menuPermissionList=i.data.children,e.expandKeys=[e.menuPermissionList[0].id];case 5:case"end":return t.stop()}}),t)})))()},toAddPermission:function(e){var t=this;this.dialogPermissionVisible=!0,this.permission.pid=e.id,this.permission.level=e.level+1,this.permission.type=4===this.permission.level?2:1,this.permission.pname=e.name,this.$nextTick((function(){return t.$refs.permission.clearValidate()}))},toUpdatePermission:function(e){var t=this;this.dialogPermissionVisible=!0,this.permission=Object(a["a"])({},e),this.permission.type=4===this.permission.level?2:1,this.$nextTick((function(){return t.$refs.permission.clearValidate()}))},removePermission:function(e){var t=this;this.$confirm("此操作将永久删除该记录, 是否继续?","提示",{type:"warning"}).then(Object(l["a"])(regeneratorRuntime.mark((function i(){var n;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,e.removePermission(e.id);case 2:n=i.sent,t.$message.success(n.message||"删除成功!"),t.fetchPermissionList();case 5:case"end":return i.stop()}}),i)})))).catch((function(e){"cancel"===e&&t.$message({type:"info",message:"已取消删除"})}))},addOrUpdatePermission:function(){var e=this;this.$refs.permission.validate(function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(i){var n,s,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!i){t.next=8;break}return n=e.permission,n.pname,s=o(n,m),t.next=4,c["a"][s.id?"updatePermission":"addPermission"](s);case 4:r=t.sent,e.$message.success(r.message||"".concat(s.id?"修改":"添加","成功!")),e.resetData(),e.fetchPermissionList();case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},resetData:function(){this.dialogPermissionVisible=!1,this.permission={level:0,name:"",code:"",toCode:""}}}},f=p,b=i("2877"),v=Object(b["a"])(f,n,s,!1,null,null,null);t["default"]=v.exports}}]);