"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9141],{81360:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var o=i(74848),t=i(28453);const s={sidebar_position:8},r="pairwise_ioa",a={id:"docsaidkit/funcs/structures/pairwise_ioa",title:"pairwise_ioa",description:"pairwise_ioa(boxes1 Boxes) -> np.ndarray",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/docsaidkit/funcs/structures/pairwise_ioa.md",sourceDirName:"docsaidkit/funcs/structures",slug:"/docsaidkit/funcs/structures/pairwise_ioa",permalink:"/en/docs/docsaidkit/funcs/structures/pairwise_ioa",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:171972391e4,sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"pairwise_iou",permalink:"/en/docs/docsaidkit/funcs/structures/pairwise_iou"},next:{title:"polygon_iou",permalink:"/en/docs/docsaidkit/funcs/structures/polygon_iou"}},d={},c=[{value:"Additional information",id:"additional-information",level:2},{value:"Introduction to IoA",id:"introduction-to-ioa",level:3},{value:"Definition",id:"definition",level:3},{value:"Calculation Steps",id:"calculation-steps",level:3},{value:"Application Scenarios",id:"application-scenarios",level:3},{value:"Advantages and Limitations",id:"advantages-and-limitations",level:3}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"pairwise_ioa",children:"pairwise_ioa"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/structures/functionals.py#L69C46-L69C47",children:"pairwise_ioa(boxes1: Boxes, boxes2: Boxes) -> np.ndarray"})}),"\n"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Description"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"pairwise_ioa"})," is a function used to calculate the Intersection over Area (IoA) between two lists of bounding boxes. This function computes the IoA for all N x M pairs of bounding boxes. The input bounding box type must be ",(0,o.jsx)(n.code,{children:"Boxes"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Parameters"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"boxes1"})," (",(0,o.jsx)(n.code,{children:"Boxes"}),"): The first list of bounding boxes, containing N bounding boxes."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"boxes2"})," (",(0,o.jsx)(n.code,{children:"Boxes"}),"): The second list of bounding boxes, containing M bounding boxes."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Example"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"import docsaidkit as D\n\nboxes1 = D.Boxes([[10, 20, 50, 80], [20, 30, 60, 90]])\nboxes2 = D.Boxes([[20, 30, 60, 90], [30, 40, 70, 100]])\nioa = D.pairwise_ioa(boxes1, boxes2)\nprint(ioa)\n# >>> [[0.625 0.33333334]\n#      [1.0 0.625]]\n"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"additional-information",children:"Additional information"}),"\n",(0,o.jsx)(n.h3,{id:"introduction-to-ioa",children:"Introduction to IoA"}),"\n",(0,o.jsx)(n.p,{children:"IoA (Intersection over Area) is a metric used to evaluate the overlap of bounding boxes. It measures the ratio of the intersection area between the predicted and the ground truth bounding boxes to the area of the ground truth bounding box."}),"\n",(0,o.jsx)(n.h3,{id:"definition",children:"Definition"}),"\n",(0,o.jsx)(n.p,{children:"The IoA is calculated as the area of intersection between the predicted and the ground truth bounding boxes divided by the area of the ground truth bounding box. The value of IoA ranges from 0 to 1, with higher values indicating greater coverage of the ground truth by the predicted bounding box."}),"\n",(0,o.jsx)(n.h3,{id:"calculation-steps",children:"Calculation Steps"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Determine Bounding Box Coordinates"}),": First, the positions of the predicted and ground truth bounding boxes in the image must be established. Typically, four coordinates represent a bounding box: (x0, y0, x1, y1), where (x0, y0) are the coordinates of the top-left corner, and (x1, y1) are the coordinates of the bottom-right corner."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Calculate Intersection Area"}),": Compute the area of intersection between the predicted and ground truth bounding boxes."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Calculate IoA"}),": Divide the intersection area by the ground truth bounding box area to get the IoA value."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"application-scenarios",children:"Application Scenarios"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Object Detection"}),": In object detection tasks, IoA is used to assess the overlap between the predicted and ground truth bounding boxes, thus evaluating the accuracy of the detection model."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Model Evaluation"}),": IoA is commonly used to evaluate and compare the performance of different object detection models, with higher IoA values indicating better detection accuracy."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Non-Maximum Suppression (NMS)"}),": In the post-processing of object detection, IoA is used for non-maximum suppression to eliminate overlapping detection boxes and retain the best detection results."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"advantages-and-limitations",children:"Advantages and Limitations"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Advantages"}),": IoA quantifies the degree of overlap between the predicted and ground truth bounding boxes, helping to assess the accuracy of models."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Limitations"}),": IoA only considers the degree of overlap between the predicted and ground truth bounding boxes and does not account for other factors such as the shape and orientation of the bounding boxes, which may lead to inaccuracies under certain circumstances."]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>a});var o=i(96540);const t={},s=o.createContext(t);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);