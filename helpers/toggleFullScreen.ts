async function toggleFullScreen(hide: boolean = true) {
  console.log("toggle FullScrenn function executed");
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    //@ts-ignore
    target: { tabId: tab.id },
    //@ts-ignore
    function: function () {
      console.log("running full screen toggle function");
      const comments = document.evaluate(
        "//*[@id='app']/div[2]/div[3]/div[2]",
        document,
        null,
        XPathResult.FIRST_ORDERED_NODE_TYPE,
        null
      ).singleNodeValue;
      //@ts-ignore
      const commentsState = comments.style.display;
      //@ts-ignore
      comments.style.display = commentsState == "none" ? "initial" : "none";
    },
  });
}

export default toggleFullScreen;
