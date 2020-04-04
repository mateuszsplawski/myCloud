const getGeolocationFunc = () => {
  const options = {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 5000,
  };

  return new Promise<{ coords: {} }>((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
};

export default getGeolocationFunc;
