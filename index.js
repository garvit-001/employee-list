let addBirth = document.getElementById("submit");

function getAndAdd() {
  let name = document.getElementById("name").value;
  let month = document.getElementById("name").value;
  let day = document.getElementById("mail").value;
  let birthdays = localStorage.getItem("birthdays");
  if (birthdays == null) {
    birthdaysList = [];
    birthdaysList.push([name, month + "/" + day]);
    localStorage.setItem("birthdays", JSON.stringify(birthdaysList));
  } else {
    birthdaysListStr = localStorage.getItem("birthdays");
    birthdaysList = JSON.parse(birthdaysListStr);
    birthdaysList.push([name, month + "/" + day]);
    localStorage.setItem("birthdays", JSON.stringify(birthdaysList));
  }

  add();
}

// checking the data
// if all fields are given by user the push into the database
function add() {
  // console.log("button cicked");
  // birthdays = localStorage.getItem("birthdays");

  if (localStorage.getItem("birthdays") == null) {
    birthdaysList = [];
    // birthdaysList.push([name, month]);
    localStorage.setItem("birthdays", JSON.stringify(birthdaysList));
  } else {
    birthdaysListStr = localStorage.getItem("birthdays");
    birthdaysList = JSON.parse(birthdaysListStr);
  }

  tableBody = document.getElementById("tableBody");
  let str = "";
  birthdaysList.forEach((element, index) => {
    str += `
                      <tr>
                        <td>${index + 1}</td>
                        <td>${element[0]}</td>
                        <td>${element[1]}</td>
                     <td><button id="Delete" onClick ="deleteVal(${index})" value="Delete Birthday">Delete</button>
                        
                        </td>
                    </tr>
    `;
  });
  tableBody.innerHTML = str;
}

// pushing the data on clicking
addBirth.addEventListener("click", getAndAdd);
add();

// deleteing a perticular value
function deleteVal(itemInd) {
  birthdaysListStr = localStorage.getItem("birthdays");
  birthdaysList = JSON.parse(birthdaysListStr);
  birthdaysList.splice(itemInd, 1);
  localStorage.setItem("birthdays", JSON.stringify(birthdaysList));
  add();
}

// clear all the data
function clearAllVal() {
  if (confirm("Do you want to proceed? All data will be erases")) {
    localStorage.clear();
    add();
  }
}
