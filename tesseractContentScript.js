const CONSTANTS = {
    // Add your constant values here
    scriptId: 'tesseractJS-ID'
};

let worker = null;

initialize()
async function initialize() {

    console.log("Initializing Tesseract.js");

    if (!document.getElementById(CONSTANTS.scriptId)) {

        console.log("No element found, starting insert");

        const script = document.createElement("script");
        script.id = CONSTANTS.scriptId;
        script.src = chrome.runtime.getURL("tesseractJS/scripts/tesseract.min.js");
        (document.head || document.documentElement).appendChild(script);
        await new Promise(resolve => script.onload = resolve);
    }

    if (typeof worker === "undefined" || worker === null) {
        worker = await createWorker();
    }
}

async function createWorker() {
    const tesseractWorker = await Tesseract.createWorker({
        workerPath: chrome.runtime.getURL("tesseractJS/scripts/tesseract.worker.js"),
        corePath: chrome.runtime.getURL("tesseractJS/scripts/tesseract.core.js"),
        langPath: chrome.runtime.getURL("tesseractJS/scripts/languages/")
    });

    await tesseractWorker.loadLanguage('eng');  // Replace 'eng' with the language(s) you need
    await tesseractWorker.initialize('eng');  // Replace 'eng' with the language(s) you need
    return tesseractWorker;
}

async function handleFile(file) {
    if (worker) {
        const { data } = await worker.recognize(file);
        const text = data.text;
        console.log(text);
    } else {
        console.error("Worker is not initialized.");
    }
}























































//let initializingPromise = null;
//let worker = null;
//async function initialize() {
//	if (initializingPromise) {
//		// If initialization is already in progress, return the promise
//		return initializingPromise;
//	}

//	initializingPromise = new Promise(async (resolve, reject) => {
//		if (document.getElementById(CONSTANTS.scriptId)) {
//			log("Already loaded script");
//			try {
//				await addExtensionElements((initial = false));
//				resolve();
//			} catch (error) {
//				console.error("Error initializing worker: ", error);
//				reject(error);
//			}
//		} else {
//			const script = document.createElement("script");
//			script.id = CONSTANTS.scriptId;
//			script.src = chrome.runtime.getURL("scripts/tesseract.min.js");
//			(document.head || document.documentElement).appendChild(script);

//			script.onload = async function () {
//				log("Loaded script");
//				log(script.src);

//				try {
//					await addExtensionElements((initial = true));
//					resolve();
//				} catch (error) {
//					console.error("Error initializing worker: ", error);
//					reject(error);
//				}
//			};
//		}
//	}).finally(() => {
//		log("finished init");
//		initializingPromise = null;
//	});
//	return initializingPromise;
//}

//async function addExtensionElements(initial = true) {
//	log("initial: ", initial);
//	log("initial worker: ", worker);
//	if (initial) {
//		worker = await createWorker();
//	} else {
//		if (typeof worker === "undefined" || worker === null) {
//			log("Worker is undefined or null");
//			worker = await createWorker();
//		}
//	}
//	log("post adding worker: ", worker);
//	if (OPTIONS.showUploadButton) addUploadButton();
//	if (OPTIONS.showLanguageButton) addLanguageSelectButton();
//	if (OPTIONS.enableDirectPasting) addPasteListener();
//	if (OPTIONS.enableDragAndDrop) addDragAndDrop();
//	if (OPTIONS.useThirdPartyOCR) addThirdPartyOptionalEngine();
//}



//async function createWorker() {
//	const worker = await Tesseract.createWorker({
//		workerPath: chrome.runtime.getURL("scripts/tesseract.js@v4.0.3_dist_worker.min.js"),
//		corePath: chrome.runtime.getURL("scripts/tesseract.js-core@4.0.3_tesseract-core-simd.wasm.js"),
//		langPath: chrome.runtime.getURL("scripts/languages/"),
//		logger: (m) => {
//			log(m);
//			if (m.status === "recognizing text") {
//				// Update progress bar width and text to display loading status and progress
//				progressBar = document.getElementById("image-to-text-progress-bar");
//				if (progressBar) {
//					progressBar.style.width = `${m.progress * 100}%`;
//					let percentage = Math.round(m.progress * 100);
//					progressBar.textContent = `${percentage}% - ${m.status}`;

