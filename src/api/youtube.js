import axios from "axios";

export default axios.create({
  baseURL: "https://https://youtube.googleapis.com/youtube/v3/search?",
  headers: {
    Authorization: "Bearer xy",
    Accept: "application/json",
  },
});
