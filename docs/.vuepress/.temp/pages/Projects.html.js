import comp from "C:/Users/MIQDAD/Desktop/vue/profile/docs/.vuepress/.temp/pages/projects.html.vue"
const data = JSON.parse("{\"path\":\"/projects.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"📚 Printer (Laravel + React.js)\",\"slug\":\"📚-printer-laravel-react-js\",\"link\":\"#📚-printer-laravel-react-js\",\"children\":[]},{\"level\":2,\"title\":\"🏪 Decenary\",\"slug\":\"🏪-decenary\",\"link\":\"#🏪-decenary\",\"children\":[]}],\"git\":{\"updatedTime\":1758184287000,\"contributors\":[{\"name\":\"Suhaeb Fzael Mohammad\",\"username\":\"\",\"email\":\"Suhaeb.Fazel03@gmail.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"1a7f286bb65403776b0941be1f6cfb6983429874\",\"time\":1758184287000,\"email\":\"Suhaeb.Fazel03@gmail.com\",\"author\":\"Suhaeb Fzael Mohammad\",\"message\":\"Create Profile Pages\"}]},\"filePathRelative\":\"projects.md\"}")
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
