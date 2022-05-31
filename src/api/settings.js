import axios from "axios";
export default axios.create({
  baseURL: "https://superheros-app-back.herokuapp.com/api/heros/",
  // baseURL: "http://localhost:3333/api/heros/",
  headers: {
    "Content-type": "application/json"
  }
});