//Functions for button clicks, stores all the menus and clicks.

function callEmergentCRMCNonEmergent() {

    press("menu", ["Start Up"]);

    press("menu", ["Start-Up"]);

    setTimeout(startTab, 10);

    function startTab() {

        let startTabDropdowns = ["Emergency Response (Primary Response Area)", "Initiated and Continued Primary Care", "Transport by This EMS Unit (This Crew Only)", "Ground Transport (ALS Equipped)"];

        let startTabButtons = ["Patient Contact Made", "Patient Evaluated and Care Provided"];

        press("dropdown", startTabDropdowns);
        press("button", startTabButtons);


        press("menu", ["Response"]);

        press("menu", ["Response Info"]);

        setTimeout(responseTab, 10);
    }


    function responseTab() {

        let responseInfoTabButtons = ["Emergent", "Emergent (Immediate Response)", "Yes", "Single"];

        press("button", responseInfoTabButtons);

        press("dropdown secondary", ["Lights and Sirens"])


        press("menu", ["Transport"]);

        press("menu", ["Transport Info"]);

        setTimeout(transportInfoTab, 10);
    }


    function transportInfoTab() {

        press("dropdown", ["Ground-Ambulance"]);

        let clickOnNumMenu = document.querySelector("#a43e6fca-b6bd-5c15-b9f4-9afb7773582b > div.input-wrapper > div.interceptor-wrapper > div");
        clickOnNumMenu.click();

        press("numericalButtons", ["1"])

        press("button", ["Lower Acuity (Green)"])


        press("menu", ["Disposition Destination"]);

        setTimeout(transportDestTab, 10);
    }


    function transportDestTab() {

        press("dropdown", ["Cheyenne Regional Medical Center"]);

        press("dropdown secondary", ["Closest Facility"]);


        press("menu", ["Signatures"]);

        setTimeout(signatureTab, 10);
    }


    function signatureTab() {

        let signatureButton = document.querySelector('.grid-button');
        signatureButton.click();
    }

}


function callNonEmergentCRMCNonEmergent() {

    press("menu", ["Start Up"]);

    press("menu", ["Start-Up"]);

    setTimeout(startTab, 10);

    function startTab() {

        let startTabDropdowns = ["Emergency Response (Primary Response Area)", "Initiated and Continued Primary Care", "Transport by This EMS Unit (This Crew Only)", "Ground Transport (ALS Equipped)"];

        let startTabButtons = ["Patient Contact Made", "Patient Evaluated and Care Provided"];

        press("dropdown", startTabDropdowns);
        press("button", startTabButtons);


        press("menu", ["Response"]);

        press("menu", ["Response Info"]);

        setTimeout(responseTab, 10);
    }


    function responseTab() {

        let responseInfoTabButtons = ["Lower Acuity", "Non-Emergent", "Yes", "Single"];

        press("button", responseInfoTabButtons);


        press("menu", ["Transport"]);

        press("menu", ["Transport Info"]);

        setTimeout(transportInfoTab, 10);
    }


    function transportInfoTab() {

        press("dropdown", ["Ground-Ambulance"]);

        let clickOnNumMenu = document.querySelector("#a43e6fca-b6bd-5c15-b9f4-9afb7773582b > div.input-wrapper > div.interceptor-wrapper > div");
        clickOnNumMenu.click();

        press("numericalButtons", ["1"])

        press("button", ["Lower Acuity (Green)"])


        press("menu", ["Disposition Destination"]);

        setTimeout(transportDestTab, 10);
    }


    function transportDestTab() {

        press("dropdown", ["Cheyenne Regional Medical Center"]);

        press("dropdown secondary", ["Closest Facility"]);


        press("menu", ["Signatures"]);

        setTimeout(signatureTab, 10);
    }


    function signatureTab() {

        let signatureButton = document.querySelector('.grid-button');
        signatureButton.click();
    }

}


function transferFromCRMCNonEmergentToHospital() {

    press("menu", ["Start Up"]);

    press("menu", ["Start-Up"]);

    setTimeout(startTab, 10);

    function startTab() {

        let startTabDropdowns = ["Hospital-to-Hospital Transfer (Interfacility)", "Initiated and Continued Primary Care", "Transport by This EMS Unit (This Crew Only)", "Ground Transport (ALS Equipped)"];

        let startTabButtons = ["Patient Contact Made", "Patient Evaluated and Care Provided"];

        press("dropdown", startTabDropdowns);

        press("button", startTabButtons);


        press("menu", ["Response"]);
        press("menu", ["Response Info"]);

        setTimeout(responseTab, 10);
    }


    function responseTab() {

        let responseInfoTabDropdowns = ["Transfer/Interfacility/Palliative Care", "Hospital", "Cheyenne Regional Medical Center"];

        let responseInfoTabButtons = ["Non-Acute [e.g., Scheduled Transfer or Standby]", "Yes", "Non-Emergent", "Single"];

        press("dropdown", responseInfoTabDropdowns);

        press("button", responseInfoTabButtons);


        press("menu", ["Transport"]);
        press("menu", ["Transport Info"]);

        setTimeout(transportInfoTab, 10);
    }


    function transportInfoTab() {

        press("dropdown", ["Ground-Ambulance"]);

        let clickOnNumMenu = document.querySelector("#a43e6fca-b6bd-5c15-b9f4-9afb7773582b > div.input-wrapper > div.interceptor-wrapper > div");
        clickOnNumMenu.click();

        press("numericalButtons", ["1"])

        press("button", ["Lower Acuity (Green)"])


        press("menu", ["Signatures"]);

        setTimeout(signatureTab, 10);
    }


    function signatureTab() {

        let signatureButton = document.querySelector('.grid-button');
        signatureButton.click();
    }

}


