import comp from "C:/Users/MIQDAD/Desktop/vue/profile/docs/.vuepress/.temp/pages/skill/index.html.vue"
const data = JSON.parse("{\"path\":\"/skill/\",\"title\":\"Technical Skills\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Backend Development\",\"slug\":\"backend-development\",\"link\":\"#backend-development\",\"children\":[{\"level\":3,\"title\":\"Laravel Framework\",\"slug\":\"laravel-framework\",\"link\":\"#laravel-framework\",\"children\":[]}]},{\"level\":2,\"title\":\"Frontend Development\",\"slug\":\"frontend-development\",\"link\":\"#frontend-development\",\"children\":[{\"level\":3,\"title\":\"JavaScript\",\"slug\":\"javascript\",\"link\":\"#javascript\",\"children\":[]},{\"level\":3,\"title\":\"Vue.js\",\"slug\":\"vue-js\",\"link\":\"#vue-js\",\"children\":[]},{\"level\":3,\"title\":\"CSS & Styling\",\"slug\":\"css-styling\",\"link\":\"#css-styling\",\"children\":[]}]},{\"level\":2,\"title\":\"Database\",\"slug\":\"database\",\"link\":\"#database\",\"children\":[{\"level\":3,\"title\":\"MySQL\",\"slug\":\"mysql\",\"link\":\"#mysql\",\"children\":[]},{\"level\":3,\"title\":\"postgres\",\"slug\":\"postgres\",\"link\":\"#postgres\",\"children\":[]}]},{\"level\":2,\"title\":\"Currently Learning\",\"slug\":\"currently-learning\",\"link\":\"#currently-learning\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"skill/README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
