import clickButtonWhenVideoEnds from "./helpers/clickButtonWhenVideoEnds";
import injectButton from "./helpers/InjectButton";
import { getSettings, setSetting } from "./helpers/settings";
import toggleFullScreen from "./helpers/toggleFullScreen";

console.log("hooking srviceWorkerMain.ts");

async function handleUpdated(tabId: any, changeInfo: any, tabInfo: any) {
  console.log("tab update event");
  if (changeInfo.status == "complete") {
    injectButton();
 
    clickButtonWhenVideoEnds();
  }
}

if(!chrome.tabs.onUpdated.hasListener(handleUpdated)) 
{
  //test
  chrome.tabs.onUpdated.addListener(handleUpdated);
  clickButtonWhenVideoEnds();
}

chrome.action.onClicked.addListener(function(tab) {
  toggleFullScreen();
});
