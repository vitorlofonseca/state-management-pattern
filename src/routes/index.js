import { mountHomePage } from "../pages/home";
import { mountDetailPage } from "../pages/detail";

export const ROUTES = {
  "": mountHomePage,
  home: mountHomePage,
  detail: mountDetailPage,
};

export const navigate = (destinationRoute) => {
  const functionDestinationRoute = ROUTES[destinationRoute];

  if (!functionDestinationRoute) {
    console.error("destinationRoute not defined as possible route", ROUTES);
  }

  const rootDiv = document.getElementById("container");
  rootDiv.innerHTML = "";
  functionDestinationRoute();
};
