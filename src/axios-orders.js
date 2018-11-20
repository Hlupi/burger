import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://hlupi-burger.firebaseio.com/'
})

export default instance;