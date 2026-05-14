function saveName(v){
  localStorage.setItem("name", v);
}

function saveMood(v){
  localStorage.setItem("mood", v);
}

function toggleTrait(t){

  let traits =
    JSON.parse(localStorage.getItem("traits")) || [];

  if(traits.includes(t)){
    traits = traits.filter(x => x !== t);
  } else {
    traits.push(t);
  }

  localStorage.setItem("traits", JSON.stringify(traits));
}

function saveAnswer(v){
  localStorage.setItem("answer", v);
}

function saveFeedback(v){
  localStorage.setItem("feedback", v);
}

function sendData(){

  let traits =
    JSON.parse(localStorage.getItem("traits")) || [];

  let message = {
    content:
`🌸 New Website Response

👤 Name: ${localStorage.getItem("name") || ""}

😊 Mood: ${localStorage.getItem("mood") || ""}

✨ Traits: ${traits.join(", ")}

📝 Answer: ${localStorage.getItem("answer") || ""}

💌 Feedback: ${localStorage.getItem("feedback") || ""}`
  };

  fetch("https://discordapp.com/api/webhooks/1503035713246199808/j3OmevOOTTqL54ka7W-ubcBrULdHnKolYdm6g8OMOVwGY4iyvJarYqVbnEu9CMThxSSU", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(message)
  })
  .then(() => {
    console.log("sent");
  })
  .catch(err => {
    console.log(err);
  });

}