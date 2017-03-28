import Home from './components/home.vue'
import News from './components/news.vue'
import Tv from './components/tv.vue'
const routes=[
 {path:'/home',component:Home},
 {path:'/news',component:News},
 {path:'/tv',component:Tv},
 {path:'*',redirect:'/home'}


]
export default routes
