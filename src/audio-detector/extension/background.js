chrome.tabs.onUpdated.addListener((tabId, props) => {
    const keys = Object.keys(props);

    // only proceed when audible property changes on any tab
    if (!keys.includes('audible')) {
        return;
    }

    // send message to content.js listener
    chrome.tabs.sendMessage(tabId, { audible: props.audible });
});
