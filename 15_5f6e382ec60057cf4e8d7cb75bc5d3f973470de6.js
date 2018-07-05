webpackJsonp([15],{61:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=t(16),n=t.n(r),i=t(631),l=t(170),o=t(430),p=t.n(o);a.default=function(){return n.a.createElement(r.Fragment,null,n.a.createElement(i.a,{examples:p.a}),n.a.createElement(l.a,null))}},631:function(e,a,t){"use strict";var r=t(64),n=t.n(r),i=t(70),l=t.n(i),o=t(68),p=t.n(o),s=t(69),c=t.n(s),m=t(71),h=t.n(m),d=t(72),u=t.n(d),_=t(16),g=t.n(_),x=t(76),f=(t.n(x),t(90)),y=t(73),k=t.n(y),b=t(17),v=t.n(b),w=t(222),E=t(102),N=t(632),T=t(635),V=t.n(T),A=function(e){function a(){var e,t,r,n;p()(this,a);for(var i=arguments.length,o=Array(i),s=0;s<i;s++)o[s]=arguments[s];return t=r=h()(this,(e=a.__proto__||l()(a)).call.apply(e,[this].concat(o))),r.state={searchValue:""},n=t,h()(r,n)}return u()(a,e),c()(a,[{key:"onSearch",value:function(e){this.setState({searchValue:e.target.value})}},{key:"getSearchString",value:function(e){return"\n      \n"+e.name+"\n      \n"+e.type+"\n    "}},{key:"clearSearhField",value:function(e){27===e.keyCode&&this.setState({searchValue:""})}},{key:"renderGroupElement",value:function(e){var a=this.state.searchValue;return g.a.createElement(f.a,{key:e.path,to:E.a+"/examples/"+e.path},g.a.createElement("div",null,g.a.createElement(x.Typography,{type:"c1",color:"grey",style:{textTransform:"capitalize"}},e.type),this.highlightSearchQuery(e.name,a)))}},{key:"highlightSearchQuery",value:function(e,a){var t=this.context.theme,r=e.split(RegExp("("+a+")","gi"));return g.a.createElement(x.Typography,{type:"b2",color:"dark_grey"},r.map(function(e,r){return e.toLowerCase()===a.toLowerCase()?g.a.createElement("mark",{key:r,className:t.fill_secondary},e):e}))}},{key:"renderGroup",value:function(e){var a=this;return g.a.createElement("div",{key:e.key,className:V.a.group_item},!!e.examples.length&&g.a.createElement(x.Typography,{className:V.a.group_name,type:"c1",color:"grey"},e.name),g.a.createElement(N.a,null,e.examples.map(function(e){return a.renderGroupElement(e)})))}},{key:"renderEmpty",value:function(){return g.a.createElement(x.Typography,{type:"h5",color:"black",style:{marginTop:"50px"},align:"center"},"Nothing found")}},{key:"render",value:function(){var e=this,a=this.context.intl,t=this.state.searchValue,r=this.props,i=r.examples,l=r.className,o=[];return i.forEach(function(a){var r=Object(w.a)(a.examples,t,e.getSearchString.bind(e));r.length&&o.push(n()({},a,{examples:r}))}),g.a.createElement("div",{id:"wrapper",className:k()(V.a.wrapper,l)},g.a.createElement("div",{className:V.a.upper_block},g.a.createElement("div",{className:V.a.title_block},g.a.createElement(x.Typography,{type:"h3",color:"black"},a.getText("Examples.Title"))),g.a.createElement(x.TextField,{onChange:this.onSearch.bind(this),onKeyDown:this.clearSearhField.bind(this),color:"light_grey",value:t,className:V.a.search_field,inputProps:{className:V.a.input},size:"large",placeholder:a.getText("Examples.Search")})),g.a.createElement("div",{className:V.a.examples_list},!!o.length&&o.map(function(a){return e.renderGroup(a)}),!o.length&&this.renderEmpty()))}}]),a}(_.Component);A.propTypes={className:v.a.string,examples:v.a.arrayOf(v.a.object)},A.contextTypes={intl:v.a.object,theme:v.a.object},A.defaultProps={examples:{},className:""},a.a=A},632:function(e,a,t){"use strict";var r=t(64),n=t.n(r),i=t(70),l=t.n(i),o=t(68),p=t.n(o),s=t(69),c=t.n(s),m=t(71),h=t.n(m),d=t(72),u=t.n(d),_=t(16),g=t.n(_),x=t(17),f=t.n(x),y=t(90),k=t(73),b=t.n(k),v=t(633),w=t.n(v),E=function(e){function a(){return p()(this,a),h()(this,(a.__proto__||l()(a)).apply(this,arguments))}return u()(a,e),c()(a,[{key:"getChildren",value:function(e,a){var t=this.props.plateClass,r={animationDelay:a/20+"s"};return e?e.type===y.a?g.a.cloneElement(e,n()({},e.props,{key:a,style:r,className:b()(e.props.className,w.a.plate,w.a.link,t)})):[g.a.createElement("div",{className:w.a.plate_container,key:e.key||a,style:r},g.a.createElement("div",{tabIndex:0,style:r,className:b()(w.a.plate,t)},e))]:null}},{key:"render",value:function(){var e=this.props,a=e.className,t=e.children;return g.a.createElement("div",{className:b()(w.a.main_content,a)},t.map(this.getChildren,this))}}]),a}(_.Component);E.propTypes={className:f.a.string,plateClass:f.a.string,children:f.a.node},E.defaultProps={className:"",plateClass:"",children:null},a.a=E},633:function(e,a,t){var r=t(634);"string"==typeof r&&(r=[[e.i,r,""]]),t(66)(r,{hmr:!0,transform:void 0}),r.locals&&(e.exports=r.locals)},634:function(e,a,t){(a=e.exports=t(65)(!1)).push([e.i,'.main_content_3CNzW{display:grid;grid-template-columns:repeat(3,1fr);grid-auto-rows:100px;grid-gap:20px}.plate_container_NLPOh{cursor:pointer;animation:showAnim_2Ytai .4s cubic-bezier(0,1.85,1,1.07) forwards}.plate_TkBgk{animation:opacity_3g0Wt .4s cubic-bezier(0,1.85,1,1.07) forwards;width:100%;height:100%;border:1px solid rgba(214,219,222,.15);box-shadow:0 4px 10px 0 rgba(64,72,79,.1);border-radius:8px;position:relative;opacity:0;transition:box-shadow .3s,transform .3s;padding:20px;background:#fff;white-space:nowrap;overflow:hidden;-ms-text-overflow:ellipsis;text-overflow:ellipsis}.plate_TkBgk:before{content:"";display:inline-block;vertical-align:middle;height:100%}.plate_TkBgk:focus,.plate_TkBgk:hover{z-index:1;transform:scale(1.05);box-shadow:0 4px 30px 0 rgba(64,72,79,.15)}.plate_TkBgk:active{transform:scale(.95);box-shadow:0 3px 7px 0 rgba(64,72,79,.08)}.plate_TkBgk.link_h97zW,.plate_TkBgk>*{display:inline-block;vertical-align:middle;color:#898989;font-size:15px}@keyframes showAnim_2Ytai{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes opacity_3g0Wt{0%{opacity:0}to{opacity:1}}@media (max-width:768px),(max-width:812px) and (max-height:375px){.main_content_3CNzW{grid-template-columns:repeat(1,1fr)}}',""]),a.locals={main_content:"main_content_3CNzW",plate_container:"plate_container_NLPOh",showAnim:"showAnim_2Ytai",plate:"plate_TkBgk",opacity:"opacity_3g0Wt",link:"link_h97zW"}},635:function(e,a,t){var r=t(636);"string"==typeof r&&(r=[[e.i,r,""]]),t(66)(r,{hmr:!0,transform:void 0}),r.locals&&(e.exports=r.locals)},636:function(e,a,t){(a=e.exports=t(65)(!1)).push([e.i,".wrapper_3Q0cL{padding:110px 0 0;min-height:calc(100% - 81px)}.upper_block_2_Dfo{padding:0 0 47px;margin:0 100px;border-bottom:1px solid #f4f5f9}.examples_list_3eVQA{-webkit-overflow-scrolling:touch;height:calc(100% - 97px);overflow:auto;padding:43px 100px 40px}.title_block_3PskA{width:calc(100% - 300px)}.search_field_1VRVE,.title_block_3PskA{display:inline-block;vertical-align:middle}.search_field_1VRVE{width:300px}.input_1vDeo{height:40px!important;border-radius:25px!important;padding:0 20px!important}.group_item_19Y1j{margin-bottom:43px}.group_name_3VAFF{margin-bottom:17px;text-transform:uppercase}@media (max-width:768px),(max-width:812px) and (max-height:375px){.wrapper_3Q0cL{overflow:auto;-webkit-overflow-scrolling:touch;padding:0;height:auto}.upper_block_2_Dfo{margin:0;padding:110px 30px 30px;border-bottom:1px solid #f4f5f9}.title_block_3PskA{width:100%;margin-bottom:63px}.examples_list_3eVQA{padding:25px 30px 50px;height:auto;min-height:calc(100vh - 274px - 80px)}.group_name_3VAFF{margin-bottom:36px}.group_item_19Y1j{margin-bottom:67px}.group_item_19Y1j:last-child{margin-bottom:0}.search_field_1VRVE{width:100%;max-width:300px}}@media (max-width:1200px) and (min-width:769px) and (min-height:376px){.upper_block_2_Dfo{margin:0 70px}.examples_list_3eVQA{padding:43px 70px 40px}}",""]),a.locals={wrapper:"wrapper_3Q0cL",upper_block:"upper_block_2_Dfo",examples_list:"examples_list_3eVQA",title_block:"title_block_3PskA",search_field:"search_field_1VRVE",input:"input_1vDeo",group_item:"group_item_19Y1j",group_name:"group_name_3VAFF"}}});