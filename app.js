// app.js
import { db } from "./firebase.js";
import {
  collection,
  addDoc,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const saveBtn = document.getElementById("saveBtn");
const messageInput = document.getElementById("messageInput");
const messagesList = document.getElementById("messagesList");

// Save data
saveBtn.addEventListener("click", async () => {
  const text = messageInput.value;

  if (text === "") return;

  await addDoc(collection(db, "messages"), {
    text: text,
    createdAt: Date.now()
  });

  messageInput.value = "";
  loadMessages();
});

// Load data
async function loadMessages() {
  messagesList.innerHTML = "";

  const querySnapshot = await getDocs(collection(db, "messages"));
  querySnapshot.forEach((doc) => {
    const li = document.createElement("li");
    li.textContent = doc.data().text;
    messagesList.appendChild(li);
  });
}

// Load messages on page load
loadMessages();
