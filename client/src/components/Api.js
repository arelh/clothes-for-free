import axios from 'axios'
let url = "http://localhost:5002"

 const Api=axios.create({baseURL:url})
 export {Api}