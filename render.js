// use IPC main to access events + IPC render as we have no access to window/DOM in node
//emitting the generatePassword event from the button click
const ipcRenderer = require("electron").ipcRenderer;
const generatePassword = () => {
  ipcRenderer.send(
    "generatePassword",
    document.querySelector(".keyWord").value
  );
};

ipcRenderer.on("receivePassword", (event, data) => {
    //do something with data from backend
  const passwordTag = document.querySelector("#password");
  passwordTag.innerText = data;
});