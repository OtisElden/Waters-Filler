//Button listen for reveal, popup and passthrough

document.getElementById("911Template").addEventListener("click", () => revealTemplates("911"));
document.getElementById("transferTemplate").addEventListener("click", () => revealTemplates("transfer"));
document.getElementById("refusalTemplate").addEventListener("click", () => revealTemplates("refusal"));
document.getElementById("liftTemplate").addEventListener("click", () => revealTemplates("lift"));
document.getElementById("prepareButton").addEventListener("click", movetoPopUP);
document.getElementById("placeData").addEventListener("click", passThroughNumbers);


//Button listen for button presses but smaller and more modular

//List of button ID's
  const popupIDNames = [
    "emergentNonemergentBack",
    "nonemergentNonemergentBack",
    "transferCRMCToHospital",
    "transferCRMCToFacility",
    "liftAssist",
    "refusalEmergent",
    "refusalNonemergent",
    "testing"
  ];
  
  //Makes listening for button ID's
  popupIDNames.forEach(eventId => {
    document.getElementById(eventId).addEventListener("click", () => {
      callTypes(eventId);
    });
  });


//For moving the popup to the side of the screen, keeps the data connection live after imagetrend reload.
function movetoPopUP() {
    chrome.windows.getCurrent(function (currentWindow) {
        chrome.windows.create({
            url: "popup.html",
            type: "popup",
            height: 500,
            width: 400,
            left: currentWindow.left + currentWindow.width,
            top: currentWindow.top
        });
        window.close();
    });
}







//For revealing templates, if you add more please place functions here to reveal.

function revealTemplates(typeOfTemplate) {

    let element;

    switch (typeOfTemplate) {

        case "911":
            element = document.getElementById("911Narritive");
            break;

        case "transfer":
            element = document.getElementById("transferNarritive");
            break;

        case "refusal":
            element = document.getElementById("refusalNarrative");
            break;

        case "lift":
            element = document.getElementById("liftNarrative");
            break;

        default:
            break;

    }
    
    element.style.display = "block";
}