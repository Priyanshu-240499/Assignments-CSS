  let data = [];
  function AddData(e) {
    e.preventDefault
    let input = document.querySelector("#notes").value;
    document.querySelector("#notes").value = "";
    if (input === "") {
      alert("Enter some text");
    } else {
      data.push(input);
      document.querySelector(".notes").innerHTML = "";
      displayData();
    }
  }

  function displayData() {
    data.map((ele) => {
      const card = document.createElement("div");
      card.addEventListener("click", del);
      card.classList.add("card");
      card.innerHTML = `<p>${ele}</p>
          <button >delete</button>`;
      document.querySelector(".notes").appendChild(card);
    });
  }

  document.querySelector(".submit").addEventListener("click", AddData);


function del(e) {
  e.preventDefault();
  if (e.target.tagName === "BUTTON") {
    let deldata=this.firstChild.innerText;
    let updatedData=data.filter((ele)=>ele!==deldata)
    data=updatedData
    document.querySelector(".notes").innerText="";
    displayData()
  }
}
