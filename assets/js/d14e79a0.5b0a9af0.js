"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5496],{82830:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>d,default:()=>t,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var i=s(74848),c=s(28453);const r={sidebar_position:8},d="\u6a21\u578b\u8a13\u7df4\u6307\u5357",l={id:"docclassifier/training_env",title:"\u6a21\u578b\u8a13\u7df4\u6307\u5357",description:"\u8acb\u4f60\u78ba\u4fdd\u5df2\u7d93\u5f9e DocsaidKit \u5167\u5efa\u7f6e\u4e86\u57fa\u790e\u6620\u50cf docsaidtrainingbase_image\u3002",source:"@site/docs/docclassifier/training_env.md",sourceDirName:"docclassifier",slug:"/docclassifier/training_env",permalink:"/docs/docclassifier/training_env",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1713961801e3,sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"\u7d50\u679c\u8207\u8a0e\u8ad6",permalink:"/docs/docclassifier/discussion"},next:{title:"\u8cc7\u6599\u96c6\u63d0\u4ea4",permalink:"/docs/docclassifier/summit_data"}},o={},a=[{value:"\u69cb\u5efa\u74b0\u5883",id:"\u69cb\u5efa\u74b0\u5883",level:2},{value:"\u57f7\u884c\u8a13\u7df4",id:"\u57f7\u884c\u8a13\u7df4",level:2},{value:"\u8f49\u63db ONNX",id:"\u8f49\u63db-onnx",level:2},{value:"\u6700\u5f8c",id:"\u6700\u5f8c",level:2}];function h(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"\u6a21\u578b\u8a13\u7df4\u6307\u5357",children:"\u6a21\u578b\u8a13\u7df4\u6307\u5357"}),"\n",(0,i.jsxs)(e.p,{children:["\u8acb\u4f60\u78ba\u4fdd\u5df2\u7d93\u5f9e ",(0,i.jsx)(e.code,{children:"DocsaidKit"})," \u5167\u5efa\u7f6e\u4e86\u57fa\u790e\u6620\u50cf ",(0,i.jsx)(e.code,{children:"docsaid_training_base_image"}),"\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["\u5982\u679c\u4f60\u9084\u6c92\u6709\u9019\u6a23\u505a\uff0c\u8acb\u5148\u53c3\u8003 ",(0,i.jsx)(e.code,{children:"DocsaidKit"})," \u7684\u8aaa\u660e\u6587\u4ef6\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"# Build base image from docsaidkit at first\ngit clone https://github.com/DocsaidLab/DocsaidKit.git\ncd DocsaidKit\nbash docker/build.bash\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u63a5\u8457\uff0c\u8acb\u4f7f\u7528\u4ee5\u4e0b\u6307\u4ee4\u4f86\u5efa\u7f6e DocClassifier \u5de5\u4f5c\u7684 Docker \u6620\u50cf\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"# Then build DocClassifier image\ngit clone https://github.com/DocsaidLab/DocClassifier.git\ncd DocClassifier\nbash docker/build.bash\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u69cb\u5efa\u74b0\u5883",children:"\u69cb\u5efa\u74b0\u5883"}),"\n",(0,i.jsxs)(e.p,{children:["\u9019\u662f\u6211\u5011\u9810\u8a2d\u63a1\u7528\u7684 ",(0,i.jsx)(e.a,{href:"https://github.com/DocsaidLab/DocClassifier/blob/main/docker/Dockerfile",children:"Dockerfile"}),"\uff0c\u5c08\u9580\u70ba\u6a21\u578b\u8a13\u7df4\u8a2d\u8a08\uff0c\u6211\u5011\u70ba\u8a72\u6587\u4ef6\u9644\u4e0a\u7c21\u77ed\u7684\u8aaa\u660e\uff0c\u4f60\u53ef\u4ee5\u6839\u64da\u81ea\u5df1\u7684\u9700\u6c42\u9032\u884c\u4fee\u6539\uff1a"]}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u57fa\u790e\u93e1\u50cf"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"FROM docsaid_training_base_image:latest"})}),"\n",(0,i.jsxs)(e.li,{children:["\u9019\u884c\u6307\u5b9a\u4e86\u5bb9\u5668\u7684\u57fa\u790e\u93e1\u50cf\uff0c\u5373 ",(0,i.jsx)(e.code,{children:"docsaid_training_base_image"})," \u7684\u6700\u65b0\u7248\u672c\u3002\u57fa\u790e\u6620\u50cf\u50cf\u662f\u5efa\u7acb\u4f60\u7684 Docker \u5bb9\u5668\u7684\u8d77\u9ede\uff0c\u5b83\u5305\u542b\u4e86\u9810\u5148\u914d\u7f6e\u597d\u7684\u4f5c\u696d\u7cfb\u7d71\u548c\u4e00\u4e9b\u57fa\u672c\u7684\u5de5\u5177\uff0c\u4f60\u53ef\u4ee5\u5728 ",(0,i.jsx)(e.code,{children:"DocsaidKit"})," \u7684\u5c08\u6848\u4e2d\u627e\u5230\u5b83\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u5de5\u4f5c\u76ee\u9304\u8a2d\u5b9a"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"WORKDIR /code"})}),"\n",(0,i.jsxs)(e.li,{children:["\u9019\u88e1\u8a2d\u5b9a\u4e86\u5bb9\u5668\u5167\u7684\u5de5\u4f5c\u76ee\u9304\u70ba ",(0,i.jsx)(e.code,{children:"/code"}),"\u3002 \u5de5\u4f5c\u76ee\u9304\u662f Docker \u5bb9\u5668\u4e2d\u7684\u4e00\u500b\u76ee\u9304\uff0c\u4f60\u7684\u61c9\u7528\u7a0b\u5f0f\u548c\u6240\u6709\u7684\u547d\u4ee4\u90fd\u6703\u5728\u9019\u500b\u76ee\u9304\u4e0b\u904b\u4f5c\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u74b0\u5883\u8b8a\u6578"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"ENV ENTRYPOINT_SCRIPT=/entrypoint.sh"})}),"\n",(0,i.jsxs)(e.li,{children:["\u9019\u884c\u5b9a\u7fa9\u4e86\u4e00\u500b\u74b0\u5883\u8b8a\u6578 ",(0,i.jsx)(e.code,{children:"ENTRYPOINT_SCRIPT"}),"\uff0c\u5176\u503c\u8a2d\u5b9a\u70ba ",(0,i.jsx)(e.code,{children:"/entrypoint.sh"}),"\u3002 \u74b0\u5883\u8b8a\u6578\u7528\u65bc\u5132\u5b58\u5e38\u7528\u914d\u7f6e\uff0c\u53ef\u4ee5\u5728\u5bb9\u5668\u7684\u4efb\u4f55\u5730\u65b9\u5b58\u53d6\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u5b89\u88dd gosu"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u900f\u904e ",(0,i.jsx)(e.code,{children:"RUN"})," \u6307\u4ee4\u5b89\u88dd\u4e86 ",(0,i.jsx)(e.code,{children:"gosu"}),"\u3002 ",(0,i.jsx)(e.code,{children:"gosu"})," \u662f\u4e00\u500b\u8f15\u91cf\u7d1a\u7684\u5de5\u5177\uff0c\u5141\u8a31\u4f7f\u7528\u8005\u4ee5\u7279\u5b9a\u7684\u4f7f\u7528\u8005\u8eab\u5206\u57f7\u884c\u547d\u4ee4\uff0c\u985e\u4f3c\u65bc ",(0,i.jsx)(e.code,{children:"sudo"}),"\uff0c\u4f46\u66f4\u9069\u5408 Docker \u5bb9\u5668\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"apt-get update && apt-get install -y gosu && rm -rf /var/lib/apt/lists/*"})," \u9019\u884c\u6307\u4ee4\u9996\u5148\u66f4\u65b0\u4e86\u5957\u4ef6\u5217\u8868\uff0c\u7136\u5f8c\u5b89\u88dd",(0,i.jsx)(e.code,{children:"gosu"}),"\uff0c\u6700\u5f8c\u6e05\u7406\u4e86\u4e0d\u518d\u9700\u8981 \u7684\u6a94\u6848\u4ee5\u6e1b\u5c0f\u93e1\u50cf\u5927\u5c0f\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u5efa\u7acb\u5165\u53e3\u9ede\u8173\u672c"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u900f\u904e\u4e00\u7cfb\u5217 ",(0,i.jsx)(e.code,{children:"RUN"})," \u6307\u4ee4\u5efa\u7acb\u4e86\u5165\u53e3\u9ede\u8173\u672c ",(0,i.jsx)(e.code,{children:"/entrypoint.sh"}),"\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:["\u6b64\u8173\u672c\u9996\u5148\u6aa2\u67e5\u74b0\u5883\u8b8a\u6578 ",(0,i.jsx)(e.code,{children:"USER_ID"})," \u548c ",(0,i.jsx)(e.code,{children:"GROUP_ID"})," \u662f\u5426\u88ab\u8a2d\u5b9a\u3002 \u5982\u679c\u8a2d\u5b9a\u4e86\uff0c\u8173\u672c\u6703\u5efa\u7acb\u4e00\u500b\u65b0\u7684\u4f7f\u7528\u8005\u548c\u4f7f\u7528\u8005\u7fa4\u7d44\uff0c\u4e26\u4ee5\u8a72\u4f7f\u7528\u8005\u8eab\u5206\u57f7\u884c\u547d\u4ee4\u3002"]}),"\n",(0,i.jsx)(e.li,{children:"\u9019\u5c0d\u65bc\u8655\u7406\u5bb9\u5668\u5167\u5916\u6a94\u6848\u6b0a\u9650\u554f\u984c\u975e\u5e38\u6709\u7528\uff0c\u7279\u5225\u662f\u7576\u5bb9\u5668\u9700\u8981\u5b58\u53d6\u5bbf\u4e3b\u6a5f\u4e0a\u7684\u6a94\u6848\u6642\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u8ce6\u4e88\u6b0a\u9650"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:'RUN chmod +x "$ENTRYPOINT_SCRIPT"'})," \u9019\u884c\u6307\u4ee4\u4f7f\u5165\u53e3\u9ede\u8173\u672c\u6210\u70ba\u53ef\u57f7\u884c\u6a94\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u8a2d\u5b9a\u5bb9\u5668\u7684\u5165\u53e3\u9ede\u548c\u9810\u8a2d\u6307\u4ee4"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:'ENTRYPOINT ["/bin/bash", "/entrypoint.sh"]'})," \u548c ",(0,i.jsx)(e.code,{children:'CMD ["bash"]'})]}),"\n",(0,i.jsxs)(e.li,{children:["\u9019\u4e9b\u547d\u4ee4\u6307\u5b9a\u4e86\u5bb9\u5668\u555f\u52d5\u6642\u57f7\u884c\u7684\u9810\u8a2d\u547d\u4ee4\u3002 \u7576\u5bb9\u5668\u555f\u52d5\u6642\uff0c\u5b83\u5c07\u57f7\u884c ",(0,i.jsx)(e.code,{children:"/entrypoint.sh"})," \u8173\u672c\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u57f7\u884c\u8a13\u7df4",children:"\u57f7\u884c\u8a13\u7df4"}),"\n",(0,i.jsx)(e.p,{children:"\u9019\u90e8\u5206\u7684\u8aaa\u660e\u5982\u4f55\u5229\u7528\u4f60\u5df2\u7d93\u69cb\u5efa\u7684 Docker \u6620\u50cf\u4f86\u9032\u884c\u6a21\u578b\u8a13\u7df4\u3002"}),"\n",(0,i.jsxs)(e.p,{children:["\u9996\u5148\uff0c\u8acb\u4f60\u770b\u5230 ",(0,i.jsx)(e.code,{children:"train.bash"})," \u6a94\u6848\u5167\u5bb9\uff1a"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"#!/bin/bash\n\ncat > trainer.py <<EOF\nfrom fire import Fire\nfrom DocClassifier.model import main_docclassifier_train\n\nif __name__ == '__main__':\n    Fire(main_docclassifier_train)\nEOF\n\ndocker run \\\n    -e USER_ID=$(id -u) \\\n    -e GROUP_ID=$(id -g) \\\n    --gpus all \\\n    --shm-size=64g \\\n    --ipc=host --net=host \\\n    --cpuset-cpus=\"0-31\" \\\n    -v $PWD/DocClassifier:/code/DocClassifier \\\n    -v $PWD/trainer.py:/code/trainer.py \\\n    -v /data/Dataset:/data/Dataset \\ # \u9019\u88e1\u66ff\u63db\u6210\u4f60\u7684\u8cc7\u6599\u96c6\u76ee\u9304\n    -it --rm doc_classifier_train python trainer.py --cfg_name $1\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u91dd\u5c0d\u4e0a\u8ff0\u6a94\u6848\u7684\u8aaa\u660e\u5982\u4e0b\uff0c\u5982\u679c\u4f60\u60f3\u8981\u52d5\u624b\u4fee\u6539\u7684\u8a71\uff0c\u53ef\u4ee5\u53c3\u8003\u76f8\u95dc\u8cc7\u8a0a\uff1a"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u5275\u5efa\u8a13\u7df4\u8173\u672c"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"cat > trainer.py <<EOF ... EOF"})}),"\n",(0,i.jsxs)(e.li,{children:["\u9019\u6bb5\u547d\u4ee4\u5275\u5efa\u4e86\u4e00\u500b Python \u8173\u672c ",(0,i.jsx)(e.code,{children:"trainer.py"}),"\u3002\u9019\u500b\u8173\u672c\u5c0e\u5165\u4e86\u5fc5\u8981\u7684\u6a21\u584a\u548c\u51fd\u6578\uff0c\u4e26\u5728\u8173\u672c\u7684\u4e3b\u90e8\u5206\u4e2d\u8abf\u7528 ",(0,i.jsx)(e.code,{children:"main_docalign_train"})," \u51fd\u6578\u3002\u4f7f\u7528 Google's Python Fire \u5eab\u4f86\u89e3\u6790\u547d\u4ee4\u884c\u53c3\u6578\uff0c\u4f7f\u5f97\u547d\u4ee4\u884c\u754c\u9762\u7684\u751f\u6210\u66f4\u52a0\u5bb9\u6613\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u904b\u884c Docker \u5bb9\u5668"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"docker run ... doc_classifier_train python trainer.py --cfg_name $1"})}),"\n",(0,i.jsxs)(e.li,{children:["\u9019\u884c\u547d\u4ee4\u555f\u52d5\u4e86\u4e00\u500b Docker \u5bb9\u5668\uff0c\u4e26\u5728\u5176\u4e2d\u904b\u884c ",(0,i.jsx)(e.code,{children:"trainer.py"})," \u8173\u672c\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"-e USER_ID=$(id -u) -e GROUP_ID=$(id -g)"}),"\uff1a\u9019\u4e9b\u53c3\u6578\u5c07\u7576\u524d\u7528\u6236\u7684\u7528\u6236 ID \u548c\u7d44 ID \u50b3\u905e\u7d66\u5bb9\u5668\uff0c\u4ee5\u4fbf\u5728\u5bb9\u5668\u5167\u5275\u5efa\u5177\u6709\u76f8\u61c9\u6b0a\u9650\u7684\u7528\u6236\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"--gpus all"}),"\uff1a\u6307\u5b9a\u5bb9\u5668\u53ef\u4ee5\u4f7f\u7528\u6240\u6709 GPU\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"--shm-size=64g"}),"\uff1a\u8a2d\u7f6e\u5171\u4eab\u5167\u5b58\u7684\u5927\u5c0f\uff0c\u9019\u5728\u5927\u898f\u6a21\u6578\u64da\u8655\u7406\u6642\u5f88\u6709\u7528\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"--ipc=host --net=host"}),"\uff1a\u9019\u4e9b\u8a2d\u7f6e\u5141\u8a31\u5bb9\u5668\u4f7f\u7528\u4e3b\u6a5f\u7684 IPC \u547d\u540d\u7a7a\u9593\u548c\u7db2\u7d61\u5806\u68e7\uff0c\u6709\u52a9\u65bc\u6027\u80fd\u63d0\u5347\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:'--cpuset-cpus="0-31"'}),"\uff1a\u6307\u5b9a\u5bb9\u5668\u4f7f\u7528\u54ea\u4e9b CPU \u6838\u5fc3\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"-v $PWD/DocClassifier:/code/DocClassifier"})," \u7b49\uff1a\u9019\u4e9b\u662f\u639b\u8f09\u53c3\u6578\uff0c\u5c07\u4e3b\u6a5f\u7684\u76ee\u9304\u6620\u5c04\u5230\u5bb9\u5668\u5167\u90e8\u7684\u76ee\u9304\uff0c\u4ee5\u4fbf\u65bc\u8a13\u7df4\u6578\u64da\u548c\u8173\u672c\u7684\u8a2a\u554f\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"--cfg_name $1"}),"\uff1a\u9019\u662f\u50b3\u905e\u7d66 ",(0,i.jsx)(e.code,{children:"trainer.py"})," \u7684\u53c3\u6578\uff0c\u6307\u5b9a\u4e86\u914d\u7f6e\u6587\u4ef6\u7684\u540d\u7a31\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u6578\u64da\u96c6\u8def\u5f91"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u7279\u5225\u6ce8\u610f ",(0,i.jsx)(e.code,{children:"/data/Dataset"})," \u662f\u7528\u65bc\u5b58\u653e\u8a13\u7df4\u6578\u64da\u7684\u8def\u5f91\uff0c\u4f60\u6703\u9700\u8981\u8abf\u6574 ",(0,i.jsx)(e.code,{children:"-v /data/Dataset:/data/Dataset"})," \u9019\u6bb5\u6307\u4ee4\uff0c\u628a ",(0,i.jsx)(e.code,{children:"/data/Dataset"})," \u66ff\u63db\u6210\u4f60\u7684\u8cc7\u6599\u96c6\u76ee\u9304\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["\u6700\u5f8c\uff0c\u8acb\u9000\u5230 ",(0,i.jsx)(e.code,{children:"DocClassifier"})," \u7684\u4e0a\u5c64\u76ee\u9304\uff0c\u4e26\u57f7\u884c\u4ee5\u4e0b\u6307\u4ee4\u4f86\u555f\u52d5\u8a13\u7df4\uff1a"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"bash DocClassifier/docker/train.bash lcnet050_cosface_96 # \u9019\u88e1\u66ff\u63db\u6210\u4f60\u7684\u914d\u7f6e\u6587\u4ef6\u540d\u7a31\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u901a\u904e\u9019\u4e9b\u6b65\u9a5f\uff0c\u4f60\u53ef\u4ee5\u5728 Docker \u5bb9\u5668\u5167\u5b89\u5168\u5730\u57f7\u884c\u6a21\u578b\u8a13\u7df4\u7684\u4efb\u52d9\uff0c\u540c\u6642\u5229\u7528 Docker \u7684\u9694\u96e2\u74b0\u5883\u4f86\u78ba\u4fdd\u4e00\u81f4\u6027\u548c\u53ef\u91cd\u73fe\u6027\u3002\u9019\u7a2e\u65b9\u6cd5\u4f7f\u5f97\u9805\u76ee\u7684\u90e8\u7f72\u548c\u64f4\u5c55\u8b8a\u5f97\u66f4\u52a0\u65b9\u4fbf\u548c\u9748\u6d3b\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u8f49\u63db-onnx",children:"\u8f49\u63db ONNX"}),"\n",(0,i.jsx)(e.p,{children:"\u9019\u90e8\u5206\u7684\u8aaa\u660e\u5982\u4f55\u5229\u7528\u4f60\u7684\u6a21\u578b\u8f49\u63db\u70ba ONNX \u683c\u5f0f\u3002"}),"\n",(0,i.jsxs)(e.p,{children:["\u9996\u5148\uff0c\u8acb\u4f60\u770b\u5230 ",(0,i.jsx)(e.code,{children:"to_onnx.bash"})," \u6a94\u6848\u5167\u5bb9\uff1a"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"#!/bin/bash\n\ncat > torch2onnx.py <<EOF\nfrom fire import Fire\nfrom DocClassifier.model import main_docclassifier_torch2onnx\n\nif __name__ == '__main__':\n    Fire(main_docclassifier_torch2onnx)\nEOF\n\ndocker run \\\n    -e USER_ID=$(id -u) \\\n    -e GROUP_ID=$(id -g) \\\n    --shm-size=64g \\\n    --ipc=host --net=host \\\n    -v $PWD/DocClassifier:/code/DocClassifier \\\n    -v $PWD/torch2onnx.py:/code/torch2onnx.py \\\n    -it --rm doc_classifier_train python torch2onnx.py --cfg_name $1\n"})}),"\n",(0,i.jsxs)(e.p,{children:["\u5f9e\u9019\u500b\u6a94\u6848\u958b\u59cb\u770b\u8d77\uff0c\u4f46\u4e0d\u9700\u8981\u4fee\u6539\u5b83\uff0c\u4f60\u9700\u8981\u53bb\u4fee\u6539\u5c0d\u61c9\u7684\u6a94\u6848\uff1a",(0,i.jsx)(e.code,{children:"model/to_onnx.py"})]}),"\n",(0,i.jsx)(e.p,{children:"\u5728\u8a13\u7df4\u904e\u7a0b\u4e2d\uff0c\u4f60\u53ef\u80fd\u6703\u4f7f\u7528\u8a31\u591a\u5206\u652f\u4f86\u76e3\u7763\u6a21\u578b\u7684\u8a13\u7df4\uff0c\u4f46\u662f\u5728\u63a8\u8ad6\u968e\u6bb5\uff0c\u4f60\u53ef\u80fd\u53ea\u9700\u8981\u5176\u4e2d\u7684\u4e00\u500b\u5206\u652f\u3002\u56e0\u6b64\uff0c\u6211\u5011\u9700\u8981\u5c07\u6a21\u578b\u8f49\u63db\u70ba ONNX \u683c\u5f0f\uff0c\u4e26\u4e14\u53ea\u4fdd\u7559\u63a8\u8ad6\u968e\u6bb5\u6240\u9700\u8981\u7684\u5206\u652f\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u4f8b\u5982\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"class WarpFeatureLearning(nn.Module):\n\n    def __init__(self, model: L.LightningModule):\n        super().__init__()\n        self.backbone = model.backbone\n        self.head = model.head\n\n    def forward(self, img: torch.Tensor):\n        xs = self.backbone(img)\n        features = self.head(xs)\n        return features\n"})}),"\n",(0,i.jsxs)(e.p,{children:["\u5728\u4e0a\u9762\u9019\u500b\u7bc4\u4f8b\u4e2d\uff0c\u6211\u5011\u53ea\u53d6\u51fa\u63a8\u8ad6\u7528\u7684\u5206\u652f\uff0c\u4e26\u4e14\u5c07\u5176\u5c01\u88dd\u70ba\u4e00\u500b\u65b0\u7684\u6a21\u578b ",(0,i.jsx)(e.code,{children:"WarpFeatureLearning"}),"\u3002\u63a5\u8457\uff0c\u5728 yaml config \u4e0a\u9032\u884c\u76f8\u5c0d\u61c9\u7684\u53c3\u6578\u8a2d\u5b9a\uff1a"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-yaml",children:"onnx:\n  name: WarpFeatureLearning\n  input_shape:\n    img:\n      shape: [1, 3, 128, 128]\n      dtype: float32\n  input_names: ['img']\n  output_names:\n    - feats\n  dynamic_axes:\n    img:\n      '0': batch_size\n    output:\n      '0': batch_size\n  options:\n    opset_version: 16\n    verbose: False\n    do_constant_folding: True\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u8aaa\u660e\u6a21\u578b\u7684\u8f38\u5165\u5c3a\u5bf8\uff0c\u8f38\u5165\u540d\u7a31\uff0c\u8f38\u51fa\u540d\u7a31\uff0c\u4ee5\u53ca ONNX \u7684\u7248\u672c\u865f\u3002"}),"\n",(0,i.jsxs)(e.p,{children:["\u8f49\u63db\u7684\u90e8\u5206\u6211\u5011\u5df2\u7d93\u5e6b\u4f60\u5beb\u597d\u4e86\uff0c\u5b8c\u6210\u4e0a\u9762\u7684\u4fee\u6539\u5f8c\uff0c\u78ba\u8a8d ",(0,i.jsx)(e.code,{children:"model/to_onnx.py"})," \u6a94\u6848\u6709\u6307\u5411\u4f60\u7684\u6a21\u578b\uff0c\u4e26\u4e14\u9000\u5230 ",(0,i.jsx)(e.code,{children:"DocClassifier"})," \u7684\u4e0a\u5c64\u76ee\u9304\uff0c\u4e26\u57f7\u884c\u4ee5\u4e0b\u6307\u4ee4\u4f86\u555f\u52d5\u8f49\u63db\uff1a"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"bash DocClassifier/docker/to_onnx.bash lcnet050_cosface_96 # \u9019\u88e1\u66ff\u63db\u6210\u4f60\u7684\u914d\u7f6e\u6587\u4ef6\u540d\u7a31\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u6700\u5f8c",children:"\u6700\u5f8c"}),"\n",(0,i.jsxs)(e.p,{children:["\u4f60\u61c9\u8a72\u5df2\u7d93\u5728 ",(0,i.jsx)(e.code,{children:"DocClassifier/model"})," \u76ee\u9304\u4e0b\u770b\u5230\u4e00\u500b\u65b0\u7684 ONNX \u6a21\u578b\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["\u628a\u9019\u500b\u6a21\u578b\u642c\u5230 ",(0,i.jsx)(e.code,{children:"docclassifier/xxx"})," \u5c0d\u61c9\u7684\u76ee\u9304\u4e0b\uff0c\u6539\u4e00\u4e0b\u6a21\u578b\u8def\u5f91\u53c3\u6578\uff0c\u5c31\u53ef\u4ee5\u9032\u884c\u63a8\u8ad6\u4e86\u3002"]})]})}function t(n={}){const{wrapper:e}={...(0,c.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(h,{...n})}):h(n)}},28453:(n,e,s)=>{s.d(e,{R:()=>d,x:()=>l});var i=s(96540);const c={},r=i.createContext(c);function d(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:d(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);