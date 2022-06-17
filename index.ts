import clickButtonWhenVideoEnds from "./helpers/clickButtonWhenVideoEnds";

console.log("hooking serviceWorkerMain.ts");

async function handleUpdated(tabId: any, changeInfo: any, tabInfo: any) {
  console.log("tab update event");
  if (changeInfo.status == "complete") {
    clickButtonWhenVideoEnds();
  }
}

if(!chrome.tabs.onUpdated.hasListener(handleUpdated)) 
{
  //test
  chrome.tabs.onUpdated.addListener(handleUpdated);
  clickButtonWhenVideoEnds();
}