//					// change the color of the progress bar based on the progress
//					let red = 255 - Math.round((255 * percentage) / 100); // decrease red color
//					let green = Math.round((255 * percentage) / 100); // increase green color
//					progressBar.style.backgroundColor = `rgb(${red}, ${green}, 0)`; // change background color

//					if (m.progress === 1) {
//						progressBar.textContent = "Finished"; // Update the progress text to "Finished"
//						setTimeout(function () {
//							// remove the progress bar after 5 seconds
//							progressBar.parentElement.remove();
//						}, 800);
//					}
//				}
//			} else {
//				let message = document.getElementById("loadingMessage");
//				if (
//					OPTIONS.showInitialLoadingMessage &&
//					!message &&
//					m.status == "loading tesseract core" &&
//					m.progress === 0
//				) {
//					insertLoadingMessage("Initializing Image to Text Engine Please wait...");
//				}

//				updateLoadingMessage(m.status, m.progress, "Please wait... Grabbing language files... This could take a while.");

//				if (m.status === "initialized api" && m.progress === 1) {
//					removeLoadingMessage();
//				}
//			}
//		},
//	});
//	await worker.loadLanguage(getSelectedLanguageCodes());
//	await worker.initialize(getSelectedLanguageCodes());
//	await worker.setParameters({
//		preserve_interword_spaces: OPTIONS.formatOutput ? "1" : "0",
//	});
//	return worker;
//}

//function getSelectedLanguageCodes() {
//	let selectedLanguageCodes = "";
//	CONSTANTS.workerLanguage.forEach((languageCode) => {
//		selectedLanguageCodes += languageCode + "+";
//	});
//	selectedLanguageCodes = selectedLanguageCodes.slice(0, -1);
//	log(selectedLanguageCodes);
//	return selectedLanguageCodes;
//}

//async function handleFile(file, worker) {
//	// log("handling the file");

//	let textareaContainer = document.getElementById(CONSTANTS.textareaId).parentElement;
//	log(textareaContainer);
//	// Get the textarea element
//	let textarea = document.getElementById("prompt-textarea");

//	// check if the textarea exists
//	if (!textarea) {
//		log("Textarea not found.");
//		return;
//	}

//	// get the parent of the container
//	let parent = textareaContainer.parentNode;

//	// create progress bar and insert it before the button
//	let progressBarContainer = document.createElement("div");
//	progressBarContainer.style.backgroundColor = "#f3f3f3"; // light grey
//	progressBarContainer.style.borderRadius = "5px"; // rounded corners
//	progressBarContainer.style.boxShadow = "0 1px 3px rgba(0,0,0,0.2)"; // some box shadow
//	progressBarContainer.style.height = "25px"; // height of the progress bar
//	progressBarContainer.style.marginBottom = "10px"; // space below the progress bar
//	progressBarContainer.style.overflow = "hidden"; // ensures inner bar stays within bounds

//	let progressBar = document.createElement("div");
//	progressBar.id = "image-to-text-progress-bar";
//	progressBar.style.height = "100%"; // make sure it fills up the entire container
//	progressBar.style.width = "0%"; // initial width of the progress bar (0% because no progress has been made yet)
//	progressBar.style.textAlign = "center"; // center the progress text
//	progressBar.style.transition = "width 0.5s ease-in-out"; // smooth width transition
//	progressBar.textContent = ""; // initial progress text (empty because no progress has been made yet)

//	progressBarContainer.appendChild(progressBar); // add the progress bar to the container
//	parent.insertBefore(progressBarContainer, textareaContainer);

//	(async () => {
//		// log(worker);
//		let text = "";
//		if (OPTIONS.formatOutput) {
//			const { data } = await worker.recognize(file, { rectangle: true });
//			text = calculateIndentation(data);
//		} else {
//			const { data } = await worker.recognize(file);
//			text = data.text;
//		}
//		log(text);

//		// Get the textarea element
//		let textarea = document.getElementById(CONSTANTS.textareaId);

//		// If the textarea exists, set its value to the recognized text
//		if (textarea) {
//			textarea.value = textarea.value + text;

//			textarea.style.height = ""; // Reset the height
//			textarea.style.height = textarea.scrollHeight + "px"; // Set it to match the total content height

//			// Set cursor position at the end of the text
//			textarea.selectionStart = textarea.selectionEnd = textarea.value.length;
//		} else {
//			log("Textarea not found.");
//		}
//	})();
//}