"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[12205],{80793:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i=["components"],l={title:"DevNet",description:"My document description from SEO"},s="Developer Networks",p={unversionedId:"build/getting-started/devnet",id:"build/getting-started/devnet",isDocsHomePage:!1,title:"DevNet",description:"My document description from SEO",source:"@site/docs/build/getting-started/devnet.md",sourceDirName:"build/getting-started",slug:"/build/getting-started/devnet",permalink:"/docs/build/getting-started/devnet",editUrl:"https://github.com/iota-community/iota-wiki/edit/develop/docs/build/getting-started/devnet.md",tags:[],version:"current",frontMatter:{title:"DevNet",description:"My document description from SEO"},sidebar:"build",previous:{title:"Send a first message",permalink:"/docs/build/getting-started/send-a-first-message"},next:{title:"Cryptography",permalink:"/docs/build/fundamentals/cryptography"}},c=[{value:"Devnet 1.5 (Chrysalis)",id:"devnet-15-chrysalis",children:[{value:"Public Infrastructure#",id:"public-infrastructure",children:[]},{value:"Info",id:"info",children:[]},{value:"Developer tools#",id:"developer-tools",children:[]}]},{value:"Devnet 2.0 (GoShimmer)",id:"devnet-20-goshimmer",children:[{value:"Devnet 2.0 Features",id:"devnet-20-features",children:[]},{value:"Developer Tools",id:"developer-tools-1",children:[]}]}],d={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"developer-networks"},"Developer Networks"),(0,o.kt)("p",null,"There are two main Developer Networks in the IOTA Eco-System to support the live network (Chrysalis 1.5) and the future network (GoShimmer 2.0). Both developer networks have various supporting documents and developer tools relative to its implementation."),(0,o.kt)("h2",{id:"devnet-15-chrysalis"},"Devnet 1.5 (Chrysalis)"),(0,o.kt)("p",null,"Since the Chrysalis update, the ",(0,o.kt)("inlineCode",{parentName:"p"},"testnet")," is now called ",(0,o.kt)("inlineCode",{parentName:"p"},"devnet"),". We recommend you use the ",(0,o.kt)("inlineCode",{parentName:"p"},"devnet")," to develop and test your application."),(0,o.kt)("h3",{id:"public-infrastructure"},"Public Infrastructure",(0,o.kt)("a",{parentName:"h3",href:"https://wiki.iota.org/chrysalis-docs/devnet/#public-infrastructure"},"#")),(0,o.kt)("p",null,"The IOTA Foundation provides the following load-balanced public devNet endpoint:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://api.lb-0.h.chrysalis-devnet.iota.cafe/"},"https://api.lb-0.h.chrysalis-devnet.iota.cafe/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://api.lb-1.h.chrysalis-devnet.iota.cafe/"},"https://api.lb-1.h.chrysalis-devnet.iota.cafe/"))),(0,o.kt)("h3",{id:"info"},"Info"),(0,o.kt)("p",null,"We recommend using the load balancer for most scenarios."),(0,o.kt)("p",null,"Single node endpoints that expose native ",(0,o.kt)("a",{parentName:"p",href:"https://mqtt.org/"},"MQTT"),", in case you need them, are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wiki.iota.org/chrysalis-docs/mqtt.lb-0.h.chrysalis-devnet.iota.cafe:1883"},"mqtt.lb-0.h.chrysalis-devnet.iota.cafe:1883")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wiki.iota.org/chrysalis-docs/mqtt.lb-1.h.chrysalis-devnet.iota.cafe:1883"},"mqtt.lb-1.h.chrysalis-devnet.iota.cafe:1883"))),(0,o.kt)("p",null,"These endpoints have MQTT (via WebSockets and raw TCP) exposed and offer the HTTP REST API (according to this ",(0,o.kt)("a",{parentName:"p",href:"https://editor.swagger.io/?url=https://raw.githubusercontent.com/rufsam/protocol-rfcs/master/text/0026-rest-api/rest-api.yaml"},"specification"),") over TLS."),(0,o.kt)("h3",{id:"developer-tools"},"Developer tools",(0,o.kt)("a",{parentName:"h3",href:"https://wiki.iota.org/chrysalis-docs/devnet/#developer-tools"},"#")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Explorer - ",(0,o.kt)("a",{parentName:"li",href:"https://explorer.iota.org/devnet"},"https://explorer.iota.org/devnet")),(0,o.kt)("li",{parentName:"ul"},"Online Faucet - ",(0,o.kt)("a",{parentName:"li",href:"https://faucet.chrysalis-devnet.iota.cafe/"},"https://faucet.chrysalis-devnet.iota.cafe/")),(0,o.kt)("li",{parentName:"ul"},"cli-wallet - ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/cli-wallet"},"https://github.com/iotaledger/cli-wallet")),(0,o.kt)("li",{parentName:"ul"},"Faucet Code (nodejs + svelte) - ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/chrysalis-faucet"},"https://github.com/iotaledger/chrysalis-faucet"))),(0,o.kt)("h2",{id:"devnet-20-goshimmer"},"Devnet 2.0 (GoShimmer)"),(0,o.kt)("p",null,"This is the implementation of the upcoming fully decentralized IOTA 2.0 Protocol. The network here does not use or need a coordinator anymore, and utilizes Testnet Iota tokens without value to fine-tune, test, and optimize the upcoming development stage of the IOTA Protocol together with the IOTA community."),(0,o.kt)("p",null,"This network is composed of Goshimmer nodes and while many nodes in the 2.0 Devnet are run and maintained by the Iota Foundation, anyone can contribute by running their own nodes. Having a larger network is beneficial for testing newly researched and developed concepts and ideas, catching bugs, and ironing out finished components."),(0,o.kt)("h3",{id:"devnet-20-features"},"Devnet 2.0 Features"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Decentralized, secure & permissionless"),"Based on a leaderless consensus protocol, IOTA 2.0 is the most decentralized distributed ledger protocol able to handle more than just payments."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Finality within seconds"),"Transactions reach finality in seconds without having to wait for confirmations by centralized entities, and regardless of the amount of network participants."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Lightweight and modular"),"Low-power devices do not have issues running a node as message creation and validation are not expensive operations. Our modular approach enables countless extensions of the base protocol through additional modules."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Feeless transactions"),"IOTA 2.0 enables the secure transfer of data and value between humans and machines, opening up new business models based on micro-payments."),(0,o.kt)("h3",{id:"developer-tools-1"},"Developer Tools"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"API - ",(0,o.kt)("a",{parentName:"li",href:"https://nodes.nectar.iota.cafe/"},"https://nodes.nectar.iota.cafe/")),(0,o.kt)("li",{parentName:"ul"},"Explorer - ",(0,o.kt)("a",{parentName:"li",href:"https://v2.iota.org/explorer"},"https://v2.iota.org/explorer")),(0,o.kt)("li",{parentName:"ul"},"Visualiser - ",(0,o.kt)("a",{parentName:"li",href:"https://v2.iota.org/visualizer"},"https://v2.iota.org/visualizer")),(0,o.kt)("li",{parentName:"ul"},"Token Registry - ",(0,o.kt)("a",{parentName:"li",href:"https://v2.iota.org/coin-registry"},"https://v2.iota.org/coin-registry")),(0,o.kt)("li",{parentName:"ul"},"DevNet 2.0 Wallet - ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/IOTA-2.0-DevNet-wallet/releases/tag/v0.7.0"},"https://github.com/iotaledger/IOTA-2.0-DevNet-wallet/releases/tag/v0.7.0"))))}u.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),h=a,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);