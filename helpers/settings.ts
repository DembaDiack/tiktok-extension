function getSettings(key: string,callback:Function) {
   chrome.storage.sync.get([key], function (result) {
     callback(result.key);
  });
}

function setSetting(key: string, value: any) {
  chrome.storage.sync.set({ [key]: value }, function () {
    console.log("Value is set to " + value);
  });
}

export { getSettings, setSetting };
