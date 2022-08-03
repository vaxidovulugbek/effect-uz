import axios from "axios";

let token = "LAEQ2GUBlv8tmxCdFRvq0NhiQrGgBJlEGifjvBz4e0ZHeJZ6Dg"
let headers = {
  headers:{
    "Content-Type": "application/json; charset='utf-8' ",
    "Authorization":  `Bearer ${token}`
  }
}


let params = {
  username: "api",
  password: "apiapiapi",
}

let LOGIN__URL = "https://effekt.loc/api/login"

let NEWS__END = "https://simply.uz/api/news-end?count"
let CATEGORY__URL = "https://simply.uz/api/category"

let API = {
  // POST METHODS
    login:() => axios.post(LOGIN__URL, params),
    category:() => axios.post(CATEGORY__URL, headers)

    // category: async (params) => {
    //   try {
    //     let responce = await axios.get(CATEGORY__URL)
    //     return responce
    //   } catch (err) {
    //     console.log(err);
    //   }
    // },

    // newsEnd: async(COUNT) => {
    //   try {
    //     axios.post(`${NEWS__END}=${COUNT}`,header)
    //   }catch (err){
    //     console.log(err);
    //   }


    }


export default API





  // header: {
  //   "Content-Type": "application/json"; charset="utf-8",
  //   "Authorization":"Bearer" + token
  // }