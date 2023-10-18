console.log("loaded. dxxxxy was here.")

new MutationObserver((mutationList, _observer) => {
   const popup = document.querySelector("body > ytd-app > ytd-popup-container > tp-yt-paper-dialog > ytd-enforcement-message-view-model").parentNode

   if (popup) {
      //remove popup
      popup.remove()
      console.log("removed.")

      //resume video
      document.querySelector("#movie_player > div.ytp-chrome-bottom > div.ytp-chrome-controls > div.ytp-left-controls > button").click()
   }
}).observe(document.querySelector("body > ytd-app > ytd-popup-container"), { childList: true, subtree: true })