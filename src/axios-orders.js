import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-app-d5375.firebaseio.com/",
});
export default instance;
