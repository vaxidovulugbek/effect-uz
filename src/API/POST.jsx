
import axios from "axios";

const token = "LAEQ2GUBlv8tmxCdFRvq0NhiQrGgBJlEGifjvBz4e0ZHeJZ6Dg";

const LOGIN_URL = "https://simply.uz/api/login";
const NEWS_END = "https://simply.uz/api/news-end?count";
const COME_URL = "https://simply.uz/api/come";
const ADVERT_URL = "https://simply.uz/api/advert";
const COMMENT_URL = "https://simply.uz/api/comment";
const RESEPTION_URL = "https://simply.uz/api/reception";
const STAR_URL = "https://simply.uz/api/star";

const headers = {
  headers: {
    "Content-Type": "application/json;",
    Authorization: `Bearer ${token}`,
  },
};

const POST = {
  login: (params) => axios.post(LOGIN_URL, params),
  newsFour: (params) => axios.post(`${NEWS_END}`,params, headers),
  comment: (params) => axios.post(`${COMMENT_URL}`,params, headers),
  star: (params)=> axios.post(`${STAR_URL}`, params, headers),
}

export default POST