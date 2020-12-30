const categoriesRequested = () => {
  return {
    type: "FETCH_CATEGORIES_REQUEST",
  };
};

const categoriesLoaded = (request) => {
  console.log("Success")
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
  console.log("Success")
  return {
    type: "FETCH_CARS_SUCCESS",
    payload: request,
  };
};
const fetchCars = (taxiService) => () => async(dispatch)=> {
  dispatch(carsRequested());
  let cars = await taxiService.getCars();
  console.log(cars)
  dispatch(carsLoaded(cars));
};

const fetchCategories = (taxiService) => () => async(dispatch)=> {
  dispatch(categoriesRequested());
  let categories = await taxiService.getCategories();
  console.log(categories)
  dispatch(categoriesLoaded(categories));
};

export { categoriesLoaded, fetchCategories,fetchCars };
