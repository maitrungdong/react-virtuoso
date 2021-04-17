(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{139:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),b=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=b(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=b(r),u=n,d=s["".concat(c,".").concat(u)]||s[u]||m[u]||a;return r?o.a.createElement(d,i(i({ref:t},l),{},{components:r})):o.a.createElement(d,i({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},79:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return b}));var n=r(2),o=r(6),a=(r(0),r(139)),c={id:"_interfaces_.components",title:"Interface: Components",sidebar_label:"Components"},i={unversionedId:"api/interfaces/_interfaces_.components",id:"api/interfaces/_interfaces_.components",isDocsHomePage:!1,title:"Interface: Components",description:'"interfaces".Components',source:"@site/docs/api/interfaces/_interfaces_.components.md",slug:"/api/interfaces/_interfaces_.components",permalink:"/api/interfaces/_interfaces_.components",editUrl:"https://github.com/petyosi/react-virtuoso/edit/master/site/docs/api/interfaces/_interfaces_.components.md",version:"current",sidebar_label:"Components",sidebar:"someSidebar",previous:{title:"Virtuoso Grid API Reference",permalink:"/virtuoso-grid-api-reference/"},next:{title:"Interface: ComputeItemKey",permalink:"/api/interfaces/_interfaces_.computeitemkey"}},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"EmptyPlaceholder",id:"emptyplaceholder",children:[]},{value:"Footer",id:"footer",children:[]},{value:"Group",id:"group",children:[]},{value:"Header",id:"header",children:[]},{value:"Item",id:"item",children:[]},{value:"List",id:"list",children:[]},{value:"ScrollSeekPlaceholder",id:"scrollseekplaceholder",children:[]},{value:"Scroller",id:"scroller",children:[]},{value:"TopItemList",id:"topitemlist",children:[]}]}],l={rightToc:p};function b(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/api/modules/_interfaces_"}),'"interfaces"'),".Components"),Object(a.b)("p",null,"Customize the Virtuoso rendering by passing a set of custom components."),Object(a.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Components"))),Object(a.b)("h2",{id:"properties"},"Properties"),Object(a.b)("h3",{id:"emptyplaceholder"},"EmptyPlaceholder"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"EmptyPlaceholder"),": ComponentType"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/c519dc3/src/interfaces.ts#L100"}),"interfaces.ts:100"))),Object(a.b)("p",null,"Set to render a custom UI when the list is empty."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"footer"},"Footer"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"Footer"),": ComponentType"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/c519dc3/src/interfaces.ts#L70"}),"interfaces.ts:70"))),Object(a.b)("p",null,"Set to render a component at the bottom of the list."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"group"},"Group"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"Group"),": ComponentType","<",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/api/interfaces/_interfaces_.groupprops"}),"GroupProps"),">"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/c519dc3/src/interfaces.ts#L78"}),"interfaces.ts:78"))),Object(a.b)("p",null,"Set to customize the group item wrapping element. Use only if you would like to render list from elements different than a ",Object(a.b)("inlineCode",{parentName:"p"},"div"),"."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"header"},"Header"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"Header"),": ComponentType"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/c519dc3/src/interfaces.ts#L66"}),"interfaces.ts:66"))),Object(a.b)("p",null,"Set to render a component at the top of the list."),Object(a.b)("p",null,"The header remains above the top items and does not remain sticky."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"item"},"Item"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"Item"),": ComponentType","<",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/api/interfaces/_interfaces_.itemprops"}),"ItemProps"),">"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/c519dc3/src/interfaces.ts#L74"}),"interfaces.ts:74"))),Object(a.b)("p",null,"Set to customize the item wrapping element. Use only if you would like to render list from elements different than a ",Object(a.b)("inlineCode",{parentName:"p"},"div"),"."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"list"},"List"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"List"),": ComponentType","<",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/api/modules/_interfaces_#listprops"}),"ListProps"),">"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/c519dc3/src/interfaces.ts#L95"}),"interfaces.ts:95"))),Object(a.b)("p",null,"Set to customize the items wrapper. Use only if you would like to render list from elements different than a ",Object(a.b)("inlineCode",{parentName:"p"},"div"),"."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"scrollseekplaceholder"},"ScrollSeekPlaceholder"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"ScrollSeekPlaceholder"),": ComponentType","<",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/api/interfaces/_interfaces_.scrollseekplaceholderprops"}),"ScrollSeekPlaceholderProps"),">"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/c519dc3/src/interfaces.ts#L105"}),"interfaces.ts:105"))),Object(a.b)("p",null,"Set to render an item placeholder when the user scrolls fast.  See the ",Object(a.b)("inlineCode",{parentName:"p"},"scrollSeek")," property for more details."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"scroller"},"Scroller"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"Scroller"),": ComponentType","<",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/api/modules/_interfaces_#scrollerprops"}),"ScrollerProps"),">"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/c519dc3/src/interfaces.ts#L90"}),"interfaces.ts:90"))),Object(a.b)("p",null,"Set to customize the outermost scrollable element. This should not be necessary in general,\nas the component passes its HTML attribute props to it."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"topitemlist"},"TopItemList"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"TopItemList"),": ComponentType","<",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/api/modules/_interfaces_#topitemlistprops"}),"TopItemListProps"),">"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/c519dc3/src/interfaces.ts#L84"}),"interfaces.ts:84"))),Object(a.b)("p",null,"Set to customize the top list item wrapping element. Use if you would like to render list from elements different than a ",Object(a.b)("inlineCode",{parentName:"p"},"div"),"\nor you want to set a custom z-index for the sticky position."))}b.isMDXComponent=!0}}]);