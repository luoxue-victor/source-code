/* eslint-disable */
const viewses6bindbind = () => import('../views/es6/bind/bind.vue')
const viewsHome = () => import('../views/Home.vue')
const viewshomeHome = () => import('../views/home/Home.vue')
const viewsmonacoEditormonacoEditor = () => import('../views/monacoEditor/monacoEditor.vue')
const viewsperformanceapp = () => import('../views/performance/app.vue')
const viewsvueApp = () => import('../views/vue/App.vue')
const viewsvuerenderrender = () => import('../views/vue/render/render.vue')
export const routes = [
  {
    name: "es6BindBind",
    path: "/es6BindBind",
    component: viewses6bindbind,
    disc: "es6BindBind"
  },
  {
    name: "Home",
    path: "/Home",
    component: viewsHome,
    disc: "Home"
  },
  {
    name: "home-Home",
    path: "/home-Home",
    component: viewshomeHome,
    disc: "home-Home"
  },
  {
    name: "monacoEditorMonacoEditor",
    path: "/monacoEditorMonacoEditor",
    component: viewsmonacoEditormonacoEditor,
    disc: "monacoEditorMonacoEditor"
  },
  {
    name: "performanceApp",
    path: "/performanceApp",
    component: viewsperformanceapp,
    disc: "performanceApp"
  },
  {
    name: "vue-App",
    path: "/vue-App",
    component: viewsvueApp,
    disc: "vue-App"
  },
  {
    name: "vueRenderRender",
    path: "/vueRenderRender",
    component: viewsvuerenderrender,
    disc: "vueRenderRender"
  }
]