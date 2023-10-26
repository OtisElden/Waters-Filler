// JavaScript code for scraping data and setting values on the website. Opens a port that the extension and the website can listen to. All recieved commands will toggle a function. Those functions are responsible for actually implementing stuff on the page.



//Declaring global variables that will be needed.

var extTabID;


//For sending the tab ID to the popup.js

chrome.runtime.sendMessage({ message: "GrabTabID" });



//For initiating the port to popup.js

port = chrome.runtime.connect({ name: "imagetrendPassthrough" });


//Recieves messages from the extension. Messages are broken down and activate specific functions.

chrome.runtime.onConnect.addListener(function (port) {
    port.onMessage.addListener(function (msg) {
        switch (port.name) {
            case "extensionPassthrough":
                switch (msg.type) {
                    case "reload":
                        let testPassValue = document.getElementsByClassName("column8 prefix2")[0].textContent;
                        passToExt(testPassValue, "passthrough", "TitleInfo");
                        break;

                    case "callFill":
                        switch (msg.reference) {
                            case "gotoEmergentgobackNonToCRMC":
                                callEmergentCRMCNonEmergent();
                                break;

                            case "gotoNonEmergentgobackNonToCRMC":
                                callNonEmergentCRMCNonEmergent();
                                break;

                            case "transferHospitaltoHospitalNonEmergent":
                                transferFromCRMCNonEmergentToHospital();
                                break;

                            case "transferHospitaltoOtherFacilityNonEmergent":
                                transferFromCRMCNonEmergentToFacility();
                                break;

                            case "liftAssist":
                                liftAssist();
                                break;

                            case "refusalEmergent":
                                refusalEmergent();
                                break;

                            case "refusalNonEmergent":
                                refusalNonEmergent();
                                break;

                            case "testAddButton":
                                addMiscValues();
                                break;

                            default:
                                break;
                        }
                        break;

                    case "infoFill":
                        // Extract the values from msg
                        let HospitalANumber = msg.HospitalANumber;
                        let MedicalNumber = msg.MedicalNumber;
                        let EncounterNumber = msg.EncounterNumber;
                        let Email = msg.Email;
                        let Phone = msg.Phone;

                        addMiscValues(HospitalANumber, MedicalNumber, EncounterNumber, Email, Phone);

                        break;

                    default:
                        break;
                }
                break;

            default:
                break;
        }
    });
});


//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Below for actually clicking buttons




//Area for selecting buttons and whatnot on imagetrend.

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


