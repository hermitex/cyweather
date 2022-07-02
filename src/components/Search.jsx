import { Formik } from "formik";
import { useState } from "react";
import DisplayForecast from "./DisplayForecast";
import getWeatherData from "./getWeatherData";

const isValidCoordinate = (value, min, max) => {
  return Number(value) && Number(value) >= min && Number(value) <= max;
};

const Search = () => {
  const [weatherData, setweatherData] = useState([]);

  return (
    <div>
      <Formik
        initialValues={{
          latitude: "-1",
          longitude: "36.5",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.latitude) {
            errors.latitude = "Required";
          } else if (!isValidCoordinate(values.latitude, -90, 90)) {
            errors.latitude = "Invalid latitude";
          }
          if (!values.longitude) {
            errors.longitude = "Required";
          } else if (!isValidCoordinate(values.longitude, -180, 180)) {
            errors.longitude = "Invalid longitude";
          }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          const data = await getWeatherData(
            [values.latitude, values.longitude],
            [
              "temperature_2m",
              "windspeed_120m",
              "relativehumidity_2m",
              "cloudcover_mid",
            ]
          );

          setweatherData(data);
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <div className="formContainer">
            <form id="form" onSubmit={handleSubmit}>
              <div className="formControl">
                <input
                  type="text"
                  name="latitude"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.latitude}
                />
                <small>
                  {errors.latitude && touched.latitude && errors.latitude}
                </small>
              </div>
              <div className="formControl">
                <input
                  type="text"
                  name="longitude"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.longitude}
                />
                <small>
                  {errors.longitude && touched.longitude && errors.longitude}
                </small>
              </div>
              <button type="submit" disabled={isSubmitting}>
                Get Forecast
              </button>
            </form>
          </div>
        )}
      </Formik>
      <DisplayForecast data={weatherData} />      
    </div>
  );
};

export default Search;
