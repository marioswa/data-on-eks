"use strict";(self.webpackChunkdoeks_website=self.webpackChunkdoeks_website||[]).push([[3275],{7411:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>l});var i=s(4848),o=s(8453);const t={sidebar_position:4,sidebar_label:"Bin packing for Amazon EKS"},r="Bin packing for Amazon EKS",a={id:"resources/binpacking-custom-scheduler-eks",title:"Bin packing for Amazon EKS",description:"Introduction",source:"@site/docs/resources/binpacking-custom-scheduler-eks.md",sourceDirName:"resources",slug:"/resources/binpacking-custom-scheduler-eks",permalink:"/data-on-eks/docs/resources/binpacking-custom-scheduler-eks",draft:!1,unlisted:!1,editUrl:"https://github.com/awslabs/data-on-eks/blob/main/website/docs/resources/binpacking-custom-scheduler-eks.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Bin packing for Amazon EKS"},sidebar:"resources",previous:{title:"Mounpoint-S3 for Spark Workloads",permalink:"/data-on-eks/docs/resources/mountpoint-s3-for-spark"}},c={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Why bin packing",id:"why-bin-packing",level:3},{value:"Pros",id:"pros",level:3},{value:"Considerations",id:"considerations",level:3},{value:"Deploying the Solution",id:"deploying-the-solution",level:2},{value:"Clone the repo",id:"clone-the-repo",level:3},{value:"Manifests",id:"manifests",level:3},{value:"Set up pod template to use the custom scheduler for Spark",id:"set-up-pod-template-to-use-the-custom-scheduler-for-spark",level:3},{value:"Verification and Monitor via eks-node-viewer",id:"verification-and-monitor-via-eks-node-viewer",level:2},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"bin-packing-for-amazon-eks",children:"Bin packing for Amazon EKS"})}),"\n",(0,i.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsxs)(n.p,{children:["In this post, we will show you how to enable a custom scheduler with Amazon EKS when running DoEKS especially for Spark on EKS, including OSS Spark and EMR on EKS. The custom scheduler is a custom Kubernetes scheduler with ",(0,i.jsx)(n.code,{children:"MostAllocated"})," strategy running in data plane."]}),"\n",(0,i.jsx)(n.h3,{id:"why-bin-packing",children:"Why bin packing"}),"\n",(0,i.jsxs)(n.p,{children:["By default, the ",(0,i.jsx)(n.a,{href:"https://kubernetes.io/docs/reference/scheduling/config/#scheduling-plugins",children:"scheduling-plugin"})," NodeResourcesFit use the ",(0,i.jsx)(n.code,{children:"LeastAllocated"})," for score strategies. For the long running workloads, that is good because of high availability. But for batch jobs, like Spark workloads, this would lead high cost. By changing the from ",(0,i.jsx)(n.code,{children:"LeastAllocated"})," to ",(0,i.jsx)(n.code,{children:"MostAllocated"}),", it avoids spreading pods across all running nodes, leading to higher resource utilization and better cost efficiency."]}),"\n",(0,i.jsxs)(n.p,{children:["Batch jobs like Spark are running on demand with limited or predicted time. With ",(0,i.jsx)(n.code,{children:"MostAllocated"})," strategy, Spark executors are always bin packing into one node util the node can not host any pods. You can see the following picture shows the"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"MostAllocated"})," in EMR on EKS."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"img.png",src:s(6841).A+"",width:"1304",height:"500"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"LeastAllocated"})," in EMR on EKS"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"img.png",src:s(5797).A+"",width:"1330",height:"542"})}),"\n",(0,i.jsx)(n.h3,{id:"pros",children:"Pros"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Improve the node utilizations"}),"\n",(0,i.jsx)(n.li,{children:"Save the cost"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"considerations",children:"Considerations"}),"\n",(0,i.jsx)(n.p,{children:"Although we have provided upgrade guidance, support matrix and high availability design, but maintaining a custom scheduler in data plane needs effort including:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Upgrade operations. Plan the upgrading along with your batch jobs, make sure the scheduler are running as desired."}),"\n",(0,i.jsx)(n.li,{children:"Monitoring the scheduler. Monitoring and alerting are required for production purpose."}),"\n",(0,i.jsx)(n.li,{children:"Adjust the scheduler pod resource and other customizations regarding your requirements."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"deploying-the-solution",children:"Deploying the Solution"}),"\n",(0,i.jsx)(n.h3,{id:"clone-the-repo",children:"Clone the repo"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"git clone https://github.com/aws-samples/custom-scheduler-eks\ncd custom-scheduler-eks\n"})}),"\n",(0,i.jsx)(n.h3,{id:"manifests",children:"Manifests"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Amazon EKS 1.24"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"kubectl apply -f deploy/manifests/custom-scheduler/amazon-eks-1.24-custom-scheduler.yaml\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Amazon EKS 1.29"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"kubectl apply -f deploy/manifests/custom-scheduler/amazon-eks-1.29-custom-scheduler.yaml\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Other Amazon EKS versions"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["replace the related image URL(",(0,i.jsx)(n.a,{href:"https://gallery.ecr.aws/eks-distro/kubernetes/kube-scheduler",children:"https://gallery.ecr.aws/eks-distro/kubernetes/kube-scheduler"}),")"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Please refer to ",(0,i.jsx)(n.a,{href:"https://github.com/aws-samples/custom-scheduler-eks",children:"custom-scheduler"})," for more info."]}),"\n",(0,i.jsx)(n.h3,{id:"set-up-pod-template-to-use-the-custom-scheduler-for-spark",children:"Set up pod template to use the custom scheduler for Spark"}),"\n",(0,i.jsx)(n.p,{children:"We should add custom scheduler name to the pod template as follows"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"kind: Pod\nspec:\n  schedulerName: custom-k8s-scheduler\n  volumes:\n    - name: spark-local-dir-1\n      hostPath:\n        path: /local1\n  initContainers:\n  - name: volume-permission\n    image: public.ecr.aws/docker/library/busybox\n    # grant volume access to hadoop user\n    command: ['sh', '-c', 'if [ ! -d /data1 ]; then mkdir /data1;fi; chown -R 999:1000 /data1']\n    volumeMounts:\n      - name: spark-local-dir-1\n        mountPath: /data1\n  containers:\n  - name: spark-kubernetes-executor\n    volumeMounts:\n      - name: spark-local-dir-1\n        mountPath: /data1\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"verification-and-monitor-via-eks-node-viewer",children:["Verification and Monitor via ",(0,i.jsx)(n.a,{href:"https://github.com/awslabs/eks-node-viewer",children:"eks-node-viewer"})]}),"\n",(0,i.jsx)(n.p,{children:"Before apply the change in the pod template"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"img.png",src:s(1112).A+"",width:"844",height:"234"})}),"\n",(0,i.jsxs)(n.p,{children:["After the change:  Higher CPU usage at pod schedule time\n",(0,i.jsx)(n.img,{alt:"img.png",src:s(6327).A+"",width:"844",height:"234"})]}),"\n",(0,i.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsx)(n.p,{children:"By using the custom scheduler, we can fully improve the node utilizations for the Spark workloads which will save the cost by triggering node scale in."}),"\n",(0,i.jsxs)(n.p,{children:["For the users that running Spark on EKS, we recommend you adopt this custom scheduler before Amazon EKS officially support the ",(0,i.jsx)(n.a,{href:"https://github.com/aws/containers-roadmap/issues/1468",children:"kube-scheduler customization"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},6327:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/after-binpacking-b80fe56dfdc770cfe806e71bfcfedf13.png"},1112:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/before-binpacking-6db545ab1398c0c75fbf825ca989f688.png"},6841:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/binpack_singlejob-823881a30a8f8b15ff6c3c9c8f86cedd.gif"},5797:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/no_binpacking-70aebd04ae5fdcc8b1df12877f7b77be.gif"},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>a});var i=s(6540);const o={},t=i.createContext(o);function r(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);