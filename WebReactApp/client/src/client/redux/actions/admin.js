const carAdded = (request) => {
    return {
      type: "ADD_CAR",
      payload: request,
    };
  };
  
  const addCar = (taxiService, newCar) => () => async (dispatch) => {
      console.log(newCar)
    taxiService
      .addCar(newCar)
      .then((data) => dispatch(carAdded(data)));
  };
  
  export { addCar };