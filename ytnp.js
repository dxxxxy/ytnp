const tick = setInterval(() => {
   console.log("trying to observe.")

   try {
      //observe popup container element
      new MutationObserver((mutationList, _observer) => {
         try {
            //get the popup element ONLY if it is related to adblock
            const popup = document.querySelector("body > ytd-app > ytd-popup-container > tp-yt-paper-dialog > ytd-enforcement-message-view-model").parentNode
   
            if (popup) {
               //remove popup
               popup.remove()
               console.log("removed.")
   
               //resume video
               document.querySelector("#movie_player > div.ytp-chrome-bottom > div.ytp-chrome-controls > div.ytp-left-controls > button").click()
            }
         } catch {} //disregard errors
      }).observe(document.querySelector("body > ytd-app > ytd-popup-container"), { childList: true, subtree: true })

      clearInterval(tick)
      console.log("observing. dxxxxy was here.")
   } catch {
      console.log("failed to observe. will retry.")
   }
}, 1000)