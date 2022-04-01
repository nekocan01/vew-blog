import homePage from './components/Home.vue'
import blogPost from './components/blogPost.vue'
import addBlog from './components/addBlog.vue'
import Login from "./components/Login.vue"
import Logout from "./components/Logout.vue"
import Register from "./components/Register.vue"
import ForgotPassword from "./components/forgotPassword.vue"
import AdminPanel from "./components/admin.vue"

export default [
  { path: "/", component: homePage },
  { path: "/blogs", component: blogPost },
  { path: "/addBlog", component: addBlog },
  { path: "/login", component: Login },
  { path: "/logout", component: Logout },
  { path: "/register", component: Register },
  { path: "/forgot-password", component: ForgotPassword },
  { path: "/admin", component: AdminPanel }, 
];