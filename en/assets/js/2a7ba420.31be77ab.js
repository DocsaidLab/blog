"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5906],{97825:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var t=i(74848),o=i(28453);const s={sidebar_position:7},r="pairwise_iou",a={id:"docsaidkit/funcs/structures/pairwise_iou",title:"pairwise_iou",description:"paiwise_iou(boxes1 Boxes) -> np.ndarray",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/docsaidkit/funcs/structures/pairwise_iou.md",sourceDirName:"docsaidkit/funcs/structures",slug:"/docsaidkit/funcs/structures/pairwise_iou",permalink:"/en/docsaidkit/funcs/structures/pairwise_iou",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:171371528e4,sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"pairwise_intersection",permalink:"/en/docsaidkit/funcs/structures/pairwise_intersection"},next:{title:"pairwise_ioa",permalink:"/en/docsaidkit/funcs/structures/pairwise_ioa"}},d={},c=[{value:"Additional information",id:"additional-information",level:2},{value:"Introduction to IoU",id:"introduction-to-iou",level:3},{value:"Definition",id:"definition",level:3},{value:"Computation Steps",id:"computation-steps",level:3},{value:"Applications",id:"applications",level:3},{value:"Advantages and Limitations",id:"advantages-and-limitations",level:3}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"pairwise_iou",children:"pairwise_iou"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/structures/functionals.py#L41",children:"paiwise_iou(boxes1: Boxes, boxes2: Boxes) -> np.ndarray"})}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Description"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"pairwise_iou"})," is a function used to compute the Intersection over Union (IoU) between two lists of bounding boxes. This function computes IoU for all N x M pairs of bounding boxes. The input bounding boxes must be of type ",(0,t.jsx)(n.code,{children:"Boxes"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Parameters"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"boxes1"})," (",(0,t.jsx)(n.code,{children:"Boxes"}),"): The first list of bounding boxes, containing N bounding boxes."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"boxes2"})," (",(0,t.jsx)(n.code,{children:"Boxes"}),"): The second list of bounding boxes, containing M bounding boxes."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import docsaidkit as D\n\nboxes1 = D.Boxes([[10, 20, 50, 80], [20, 30, 60, 90]])\nboxes2 = D.Boxes([[20, 30, 60, 90], [30, 40, 70, 100]])\niou = D.pairwise_iou(boxes1, boxes2)\nprint(iou)\n# >>> [[0.45454547 0.2]\n#      [1.0 0.45454547]]\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"additional-information",children:"Additional information"}),"\n",(0,t.jsx)(n.h3,{id:"introduction-to-iou",children:"Introduction to IoU"}),"\n",(0,t.jsx)(n.p,{children:"IoU (Intersection over Union) is a crucial metric in computer vision for evaluating the performance of object detection algorithms, particularly in tasks such as object detection and segmentation. It measures the overlap between predicted bounding boxes and ground truth bounding boxes."}),"\n",(0,t.jsx)(n.h3,{id:"definition",children:"Definition"}),"\n",(0,t.jsx)(n.p,{children:"The IoU calculation formula computes the ratio of the area of intersection to the area of union between the predicted bounding box and the ground truth bounding box. IoU values range from 0 to 1, where higher values indicate greater overlap and hence more accurate predictions."}),"\n",(0,t.jsx)(n.h3,{id:"computation-steps",children:"Computation Steps"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Determine Bounding Box Coordinates"}),": Firstly, it's necessary to establish the positions of the predicted and ground truth bounding boxes in the image. Typically, bounding boxes are represented using four coordinates: (x0, y0, x1, y1), where (x0, y0) denotes the coordinates of the top-left corner, and (x1, y1) denotes the coordinates of the bottom-right corner."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Compute Intersection Area"}),": Calculate the area of overlap between the two bounding boxes. If the two bounding boxes do not overlap at all, the intersection area is 0."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Compute Union Area"}),": The union area is equal to the sum of the areas of the two bounding boxes minus the intersection area."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Compute IoU"}),": Divide the intersection area by the union area to obtain the IoU value."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"applications",children:"Applications"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Object Detection"}),": In object detection tasks, IoU is used to assess whether the detection box accurately covers the object. A threshold (e.g., 0.5) is often set, and detections with IoU above this threshold are considered successful."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Model Evaluation"}),": IoU is commonly used to evaluate and compare the performance of different object detection models, with higher IoU values indicating better detection accuracy."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Non-Maximum Suppression (NMS)"}),": In post-processing of object detection, IoU is utilized for non-maximum suppression to eliminate overlapping detection boxes and retain the best detection results."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"advantages-and-limitations",children:"Advantages and Limitations"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Advantages"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Intuitive"}),": IoU provides an intuitive way to quantify the similarity between predicted bounding boxes and ground truth bounding boxes."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Standardized"}),": Being a scalar value ranging from 0 to 1, IoU facilitates comparison and evaluation."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Limitations"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Insensitivity"}),": IoU may not be sensitive enough to small deviations between predicted and ground truth bounding boxes, particularly when the overlap is high."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Threshold Selection"}),": The choice of IoU threshold may influence the final evaluation results, with different thresholds leading to different evaluation criteria."]}),"\n"]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>a});var t=i(96540);const o={},s=t.createContext(o);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);