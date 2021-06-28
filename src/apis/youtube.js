import axios from "axios";

const KEY = "TBA";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    key: KEY,
    part: "snippet",
    maxResults: 5,
    type: "video",
  },
});
