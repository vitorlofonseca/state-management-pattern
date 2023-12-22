import { mountLink } from "./link.js";

export const mountHeader = () => {
  const homeLink = mountLink("Home", "home");
  const detailsLink = mountLink("Details", "detail");

  const header = document.createElement("header");
  header.appendChild(homeLink);
  header.appendChild(detailsLink);
  header.style.cssText = `
        display: flex;
        gap: 20px;
        background-color: #d1d1d1;
        padding: 20px;
        `;

  return header;
};
