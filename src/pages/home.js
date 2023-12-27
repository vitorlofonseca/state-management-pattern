import { title } from "../components/title";
import { button } from "../components/button";
import { stateManager } from "../index";

export const mountHomePage = () => {
  const rootDiv = document.getElementById("container");

  const bodyContainer = document.createElement("div");
  const pageTitle = title("Here you can increase the counter");
  const counterLabel = title(stateManager.state.counter);
  const increaseCounterBtn = button("Increase", () => {
    stateManager.updateState({ counter: stateManager.state.counter + 1 });
    counterLabel.innerHTML = stateManager.state.counter;
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
