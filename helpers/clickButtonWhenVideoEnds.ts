import config from "../config/config.json";

async function clickButtonWhenVideoEnds() {
  console.log("clicking video function executed");
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    
    //@ts-ignore
    target: { tabId: tab.id },
    //@ts-ignore
    function: function () {
      console.log("running event hook");
      const video = document.querySelector("video");
      video?.addEventListener("ended", function () {
        //@ts-ignore
        document.querySelector("[data-e2e='arrow-right']").click();
      });
    },
  });
}

export default clickButtonWhenVideoEnds;
