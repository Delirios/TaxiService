const carAdded = (request) => {
    return {
      type: "ADD_CAR",
      payload: request,
    };
  };
  const carDeleted = (request) => {
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
  const deleteCar = (taxiService,id) => () => async (dispatch) => {
  taxiService.deleteCar(id)
    .then((data) => dispatch(carDeleted(data)));
};
  
  export { addCar,deleteCar };