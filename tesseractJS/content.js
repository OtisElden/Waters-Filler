//Function here to receive an external call from the popup.js file Should then run the function extractTextFromImage and pass in the image.
// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
// 	if (request.message == "extractTextFromImage") {

// 		console.log("extractTextFromImage received");

// 		extractTextFromImage(request.image).then((result) => {
// 			sendResponse({ message: result });
// 		});
// 		return true;
// 	}
// });

// //Listen for popup.js
// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
// 	console.log("Looking for OCR message");
  
// 	if (request.message === "extractTextFromImage") {
// 	  console.log("extractTextFromImage received");
  
// 	  extractTextFromImage(request.image)
// 		.then((result) => {
// 		  sendResponse({ message: result });
// 		})
// 		.catch((error) => {
// 		  sendResponse({ message: "Error: " + error });
// 		});
// 	  return true;
// 	}
//   });


extractTextFromImage();

//The function below does not run and states that Tesseract is not defined. What is the fix? 





//This function should run once the above function is called. Should take an image and return text.
async function extractTextFromImage() {

	let imageSrc = chrome.runtime.getURL("images/TEST.png");

	console.log("TESSERACT STARTING TO RUN");

	// Initialize Tesseract.js
	const worker = await Tesseract.createWorker({
	  workerPath: chrome.runtime.getURL("/tesseractJS/tesseract.js@v4.0.3_dist_worker.min.js"),
	  corePath: chrome.runtime.getURL("/tesseractJS/tesseract.js-core@4.0.3_tesseract-core-simd.wasm.js"),
	  langPath: chrome.runtime.getURL("/tesseractJS/languages/"),
	});

	console.log("Worker created");
  
	try {
	  await worker.loadLanguage("eng");
	  await worker.initialize("eng");
  
	  // Load the image
	  const image = new Image();
	  image.src = imageSrc;

	  console.log("Image loaded");
  
	  return new Promise(async (resolve, reject) => {
		image.onload = async () => {
		  try {
			const { data } = await worker.recognize(image);
			const extractedText = data.text;
			resolve(extractedText);
		  } catch (error) {
			reject(error);
		  } finally {
			// Terminate the worker
			await worker.terminate();
		  }
		};
  
		image.onerror = (error) => {
		  reject(error);
		};
	  });
	} catch (error) {
	  // Handle initialization errors
	  await worker.terminate();
	  throw error;
	}
  }