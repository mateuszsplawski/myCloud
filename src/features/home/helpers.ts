import { fetchAPIData } from "./../../api/helpers";

export const getGeolocation = () => {
  const response = new Promise<{
    coords: { longitude: number; latitude: number };
  }>((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 5000,
    });
  }).then(({ coords }) => fetchAPIData(coords));
  return response;
};
