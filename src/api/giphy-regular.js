import axios from "axios";

const baseApiUrlRegular = "http://api.giphy.com/v1";
const KEY = process.env.REACT_APP_GIPHY_API_KEY;

export default axios.create({
  baseURL: baseApiUrlRegular,
  params: {
    api_key: KEY,
    limit: 1,
  },
});

// https://developers.giphy.com/docs/api/endpoint#search
// api_key: string(required)	YOUR_API_KEY	GIPHY API Key.
// q: string(required)	cheeseburgers	Search query term or phrase. Adding @<username> anywhere in the q parameter effectively changes the search query to be a search for a specific user’s GIFs (user has to be public and verified user by GIPHY.)
// limit: integer (int32)	20	The maximum number of objects to return. (Default: “25”).
// For beta keys max limit is 50
// offset: integer (int32)	5	Specifies the starting position of the results.
// Default: “0”
// Maximum: “4999”
// rating: string	g	Filters results by specified rating. Acceptable values include g, pg, pg-13, r. If you do not specify a rating, you will receive results from all possible ratings.
// lang: string	en	Specify default language for regional content; use a 2-letter ISO 639-1 language code.
// random_id: string	e826c9fc5c929e0d6c6d423841a282aa	An ID/proxy for a specific user.
// bundle: string	messaging_non_clips	Returns only renditions that correspond to the named bundle. Read more about renditions.