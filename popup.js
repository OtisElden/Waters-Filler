//Buttons for reveal

document.getElementById("911Template").addEventListener("click", () => revealTemplates("911"));
document.getElementById("transferTemplate").addEventListener("click", () => revealTemplates("transfer"));
document.getElementById("refusalTemplate").addEventListener("click", () => revealTemplates("refusal"));
document.getElementById("liftTemplate").addEventListener("click", () => revealTemplates("lift"));



//Button for button popup

document.getElementById("prepareButton").addEventListener("click", movetoPopUP);


//Buttons for manually choosing the selection. Sorta depreciated with the new updates to contentScript.
document.getElementById("dispatchEmergentToBackNonEmergent").addEventListener("click", callTypes("gotoEmergentgobackNonToCRMC"));
document.getElementById("dispatchNonEmergentBackNonEmergent").addEventListener("click", callTypes("gotoNonEmergentgobackNonToCRMC"));
document.getElementById("transferFromCRMCToHospital").addEventListener("click", callTypes("transferHospitaltoHospitalNonEmergent"));
document.getElementById("transferFromCRMCToFacility").addEventListener("click", callTypes("transferHospitaltoOtherFacilityNonEmergent"));
document.getElementById("liftAssistButton").addEventListener("click", callTypes("liftAssist"));
document.getElementById("refusalEmergent").addEventListener("click", callTypes("refusalEmergent"));
document.getElementById("refusalNonEmergent").addEventListener("click", callTypes("refusalNonEmergent"));
document.getElementById("testing").addEventListener("click", callTypes("testAddon"));




// document.getElementById("dispatchEmergentToBackNonEmergent").addEventListener("click", gotoEmergentgobackNonToCRMC);
// document.getElementById("dispatchNonEmergentBackNonEmergent").addEventListener("click", gotoNonEmergentgobackNonToCRMC);
// document.getElementById("transferFromCRMCToHospital").addEventListener("click", transferHospitaltoHospitalNonEmergent);
// document.getElementById("transferFromCRMCToFacility").addEventListener("click", transferHospitaltoOtherFacilityNonEmergent);
// document.getElementById("liftAssistButton").addEventListener("click", liftAssist);
// document.getElementById("refusalEmergent").addEventListener("click", refusalEmergent);
// document.getElementById("refusalNonEmergent").addEventListener("click", refusalNonEmergent);
// document.getElementById("testing").addEventListener("click", testAddon);


//Buttons for transmitting data

document.getElementById("placeData").addEventListener("click", passThroughNumbers);

var imgTabID;
var imgPort



//For getting the tabID of contentScript and connecting popup.js to contentScript

chrome.runtime.onMessage.addListener((request, sender) => {

    if (request.message == "GrabTabID") {

        imgTabID = sender.tab.id;
        imgPort = chrome.tabs.connect(imgTabID, { name: "extensionPassthrough" });

        console.log("Connected to content script!")
    }
    }
);



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




function storeOldComments() {

// //For sending write functions

// //For default calls. Go there emergent and return non-emergent

// function gotoEmergentgobackNonToCRMC() {

//     sendToFrontend("serviceRequested", "callFill", "gotoEmergentgobackNonToCRMC");
// }


// //For default calls. Go there non-emergent and return non-emergent

// function gotoNonEmergentgobackNonToCRMC() {

//     sendToFrontend("serviceRequested", "callFill", "gotoNonEmergentgobackNonToCRMC");
// }


// //For transfers

// function transferHospitaltoHospitalNonEmergent() {

//     sendToFrontend("serviceRequested", "callFill", "transferHospitaltoHospitalNonEmergent");
// }


// function transferHospitaltoOtherFacilityNonEmergent() {

//     sendToFrontend("serviceRequested", "callFill", "transferHospitaltoOtherFacilityNonEmergent");
// }


// //Lift assists

// function liftAssist() {

//     sendToFrontend("serviceRequested", "callFill", "liftAssist");
// }


// //Refusals

// function refusalEmergent() {

//     sendToFrontend("serviceRequested", "callFill", "refusalEmergent");
// }

// function refusalNonEmergent() {

//     sendToFrontend("serviceRequested", "callFill", "refusalNonEmergent");
// }


// //For testing


// function testAddon() {

//     sendToFrontend("serviceRequested", "callFill", "testAddButton");
// }


}








function callTypes(callType) {

    switch (callType) {

        case "testAddon":
            sendToFrontend("serviceRequested", "callFill", "testAddButton", "", "", "", "", "");
            break;

        case "gotoEmergentgobackNonToCRMC":
            sendToFrontend("serviceRequested", "callFill", "gotoEmergentgobackNonToCRMC", "", "", "", "", "");
            break;

        case "gotoNonEmergentgobackNonToCRMC":
            sendToFrontend("serviceRequested", "callFill", "gotoNonEmergentgobackNonToCRMC", "", "", "", "", "");
            break;

        case "transferHospitaltoHospitalNonEmergent":
            sendToFrontend("serviceRequested", "callFill", "transferHospitaltoHospitalNonEmergent", "", "", "", "", "");
            break;

        case "transferHospitaltoOtherFacilityNonEmergent":
            sendToFrontend("serviceRequested", "callFill", "transferHospitaltoOtherFacilityNonEmergent", "", "", "", "", "");
            break;

        case "liftAssist":
            sendToFrontend("serviceRequested", "callFill", "liftAssist", "", "", "", "", "");
            break;

        case "refusalEmergent":
            sendToFrontend("serviceRequested", "callFill", "refusalEmergent"), "", "", "", "", "";
            break;

        case "refusalNonEmergent":
            sendToFrontend("serviceRequested", "callFill", "refusalNonEmergent"), "", "", "", "", "";
            break;

        default:
            break;

    }

}



//For Sending messages to the contentScript, must have an open port using prepare first! eg. sendToFrontend("whatever", "reload");

function sendToFrontend(messagePass, typeOfSend, referenceToData, HAN, MRN, ERN, mail, Pnumber) {

    imgPort.postMessage({ message: messagePass, type: typeOfSend, reference: referenceToData, HospitalANumber: HAN, MedicalNumber: MRN, EncounterNumber: ERN, Email: mail, Phone: Pnumber });
    imgPort.onMessage.addListener(function (msg) {
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



function passThroughNumbers() {

    let HAN = document.getElementById('inputHAN').value;
    let MRN = document.getElementById('inputMRN').value;
    let EncounterNumber = document.getElementById('inputEncounterNumber').value;
    let Email = document.getElementById('inputEmail').value;
    let Phone = document.getElementById('inputPhone').value;



    sendToFrontend("serviceRequested", "infoFill", "passThrough" , HAN, MRN, EncounterNumber, Email, Phone);
}