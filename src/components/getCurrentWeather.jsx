import axios from "axios";

const getCurrentWeather = async (latitude, longitude, params) => {
  let promises = params.map(async (param) => {
    try {
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=${param}`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  });
  return await Promise.all(promises);
};

export default getCurrentWeather;