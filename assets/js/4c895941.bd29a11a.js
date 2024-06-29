"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1054],{25780:(d,n,e)=>{e.r(n),e.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>j,frontMatter:()=>t,metadata:()=>l,toc:()=>h});var r=e(74848),s=e(28453);const t={sidebar_position:6},i="\u5831\u50f9\u7cfb\u7d71",l={id:"autotraderx/masterlink/quotation",title:"\u5831\u50f9\u7cfb\u7d71",description:"\u5206\u6790\u5b8c\u5143\u5bcc\u8b49\u5238\u7684\u5831\u50f9\u7cfb\u7d71 Python API \u4e4b\u5f8c\uff0c\u6211\u5011\u5c31\u53ef\u4ee5\u57fa\u65bc\u81ea\u5df1\u7684\u9700\u6c42\uff0c\u958b\u767c\u4e00\u500b\u5831\u50f9\u7cfb\u7d71\u3002",source:"@site/docs/autotraderx/masterlink/quotation.md",sourceDirName:"autotraderx/masterlink",slug:"/autotraderx/masterlink/quotation",permalink:"/docs/autotraderx/masterlink/quotation",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1719623898e3,sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"\u56de\u6e2c\u7cfb\u7d71\u5206\u6790",permalink:"/docs/autotraderx/masterlink/backtesting_analysis"},next:{title:"\u4e0b\u55ae\u7cfb\u7d71",permalink:"/docs/autotraderx/masterlink/trader"}},c={},h=[{value:"\u767b\u5165\u5e33\u865f",id:"\u767b\u5165\u5e33\u865f",level:2},{value:"\u555f\u52d5\u5831\u50f9\u7cfb\u7d71",id:"\u555f\u52d5\u5831\u50f9\u7cfb\u7d71",level:2},{value:"\u5167\u5bb9\u7bc4\u4f8b",id:"\u5167\u5bb9\u7bc4\u4f8b",level:2},{value:"\u5546\u54c1\u57fa\u672c\u8cc7\u6599",id:"\u5546\u54c1\u57fa\u672c\u8cc7\u6599",level:3},{value:"\u65e5\u6210\u4ea4\u8cc7\u6599",id:"\u65e5\u6210\u4ea4\u8cc7\u6599",level:3},{value:"\u5176\u4ed6\u529f\u80fd",id:"\u5176\u4ed6\u529f\u80fd",level:2}];function x(d){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...d.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"\u5831\u50f9\u7cfb\u7d71",children:"\u5831\u50f9\u7cfb\u7d71"}),"\n",(0,r.jsx)(n.p,{children:"\u5206\u6790\u5b8c\u5143\u5bcc\u8b49\u5238\u7684\u5831\u50f9\u7cfb\u7d71 Python API \u4e4b\u5f8c\uff0c\u6211\u5011\u5c31\u53ef\u4ee5\u57fa\u65bc\u81ea\u5df1\u7684\u9700\u6c42\uff0c\u958b\u767c\u4e00\u500b\u5831\u50f9\u7cfb\u7d71\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u96d6\u7136\u5143\u5bcc\u8b49\u5238\u6240\u63d0\u4f9b\u7684\u5831\u50f9\u7cfb\u7d71\u7684\u4f7f\u7528\u7bc4\u4f8b\u4e2d\u6c92\u6709\u7279\u5225\u5c55\u793a\u8a02\u95b1\u591a\u6a94\u80a1\u7968\u7684\u65b9\u5f0f\uff0c\u4f46\u6211\u5011\u5728\u539f\u59cb\u78bc\u4e2d\u6709\u767c\u73fe\u9019\u500b\u529f\u80fd\uff0c\u8003\u616e\u5230\u6211\u5011\u4e0d\u662f\u5be6\u4f5c\u624b\u6a5f App\uff0c\u6c92\u6709\u8fa6\u6cd5\u4e32\u63a5 UI \u756b\u9762\uff0c\u53ef\u4ee5\u7528\u4f86\u986f\u793a\u7684\u53ea\u6709\u547d\u4ee4\u5217\uff0c\u6240\u4ee5\u6211\u5011\u5728\u8a2d\u8a08\u4e0a\u6539\u6210\u5c07\u6bcf\u6a94\u8a02\u95b1\u7684\u80a1\u7968\u8f38\u51fa\u5230\u5916\u90e8\u6a94\u6848\uff0c\u9019\u6a23\u624d\u4e0d\u6703\u5728\u547d\u4ee4\u5217\u4e0a\u770b\u5f97\u773c\u82b1\u64a9\u4e82\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u767b\u5165\u5e33\u865f",children:"\u767b\u5165\u5e33\u865f"}),"\n",(0,r.jsx)(n.p,{children:"\u4f60\u53ef\u4ee5\u76f4\u63a5\u628a\u5e33\u865f\u5bc6\u78bc\u5beb\u5728\u985e\u5225\u7684\u8f38\u5165\u4e2d\uff0c\u4e5f\u53ef\u4ee5\u53c3\u8003\u6211\u5011\u7684\u5beb\u6cd5\uff1a\u4f7f\u7528\u4e00\u500b yaml \u6a94\u6848\u4f86\u5132\u5b58\u5e33\u865f\u8cc7\u8a0a\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u53c3\u6578\u6a94\u6848\u4e2d\uff0c\u5fc5\u9808\u6709\u5e33\u865f\u5bc6\u78bc\u548c\u5e33\u865f\u865f\u78bc\uff0c\u9019\u6a23\u624d\u80fd\u9806\u5229\u767b\u5165\u5143\u5bcc\u8b49\u5238\u7684\u5e33\u865f\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u63a5\u8457\u5f9e ",(0,r.jsx)(n.code,{children:"autotraderx"})," \u4e2d import ",(0,r.jsx)(n.code,{children:"QuotationSystem"})," \u985e\u5225\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'from autotraderx import load_yaml\nfrom autotraderx.masterlink import QuotationSystem\n\n# Load account infos\ncfg = load_yaml(DIR / "account.yaml")\n\n# Login account\nhandler = QuotationSystem(\n    user=cfg["user"],\n    password=cfg["password"],\n    subscribe_list=["2330", "2454"]\n)\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u767b\u5165\u7684\u6642\u5019\u8981\u4e00\u8d77\u628a\u4f60\u60f3\u8a02\u95b1\u7684\u80a1\u7968\u4ee3\u78bc\u653e\u9032\u53bb\uff0c\u9019\u500b\u90e8\u5206\u5176\u5be6\u4e5f\u53ef\u4ee5\u4e00\u8d77\u5beb\u5728 yaml \u6a94\u6848\u4e2d\uff0c\u9019\u6a23\u5c31\u4e0d\u7528\u6bcf\u6b21\u90fd\u6539\u7a0b\u5f0f\u78bc\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u555f\u52d5\u5831\u50f9\u7cfb\u7d71",children:"\u555f\u52d5\u5831\u50f9\u7cfb\u7d71"}),"\n",(0,r.jsx)(n.p,{children:"\u767b\u5165\u5e33\u865f\u4e4b\u5f8c\uff0c\u5c31\u53ef\u4ee5\u555f\u52d5\u5831\u50f9\u7cfb\u7d71\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"handler.run()\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"run_quotation",src:e(73425).A+"",width:"1224",height:"428"})}),"\n",(0,r.jsx)(n.p,{children:"\u555f\u52d5\u5f8c\uff0c\u5831\u50f9\u7cfb\u7d71\u6703\u5728\u57f7\u884c\u76ee\u9304\u4e0b\u5efa\u7acb\u6a94\u6848\uff0c\u5305\u542b\uff1a"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"log_[\u7576\u5929\u65e5\u671f]_[\u80a1\u7968\u4ee3\u865f]_info.md"}),"\uff1a\u8a18\u9304\u80a1\u7968\u524d\u65e5\u6536\u76e4\u50f9\u3001\u6700\u65b0\u6210\u4ea4\u50f9\u3001\u6700\u65b0\u6210\u4ea4\u91cf\u7b49\u8cc7\u8a0a\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"log_[\u7576\u5929\u65e5\u671f]_[\u80a1\u7968\u4ee3\u865f]_match.md"}),"\uff1a\u8a18\u9304\u80a1\u7968\u6bcf\u500b tick \u6210\u4ea4\u8cc7\u8a0a\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u518d\u4f86\u5c31\u6c92\u4e8b\u4e86\uff0c\u5831\u50f9\u7cfb\u7d71\u6703\u81ea\u52d5\u66f4\u65b0\u80a1\u7968\u8cc7\u8a0a\uff0c\u4f60\u53ea\u8981\u7b49\u5f85\u5373\u53ef\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u82e5\u8981\u7d50\u675f\u7a0b\u5f0f\uff0c\u53ef\u4ee5\u6309 ",(0,r.jsx)(n.code,{children:"Ctrl + C"})," \u4f86\u505c\u6b62\u5831\u50f9\u7cfb\u7d71\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u5167\u5bb9\u7bc4\u4f8b",children:"\u5167\u5bb9\u7bc4\u4f8b"}),"\n",(0,r.jsx)(n.p,{children:"\u4ee5\u4e0b\u5c55\u793a\u66f4\u65b0\u7684\u6a94\u6848\u5167\u5bb9\uff1a"}),"\n",(0,r.jsx)(n.h3,{id:"\u5546\u54c1\u57fa\u672c\u8cc7\u6599",children:"\u5546\u54c1\u57fa\u672c\u8cc7\u6599"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u9805\u76ee"}),(0,r.jsx)(n.th,{children:"\u6578\u503c"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u4e2d\u6587\u540d\u7a31"}),(0,r.jsx)(n.td,{children:"\u53f0\u7a4d\u96fb"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u4ea4\u6613\u6240\u4ee3\u78bc"}),(0,r.jsx)(n.td,{children:"TWS"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u53c3\u8003\u50f9"}),(0,r.jsx)(n.td,{children:"921.0000"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u6f32\u505c\u50f9"}),(0,r.jsx)(n.td,{children:"1010.0000"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u8dcc\u505c\u50f9"}),(0,r.jsx)(n.td,{children:"829.0000"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u4e0a\u4e00\u4ea4\u6613\u65e5\u6210\u4ea4\u7e3d\u91cf"}),(0,r.jsx)(n.td,{children:"26262"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u4e0a\u4e00\u4ea4\u6613\u65e5\u53c3\u8003\u50f9"}),(0,r.jsx)(n.td,{children:"922.0000"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u4e0a\u4e00\u4ea4\u6613\u65e5\u6536\u76e4\u50f9"}),(0,r.jsx)(n.td,{children:"921.0000"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u7522\u696d\u5225"}),(0,r.jsx)(n.td,{children:"24"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u80a1\u7968\u7570\u5e38\u4ee3\u78bc"}),(0,r.jsx)(n.td,{children:"0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u975e\u5341\u5143\u9762\u984d\u8a3b\u8a18"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u7570\u5e38\u63a8\u4ecb\u500b\u80a1\u8a3b\u8a18"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u53ef\u73fe\u80a1\u7576\u6c96\u8a3b\u8a18"}),(0,r.jsx)(n.td,{children:"A"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u4ea4\u6613\u55ae\u4f4d"}),(0,r.jsx)(n.td,{children:"1000"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"\u65e5\u6210\u4ea4\u8cc7\u6599",children:"\u65e5\u6210\u4ea4\u8cc7\u6599"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u6210\u4ea4\u6642\u9593"}),(0,r.jsx)(n.th,{children:"\u6210\u4ea4\u50f9"}),(0,r.jsx)(n.th,{children:"\u6f32\u8dcc"}),(0,r.jsx)(n.th,{children:"\u6210\u4ea4\u91cf"}),(0,r.jsx)(n.th,{children:"\u7e3d\u91cf"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"11:14:28.097382"}),(0,r.jsx)(n.td,{children:"944.0000"}),(0,r.jsx)(n.td,{children:"+23.000"}),(0,r.jsx)(n.td,{children:"2"}),(0,r.jsx)(n.td,{children:"23491"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"11:14:33.153135"}),(0,r.jsx)(n.td,{children:"944.0000"}),(0,r.jsx)(n.td,{children:"+23.000"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"23492"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"11:14:37.089803"}),(0,r.jsx)(n.td,{children:"944.0000"}),(0,r.jsx)(n.td,{children:"+23.000"}),(0,r.jsx)(n.td,{children:"2"}),(0,r.jsx)(n.td,{children:"23494"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"11:14:38.663758"}),(0,r.jsx)(n.td,{children:"944.0000"}),(0,r.jsx)(n.td,{children:"+23.000"}),(0,r.jsx)(n.td,{children:"4"}),(0,r.jsx)(n.td,{children:"23498"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"11:14:59.809925"}),(0,r.jsx)(n.td,{children:"945.0000"}),(0,r.jsx)(n.td,{children:"+24.000"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"23499"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"11:15:00.081727"}),(0,r.jsx)(n.td,{children:"944.0000"}),(0,r.jsx)(n.td,{children:"+23.000"}),(0,r.jsx)(n.td,{children:"2"}),(0,r.jsx)(n.td,{children:"23501"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"11:15:00.196828"}),(0,r.jsx)(n.td,{children:"944.0000"}),(0,r.jsx)(n.td,{children:"+23.000"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"23502"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"11:15:00.567548"}),(0,r.jsx)(n.td,{children:"944.0000"}),(0,r.jsx)(n.td,{children:"+23.000"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"23503"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"11:15:04.071329"}),(0,r.jsx)(n.td,{children:"944.0000"}),(0,r.jsx)(n.td,{children:"+23.000"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"23504"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"11:15:04.598060"}),(0,r.jsx)(n.td,{children:"944.0000"}),(0,r.jsx)(n.td,{children:"+23.000"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"23505"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"11:15:07.634295"}),(0,r.jsx)(n.td,{children:"944.0000"}),(0,r.jsx)(n.td,{children:"+23.000"}),(0,r.jsx)(n.td,{children:"3"}),(0,r.jsx)(n.td,{children:"23508"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"11:15:10.137589"}),(0,r.jsx)(n.td,{children:"944.0000"}),(0,r.jsx)(n.td,{children:"+23.000"}),(0,r.jsx)(n.td,{children:"2"}),(0,r.jsx)(n.td,{children:"23510"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"11:15:12.460697"}),(0,r.jsx)(n.td,{children:"944.0000"}),(0,r.jsx)(n.td,{children:"+23.000"}),(0,r.jsx)(n.td,{children:"3"}),(0,r.jsx)(n.td,{children:"23513"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"\u5176\u4ed6\u529f\u80fd",children:"\u5176\u4ed6\u529f\u80fd"}),"\n",(0,r.jsx)(n.p,{children:"\u6211\u5011\u9084\u6709\u4e00\u4e9b\u529f\u80fd\u7b49\u5f85\u5b8c\u6210\uff0c\u4f8b\u5982\uff1a"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u6307\u5b9a\u8f38\u51fa\u683c\u5f0f"}),"\uff1a\u76ee\u524d\u6211\u5011\u53ea\u6709\u8f38\u51fa\u5230 markdown \u6a94\u6848\uff0c\u4f46\u672a\u4f86\u53ef\u4ee5\u8003\u616e\u8f38\u51fa\u5230\u5176\u4ed6\u683c\u5f0f\uff0c\u4f8b\u5982 csv\u3001json \u7b49\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u532f\u5165\u4ea4\u6613\u4e8b\u4ef6"}),"\uff1a\u53ef\u4ee5\u5c07\u5831\u50f9\u7cfb\u7d71\u548c\u4ea4\u6613\u7cfb\u7d71\u4e32\u63a5\uff0c\u7576\u5831\u50f9\u7cfb\u7d71\u5075\u6e2c\u5230\u67d0\u500b\u50f9\u683c\u6642\uff0c\u53ef\u4ee5\u81ea\u52d5\u4e0b\u55ae\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u8f38\u51fa\u683c\u5f0f\u7684\u90e8\u5206\u66ab\u6642\u9084\u6c92\u6709\u5176\u4ed6\u7684\u9700\u6c42\uff0c\u6240\u4ee5\u53ef\u4ee5\u5148\u4e0d\u7ba1\u3002\u532f\u5165\u4ea4\u6613\u4e8b\u4ef6\u7684\u90e8\u5206\u6bd4\u8f03\u8907\u96dc\uff0c\u901a\u5e38\u9019\u500b\u90e8\u5206\u6703\u88ab\u7a31\u70ba\u300c\u4ea4\u6613\u7b56\u7565\u300d\uff0c\u9019\u6703\u96a8\u8457\u4e0d\u540c\u7684\u6a19\u7684\u800c\u6709\u6240\u4fee\u6539\uff0c\u5c0d\u65bc\u8a72\u5982\u4f55\u8a2d\u8a08\u532f\u5165\u4ea4\u6613\u4e8b\u4ef6\u7684\u529f\u80fd\uff0c\u6703\u662f\u6211\u5011\u4e0b\u4e00\u500b\u968e\u6bb5\u7684\u958b\u767c\u91cd\u9ede\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u7576\u7136\u9084\u53ef\u4ee5\u6709\u5176\u4ed6\u529f\u80fd\uff0c\u4f60\u53ef\u4ee5\u7d66\u6211\u5011\u4e00\u4e9b\u5efa\u8b70\uff0c\u6211\u5011\u6703\u8003\u616e\u52a0\u5165\u5230\u5831\u50f9\u7cfb\u7d71\u4e2d\u3002"})]})}function j(d={}){const{wrapper:n}={...(0,s.R)(),...d.components};return n?(0,r.jsx)(n,{...d,children:(0,r.jsx)(x,{...d})}):x(d)}},73425:(d,n,e)=>{e.d(n,{A:()=>r});const r=e.p+"assets/images/run_quotation-d87b7fdcd165a51674c18779c7305da7.jpg"},28453:(d,n,e)=>{e.d(n,{R:()=>i,x:()=>l});var r=e(96540);const s={},t=r.createContext(s);function i(d){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof d?d(n):{...n,...d}}),[n,d])}function l(d){let n;return n=d.disableParentContext?"function"==typeof d.components?d.components(s):d.components||s:i(d.components),r.createElement(t.Provider,{value:n},d.children)}}}]);