"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9721],{84035:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>d});var s=i(74848),r=i(28453);const t={sidebar_position:8},o="Training",a={id:"docclassifier/training_env",title:"Training",description:"Please ensure that you've built the foundational image docsaidtrainingbase_image from DocsaidKit.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/docclassifier/training_env.md",sourceDirName:"docclassifier",slug:"/docclassifier/training_env",permalink:"/en/docs/docclassifier/training_env",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1719623898e3,sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Discussion",permalink:"/en/docs/docclassifier/discussion"},next:{title:"Submission",permalink:"/en/docs/docclassifier/summit_data"}},c={},d=[{value:"Building the Environment",id:"building-the-environment",level:2},{value:"Running Training",id:"running-training",level:2},{value:"Converting to ONNX",id:"converting-to-onnx",level:2},{value:"Conclusion",id:"conclusion",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"training",children:"Training"}),"\n",(0,s.jsxs)(n.p,{children:["Please ensure that you've built the foundational image ",(0,s.jsx)(n.code,{children:"docsaid_training_base_image"})," from ",(0,s.jsx)(n.code,{children:"DocsaidKit"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["If you haven't done so yet, please refer to the documentation of ",(0,s.jsx)(n.code,{children:"DocsaidKit"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# Build base image from docsaidkit at first\ngit clone https://github.com/DocsaidLab/DocsaidKit.git\ncd DocsaidKit\nbash docker/build.bash\n"})}),"\n",(0,s.jsx)(n.p,{children:"Next, use the following command to build the Docker image for DocClassifier:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# Then build DocClassifier image\ngit clone https://github.com/DocsaidLab/DocClassifier.git\ncd DocClassifier\nbash docker/build.bash\n"})}),"\n",(0,s.jsx)(n.h2,{id:"building-the-environment",children:"Building the Environment"}),"\n",(0,s.jsxs)(n.p,{children:["Below is our default ",(0,s.jsx)(n.a,{href:"https://github.com/DocsaidLab/DocClassifier/blob/main/docker/Dockerfile",children:"Dockerfile"})," designed specifically for model training. We provide a brief explanation of this file, which you can modify according to your needs:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Base Image"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"FROM docsaid_training_base_image:latest"})}),"\n",(0,s.jsxs)(n.li,{children:["This line specifies the base image for the container, which is the latest version of ",(0,s.jsx)(n.code,{children:"docsaid_training_base_image"}),". The base image serves as the starting point for building your Docker container, containing pre-configured operating systems and basic tools, which you can find in the ",(0,s.jsx)(n.code,{children:"DocsaidKit"})," project."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Working Directory Setup"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"WORKDIR /code"})}),"\n",(0,s.jsxs)(n.li,{children:["Here, the working directory inside the container is set to ",(0,s.jsx)(n.code,{children:"/code"}),". The working directory is a directory in the Docker container where your application and all commands will operate."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Environment Variables"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"ENV ENTRYPOINT_SCRIPT=/entrypoint.sh"})}),"\n",(0,s.jsxs)(n.li,{children:["This line defines an environment variable ",(0,s.jsx)(n.code,{children:"ENTRYPOINT_SCRIPT"})," with a value set to ",(0,s.jsx)(n.code,{children:"/entrypoint.sh"}),". Environment variables are used to store common configurations accessible anywhere within the container."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Installing gosu"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"RUN"})," command installs ",(0,s.jsx)(n.code,{children:"gosu"}),". ",(0,s.jsx)(n.code,{children:"gosu"})," is a lightweight tool that allows running commands as a specific user, similar to ",(0,s.jsx)(n.code,{children:"sudo"}),", but more suitable for Docker containers."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"apt-get update && apt-get install -y gosu && rm -rf /var/lib/apt/lists/*"})," This command first updates the package lists, then installs ",(0,s.jsx)(n.code,{children:"gosu"}),", and finally cleans up unnecessary files to reduce the image size."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Creating the Entry Point Script"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["A series of ",(0,s.jsx)(n.code,{children:"RUN"})," commands create the entry point script ",(0,s.jsx)(n.code,{children:"/entrypoint.sh"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["This script first checks if the environment variables ",(0,s.jsx)(n.code,{children:"USER_ID"})," and ",(0,s.jsx)(n.code,{children:"GROUP_ID"})," are set. If set, the script creates a new user and user group and executes commands as that user."]}),"\n",(0,s.jsx)(n.li,{children:"This is useful for handling file permission issues both inside and outside the container, especially when the container needs to access files on the host machine."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Granting Permissions"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'RUN chmod +x "$ENTRYPOINT_SCRIPT"'})," This command makes the entry point script executable."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Setting the Container's Entry Point and Default Command"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'ENTRYPOINT ["/bin/bash", "/entrypoint.sh"]'})," and ",(0,s.jsx)(n.code,{children:'CMD ["bash"]'})]}),"\n",(0,s.jsxs)(n.li,{children:["These commands specify the default command to run when the container starts. When the container starts, it will execute the ",(0,s.jsx)(n.code,{children:"/entrypoint.sh"})," script."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"running-training",children:"Running Training"}),"\n",(0,s.jsx)(n.p,{children:"This section explains how to perform model training using the Docker image you've built."}),"\n",(0,s.jsxs)(n.p,{children:["First, take a look at the contents of the ",(0,s.jsx)(n.code,{children:"train.bash"})," file:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"#!/bin/bash\n\ncat > trainer.py <<EOF\nfrom fire import Fire\nfrom DocClassifier.model import main_docclassifier_train\n\nif __name__ == '__main__':\n    Fire(main_docclassifier_train)\nEOF\n\ndocker run \\\n    -e USER_ID=$(id -u) \\\n    -e GROUP_ID=$(id -g) \\\n    --gpus all \\\n    --shm-size=64g \\\n    --ipc=host --net=host \\\n    --cpuset-cpus=\"0-31\" \\\n    -v $PWD/DocClassifier:/code/DocClassifier \\\n    -v $PWD/trainer.py:/code/trainer.py \\\n    -v /data/Dataset:/data/Dataset \\ # Replace this with your dataset directory\n    -it --rm doc_classifier_train python trainer.py --cfg_name $1\n"})}),"\n",(0,s.jsx)(n.p,{children:"Here's an explanation of the above file. Feel free to modify it as needed:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Creating the Training Script"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"cat > trainer.py <<EOF ... EOF"})}),"\n",(0,s.jsxs)(n.li,{children:["This command creates a Python script ",(0,s.jsx)(n.code,{children:"trainer.py"}),". The script imports necessary modules and functions and calls the ",(0,s.jsx)(n.code,{children:"main_docalign_train"})," function in the main part of the script. Google's Python Fire library is used to parse command-line arguments, making command-line interface generation easier."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Running the Docker Container"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"docker run ... doc_classifier_train python trainer.py --cfg_name $1"})}),"\n",(0,s.jsxs)(n.li,{children:["This command starts a Docker container and runs the ",(0,s.jsx)(n.code,{children:"trainer.py"})," script inside it."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-e USER_ID=$(id -u) -e GROUP_ID=$(id -g)"}),": These parameters pass the current user's user ID and group ID to the container to create a user with corresponding permissions inside the container."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--gpus all"}),": Specifies that the container can use all GPUs."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--shm-size=64g"}),": Sets the size of shared memory, which is useful for large-scale data processing."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--ipc=host --net=host"}),": These settings allow the container to use the host's IPC namespace and network stack, improving performance."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'--cpuset-cpus="0-31"'}),": Specifies which CPU cores the container can use."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-v $PWD/DocClassifier:/code/DocClassifier"})," and others: These are mounting parameters that map directories from the host to directories inside the container, facilitating access to training data and scripts."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--cfg_name $1"}),": This is a parameter passed to ",(0,s.jsx)(n.code,{children:"trainer.py"}),", specifying the name of the configuration file."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Dataset Path"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Pay special attention to ",(0,s.jsx)(n.code,{children:"/data/Dataset"}),", which is the path for storing training data. You'll need to adjust ",(0,s.jsx)(n.code,{children:"-v /data/Dataset:/data/Dataset"})," to point to your dataset directory."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Finally, navigate to the parent directory of ",(0,s.jsx)(n.code,{children:"DocClassifier"})," and execute the following command to start training:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"bash DocClassifier/docker/train.bash lcnet050_cosface_96 # Replace this with your configuration file name\n"})}),"\n",(0,s.jsx)(n.p,{children:"Through these steps, you can safely perform model training tasks within a Docker container while ensuring consistency and reproducibility using Docker's isolated environment. This approach makes deployment and scaling of the project more convenient and flexible."}),"\n",(0,s.jsx)(n.h2,{id:"converting-to-onnx",children:"Converting to ONNX"}),"\n",(0,s.jsx)(n.p,{children:"This section explains how to convert your model to ONNX format."}),"\n",(0,s.jsxs)(n.p,{children:["First, take a look at the contents of the ",(0,s.jsx)(n.code,{children:"to_onnx.bash"})," file:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"#!/bin/bash\n\ncat > torch2onnx.py <<EOF\nfrom fire import Fire\nfrom DocClassifier.model import main_docclassifier_torch2onnx\n\nif __name__ == '__main__':\n    Fire(main_docclassifier_torch2onnx)\nEOF\n\ndocker run \\\n    -e USER_ID=$(id -u) \\\n    -e GROUP_ID=$(id -g) \\\n    --shm-size=64g \\\n    --ipc=host --net=host \\\n    -v $PWD/DocClassifier:/code/DocClassifier \\\n    -v $PWD/torch2onnx.py:/code/torch2onnx.py \\\n    -it --rm doc_classifier_train python torch2onnx.py --cfg_name $1\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Start by examining this file, but you don't need to modify it. You'll need to modify the corresponding file: ",(0,s.jsx)(n.code,{children:"model/to_onnx.py"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"During training, you may use many branches to supervise the training of your model. However, during inference, you may only need one of these branches. Therefore, we need to convert the model to ONNX format and retain only the branch needed for inference."}),"\n",(0,s.jsx)(n.p,{children:"For example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class WarpFeatureLearning(nn.Module):\n\n    def __init__(self, model: L.LightningModule):\n        super().__init__()\n        self.backbone = model.backbone\n        self.head = model.head\n\n    def forward(self, img: torch.Tensor):\n        xs = self.backbone(img)\n        features = self.head(xs)\n        return features\n"})}),"\n",(0,s.jsxs)(n.p,{children:["In this example, we extract only the branch needed for inference and encapsulate it as a new model ",(0,s.jsx)(n.code,{children:"WarpFeatureLearning"}),". Then, make corresponding parameter settings in the yaml config:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"onnx:\n  name: WarpFeatureLearning\n  input_shape:\n    img:\n      shape: [1, 3, 128, 128]\n      dtype: float32\n  input_names: ['img']\n  output_names:\n    - feats\n  dynamic_axes:\n    img:\n      '0': batch_size\n    output:\n      '0': batch_size\n  options:\n    opset_version: 16\n    verbose: False\n    do_constant_folding: True\n"})}),"\n",(0,s.jsx)(n.p,{children:"This specifies the input size, input name, output name, and ONNX version number."}),"\n",(0,s.jsxs)(n.p,{children:["The conversion part has already been written for you. After completing the modifications mentioned above and confirming that ",(0,s.jsx)(n.code,{children:"model/to_onnx.py"})," points to your model, navigate to the parent directory of ",(0,s.jsx)(n.code,{children:"DocClassifier"})," and execute the following command to start the conversion:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"bash DocClassifier/docker/to_onnx.bash lcnet050_cosface_96 # Replace this with your configuration file name\n"})}),"\n",(0,s.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsxs)(n.p,{children:["You should now see a new ONNX model in the ",(0,s.jsx)(n.code,{children:"DocClassifier/model"})," directory."]}),"\n",(0,s.jsxs)(n.p,{children:["Move this model to the corresponding directory ",(0,s.jsx)(n.code,{children:"docclassifier/xxx"}),", update the model path parameter, and you're ready to perform inference."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>a});var s=i(96540);const r={},t=s.createContext(r);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);