function liftAssist() { //This is not done, just copy pasted. Still need to go through and add the actuall button clicks.

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


//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//For functions that work with the button clicks


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


//For sending data to the extension, specify the message and type of message in the passthrough values! eg. sendToExt("whatever", "reload");

function passToExt(messagePass, typeOfSend, referenceToData) {

    port.postMessage({ message: messagePass, type: typeOfSend, reference: referenceToData });


    port.onMessage.addListener(function (msg) {

    });
}










function addMiscValues(HospitalANumber, MedicalNumber, EncounterNumber, Email, Phone) {

    press("menu", ["Patient Encounter"]);

    const buttons = document.querySelectorAll('button.grid-button');

    let HospitalNumberField = "72850";
    let EmailLocation = "72848";
    let MRNLocation = "72852"

    let phoneArray = Phone.split("");


    //Phone number
    buttons[0].click();

    setTimeout(function () {
        let phoneInput = document.querySelectorAll('.phone-wrapper > .interceptor-wrapper > .interceptor');
        phoneInput[0].click();

        press("numericalButtons", phoneArray)
    }, 250);


    //Email
    buttons[2].click();
    typeInBoxes(EmailLocation, Email);
    

    //Numbers
    setTimeout(function () {

        buttons[4].click();
        buttons[4].click();

        let NumberFields = document.querySelectorAll("[id='72852']");
        console.log(NumberFields);

        
        NumberFields[0].value = "123456";
        //press("dropdown medNumbers", ["Medical Record Number"]); not working for some reason after the rest was added. Will check into later.

        NumberFields[1].value = "1234567";
    }, 500);

    //Hospital account number
    typeInBoxes(HospitalNumberField, HospitalANumber);
}





//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Adds buttons


//Actually adds the buttons via the function names. Should probably add another array with actual names for the displayed buttons.
function buttonWatcher() {
    const functionArray = [callEmergentCRMCNonEmergent, callNonEmergentCRMCNonEmergent, transferFromCRMCNonEmergentToHospital, transferFromCRMCNonEmergentToFacility, liftAssist, refusalEmergent, refusalNonEmergent];

    function addButtons() {
        const testGrabButton = document.querySelector(".button-control");
        const buttonParent = testGrabButton.parentElement;

        for (const fn of functionArray) {
            const newButton = document.createElement('button');
            newButton.className = testGrabButton.className;
            newButton.innerHTML = fn.name;
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
            clearInterval(intervalID); // Stop the interval once the buttons are added
        }
    }

    // Set up the interval to check every 1 second
    const intervalID = setInterval(checkInnerHTML, 1000);

    // Initial check
    checkInnerHTML();
}

// Start the buttonWatcher function
buttonWatcher();




//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//For autocomplete functions






// Check for narritive field
fieldWatcher();

function fieldWatcher() {
    // This is the checker, looks for the field and then starts textInput.
    function checkForField() {
        const foundField = document.getElementById("80724");

        if (foundField) {
            console.log("found field");
            textInput();
            //TAB autocomplete function here so it will disable tab once narritive is hit.
            clearInterval(intervalID); // Stop the interval once the field is found
        }
    }

    // Set up the interval to check every 1 second
    const intervalID = setInterval(checkForField, 1000);
}




function textInput() {
    // Function to find the current sentence based on cursor position
    function findCurrentSentence(inputText, cursorPosition) {
        // Define a regular expression to split text into sentences (periods, question marks, and exclamation marks)
        const sentenceRegex = /([.!?:\n])/g;
        const sentences = inputText.split(sentenceRegex);

        // Find the current sentence based on the cursor position
        let currentSentence = '';
        let currentIndex = 0;
        for (let i = 0; i < sentences.length; i++) {
            if (currentIndex + sentences[i].length >= cursorPosition) {
                currentSentence = sentences[i];
                break;
            }
            currentIndex += sentences[i].length;
        }

        return currentSentence.trim();
    }


    // Find the textarea element by its id
    const textarea = document.getElementById("80724");

    // Add an event listener to the textarea to monitor user input (typing)
    textarea.addEventListener("input", () => {
        // Get the updated text and cursor position
        const updatedText = textarea.value;
        const cursorPosition = textarea.selectionStart;

        // Find the current sentence based on the cursor position
        const currentSentence = findCurrentSentence(updatedText, cursorPosition);

        // Send the current sentence to another function for evaluation
        evaluateString(currentSentence);
    });
}






//Function here that takes words written by the user and searches each json entry for those key words. Returns an array of possible suggestions for the user.
function evaluateString(currentString) {
    // Have already preloaded jsonData and it contains the array of suggestions
    const compareArray = jsonData;
    const inputWords = currentString.split(/\s+/); // Split the currentString into words

    console.log(currentString);

    // Define a function to calculate the Levenshtein distance between two strings
    function levenshteinDistance(str1, str2) {
        const m = str1.length;
        const n = str2.length;
        const dp = Array.from(Array(m + 1), () => Array(n + 1).fill(0));

        for (let i = 0; i <= m; i++) {
            for (let j = 0; j <= n; j++) {
                if (i === 0) dp[i][j] = j;
                else if (j === 0) dp[i][j] = i;
                else {
                    const cost = str1[i - 1] === str2[j - 1] ? 0 : 1;
                    dp[i][j] = Math.min(
                        dp[i - 1][j - 1] + cost,
                        dp[i][j - 1] + 1,
                        dp[i - 1][j] + 1
                    );
                }
            }
        }

        return dp[m][n];
    }

    // Search through each entry in the JSON array and return the positions that contain matching words
    const positionArray = compareArray
        .map((sentence, index) => {
            const words = sentence.split(/\s+/);
            const matchingWords = inputWords.filter(word => words.includes(word));
            return { index, matchingWords };
        })
        .filter(item => item.matchingWords.length === inputWords.length); // Check if all input words are within the same JSON entry

    // Calculate Levenshtein distance for each matching position
    const suggestionList = positionArray.map(item => {
        const sentence = compareArray[item.index];
        const distance = levenshteinDistance(currentString, sentence);
        return { index: item.index, distance, sentence };
    });

    // Sort the suggestions by distance (the lower the distance, the better the match)
    suggestionList.sort((a, b) => a.distance - b.distance);

    // Extract and return the top suggestions
    const topSuggestions = suggestionList.slice(0, 5).map(item => item.sentence);

    console.log(topSuggestions);

    suggestionBox(topSuggestions); // Send the final suggestions to the next function for display of possible suggestions.
}





function handleTabKey(textField, topSuggestions) {
    textField.addEventListener("keydown", event => {
        if (event.key === "Tab" && topSuggestions.length > 0) {
            event.preventDefault();
            const suggestionBox = document.querySelector(".suggestion-box");
            if (suggestionBox && suggestionBox.style.display === "block") { // Check if suggestionBox exists
                const suggestions = suggestionBox.querySelectorAll(".suggestion");
                if (suggestions.length > 0) {
                    const topSuggestion = suggestions[0].textContent;
                    const cursorPosition = textField.selectionStart;

                    // Find the last period before the cursor position
                    const textBeforeCursor = textField.value.substring(0, cursorPosition);
                    const sentenceStart = textBeforeCursor.lastIndexOf('.');

                    // Construct the updated text by adding a period and the suggestion
                    const updatedText = textBeforeCursor.substring(0, sentenceStart + 1) + ' ' + topSuggestion + '. ' + textField.value.substring(cursorPosition);
                    textField.value = updatedText;

                    // Set the selection to the end of the inserted suggestion
                    const newCursorPosition = sentenceStart + topSuggestion.length + 3; // +3 for the added space and two periods
                    textField.selectionStart = newCursorPosition;
                    textField.selectionEnd = newCursorPosition;

                    suggestionBox.style.display = "none";
                }
            }
        }
    });
}







function suggestionBox(topSuggestions) {
    const textField = document.getElementById("80724");
    let suggestionBox = document.querySelector(".suggestion-box");

    if (!suggestionBox) {
        suggestionBox = document.createElement("div");
        suggestionBox.className = "suggestion-box";
        textField.parentNode.insertBefore(suggestionBox, textField.nextSibling);
    }

    textField.addEventListener("input", () => {
        if (textField.value.length > 0) {
            if (suggestionBox) {
                suggestionBox.style.display = "block";
            }
        } else {
            if (suggestionBox) {
                suggestionBox.style.display = "none";
            }
        }
    });

    if (suggestionBox) {
        suggestionBox.innerHTML = topSuggestions.map((suggestion, index) => {
            return `<div class="suggestion">${suggestion}</div>`;
        }).join('');
    }

    handleTabKey(textField, topSuggestions);
}


//Calls the variable for the suggestions to be loaded
var jsonData = [];

// Fetch the JSON file and store it in the jsonData variable
fetch(chrome.runtime.getURL('/suggestions.json'))
    .then(response => response.json())
    .then(data => {
        jsonData = data;
        console.log(jsonData);
    })
    .catch(error => {
        console.error('Error loading JSON:', error);
    });