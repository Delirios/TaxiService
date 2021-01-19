const categoriesRequested = () => {
  return {
    type: "FETCH_CATEGORIES_REQUEST",
  };
};

const categoriesLoaded = (request) => {
  console.log("Success");
  return {
    type: "FETCH_CATEGORIES_SUCCESS",
    payload: request,
  };
};
const carsRequested = () => {
  return {
    type: "FETCH_CARS_REQUEST",
  };
};

const carsLoaded = (request) => {
  console.log("Success");
  return {
    type: "FETCH_CARS_SUCCESS",
    payload: request,
  };
};

const carAdded = () => {
  return {
    type: "ADD_CAR",
  };
};
const carDeleted = () => {
  return {
    type: "DELETE_CAR",
  };
};
const addCar = (taxiService, newCar) => () => async (dispatch) => {
  await taxiService.addCar(newCar);
  dispatch(carAdded());
};
const deleteCar = (taxiService, id) => () => async (dispatch) => {
  await taxiService.deleteCar(id);
  dispatch(carDeleted());
};

const fetchCars = (taxiService) => () => async (dispatch) => {
  dispatch(carsRequested());
  let cars = await taxiService.getCars();
  dispatch(carsLoaded(cars));
};

const fetchCategories = (taxiService) => () => async (dispatch) => {
  dispatch(categoriesRequested());
  let categories = await taxiService.getCategories();
  dispatch(categoriesLoaded(categories));
};

export { categoriesLoaded, fetchCategories, fetchCars, addCar, deleteCar };
