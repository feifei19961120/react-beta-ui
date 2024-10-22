(self.webpackChunkreact_ui=self.webpackChunkreact_ui||[]).push([[761],{54444:function(n,t,e){"use strict";var i;e.r(t),e.d(t,{demos:function(){return v}});var _=e(15009),s=e.n(_),r=e(99289),a=e.n(r),o=e(67294),u=e(2100),l=e(70208),c=e(86169),m=e(27386),v={"alert-demo-basic":{component:o.memo(o.lazy(function(){return e.e(819).then(e.bind(e,70621))})),asset:{type:"BLOCK",id:"alert-demo-basic",refAtomIds:["alert"],dependencies:{"index.tsx":{type:"FILE",value:e(6239).Z},react:{type:"NPM",value:"18.3.1"},"../../alert.tsx":{type:"FILE",value:e(59695).Z},"../style.ts":{type:"FILE",value:e(82441).Z},"./index.less":{type:"FILE",value:e(33936).Z}},entry:"index.tsx"},context:{"../../alert.tsx":l,"../style.ts":c,"./index.less":m,react:i||(i=e.t(o,2)),"/Users/zhoukeji/Desktop/react-beta-ui/src/alert/index.tsx":l,"/Users/zhoukeji/Desktop/react-beta-ui/src/alert/style/index.ts":c,"/Users/zhoukeji/Desktop/react-beta-ui/src/alert/style/index.less":m},renderOpts:{compile:function(){var p=a()(s()().mark(function E(){var f,h=arguments;return s()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(335).then(e.bind(e,37335));case 2:return d.abrupt("return",(f=d.sent).default.apply(f,h));case 3:case"end":return d.stop()}},E)}));function D(){return p.apply(this,arguments)}return D}()}}}},70208:function(n,t,e){"use strict";e.r(t);var i=e(97857),_=e.n(i),s=e(13769),r=e.n(s),a=e(67294),o=e(85893),u=["children","kind"],l="happy-alert",c={info:"#5352ED",positive:"#2ED573",negative:"#FF4757",warning:"#FFA502"},m=function(p){var D=p.children,E=p.kind,f=E===void 0?"info":E,h=r()(p,u);return(0,o.jsx)("div",_()(_()({className:l,style:{background:c[f]}},h),{},{children:D}))};t.default=m},86169:function(n,t,e){"use strict";e.r(t);var i=e(27386)},27386:function(n,t,e){"use strict";e.r(t)},5504:function(n,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return _}});var i=e(2100);const _=[{value:"\u8B66\u544A\u63D0\u793A\uFF0C\u5C55\u73B0\u9700\u8981\u5173\u6CE8\u7684\u4FE1\u606F\u3002",paraId:0,tocIndex:0}]},6239:function(n,t){"use strict";t.Z=`import React from 'react';
import Alert from '../../alert';
import '../style';

export default () => <Alert kind="warning">\u8FD9\u662F\u4E00\u6761\u8B66\u544A\u63D0\u793A</Alert>;
`},59695:function(n,t){"use strict";t.Z=`import React from 'react';

export interface AlertProps {
    /**
     * @description       Alert \u7684\u7C7B\u578B
     * @default           'info'
     */
    kind?: 'info' | 'positive' | 'negative' | 'warning';
}

export type KindMap = Record<Required<AlertProps>['kind'], string>;

const prefixCls = 'happy-alert';

const kinds: KindMap = {
    info: '#5352ED',
    positive: '#2ED573',
    negative: '#FF4757',
    warning: '#FFA502',
};

const Alert: React.FC<AlertProps> = ({ children, kind = 'info', ...rest }) => (
    <div
        className={prefixCls}
        style={{
            background: kinds[kind],
        }}
        {...rest}
    >
        {children}
    </div>
);

export default Alert;
`},33936:function(n,t){"use strict";t.Z=`@popupPrefix: happy-alert;

.@{popupPrefix} {
  padding: 20px;
  background: white;
  border-radius: 3px;
  color: white;
}
`},82441:function(n,t){"use strict";t.Z=`import './index.less';
`},13769:function(n,t,e){var i=e(48541);function _(s,r){if(s==null)return{};var a=i(s,r),o,u;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(s);for(u=0;u<l.length;u++)o=l[u],!(r.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(s,o)&&(a[o]=s[o])}return a}n.exports=_,n.exports.__esModule=!0,n.exports.default=n.exports},48541:function(n){function t(e,i){if(e==null)return{};var _={},s=Object.keys(e),r,a;for(a=0;a<s.length;a++)r=s[a],!(i.indexOf(r)>=0)&&(_[r]=e[r]);return _}n.exports=t,n.exports.__esModule=!0,n.exports.default=n.exports}}]);