function transferFromCRMCNonEmergentToFacility() {

    press("menu", ["Start Up"]);

    press("menu", ["Start-Up"]);

    setTimeout(startTab, 10);

    function startTab() {

        let startTabDropdowns = ["Hospital to Non-Hospital Facility Transfer", "Initiated and Continued Primary Care", "Transport by This EMS Unit (This Crew Only)", "Ground Transport (ALS Equipped)"];

        let startTabButtons = ["Patient Contact Made", "Patient Evaluated and Care Provided"];

        press("dropdown", startTabDropdowns);

        press("button", startTabButtons);


        press("menu", ["Response"]);
        press("menu", ["Response Info"]);

        setTimeout(responseTab, 10);
    }


    function responseTab() {

        let responseInfoTabDropdowns = ["Transfer/Interfacility/Palliative Care", "Hospital", "Cheyenne Regional Medical Center"];

        let responseInfoTabButtons = ["Non-Acute [e.g., Scheduled Transfer or Standby]", "Yes", "Non-Emergent", "Single"];

        press("dropdown", responseInfoTabDropdowns);

        press("button", responseInfoTabButtons);


        press("menu", ["Transport"]);
        press("menu", ["Transport Info"]);

        setTimeout(transportInfoTab, 10);
    }


    function transportInfoTab() {

        press("dropdown", ["Ground-Ambulance"]);

        let clickOnNumMenu = document.querySelector("#a43e6fca-b6bd-5c15-b9f4-9afb7773582b > div.input-wrapper > div.interceptor-wrapper > div");
        clickOnNumMenu.click();

        press("numericalButtons", ["1"])

        press("button", ["Lower Acuity (Green)"])


        press("menu", ["Signatures"]);

        setTimeout(signatureTab, 10);
    }


    function signatureTab() {

        let signatureButton = document.querySelector('.grid-button');
        signatureButton.click();
    }

}


function liftAssist() {

    press("menu", ["Start Up"]);

    press("menu", ["Start-Up"]);

    setTimeout(startTab, 10);

    function startTab() {

        let startTabDropdowns = ["Public Assistance / Other Not Listed", "Incident Support Services Provided (Including Standby)", "No Transport", "Ground Transport (ALS Equipped)"];

        let startTabButtons = ["Non-Patient Incident (Not Otherwise Listed)"];

        press("dropdown", startTabDropdowns);

        press("button", startTabButtons);


        press("menu", ["Response"]);
        press("menu", ["Response Info"]);

        setTimeout(responseTab, 10);
    }


    function responseTab() {

        let responseInfoTabDropdowns = ["Falls"];

        let responseInfoTabButtons = ["Lower Acuity", "Yes", "Non-Emergent", "None"];

        press("dropdown", responseInfoTabDropdowns);

        press("button", responseInfoTabButtons);


        press("menu", ["Signatures"]);

        setTimeout(signatureTab, 10);
    }


    function signatureTab() {

        let signatureButton = document.querySelector('.grid-button');
        signatureButton.click();
    }
}


function refusalEmergent() {

    press("menu", ["Start Up"]);

    press("menu", ["Start-Up"]);

    setTimeout(startTab, 10);

    function startTab() {

        let startTabDropdowns = ["Emergency Response (Primary Response Area)", "Back in Service, Care/Support Services Refused", "Patient Refused Transport", "Ground Transport (ALS Equipped)"];

        let startTabButtons = ["Patient Contact Made", "Patient Evaluated and Refused Care"];

        press("dropdown", startTabDropdowns);
        press("button", startTabButtons);


        press("menu", ["Response"]);

        press("menu", ["Response Info"]);

        setTimeout(responseTab, 10);
    }


    function responseTab() {

        let responseInfoTabButtons = ["Emergent", "Emergent (Immediate Response)", "Yes", "Single"];

        press("button", responseInfoTabButtons);

        press("dropdown secondary", ["Lights and Sirens"])


        press("menu", ["Signatures"]);

        setTimeout(signatureTab, 10);
    }


    function signatureTab() {

        let signatureButton = document.querySelector('.grid-button');
        signatureButton.click();
    }

}


