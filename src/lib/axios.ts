import axios from 'axios'

export const searchApi = axios.create({
  baseURL: 'https://api.github.com/search',
})

export const issuesApi = axios.create({
  baseURL: 'https://api.github.com/repos/edusmpaio/ignite-github-blog/issues/',
})
