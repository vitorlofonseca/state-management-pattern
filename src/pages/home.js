import { title } from "../components/title";
import { button } from "../components/button";

let counter = 0;

export const mountHomePage = () => {
  const rootDiv = document.getElementById("container");

  const bodyContainer = document.createElement("div");
  const pageTitle = title("Here you can increase the counter");
  const counterLabel = title(counter);
  const increaseCounterBtn = button("Increase", () => {
    counter++;
    counterLabel.innerHTML = counter;
  });

  bodyContainer.appendChild(pageTitle);
  bodyContainer.appendChild(counterLabel);
  bodyContainer.appendChild(increaseCounterBtn);

  bodyContainer.style.cssText = `
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 60vh;
    align-items: center;
`;

  rootDiv.appendChild(bodyContainer);
};
