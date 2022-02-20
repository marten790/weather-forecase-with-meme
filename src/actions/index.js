import giphyRandom from "../api/giphy-random";
import userWeather from "../api/weather-information";

// action creator
export const getUserLocation = () => async (dispatch) => {
  const geolocation = navigator.geolocation;

  geolocation.getCurrentPosition((position) => {
    dispatch({
      type: "FETCH_USER_LOCATION",
      payload: [position.coords],
    });
  });
};

export const getUserWeather = () => async (dispatch) => {
  const geolocation = navigator.geolocation;

  geolocation.getCurrentPosition(async (position) => {
    const getWeather = await userWeather.get("/weather", {
      params: {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      },
    });

    const descriptionMeme = await getMemeRandom(
      getWeather.data.weather[0].description
    )();

    getWeather.data.weather[0].descriptionMeme =
      descriptionMeme.data.data.images.original.url;

    dispatch({
      type: "FETCH_USER_WEATHER",
      payload: getWeather.data,
    });
  });

  const getMemeRandom = (searchValue) => async () => {
    return await giphyRandom.get("/gifs/random", {
      params: {
        tag: searchValue,
      },
    });
  };
};
