(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[702],{6601:function(){},5703:function(e,t,s){Promise.resolve().then(s.bind(s,2545))},2545:function(e,t,s){"use strict";let n,a;s.r(t),s.d(t,{default:function(){return el}});var r=s(7437),i=s(1910),l=s(1339),c=s(5429),o=s(6432),d=s(2265),m=s(3320);let u=e=>{let{navItems:t,isOpen:s,setIsOpen:n}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("button",{onClick:()=>n(!s),className:"hamburger-menu ".concat(s?"open hamburger-menu-open":""),children:[(0,r.jsx)("div",{}),(0,r.jsx)("div",{}),(0,r.jsx)("div",{})]}),(0,r.jsx)("nav",{className:"mobile-menu ".concat(s?"open":""),children:(0,r.jsx)("ul",{children:t.map((e,t)=>{let{href:s,title:n}=e;return"ALLES \xdcBER UNS"===n?(0,r.jsx)("li",{className:"sub-menu",children:(0,r.jsx)("div",{children:n})},t):(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:s,children:n})},t)})})})]})};var h=s(5614);let x={version:"0.1.0",name:"wmp_staking",instructions:[{name:"initialize",accounts:[{name:"admin",isMut:!0,isSigner:!0},{name:"globalData",isMut:!0,isSigner:!1},{name:"systemProgram",isMut:!1,isSigner:!1}],args:[]},{name:"setStakePoolRewards",accounts:[{name:"admin",isMut:!0,isSigner:!0},{name:"stakePool",isMut:!0,isSigner:!1}],args:[{name:"rewardsPerSecond",type:"u64"}]},{name:"recoverStakePoolRewards",accounts:[{name:"admin",isMut:!0,isSigner:!0},{name:"stakePool",isMut:!0,isSigner:!1},{name:"to",isMut:!0,isSigner:!1},{name:"escrowB",isMut:!0,isSigner:!1},{name:"mintB",isMut:!1,isSigner:!1},{name:"tokenProgram",isMut:!1,isSigner:!1}],args:[{name:"amount",type:"u64"}]},{name:"createStakePool",accounts:[{name:"creator",isMut:!0,isSigner:!0},{name:"mintA",isMut:!1,isSigner:!1},{name:"mintB",isMut:!1,isSigner:!1},{name:"globalData",isMut:!0,isSigner:!1},{name:"escrowA",isMut:!0,isSigner:!1},{name:"escrowB",isMut:!0,isSigner:!1},{name:"stakePool",isMut:!0,isSigner:!1},{name:"systemProgram",isMut:!1,isSigner:!1},{name:"tokenProgram",isMut:!1,isSigner:!1},{name:"associatedTokenProgram",isMut:!1,isSigner:!1},{name:"rent",isMut:!1,isSigner:!1}],args:[]},{name:"createStakeEntry",accounts:[{name:"user",isMut:!0,isSigner:!0},{name:"globalData",isMut:!1,isSigner:!1},{name:"stakePool",isMut:!1,isSigner:!1},{name:"stakeEntry",isMut:!0,isSigner:!1},{name:"systemProgram",isMut:!1,isSigner:!1}],args:[]},{name:"stake",accounts:[{name:"staker",isMut:!0,isSigner:!0},{name:"stakePool",isMut:!0,isSigner:!1},{name:"stakeEntry",isMut:!0,isSigner:!1},{name:"stakerTokenA",isMut:!0,isSigner:!1},{name:"escrowA",isMut:!0,isSigner:!1},{name:"escrowFee",isMut:!0,isSigner:!1},{name:"mintA",isMut:!1,isSigner:!1},{name:"tokenProgram",isMut:!1,isSigner:!1}],args:[{name:"amount",type:"u64"}]},{name:"unstake",accounts:[{name:"staker",isMut:!0,isSigner:!0},{name:"stakePool",isMut:!0,isSigner:!1},{name:"stakeEntry",isMut:!0,isSigner:!1},{name:"stakerTokenA",isMut:!0,isSigner:!1},{name:"escrowA",isMut:!0,isSigner:!1},{name:"mintA",isMut:!1,isSigner:!1},{name:"tokenProgram",isMut:!1,isSigner:!1}],args:[{name:"amount",type:"u64"}]},{name:"withdrawStakePoolLp",accounts:[{name:"admin",isMut:!0,isSigner:!0},{name:"stakePool",isMut:!0,isSigner:!1},{name:"stakerTokenA",isMut:!0,isSigner:!1},{name:"escrowA",isMut:!0,isSigner:!1},{name:"mintA",isMut:!1,isSigner:!1},{name:"tokenProgram",isMut:!1,isSigner:!1}],args:[{name:"amount",type:"u64"}]},{name:"claimRewards",accounts:[{name:"staker",isMut:!0,isSigner:!0},{name:"stakePool",isMut:!0,isSigner:!1},{name:"stakeEntry",isMut:!0,isSigner:!1},{name:"stakerB",isMut:!0,isSigner:!1},{name:"escrowB",isMut:!0,isSigner:!1},{name:"mintB",isMut:!1,isSigner:!1},{name:"tokenProgram",isMut:!1,isSigner:!1}],args:[]}],accounts:[{name:"globalData",type:{kind:"struct",fields:[{name:"bump",type:"u8"},{name:"id",type:"u16"}]}},{name:"stakeEntry",type:{kind:"struct",fields:[{name:"bump",type:"u8"},{name:"pool",type:"publicKey"},{name:"balance",type:"u64"},{name:"rewards",type:"u64"},{name:"claimed",type:"u64"},{name:"rewardsPerTokenPaid",type:"u64"}]}},{name:"stakePool",type:{kind:"struct",fields:[{name:"bump",type:"u8"},{name:"id",type:"u16"},{name:"balance",type:"u64"},{name:"mintA",type:"publicKey"},{name:"mintB",type:"publicKey"},{name:"escrowA",type:"publicKey"},{name:"escrowB",type:"publicKey"},{name:"creator",type:"publicKey"},{name:"rewardsPerSecond",type:"u64"},{name:"rewardsPerTokenStored",type:"u64"},{name:"lastUpdateTimestamp",type:"i64"}]}}],errors:[{code:6e3,name:"OwnerMismatch",msg:"Owner mismatch"},{code:6001,name:"TokenAMintMismatch",msg:"Token A mint mismatch"},{code:6002,name:"TokenBMintMismatch",msg:"Token B mint mismatch"}]};s(194),s(9591),s(6606),s(4141),s(3522),s(2768),s(5804);var j=s(8782),g=s(8489),p=s(7818);let k=new m.rV.PublicKey("5N73fTqVpSxJaugFUzaPHZNQaxpZi4C3WJcpo5m1ARwb");var f=s(8866),w=s(9109).Buffer;async function y(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=[w.from("global-data","utf-8")];return await m.rV.PublicKey.findProgramAddress(t,e)}async function b(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:k,n=[w.from("stake-entry","utf-8"),t.toBytes(),e.toBytes()];return await m.rV.PublicKey.findProgramAddress(n,s)}var v=s(9109).Buffer;async function N(e){let{mint:t,owner:s}=e;return(await c.PublicKey.findProgramAddress([v.from("reward-a-escrow","utf-8"),t.toBuffer(),s.toBuffer()],k))[0]}async function S(e){let{mint:t,owner:s}=e;return(await c.PublicKey.findProgramAddress([v.from("reward-b-escrow","utf-8"),t.toBuffer(),s.toBuffer()],k))[0]}async function B(e,t){let s=await y(),n=await b(e,t);return{user:e,globalool:t,stakeEData:s[0],stakeEntry:n[0],systemProgram:m.rV.SystemProgram.programId}}async function P(e,t,s){let n=await b(e,t),a=await N({mint:s,owner:t}),r=await (0,f._V)({mint:s,owner:e}),i=await (0,f._V)({mint:s,owner:new c.PublicKey("439rQ59KMtfstUHtpfTzf1BTRETcHkiyFdqRDNJjNsLS")});return{staker:e,stakePool:t,stakeEntry:n[0],stakerTokenA:r,escrowA:a,escrowFee:i,mintA:s,tokenProgram:f.H_}}async function A(e,t,s){let n=await b(e,t),a=await N({mint:s,owner:t}),r=await (0,f._V)({mint:s,owner:e});return{staker:e,stakePool:t,stakeEntry:n[0],stakerTokenA:r,escrowA:a,mintA:s,tokenProgram:f.H_}}async function E(e,t,s){let n=await b(e,t),a=await S({mint:s,owner:t}),r=await (0,f._V)({mint:s,owner:e});return{staker:e,stakePool:t,stakeEntry:n[0],stakerB:r,escrowB:a,mintB:s,tokenProgram:f.H_}}async function M(e,t){let s=await B(e,t);return await n.methods.createStakeEntry().accounts(s).signers([]).instruction()}async function T(e,t,s,a){let r=await P(e,a,t);return console.log("debug program",n),await n.methods.stake(s).accounts(r).signers([]).instruction()}async function D(e,t,s,a){let r=await A(e,a,t);return await n.methods.unstake(s).accounts(r).signers([]).instruction()}async function I(e,t,s){let a=await E(e,s,t);return await n.methods.claimRewards().accounts(a).signers([]).instruction()}var C=s(8171),F=s.n(C);function K(e){let t=(1e6*e).toString();return new(F())(t)}function R(e){return e.toNumber()/1e6}async function U(e,t,s,n){e.recentBlockhash=(await n.getLatestBlockhash()).blockhash,e.feePayer=s.publicKey;let a=await s.signTransaction(e);return await n.sendRawTransaction(a.serialize(),{skipPreflight:!0})}let _={tokenAAddress:new m.rV.PublicKey("AdaEUjSPakTbCMDZeyBw76qBrod8YGUad3t4dVmkmGHz"),tokenBAddress:new m.rV.PublicKey("AdaEUjSPakTbCMDZeyBw76qBrod8YGUad3t4dVmkmGHz"),stakePoolAddress:new m.rV.PublicKey("BFCbiFLZUCWESpgdZf9zmsgzhaWSCbdWVJtDRYvnWo4T"),connection:new m.rV.Connection("https://rpc.shyft.to?api_key=uamRLnFUsFKnd3Uq")};var V=s(9198),L=s(1585);let q={tokenAAddress:new m.rV.PublicKey("AdaEUjSPakTbCMDZeyBw76qBrod8YGUad3t4dVmkmGHz"),tokenBAddress:new m.rV.PublicKey("AdaEUjSPakTbCMDZeyBw76qBrod8YGUad3t4dVmkmGHz"),stakePoolAddress:new m.rV.PublicKey("BFCbiFLZUCWESpgdZf9zmsgzhaWSCbdWVJtDRYvnWo4T"),connection:new m.rV.Connection("https://rpc.shyft.to?api_key=uamRLnFUsFKnd3Uq")};async function W(){await O(),await z(),await H(),await Z()}async function z(){if(null==a?void 0:a.publicKey){let e=await G(q.tokenAAddress,null==a?void 0:a.publicKey);e&&(q.tokenABalance={tokenSymbol:"WMP",balance:Number(e.amount)/1e6})}}async function H(){if(null==a?void 0:a.publicKey){let e=await G(q.tokenBAddress,a.publicKey);e&&(q.tokenBBalance={tokenSymbol:"xWMP",balance:Number(e.amount)/1e6})}}async function O(){let e=await n.account.stakePool.fetchNullable(q.stakePoolAddress);e&&(q.stakePoolData={xWmpEscrow:null==e?void 0:e.escrowB,balance:e.balance.toNumber()/1e6,timestamp:new Date(1e3*e.lastUpdateTimestamp.toNumber())})}async function Z(){if(console.log("debug fetchStakeEntryData",q),null==a?void 0:a.publicKey){let[e,t]=await b(a.publicKey,q.stakePoolAddress),s=await n.account.stakeEntry.fetchNullable(e);console.log("debug stakeEntryData::",null==s?void 0:s.rewardsPerTokenPaid.toNumber()),null!=s&&(q.stakeEntryAddress=e,console.log("debug:claimedreward",s.claimed.toString()),q.stakeEntryData={stakeBalance:s.balance.toNumber()/1e6,rewards:s.rewards.toNumber()/1e6,rewardsPerTokenPaid:s.rewardsPerTokenPaid.toNumber()/1e6,claimedReward:s.claimed.toNumber()/1e6},console.log(q.stakeEntryData))}}async function G(e,t){let s=await (0,V.Am)(e,t);try{return await (0,L.D0)(q.connection,s)}catch(e){}return null}async function Q(){console.log("debug app AppState.adapter",q.adapter),await W(),console.log("debug after loadState"),console.log("debug renderInternal 1  "),document.querySelector("#wallet-connected").style.display="block",console.log("debug stakeEntryData",q.stakeEntryData),q.stakeEntryData&&(document.querySelector("#stake-amount").textContent=q.stakeEntryData.stakeBalance.toFixed(2)+" ",document.querySelector("#claimed-rewards").textContent=q.stakeEntryData.claimedReward.toFixed(2)+" "),q.tokenABalance&&(document.querySelector("#a-amount").textContent=q.tokenABalance.balance.toFixed(2)+"  "),q.stakeEntryData.stakeBalance>0&&(setInterval(async()=>{let e=await Y();document.querySelector("#estimated-rewards").textContent=(null==e?void 0:e.toFixed(2))+" "},5e3),function(){if(q.stakeEntryData.stakeBalance){var e;document.querySelector("#monthly-a-amount").textContent=((null!==(e=q.stakeEntryData.stakeBalance)&&void 0!==e?e:0)*.1196).toFixed(2)+"  "}}(),function(){if(q.stakeEntryData.stakeBalance){var e;document.querySelector("#daily-a-amount").textContent=((null!==(e=q.stakeEntryData.stakeBalance)&&void 0!==e?e:0)*.00398).toFixed(2)+"  "}}(),function(){if(q.stakeEntryData.stakeBalance){var e;document.querySelector("#weekly-a-amount").textContent=((null!==(e=q.stakeEntryData.stakeBalance)&&void 0!==e?e:0)*.0279).toFixed(2)+"  "}}(),function(){if(q.stakeEntryData.stakeBalance){var e;document.querySelector("#yearly-a-amount").textContent=((null!==(e=q.stakeEntryData.stakeBalance)&&void 0!==e?e:0)*1.4511).toFixed(2)+"  "}}(),function(){if(q.tokenABalance){var e;document.querySelector("#estimated-rewards-24h").textContent=((null!==(e=q.stakeEntryData.stakeBalance)&&void 0!==e?e:0)*.00398).toFixed(2)+"  "}}())}async function Y(){let e=await n.account.stakePool.fetchNullable(q.stakePoolAddress),t=await n.account.stakeEntry.fetchNullable(q.stakeEntryAddress);if(console.log("debug:rewardperToken",null==t?void 0:t.rewardsPerTokenPaid.toString()),e&&t){let s=Date.now()/1e3-e.lastUpdateTimestamp.toNumber(),n=R(e.rewardsPerTokenStored)+461419*s/1e5/1e8;return R(t.rewards)+(n-R(t.rewardsPerTokenPaid))*R(t.balance)}}s(5438);let J=(0,p.default)(async()=>(await s.e(746).then(s.bind(s,7746))).WalletMultiButton,{loadableGenerated:{webpack:()=>[null]},ssr:!1});function $(){let{publicKey:e,connected:t}=(0,j.O)();function s(e){let{wallet:t}=e,s=new m.Y7(_.connection,t,{});return new m.$r(x,k,s)}let i=(0,g.z)(),l=(0,g.z)(),c=async()=>{let t=s({wallet:i}),n=parseFloat(document.getElementById("stake_input").value);if(console.log("debug tokenAAddress",_.stakePoolAddress.toBase58()),l&&e&&i){let[s,a]=await b(e,_.stakePoolAddress),r=await t.account.stakeEntry.fetchNullable(s),i=new m.rV.Transaction;if(null==r){let t=await M(e,_.stakePoolAddress);i.add(t)}let c=await T(e,_.tokenAAddress,K(n),_.stakePoolAddress);i.add(c);let o=await U(i,e,l,_.connection);await _.connection.confirmTransaction(o),Q()}},o=async()=>{let t=parseFloat(document.getElementById("unstake_input").value);if(l&&e&&i){let s=new m.rV.Transaction,n=await D(e,_.tokenAAddress,K(t),_.stakePoolAddress);s.add(n);let a=await U(s,e,l,_.connection);await _.connection.confirmTransaction(a),Q()}},p=async()=>{let t=new m.rV.Transaction;if(console.log("debug tokenbalance",_.tokenBBalance,_.tokenABalance),l&&e&&i){let s=await I(e,_.tokenBAddress,_.stakePoolAddress);t.add(s);let n=await U(t,e,l,_.connection);await _.connection.confirmTransaction(n),Q()}};(0,d.useEffect)(()=>{t&&(n=s({wallet:i}),a=l,console.log("debug set adapter",l),Q())},[t]);let[f,w]=(0,d.useState)(!1);(0,d.useEffect)(()=>{document.querySelectorAll(".mobile-menu a").forEach(e=>{e.addEventListener("click",()=>{w(!1)})})},[]);let y=(0,d.useRef)(null);return(0,d.useEffect)(()=>{function e(e){!y.current||e.target.matches(".hamburger-menu")||e.target.matches(".mobile-menu a")||e.target.matches(".mobile-menu")||e.target.matches(".hamburger-menu-open")||w(!1)}return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[]),(0,r.jsxs)("div",{id:"wrapper",className:"clearfix",children:[(0,r.jsxs)(h.Z,{children:[(0,r.jsx)("meta",{httpEquiv:"content-type",content:"text/html; charset=utf-8"}),(0,r.jsx)("meta",{name:"author",content:"BRT"}),(0,r.jsx)("meta",{name:"description",content:"Developed to represent all of BlackRock's financial instruments in cryptocurrencies and to make them seamlessly accessible to every crypto user."}),(0,r.jsx)("link",{rel:"shortcut icon",href:"favicon.ico",type:"image/x-icon"}),(0,r.jsx)("link",{rel:"stylesheet",href:"css/bootstrap.css",type:"text/css"}),(0,r.jsx)("link",{rel:"stylesheet",href:"/style.css",type:"text/css"}),(0,r.jsx)("link",{rel:"stylesheet",href:"css/dark.css",type:"text/css"}),(0,r.jsx)("link",{rel:"stylesheet",href:"css/font-icons.css",type:"text/css"}),(0,r.jsx)("link",{rel:"stylesheet",href:"one-page/css/et-line.css",type:"text/css"}),(0,r.jsx)("link",{rel:"stylesheet",href:"css/animate.css",type:"text/css"}),(0,r.jsx)("link",{rel:"stylesheet",href:"css/magnific-popup.css",type:"text/css"}),(0,r.jsx)("link",{rel:"stylesheet",type:"text/css",href:"demos/photographer/css/menu.css"}),(0,r.jsx)("link",{rel:"stylesheet",href:"css/responsive.css",type:"text/css"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("link",{rel:"stylesheet",href:"demos/photographer/photographer.css",type:"text/css"}),(0,r.jsx)("link",{rel:"stylesheet",href:"dashboardstyle.css"}),(0,r.jsx)("link",{rel:"stylesheet",href:"demos/photographer/css/fonts.css",type:"text/css"}),(0,r.jsx)("link",{rel:"stylesheet",href:"css/colors.php?color=e41c34",type:"text/css"}),(0,r.jsx)("script",{src:"https://unpkg.com/@solana/web3.js@latest/dist/web3.min.js"}),(0,r.jsx)("script",{src:"https://unpkg.com/@solana/wallet-adapter-wallets@latest/dist/wallet-adapter-wallets.umd.js"}),(0,r.jsx)("script",{src:"https://unpkg.com/@solana/wallet-adapter-base@latest/dist/wallet-adapter-base.umd.js"}),(0,r.jsx)("title",{children:"BlackRock Token"})]}),(0,r.jsxs)("div",{id:"wrapper",className:"clearfix",children:[(0,r.jsxs)("header",{id:"header",className:"floating-header header-size-md",children:[(0,r.jsxs)("div",{id:"header-wrap",children:[(0,r.jsx)("div",{ref:y,children:(0,r.jsx)(u,{navItems:[{href:"/index.html",title:"IBIT TOKEN"},{href:"#",title:"ALLES \xdcBER UNS"},{href:"/index.html#socialmedia",title:"\xa0\xa0\xa0\xa0Unsere sozialen Medien"},{href:"/roadmap.html#tokenomicsrmpage",title:"\xa0\xa0\xa0\xa0Tokenomics"},{href:"/wallet.html#walletpart",title:"\xa0\xa0\xa0\xa0Wallets"},{href:"/WPIBIT.pdf",title:"\xa0\xa0\xa0\xa0Unser Whitepaper"},{href:"/index.html#airdrops",title:"\xa0\xa0\xa0\xa0Airdrops"},{href:"/wallet.html",title:"\xa0\xa0\xa0\xa0IBIT Token staken"},{href:"/roadmap.html#roadmaprmpage",title:"ROADMAP"},{href:"/index.html#faqibit",title:"FAQS"},{href:"contact.html",title:"KONTAKT"}],isOpen:f,setIsOpen:w})}),(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"header-row",children:[(0,r.jsx)("div",{id:"logo",children:(0,r.jsxs)("a",{href:"/index.html/",style:{color:"#000"},children:[" ","BlackRock Token"," "]})}),(0,r.jsx)("div",{className:"header-misc",children:(0,r.jsx)("div",{className:"wallet-info",children:(0,r.jsx)(J,{})})}),(0,r.jsx)("nav",{className:"primary-menu with-arrows",children:(0,r.jsxs)("ul",{className:"menu-container",children:[(0,r.jsx)("li",{className:"menu-item",children:(0,r.jsx)("a",{className:"menu-link",href:"index.html",children:(0,r.jsx)("div",{children:"IBIT Token"})})}),(0,r.jsxs)("li",{className:"menu-item mega-menu current",children:[(0,r.jsx)("div",{className:"menu-link",children:(0,r.jsx)("div",{children:"Alles \xfcber uns"})}),(0,r.jsx)("div",{className:"mega-menu-content mega-menu-style-2 px-0",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("a",{href:"index.html#socialmedia",className:"mega-menu-column sub-menu-container col-lg-4 border-bottom h-bg-light py-4",children:(0,r.jsxs)("div",{className:"feature-box",children:[(0,r.jsx)("div",{className:"fbox-icon mb-2",children:(0,r.jsx)("img",{src:"demos/seo/images/icons/seo.svg",alt:"Feature Icon",className:"bg-transparent rounded-0"})}),(0,r.jsxs)("div",{className:"fbox-content",children:[(0,r.jsx)("h3",{className:"text-transform-none ls-0",children:"Unsere sozialen Medien"}),(0,r.jsx)("p",{children:"Hier findest du unsere sozialen Medien."})]})]})}),(0,r.jsx)("a",{href:"roadmap.html#tokenomicsrmpage",className:"mega-menu-column sub-menu-container col-lg-4 border-bottom h-bg-light py-4",children:(0,r.jsxs)("div",{className:"feature-box",children:[(0,r.jsx)("div",{className:"fbox-icon mb-2",children:(0,r.jsx)("img",{src:"demos/seo/images/icons/social.svg",alt:"Feature Icon",className:"bg-transparent rounded-0"})}),(0,r.jsxs)("div",{className:"fbox-content",children:[(0,r.jsx)("h3",{className:"text-transform-none ls-0",children:"Tokenomics"}),(0,r.jsx)("p",{children:"Hier findest du unsere Tokenomics."})]})]})}),(0,r.jsx)("a",{href:"wallet.html#walletpart",className:"mega-menu-column sub-menu-container col-lg-4 border-bottom h-bg-light py-4",children:(0,r.jsxs)("div",{className:"feature-box",children:[(0,r.jsx)("div",{className:"fbox-icon mb-2",children:(0,r.jsx)("img",{src:"demos/seo/images/icons/adword.svg",alt:"Feature Icon",className:"bg-transparent rounded-0"})}),(0,r.jsxs)("div",{className:"fbox-content",children:[(0,r.jsx)("h3",{className:"text-transform-none ls-0",children:"Wallets"}),(0,r.jsx)("p",{children:"Entdecke hier eine Liste an n Wallets."})]})]})}),(0,r.jsx)("a",{href:"WPIBIT.pdf",className:"mega-menu-column sub-menu-container col-lg-4 border-bottom h-bg-light py-4",children:(0,r.jsxs)("div",{className:"feature-box",children:[(0,r.jsx)("div",{className:"fbox-icon mb-2",children:(0,r.jsx)("img",{src:"demos/seo/images/icons/experience.svg",alt:"Feature Icon",className:"bg-transparent rounded-0"})}),(0,r.jsxs)("div",{className:"fbox-content",children:[(0,r.jsx)("h3",{className:"text-transform-none ls-0",children:"Unser Whitepaper"}),(0,r.jsx)("p",{children:"Hier kannst du das Whitepaper downloaden und lesen."})]})]})}),(0,r.jsx)("a",{href:"index.html#airdrops",className:"mega-menu-column sub-menu-container col-lg-4 border-bottom h-bg-light py-4",children:(0,r.jsxs)("div",{className:"feature-box",children:[(0,r.jsx)("div",{className:"fbox-icon mb-2",children:(0,r.jsx)("img",{src:"demos/seo/images/icons/analysis.svg",alt:"Feature Icon",className:"bg-transparent rounded-0"})}),(0,r.jsxs)("div",{className:"fbox-content",children:[(0,r.jsx)("h3",{className:"text-transform-none ls-0",children:"Airdrops"}),(0,r.jsx)("p",{children:"Berechne wie viel du durch Airdrops verdienen kannst."})]})]})}),(0,r.jsx)("a",{href:"wallet.html",className:"mega-menu-column sub-menu-container col-lg-4 border-bottom h-bg-light py-4",children:(0,r.jsxs)("div",{className:"feature-box",children:[(0,r.jsx)("div",{className:"fbox-icon mb-2",children:(0,r.jsx)("img",{src:"demos/seo/images/icons/content_marketing.svg",alt:"Feature Icon",className:"bg-transparent rounded-0"})}),(0,r.jsxs)("div",{className:"fbox-content",children:[(0,r.jsx)("h3",{className:"text-transform-none ls-0",children:"IBIT Token staken"}),(0,r.jsx)("p",{children:"Entdecke das Stakingdashboard und nimm hier einfach \xfcber unsere Website am Staking teil."})]})]})})]})})})]}),(0,r.jsx)("li",{className:"menu-item",children:(0,r.jsx)("a",{className:"menu-link",href:"roadmap.html#roadmaprmpage",children:(0,r.jsx)("div",{children:"Roadmap"})})}),(0,r.jsx)("li",{className:"menu-item",children:(0,r.jsx)("a",{className:"menu-link",href:"index.html#faqibit",children:(0,r.jsx)("div",{children:"FAQs"})})}),(0,r.jsx)("li",{className:"menu-item",children:(0,r.jsx)("a",{className:"menu-link",href:"contact.html",children:(0,r.jsx)("div",{children:"Kontakt"})})})]})}),(0,r.jsx)("form",{className:"top-search-form",action:"search.html",method:"get",children:(0,r.jsx)("input",{type:"text",name:"q",className:"form-control",value:"",placeholder:"Wonach suchst du?",autoComplete:"off"})})]})})]}),(0,r.jsx)("div",{className:"header-wrap-clone"})]}),(0,r.jsx)("section",{id:"slider",className:"slider-element full-screen clearfix",style:{background:"url('demos/photographer/images/dots-1.png') 100% 0 no-repeat",backgroundSize:"60% auto"},children:(0,r.jsxs)("div",{className:"main-content",id:"wallet-connected",children:[(0,r.jsxs)("div",{className:"stats",children:[(0,r.jsxs)("div",{className:"stat-item",id:"stake-entry-data",children:[(0,r.jsx)("p",{children:"Total staked"}),(0,r.jsxs)("h3",{children:[(0,r.jsx)("span",{id:"stake-amount"})," IBIT"]})]}),(0,r.jsxs)("div",{className:"stat-item",children:[(0,r.jsx)("p",{children:"Available"}),(0,r.jsxs)("h3",{children:[(0,r.jsx)("span",{id:"estimated-rewards"})," IBIT"]})]}),(0,r.jsxs)("div",{className:"stat-item",children:[(0,r.jsx)("p",{children:"Total rewards"}),(0,r.jsxs)("h3",{children:[(0,r.jsx)("span",{id:"claimed-rewards"}),"IBIT"]})]}),(0,r.jsxs)("div",{className:"stat-item",children:[(0,r.jsx)("p",{children:"24h Rewards"}),(0,r.jsxs)("h3",{children:[(0,r.jsx)("span",{id:"estimated-rewards-24h"})," IBIT"]})]})]}),(0,r.jsxs)("div",{className:"action-buttons",children:[(0,r.jsxs)("div",{className:"action-button-wrap",children:[(0,r.jsx)("input",{type:"number",id:"stake_input"}),(0,r.jsx)("button",{className:"stake-button",id:"stake",onClick:c,children:"Stake"})]}),(0,r.jsxs)("div",{className:"action-button-wrap",children:[(0,r.jsx)("input",{type:"number",id:"unstake_input"}),(0,r.jsx)("button",{className:"unstake-button",id:"unstake",onClick:o,children:"Unstake"})]}),(0,r.jsx)("div",{className:"action-button-wrap",children:(0,r.jsx)("button",{className:"stake-button",id:"claimrewards",onClick:p,children:"Rewards auszahlen"})})]}),(0,r.jsxs)("div",{className:"wallet-info",children:[(0,r.jsx)("div",{className:"chart-container",children:(0,r.jsxs)("div",{className:"statistics-container",children:[(0,r.jsxs)("div",{className:"statitem",children:[(0,r.jsx)("h3",{children:"Momentane monatliche Returns"}),(0,r.jsxs)("p",{id:"current-monthly-return",children:["11.96% | ",(0,r.jsx)("span",{id:"monthly-a-amount"})," IBIT"]})]}),(0,r.jsxs)("div",{className:"statitem",children:[(0,r.jsx)("h3",{children:"voraussichtliche t\xe4gliche Returns"}),(0,r.jsxs)("p",{id:"expected-daily-return",children:["0.398% | ",(0,r.jsx)("span",{id:"daily-a-amount"})," IBIT"]})]}),(0,r.jsxs)("div",{className:"statitem",children:[(0,r.jsx)("h3",{children:"voraussichtliche w\xf6chentliche Returns"}),(0,r.jsxs)("p",{id:"expected-weekly-return",children:["2.79% | ",(0,r.jsx)("span",{id:"weekly-a-amount"})," IBIT"]})]}),(0,r.jsxs)("div",{className:"statitem",children:[(0,r.jsx)("h3",{children:"voraussichtliche j\xe4hrliche Returns"}),(0,r.jsxs)("p",{id:"expected-yearly-return",children:["145.11% | ",(0,r.jsx)("span",{id:"yearly-a-amount"})," IBIT"]})]}),(0,r.jsxs)("div",{className:"statitem",id:"token-a-data",children:[(0,r.jsx)("h3",{children:"verf\xfcgbare Token in deiner Wallet"}),(0,r.jsxs)("p",{id:"expected-monthly-return",children:[(0,r.jsx)("span",{id:"a-amount"})," IBIT"]})]}),(0,r.jsxs)("div",{className:"statitem",children:[(0,r.jsx)("h3",{children:"automatisiertes Restake"}),(0,r.jsx)("p",{id:"expected-monthly-return",children:"not activated"})]})]})}),(0,r.jsxs)("div",{className:"transaction-history",children:[(0,r.jsx)("h3",{children:"Transaktionshistorie"}),(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Datum"}),(0,r.jsx)("th",{children:"Typ"}),(0,r.jsx)("th",{children:"Betrag"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"date"}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"date"}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"date"}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"date"}),(0,r.jsx)("td",{children:" "}),(0,r.jsx)("td",{children:" "})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"date"}),(0,r.jsx)("td",{children:" "}),(0,r.jsx)("td",{children:" "})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"date"}),(0,r.jsx)("td",{children:" "}),(0,r.jsx)("td",{children:" "})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"date"}),(0,r.jsx)("td",{children:" "}),(0,r.jsx)("td",{children:" "})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"date"}),(0,r.jsx)("td",{children:" "}),(0,r.jsx)("td",{children:" "})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"date"}),(0,r.jsx)("td",{children:" "}),(0,r.jsx)("td",{children:" "})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"date"}),(0,r.jsx)("td",{children:" "}),(0,r.jsx)("td",{children:" "})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"date"}),(0,r.jsx)("td",{children:" "}),(0,r.jsx)("td",{children:" "})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"date"}),(0,r.jsx)("td",{children:" "}),(0,r.jsx)("td",{children:" "})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"date"}),(0,r.jsx)("td",{children:" "}),(0,r.jsx)("td",{children:" "})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"date"}),(0,r.jsx)("td",{children:" "}),(0,r.jsx)("td",{children:" "})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"date"}),(0,r.jsx)("td",{children:" "}),(0,r.jsx)("td",{children:" "})]})]})]})]})]})]})}),(0,r.jsx)("footer",{id:"footer",className:"no-border clearfix",children:(0,r.jsx)("div",{id:"copyrights",style:{background:"#111"},children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"w-100 text-center mt-4",children:[(0,r.jsx)("p",{className:"mb-3",style:{color:"#fff"},children:"2024. All Rights Reserved."}),(0,r.jsxs)("a",{href:"https://twitter.com/TokenBlack80107",target:"_blank",className:"social-icon inline-block si-small border-0 text-white-50 rounded-circle h-bg-x-twitter",children:[(0,r.jsx)("i",{className:"fa-brands fa-x-twitter"}),(0,r.jsx)("i",{className:"fa-brands fa-x-twitter"})]}),(0,r.jsxs)("a",{href:"https://www.instagram.com/blackrocktoken",target:"_blank",className:"social-icon inline-block si-small border-0 text-white-50 rounded-circle h-bg-instagram",children:[(0,r.jsx)("i",{className:"bi-instagram"}),(0,r.jsx)("i",{className:"bi-instagram"})]}),(0,r.jsxs)("a",{href:"mailto:info@blackrock-token.io",className:"social-icon inline-block si-small border-0 text-white-50 rounded-circle h-bg-google",children:[(0,r.jsx)("i",{className:"bi-envelope"}),(0,r.jsx)("i",{className:"bi-envelope"})]})]})})})})]}),(0,r.jsx)("div",{id:"gotoTop",className:"icon-angle-up bgcolor"})," ",(0,r.jsx)("script",{src:"js/jquery.js"}),(0,r.jsx)("script",{src:"js/plugins.js"}),(0,r.jsx)("script",{src:"demos/writer/js/hover3d.js"}),(0,r.jsx)("script",{src:"demos/photographer/js/menu-easing.js"}),(0,r.jsx)("script",{src:"js/functions.js"}),(0,r.jsx)("script",{dangerouslySetInnerHTML:{__html:'\n                  // Hover Script\n                  jQuery(".img-hover-wrap").hover3d({\n                    selector: ".img-hover-card",\n                    shine: false,\n                  });\n                '}}),(0,r.jsx)("script",{src:"https://cdnjs.cloudflare.com/ajax/libs/skrollr/0.6.30/skrollr.min.js"}),(0,r.jsx)("script",{dangerouslySetInnerHTML:{__html:"\n                  !SEMICOLON.Mobile.any() && skrollr.init({forceHeight: false});\n                "}}),(0,r.jsx)("script",{src:"js/jquery.hotspot.js"}),(0,r.jsx)("script",{src:"js/components/rangeslider.min.js"}),(0,r.jsx)("script",{src:"js/plugins.min.js"}),(0,r.jsx)("script",{src:"js/chart.js"}),(0,r.jsx)("script",{src:"js/chart-utils.js"}),(0,r.jsx)("script",{dangerouslySetInnerHTML:{__html:"jQuery(document).ready(function() {\n                  document.addEventListener(\"DOMContentLoaded\", function() {\n                  var config = {\n                    type: 'doughnut',\n                    data: {\n                      datasets: [\n                        {\n                          data: [20, 55, 10, 15],\n                          backgroundColor: [\n                            window.chartColors.red,\n                            window.chartColors.yellow,\n                            window.chartColors.green,\n                            window.chartColors.blue,\n                          ],\n                          label: 'Dataset 1',\n                        },\n                      ],\n                      labels: ['Airdrops', 'Verkauf', 'Stakingrewards', 'Team'],\n                    },\n                    options: {\n                      responsive: true,\n                      legend: {\n                        position: 'top',\n                      },\n                      title: {\n                        display: true,\n                        text: '',\n                      },\n                      animation: {\n                        animateScale: true,\n                        animateRotate: true,\n                      },\n                    },\n                  };\n\n                  window.onload = function () {\n                    var ctx = document.getElementById('chart-0').getContext('2d');\n                    window.myDoughnut = new Chart(ctx, config);\n                  };\n\n                  document\n                    .getElementById('randomizeData')\n                    .addEventListener('click', function () {\n                      config.data.datasets.forEach(function (dataset) {\n                        dataset.data = dataset.data.map(function () {\n                          return randomScalingFactor();\n                        });\n                      });\n\n                      window.myDoughnut.update();\n                    });\n\n                  var colorNames = Object.keys(window.chartColors);\n                  document\n                    .getElementById('addDataset')\n                    .addEventListener('click', function () {\n                      var newDataset = {\n                        backgroundColor: [],\n                        data: [],\n                        label: 'New dataset ' + config.data.datasets.length,\n                      };\n\n                      for (var index = 0; index < config.data.labels.length; ++index) {\n                        newDataset.data.push(randomScalingFactor());\n\n                        var colorName = colorNames[index % colorNames.length];\n                        var newColor = window.chartColors[colorName];\n                        newDataset.backgroundColor.push(newColor);\n                      }\n\n                      config.data.datasets.push(newDataset);\n                      window.myDoughnut.update();\n                    });\n\n                  document.getElementById('addData').addEventListener('click', function () {\n                    if (config.data.datasets.length > 0) {\n                      config.data.labels.push('data #' + config.data.labels.length);\n\n                      var colorName =\n                        colorNames[config.data.datasets[0].data.length % colorNames.length];\n                      var newColor = window.chartColors[colorName];\n\n                      config.data.datasets.forEach(function (dataset) {\n                        dataset.data.push(randomScalingFactor());\n                        dataset.backgroundColor.push(newColor);\n                      });\n\n                      window.myDoughnut.update();\n                    }\n                  });\n\n                  document\n                    .getElementById('removeDataset')\n                    .addEventListener('click', function () {\n                      config.data.datasets.splice(0, 1);\n                      window.myDoughnut.update();\n                    });\n\n                  document\n                    .getElementById('removeData')\n                    .addEventListener('click', function () {\n                      config.data.labels.splice(-1, 1); // remove the label first\n\n                      config.data.datasets.forEach(function (dataset) {\n                        dataset.data.pop();\n                        dataset.backgroundColor.pop();\n                      });\n\n                      window.myDoughnut.update();\n                    });\n                  })\n                })\n                "}})]})}let X=(0,d.createContext)({});var ee=s(5442),et=s(3870),es=s(660),en=s(5538),ea=s(3494),er=s(9062);s(5438);let ei=e=>{let{children:t}=e,{autoConnect:s}=(0,d.useContext)(X),n=ee.Q.Devnet,a=(0,d.useMemo)(()=>c.clusterApiUrl(n),[n]),m=(0,d.useMemo)(()=>[new en.O,new ea.e,new er.H,new et.U],[n]);return(0,d.useCallback)(async e=>{if(!("signIn"in e))return!0;let t={domain:window.location.host,address:e.publicKey?e.publicKey.toBase58():void 0,statement:"Please sign in."},s=await e.signIn(t);if(!(0,es.HS)(t,s))throw Error("Sign In verification failed!");return!1},[]),(0,r.jsx)(i.U,{endpoint:a,children:(0,r.jsx)(l.n,{wallets:m,autoConnect:!0,children:(0,r.jsx)(o.s,{children:t})})})};function el(){return(0,r.jsx)(ei,{children:(0,r.jsx)($,{})})}},6606:function(){},9591:function(){},4141:function(){},5804:function(){},3522:function(){},2768:function(){},194:function(){}},function(e){e.O(0,[818,46,97,929,429,164,125,814,761,705,971,23,744],function(){return e(e.s=5703)}),_N_E=e.O()}]);