function refusalNonEmergent() {

    press("menu", ["Start Up"]);

    press("menu", ["Start-Up"]);

    setTimeout(startTab, 10);

    function startTab() {

        let startTabDropdowns = ["Emergency Response (Primary Response Area)", "Back in Service, Care/Support Services Refused", "Patient Refused Transport", "Ground Transport (ALS Equipped)"];

        let startTabButtons = ["Patient Contact Made", "Patient Evaluated and Refused Care"];

        press("dropdown", startTabDropdowns);
        press("button", startTabButtons);


        press("menu", ["Response"]);

        press("menu", ["Response Info"]);

        setTimeout(responseTab, 10);
    }


    function responseTab() {

        let responseInfoTabButtons = ["Lower Acuity", "Non-Emergent", "Yes", "Single"];

        press("button", responseInfoTabButtons);


        press("menu", ["Signatures"]);

        setTimeout(signatureTab, 10);
    }


    function signatureTab() {

        let signatureButton = document.querySelector('.grid-button');
        signatureButton.click();
    }

}



//Revised process for getting the nodes on the webpage and comparing text attributes, will grab all the button locations at once and then click all at once.
function press(typeOfClick, arrayToPassIn) {

    let grabNodes;

    switch (typeOfClick) {

        case "dropdown":
            grabNodes = Array.from(document.querySelectorAll('.koSingleselect-dropDownItem'));
            break;

        case "dropdown secondary":
            grabNodes = Array.from(document.querySelectorAll('.koMultiselect-dropDownItem > *'));
            break;

        case "dropdown medNumbers":
            grabNodes = Array.from(document.querySelectorAll('.koSingleselect-dropDown-wrapper > * > *'));
            break;

        case "button":
            grabNodes = Array.from(document.querySelectorAll(".smart-list-button-label"));
            break;

        case "menu":
            grabNodes = Array.from(document.getElementById("sections").querySelectorAll('.text-padding'));
            break;

        case "numericalButtons":
            grabNodes = Array.from(document.querySelectorAll('.number-pad-list-button-label'));
            break;

        default:
            break;
    }

    let nodesToClick = arrayToPassIn.map(x => grabNodes.find(node => node.textContent === x));

    //console.log(nodesToClick);

    nodesToClick.forEach(node => node && node.click());
}


//Similar to buttonClicker, however will type inside boxes instead of hitting a button or number.
function typeInBoxes(id, valueToWrite) {

    // Find the input element by its ID
    let inputElement = document.getElementById(id);

    if (inputElement) {
        // Set the desired value
        let newValue = valueToWrite;
        inputElement.value = newValue;

        // Trigger change events if necessary
        inputElement.dispatchEvent(new Event('input', { bubbles: true }));
        inputElement.dispatchEvent(new Event('change', { bubbles: true }));

        console.log("Value set to input element:", newValue);
    } else {
        console.error("Input element not found with the specified ID.");
    }

}



//Actually adds the buttons to the start page
function buttonWatcher() {

    const functionArray = [callEmergentCRMCNonEmergent, callNonEmergentCRMCNonEmergent, transferFromCRMCNonEmergentToHospital, transferFromCRMCNonEmergentToFacility, liftAssist, refusalEmergent, refusalNonEmergent];
const buttonNames = ["Emergent CRMC Non-Emergent", "Non-Emergent CRMC Non-Emergent", "Transfer From CRMC Non-Emergent to Hospital", "Transfer From CRMC Non-Emergent to Facility", "Lift Assist", "Refusal Emergent", "Refusal Non-Emergent"];

function addButtons() {
    const testGrabButton = document.querySelector(".button-control");
    const buttonParent = testGrabButton.parentElement;

    // Ensure functionArray and buttonNames have the same length
    if (functionArray.length !== buttonNames.length) {
        console.error("functionArray and buttonNames arrays must be of the same length.");
        return;
    }

    for (let i = 0; i < functionArray.length; i++) {
        const fn = functionArray[i];
        const buttonName = buttonNames[i]; // Use the corresponding button name

        const newButton = document.createElement('button');
        newButton.className = testGrabButton.className;
        newButton.innerHTML = buttonName; // Set the button's innerHTML to the human-friendly name
        newButton.style.marginLeft = "15px";
        newButton.style.marginTop = "5px";
        newButton.onclick = fn;
        buttonParent.appendChild(newButton);
    }
}


    //This is the checker, looks for the field and then DC's.
    function checkInnerHTML() {
        const foundButton = Array.from(document.querySelectorAll("*")).find(element => element.innerHTML === "Preset Value - AMR Chey Emergency Response to CRMC");

        if (foundButton) {
            addButtons();
            clearInterval(intervalID); //Stops the interval once the buttons are added
        }
    }

    //Set up the interval to check every 1 second
    const intervalID = setInterval(checkInnerHTML, 1000);

    //Initial check
    checkInnerHTML();
}

//Starts the button watcher
buttonWatcher();