// Wrapper method to execute when debug mode is on
blockAdWithDebugging = () => {
  let element = document.querySelector("button.close.ih-cover-close");
  if (element && !elementClicked) {
    console.log("hiding banner");
    element.click();
    elementClicked = true;
  }
};

// Main method to remove ads
blockAd = () => {
  // hides banner
  let element = document.querySelector("button.close.ih-cover-close");
  if (element && !elementClicked) {
    element.click();
    elementClicked = true;
  }
};

// Initialization
let elementClicked = false;
let storageItem = browser.storage.local.get();
storageItem.then(result => {
  if (result.isDebugModeOnIndiahikes) {
    console.log("Initializing Indiahikes plus addon.");
    setInterval(blockAdWithDebugging, 2000);
  } else {
    setInterval(blockAd, 2000);
  }
});
