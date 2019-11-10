import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID e3281d153370c227181df30d5807b62a42c0e0c993813fb20d71e75e7dee6481"
  }
});
