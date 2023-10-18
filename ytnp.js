console.log("loaded. dxxxxy was here.")

new MutationObserver((mutationList, _observer) => {
   const popup = document.querySelector("body > ytd-app > ytd-popup-container > tp-yt-paper-dialog > ytd-enforcement-message-view-model").parentNode

   if (popup) {
      popup.remove()
      console.log("removed.")
   }
}).observe(document.querySelector("body > ytd-app > ytd-popup-container"), { childList: true, subtree: true })