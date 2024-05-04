"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3201],{30706:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var r=s(74848),i=s(28453);const o={slug:"setting-up-pypiserver-on-ubuntu-with-docker",title:"Setting Up PyPiServer on Ubuntu",authors:"Zephyr",tags:["docker","pypiserver"],image:"/en/img/2023/0913.webp",description:"Setting up PyPiServer on Ubuntu using Docker."},t=void 0,a={permalink:"/en/blog/setting-up-pypiserver-on-ubuntu-with-docker",source:"@site/i18n/en/docusaurus-plugin-content-blog/2023/09-13-ubuntu-docker-pypiserver/index.md",title:"Setting Up PyPiServer on Ubuntu",description:"Setting up PyPiServer on Ubuntu using Docker.",date:"2023-09-13T00:00:00.000Z",tags:[{label:"docker",permalink:"/en/blog/tags/docker"},{label:"pypiserver",permalink:"/en/blog/tags/pypiserver"}],readingTime:4.935,hasTruncateMarker:!1,authors:[{name:"Zephyr",title:"Engineer",url:"https://github.com/zephyr-sh",imageURL:"https://github.com/zephyr-sh.png",key:"Zephyr"}],frontMatter:{slug:"setting-up-pypiserver-on-ubuntu-with-docker",title:"Setting Up PyPiServer on Ubuntu",authors:"Zephyr",tags:["docker","pypiserver"],image:"/en/img/2023/0913.webp",description:"Setting up PyPiServer on Ubuntu using Docker."},unlisted:!1,prevItem:{title:"Recording Model Training Environment Issues",permalink:"/en/blog/python-env-info-collector"},nextItem:{title:"Setting Up SSH Server on Ubuntu",permalink:"/en/blog/ubuntu-install-ssh"}},c={authorsImageUrls:[void 0]},l=[{value:"1. Pull the pypiserver Docker Image",id:"1-pull-the-pypiserver-docker-image",level:2},{value:"2. Create a Directory to Store Python Packages",id:"2-create-a-directory-to-store-python-packages",level:2},{value:"3. Set Up htpasswd",id:"3-set-up-htpasswd",level:2},{value:"4. Mount pypiserver as a Background Service",id:"4-mount-pypiserver-as-a-background-service",level:2},{value:"4.1 Install Docker Compose",id:"41-install-docker-compose",level:3},{value:"4.2 Create Files",id:"42-create-files",level:3},{value:"4.3 Create Systemd Service",id:"43-create-systemd-service",level:3},{value:"4.4 Start the pypiserver Service",id:"44-start-the-pypiserver-service",level:3},{value:"5. Check Status",id:"5-check-status",level:2},{value:"6. Using pypiserver",id:"6-using-pypiserver",level:2},{value:"6.1 Upload Packages",id:"61-upload-packages",level:3},{value:"6.2 Install Packages",id:"62-install-packages",level:3},{value:"6.3 Use Basic Authentication",id:"63-use-basic-authentication",level:3},{value:"6.4 Configure pip.conf for Long-Term Use",id:"64-configure-pipconf-for-long-term-use",level:3},{value:"7. Conclusion",id:"7-conclusion",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("figure",{children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.img,{alt:"title",src:s(68311).A+"",width:"1024",height:"1024"}),"\n",(0,r.jsx)("figcaption",{children:"Cover Image: Automatically generated by GPT-4 after reading the article"})]})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.p,{children:"As the Python community continues to evolve, many developers and teams opt to establish their own private Python package index servers to store and manage their Python packages. This not only provides better version control but also ensures the security of software packages."}),"\n",(0,r.jsx)(n.p,{children:"In this article, we'll use Docker to set up a PyPi Server and run it on Ubuntu."}),"\n",(0,r.jsx)(n.p,{children:"We assume you've already installed Docker on Ubuntu and are familiar with basic Docker operations."}),"\n",(0,r.jsx)(n.h2,{id:"1-pull-the-pypiserver-docker-image",children:"1. Pull the pypiserver Docker Image"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker pull pypiserver/pypiserver:latest\n"})}),"\n",(0,r.jsx)(n.h2,{id:"2-create-a-directory-to-store-python-packages",children:"2. Create a Directory to Store Python Packages"}),"\n",(0,r.jsx)(n.p,{children:"Without further ado, let's create a directory to store Python packages in the home directory."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"mkdir ~/packages\n"})}),"\n",(0,r.jsx)(n.h2,{id:"3-set-up-htpasswd",children:"3. Set Up htpasswd"}),"\n",(0,r.jsx)(n.p,{children:"htpasswd is a file format used to store usernames and passwords (often used for basic HTTP authentication)."}),"\n",(0,r.jsx)(n.p,{children:"pypiserver uses this file to authenticate users attempting to upload or download packages. It's a simple yet effective way to enhance the security of pypiserver."}),"\n",(0,r.jsxs)(n.p,{children:["To create a ",(0,r.jsx)(n.code,{children:".htpasswd"})," file, you need the ",(0,r.jsx)(n.code,{children:"apache2-utils"})," package:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo apt install apache2-utils\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Then, use the following command to create a new ",(0,r.jsx)(n.code,{children:".htpasswd"})," file:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"htpasswd -c ~/.htpasswd [username]\n"})}),"\n",(0,r.jsxs)(n.p,{children:["It will prompt you to enter a password for ",(0,r.jsx)(n.code,{children:"username"}),". After entering the password, the ",(0,r.jsx)(n.code,{children:".htpasswd"})," file will be created in your home directory."]}),"\n",(0,r.jsxs)(n.p,{children:["Now, you can use the ",(0,r.jsx)(n.code,{children:"docker run"})," command mentioned above to run ",(0,r.jsx)(n.code,{children:"pypiserver"})," and authenticate using the ",(0,r.jsx)(n.code,{children:".htpasswd"})," file you just created."]}),"\n",(0,r.jsx)(n.h2,{id:"4-mount-pypiserver-as-a-background-service",children:"4. Mount pypiserver as a Background Service"}),"\n",(0,r.jsx)(n.p,{children:"To run the Docker container as a background service, we can use Docker Compose and Systemd."}),"\n",(0,r.jsx)(n.h3,{id:"41-install-docker-compose",children:"4.1 Install Docker Compose"}),"\n",(0,r.jsxs)(n.p,{children:["If you haven't installed Docker Compose yet, install it first by referring to the ",(0,r.jsx)(n.a,{href:"https://docs.docker.com/compose/install/",children:"official Docker Compose installation documentation"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["It's worth noting that Docker Compose has undergone significant updates recently, with many changes in usage compared to before. The most obvious change is the shift from using ",(0,r.jsx)(n.code,{children:"docker-compose"})," commands to ",(0,r.jsx)(n.code,{children:"docker compose"})," commands."]}),"\n",(0,r.jsx)(n.p,{children:"Following the official documentation, here's how you can install the latest version of Docker Compose:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo apt update\nsudo apt install docker-compose-plugin\n"})}),"\n",(0,r.jsx)(n.p,{children:"Check if Docker Compose is installed correctly:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker compose version\n"})}),"\n",(0,r.jsx)(n.h3,{id:"42-create-files",children:"4.2 Create Files"}),"\n",(0,r.jsxs)(n.p,{children:["Create a ",(0,r.jsx)(n.code,{children:"docker-compose.yml"})," file somewhere and fill it with the following content:"]}),"\n",(0,r.jsxs)(n.p,{children:["You can also refer to the template provided by ",(0,r.jsx)(n.code,{children:"pypiserver"}),": ",(0,r.jsx)(n.a,{href:"https://github.com/pypiserver/pypiserver/blob/master/docker-compose.yml",children:(0,r.jsx)(n.strong,{children:"docker-compose.yml"})})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'version: "3.3"\nservices:\n  pypiserver:\n    image: pypiserver/pypiserver:latest\n    volumes:\n      - /home/[your_username]/auth:/data/auth\n      - /home/[your_username]/packages:/data/packages\n    command: run -P /data/auth/.htpasswd -a update,download,list /data/packages\n    ports:\n      - "8080:8080"\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Replace ",(0,r.jsx)(n.code,{children:"[your_username]"})," with your actual username in the above configuration."]}),"\n",(0,r.jsxs)(n.li,{children:["You can modify the external port mapping here, for example, change it to: ",(0,r.jsx)(n.code,{children:'"18080:8080"'}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"43-create-systemd-service",children:"4.3 Create Systemd Service"}),"\n",(0,r.jsx)(n.p,{children:"Create a configuration file:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo vim /etc/systemd/system/pypiserver.service\n"})}),"\n",(0,r.jsx)(n.p,{children:"Add the following content:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"[Unit]\nDescription=PypiServer Docker Compose\nRequires=docker.service\nAfter=docker.service\n\n[Service]\nWorkingDirectory=/path/to/your/docker-compose/directory\nExecStart=/usr/bin/docker compose up --remove-orphans\nExecStop=/usr/bin/docker compose down\nRestart=always\n\n[Install]\nWantedBy=multi-user.target\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Make sure to replace ",(0,r.jsx)(n.code,{children:"/path/to/your/docker-compose/directory"})," with the actual path to the ",(0,r.jsx)(n.code,{children:"docker-compose.yml"})," file, specifying only the directory, not the filename."]}),"\n",(0,r.jsxs)(n.li,{children:["Make sure your Docker path is correct, you can use ",(0,r.jsx)(n.code,{children:"which docker"})," to confirm."]}),"\n",(0,r.jsxs)(n.li,{children:["We're using the new ",(0,r.jsx)(n.code,{children:"docker compose"})," commands instead of ",(0,r.jsx)(n.code,{children:"docker-compose"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"44-start-the-pypiserver-service",children:"4.4 Start the pypiserver Service"}),"\n",(0,r.jsx)(n.p,{children:"Tell systemd to reload the new service configuration:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo systemctl daemon-reload\n"})}),"\n",(0,r.jsx)(n.p,{children:"Start the service:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo systemctl start pypiserver.service\nsudo systemctl enable pypiserver.service\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Now, ",(0,r.jsx)(n.code,{children:"pypiserver"})," will run as a ",(0,r.jsx)(n.code,{children:"systemd"})," service and automatically start each time the host boots up."]}),"\n",(0,r.jsx)(n.h2,{id:"5-check-status",children:"5. Check Status"}),"\n",(0,r.jsx)(n.p,{children:"If you want to check the current status of the service, you can use:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo systemctl status pypiserver.service\n"})}),"\n",(0,r.jsxs)(n.p,{children:["This will display the current status of the ",(0,r.jsx)(n.code,{children:"pypiserver"})," service, including whether it's running and recent log outputs."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"pypiserver status",src:s(43522).A+"",width:"2048",height:"707"})}),"\n",(0,r.jsx)(n.h2,{id:"6-using-pypiserver",children:"6. Using pypiserver"}),"\n",(0,r.jsxs)(n.p,{children:["Now, you can use ",(0,r.jsx)(n.code,{children:"pip"})," to install and upload packages."]}),"\n",(0,r.jsx)(n.h3,{id:"61-upload-packages",children:"6.1 Upload Packages"}),"\n",(0,r.jsxs)(n.p,{children:["First, you need a packaged Python software package (usually in .whl or .tar.gz format). Suppose you already have a package named ",(0,r.jsx)(n.code,{children:"example_package-0.1-py3-none-any.whl"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["To upload the software package to your ",(0,r.jsx)(n.code,{children:"pypiserver"}),", use ",(0,r.jsx)(n.code,{children:"twine"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pip install twine\ntwine upload --repository-url http://localhost:8080/ example_package-0.1-py3-none-any.whl\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Ensure that ",(0,r.jsx)(n.code,{children:"localhost:8080"})," is the address and port of your pypiserver service."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"62-install-packages",children:"6.2 Install Packages"}),"\n",(0,r.jsxs)(n.p,{children:["To install packages, use ",(0,r.jsx)(n.code,{children:"pip"})," and specify the address and port of your ",(0,r.jsx)(n.code,{children:"pypiserver"})," service:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pip install --index-url http://localhost:8080/ example_package\n"})}),"\n",(0,r.jsx)(n.h3,{id:"63-use-basic-authentication",children:"6.3 Use Basic Authentication"}),"\n",(0,r.jsx)(n.p,{children:"If your pypiserver is configured with basic authentication (which may be done for security reasons), you need to provide authentication information when uploading or downloading:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Uploading packages:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"twine upload --repository-url http://localhost:8080/ --username [username] --password [password] example_package-0.1-py3-none-any.whl\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Installing packages:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pip install --index-url http://[username]:[password]@localhost:8080/ example_package\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"64-configure-pipconf-for-long-term-use",children:"6.4 Configure pip.conf for Long-Term Use"}),"\n",(0,r.jsxs)(n.p,{children:["If you frequently install packages from this server, you may not want to specify ",(0,r.jsx)(n.code,{children:"--index-url"})," every time you use ",(0,r.jsx)(n.code,{children:"pip install"}),". In this case, you can set default package index sources in ",(0,r.jsx)(n.code,{children:"pip.conf"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["First, find or create a ",(0,r.jsx)(n.code,{children:"pip.conf"})," file. Here are the files that might exist on your machine in order of precedence:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Priority 1: Site-level configuration file:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"/home/[your_username]/.pyenv/versions/3.8.18/envs/main/pip.conf"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Priority 2: User-level configuration files:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"/home/[your_username]/.pip/pip.conf"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"/home/[your_username]/.config/pip/pip.conf"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Priority 3: Global-level configuration files:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"/etc/pip.conf"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"/etc/xdg/pip/pip.conf"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"So make sure to clarify which Python environment is using which file, and once you've found or created the file, add the following content:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"[global]\nindex-url = http://[your_server_IP]:8080/\ntrusted-host = [your_server_IP]\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Again, ensure to replace ",(0,r.jsx)(n.code,{children:"[your_server_IP]:8080"})," with the correct address and port of your ",(0,r.jsx)(n.code,{children:"pypiserver"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["From now on, when you use ",(0,r.jsx)(n.code,{children:"pip install [package_name]"}),", ",(0,r.jsx)(n.code,{children:"pip"})," will automatically use the server address configured in ",(0,r.jsx)(n.code,{children:"pip.conf"})," as the package source."]}),"\n",(0,r.jsx)(n.h2,{id:"7-conclusion",children:"7. Conclusion"}),"\n",(0,r.jsx)(n.p,{children:"Congratulations! You've successfully set up your own private PyPI server and learned how to upload and download packages."}),"\n",(0,r.jsxs)(n.p,{children:["With ",(0,r.jsx)(n.code,{children:"pypiserver"}),", you can efficiently manage your Python packages and ensure they're in a secure environment. I hope this article proves to be practically helpful for you."]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},43522:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/pypiserver-3a82a5ef370f8387611a4c2322e85a8a.jpg"},68311:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/0913-a1c6cbea3602d12e990e10be50d5145d.webp"},28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>a});var r=s(96540);const i={},o=r.createContext(i);function t(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);