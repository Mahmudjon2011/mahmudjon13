const wrapper = document.querySelector(".ota");
const userForm = document.querySelector("#form");
const userInput = document.querySelector("#input");

// Formani markazga joylash
userForm.style.display = "flex";
userForm.style.justifyContent = "center"; 
userForm.style.alignItems = "center"; 
userForm.style.marginBottom = "20px"; 
userForm.style.gap = "10px"; 

// Button va Inputning stillari
userInput.style.padding = "8px"; 
userInput.style.border = "1px solid #ccc"; 
userInput.style.borderRadius = "5px";
userInput.style.fontSize = "14px";

const searchButton = userForm.querySelector("button");
searchButton.style.padding = "8px 15px"; 
searchButton.style.backgroundColor = "green"; 
searchButton.style.color = "white"; 
searchButton.style.border = "none"; 
searchButton.style.borderRadius = "5px";
searchButton.style.cursor = "pointer";
searchButton.style.fontSize = "14px";

// Wrapperga flex berish (qator tartibiga mos ravishda)
wrapper.style.display = "flex";
wrapper.style.flexWrap = "wrap";
wrapper.style.justifyContent = "center"; 
wrapper.style.gap = "10px"; 

fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(users => {
    function renderUser(userList) {
      wrapper.innerHTML = "";

      userList.forEach((user, index) => {
        const newLi = document.createElement("li");
        newLi.style.backgroundColor = "green"; 
        newLi.style.color = "white"; 
        newLi.style.padding = "10px";
        newLi.style.borderRadius = "8px"; 
        newLi.style.textAlign = "center"; 
        newLi.style.listStyle = "none"; 
        newLi.style.width = "150px"; 
        newLi.style.height = "150px"; 
        newLi.style.display = "flex";
        newLi.style.flexDirection = "column";
        newLi.style.justifyContent = "center"; 
        newLi.style.boxShadow = "0px 3px 5px rgba(0, 0, 0, 0.1)"; 

        // 1-qator: 2 ta, 2-qator: 4 ta, 3-qator: 4 ta
        if (index < 2) {
          newLi.style.flex = "1 1 calc(50% - 10px)"; // 2 ta joylashish uchun
        } else {
          newLi.style.flex = "1 1 calc(25% - 10px)"; // 4 ta joylashish uchun
        }

        newLi.innerHTML = `
          <h3 style="font-size: 14px; margin-bottom: 5px;">${user.name}</h3>
          <p style="font-size: 12px; margin-bottom: 5px;">📧 ${user.email}</p>
          <div style="font-size: 12px; margin-bottom: 5px;">👤 ${user.username}</div>
          <h4 style="font-size: 12px;">📞 ${user.phone}</h4>
        `;

        wrapper.appendChild(newLi);
      });
    }

    renderUser(users);

    userForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const inputQiymati = userInput.value.toLowerCase();
      const filtrQilingan = users.filter(user =>
        user.name.toLowerCase().includes(inputQiymati)
      );
      renderUser(filtrQilingan);
      userInput.value = "";
    });
  })
  .catch(error => console.log("Xato:", error));



