importScripts("tesseractJS/scripts/tesseract.min.js");

let worker = null;

onmessage = async function(e) {
    const { action, payload } = e.data;

    if (action === 'initialize') {
        await initialize();
        postMessage({ status: 'initialized' });
    } else if (action === 'recognize' && payload) {
        const text = await handleFile(payload);
        postMessage({ status: 'recognized', text: text });
    }
};

async function initialize() {
    if (!worker) {
      worker = await Tesseract.createWorker({

        workerPath: "tesseractJS/scripts/tesseract.js@v4.0.3_dist_worker.min.js",
        corePath: "tesseractJS/scripts/tesseract.js-core@4.0.3_tesseract-core-simd.wasm.js",
        langPath: "tesseractJS/scripts/languages/"
      });
      await worker.loadLanguage('eng');
      await worker.initialize('eng');
    }
  }

async function handleFile(file) {
    if (worker) {
        const { data } = await worker.recognize(file);
        return data.text;
    } else {
        console.error("Worker is not initialized.");
        return null;
    }
}





















// const CONSTANTS = {
//     // Add your constant values here
//     scriptId: 'tesseractJS-ID'
// };

// let worker = null;

// initialize()
// async function initialize() {

//     console.log("Initializing Tesseract.js");

//     if (!document.getElementById(CONSTANTS.scriptId)) {

//         console.log("No element found, starting insert");

//         const script = document.createElement("script");
//         script.id = CONSTANTS.scriptId;
//         script.src = chrome.runtime.getURL("tesseractJS/scripts/tesseract.min.js");
//         (document.head || document.documentElement).appendChild(script);
//         await new Promise(resolve => script.onload = resolve);
//     }

//     if (typeof worker === "undefined" || worker === null) {
//         worker = await createWorker();
//     }
// }

// async function createWorker() {
//     const tesseractWorker = await Tesseract.createWorker({
//         workerPath: chrome.runtime.getURL("tesseractJS/scripts/tesseract.worker.js"),
//         corePath: chrome.runtime.getURL("tesseractJS/scripts/tesseract.core.js"),
//         langPath: chrome.runtime.getURL("tesseractJS/scripts/languages/")
//     });

//     await tesseractWorker.loadLanguage('eng');  // Replace 'eng' with the language(s) you need
//     await tesseractWorker.initialize('eng');  // Replace 'eng' with the language(s) you need
//     return tesseractWorker;
// }

// async function handleFile(file) {
//     if (worker) {
//         const { data } = await worker.recognize(file);
//         const text = data.text;
//         console.log(text);
//     } else {
//         console.error("Worker is not initialized.");
//     }
// }