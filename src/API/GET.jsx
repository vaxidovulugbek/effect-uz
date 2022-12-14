
import axios from "axios";

const token = "LAEQ2GUBlv8tmxCdFRvq0NhiQrGgBJlEGifjvBz4e0ZHeJZ6Dg";
const tokentask = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NTA0NzQ2OTcsImV4cCI6MTY2NjQ3NDY5Nywicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiOTk4OTk4NTk3ODcyIn0.JJVqNcyeHx8S3FTQqBRW8rrWkn"
const headers = {
  headers: {
    "Content-Type": "application/json;",
    Authorization: `Bearer ${token}`,
  },
};
const headertask = {
  headertask: {
    "Content-Type": "application/json;",
    Authorization: `Bearer ${tokentask}`,
  },
};

const CATEGORY_URL = "https://simply.uz/api/category";
const PROVENCE_URL = "https://simply.uz/api/provence";
const CONFIG_URL = "https://simply.uz/api/config";
const NEWS_URL = "https://simply.uz/api/news-all";
// const NEW = "https://simply.uz/api/new?id";  
const NEW_URL = "https://simply.uz/api/new?id";
const MOST_READ = "https://simply.uz/api/more";
const VIDEOS = "https://simply.uz/api/news-video";
const REPARTER__URL = "https://simply.uz/api/reporter?id";
// const REPORTER = "https://simply.uz/api/reporter?id=6";
const VOISEC__URL = "https://simply.uz/api/voices"; // barcha audio habarlar
// const MORE = "https://simply.uz/api/more";
// const VOISE_ONE_URL = "https://simply.uz/api/voice-one";
// const TOP10_NEWS_URL = " https://simply.uz/api/more";
const SEARCH_URL = "https://simply.uz/api/search?search=Fransiya";
const VOICE_ONE = "https://simply.uz/api/voice-one?id";   
// const NEWS_CATEGORY = "https://simply.uz/api/news-category?id"  

const NEWS_CATEGORY = "https://simply.uz/api/news-category?id";
const TASK_URL = "https://api.uracashback.uz/companies"

const GET = {
  category: () => axios.get(CATEGORY_URL, headers),
  provence: () => axios.get(PROVENCE_URL, headers),
  config: () => axios.get(CONFIG_URL, headers),
  news: () => axios.get(NEWS_URL, headers),
  newItem: (ID) => axios.get(`${NEW_URL}=${ID}`, headers),
  mostRead: () => axios.get(MOST_READ, headers),
  videos: () => axios.get(VIDEOS, headers),
  reporter: (ID) => axios.get(`${REPARTER__URL}=${ID}`, headers),
  // reporterone: () => axios.get(REPORTER, headers),
  voisec: () => axios.get(VOISEC__URL, headers),
  top10news: () => axios.get(VOISEC__URL, headers),
  // newstop10: () => axios.get(MORE, headers),
  search: () => axios.get(SEARCH_URL, headers),
  voice_one: (id) => axios.get(`${VOICE_ONE}=${id}`, headers),
  news_category: (id) => axios.get(`${NEWS_CATEGORY}=${id}`, headers),
  // voise: () => axios.get(VOISE_ONE_URL, headers),
  companies_task:() => axios.get(TASK_URL, headertask)
}

export default GET 
