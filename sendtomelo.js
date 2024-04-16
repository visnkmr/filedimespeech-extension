
// A generic onclick callback function.
function genericOnClick(info, tab) {
  // console.log("item " + info.menuItemId + " was clicked");
  // console.log("info: " + JSON.stringify(info));
  // console.log("tab: " + JSON.stringify(tab));
  console.log(`${info.selectionText}`)
  const requestBody = {
    "text": `${info.selectionText}`.toString(),
    "comments":"something here"
   };
   
   // Send to mellotts tts endpoint to play via speaker
   fetch(`http://127.0.0.1:8963/tts`, {
    method: 'POST',
    headers: {
       'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestBody)
   })
   .then(response => {
    console.log(response)
   })
   .catch(error => {
     console.error('Error reading stream:', error)});  
}

// Create one item for each context type.
var contexts = ["selection"];
for (var i = 0; i < contexts.length; i++) {
  var context = contexts[i];
  var title = "Play using FiledimeSpeech";
  var id = chrome.contextMenus.create({"title": title, "contexts":[context],
                                       "onclick": genericOnClick});
  // console.log("'" + context + "' item:" + id);
}
