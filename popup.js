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



//For connecting to the contentScript
  
//Stores variable globally for other functions, I know, I know... but it works.
var imagetrendTabID;
var imagetrendConnectionPort

//This listens for the message from the contentScript and assigns values to the variables above.
chrome.runtime.onMessage.addListener((request, sender) => {

    if (request.message == "GrabTabID") {

        imagetrendTabID = sender.tab.id;
        imagetrendConnectionPort = chrome.tabs.connect(imagetrendTabID, { name: "extensionPassthrough" });

        console.log("Connected to content script!")
    }
    }
);


//For recieving messages from the content script. Might delete later due to no use since no data is received. Decpricated.

//For opening the port from contentScript and grabbing messages sent from contentScript
chrome.runtime.onConnect.addListener(function (port) {

    port.onMessage.addListener(function (msg) {

    switch (port.name) {

    case "imagetrendPassthrough":

                switch (msg.type) {

                    case "openPort":
                        //console.log("recieved connection from imagetrend")
                        break;

                    case "passthrough":

                        //writeTitleToPlaces(msg.message);
                        //console.log(msg.message);
                        break;

                    default:
                        break;
                }
    default:
        break;
    }

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


//For manually calling the button functions, sorta depreciated with the new updates to contentScript.
function callTypes(callType) {

    switch (callType) {

        case "testing":
            sendToFrontend("serviceRequested", "callFill", "testAddButton");
            break;

        case "emergentNonemergentBack":
            sendToFrontend("serviceRequested", "callFill", "gotoEmergentgobackNonToCRMC");
            break;

        case "nonemergentNonemergentBack":
            sendToFrontend("serviceRequested", "callFill", "gotoNonEmergentgobackNonToCRMC");
            break;

        case "transferCRMCToHospital":
            sendToFrontend("serviceRequested", "callFill", "transferHospitaltoHospitalNonEmergent");
            break;

        case "transferCRMCToFacility":
            sendToFrontend("serviceRequested", "callFill", "transferHospitaltoOtherFacilityNonEmergent");
            break;

        case "liftAssist":
            sendToFrontend("serviceRequested", "callFill", "liftAssist");
            break;

        case "refusalEmergent":
            sendToFrontend("serviceRequested", "callFill", "refusalEmergent");
            break;

        case "refusalNonemergent":
            sendToFrontend("serviceRequested", "callFill", "refusalNonEmergent");
            break;

        default:
            break;

    }

}


//For Sending messages to the contentScript, must have an open port using prepare first! eg. sendToFrontend("whatever", "reload");

//POSSIBLE UPDATE. Might look into JSON data to send over instead of this way.

function sendToFrontend(messagePass, typeOfSend, referenceToData, HAN, MRN, ERN, mail, Pnumber) {

    imagetrendConnectionPort.postMessage({ message: messagePass, type: typeOfSend, reference: referenceToData, HospitalANumber: HAN, MedicalNumber: MRN, EncounterNumber: ERN, Email: mail, Phone: Pnumber });
    imagetrendConnectionPort.onMessage.addListener(function (msg) {
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


//The start of OCR scanning for face sheets. Currently manual entry is the only option
//Will have to consult with legal department before implementing OCR scanning.

//Grabs data from popup and pushes through with sendToFrontend
function passThroughNumbers() {

    let HAN = document.getElementById('inputHAN').value;
    let MRN = document.getElementById('inputMRN').value;
    let EncounterNumber = document.getElementById('inputEncounterNumber').value;
    let Email = document.getElementById('inputEmail').value;
    let Phone = document.getElementById('inputPhone').value;



    sendToFrontend("serviceRequested", "infoFill", "" , HAN, MRN, EncounterNumber, Email, Phone);
}