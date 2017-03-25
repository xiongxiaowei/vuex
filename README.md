# vuex-demo02

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
## 流程图
![](http://7xoxzw.com1.z0.glb.clouddn.com/16-7-31/92645066.jpg)

dispach->actions(commit)->mutations(state)
disapch 触发一个事件之后 
1. 首先跑到actions上面去了
2. actions通过commit一个事件到mutations
3. mutations才能改变state
#### actions 必须commit之后才能mutations改变
