import axios from 'axios'

const axiosBase = axios.create({
      baseURL: 'https://evangadi-forum-vwj2.onrender.com/api'
})

export default axiosBase