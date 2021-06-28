import axios from "axios";

const KEY = "AIzaSyCEs0T0dF-ZQRXQ5IqMtIbbEMAY58BsDXA";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    key: KEY,
    part: "snippet",
    maxResults: 5,
    type: "video",
  },
});
