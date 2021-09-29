export const state = () => ({
  posts: [],
  loaded: '0'
})

export const mutations = {
  setPosts(state, posts) {
    state.posts = posts
  },
  setLoaded (state, loaded) {
    state.loaded = loaded
  }
}
