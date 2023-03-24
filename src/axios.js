import axios from "axios";

const axiosClient = axios.create({
  headers: {
    "Content-Type": "Application/json",
  },
});

export default axiosClient;
