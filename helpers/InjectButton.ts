import config from "../config/config.json";

async function injectButton() {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    //@ts-ignore
    target: { tabId: tab.id },
    //@ts-ignore
    function: function () {
      const parser = new DOMParser();
      const buttonHTML = parser
        .parseFromString(config.buttonRAW, "text/html")
        .querySelector("button");
        document
        .querySelector(config.next_video)
        .insertAdjacentElement("afterend", buttonHTML);
    },
  });
}
export default injectButton;
