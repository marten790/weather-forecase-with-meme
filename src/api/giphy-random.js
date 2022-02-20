import axios from "axios";

const baseApiUrlRandom = "http://api.giphy.com/v1";
const KEY = process.env.REACT_APP_GIPHY_API_KEY;

export default axios.create({
  baseURL: baseApiUrlRandom,
  params: {
    api_key: KEY,
  },
});

// https://developers.giphy.com/docs/api/endpoint#random

// Request Parameters: | Example: | Description:
// api_key: string(required) | YOUR_API_KEY | GIPHY API Key.
// tag: string | burrito | Filters results by specified tag..
// rating: string | g | Filters results by specified rating. If you do not specify a rating, you will receive results from all possible ratings.
// random_id: string | e826c9fc5c929e0d6c6d423841a282aa | An ID/proxy for a specific user.