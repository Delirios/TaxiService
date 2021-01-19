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
  console.log(newCar);
  await taxiService.addCar(newCar);
  dispatch(carAdded());
};
const deleteCar = (taxiService, id) => () => async (dispatch) => {
  console.log(id);
  await taxiService.deleteCar(id);
  dispatch(carDeleted());
};

const fetchCars = (taxiService) => () => async (dispatch) => {
  dispatch(carsRequested());
  let cars = await taxiService.getCars();
  console.log(cars);
  dispatch(carsLoaded(cars));
};

const fetchCategories = (taxiService) => () => async (dispatch) => {
  dispatch(categoriesRequested());
  let categories = await taxiService.getCategories();
  console.log(categories);
  dispatch(categoriesLoaded(categories));
};

export { categoriesLoaded, fetchCategories, fetchCars, addCar, deleteCar };
