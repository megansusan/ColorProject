const daysTag = document.querySelector(".days"),
currentDate = document.querySelector(".current-date"),
prevNextIcon = document.querySelectorAll(".icons span");


let colorSelected = {};
let selectedDaysCount = 0;
let consecutiveColorCount = 0;

// getting new date, current year and month
let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

// storing full name of all months in array
const months = ["January", "February", "March", "April", "May", "June", "July",
              "August", "September", "October", "November", "December"];

const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // getting first day of month
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // getting last day of month
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
    let liTag = "";

    for (let i = firstDayofMonth; i > 0; i--) { // creating li of previous month last days
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateofMonth; i++) { // creating li of all days of current month
        // adding active class to li if the current day, month, and year matched
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() 
                     && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`;
    }

    for (let i = lastDayofMonth; i < 6; i++) { // creating li of next month first days
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
    }
    currentDate.innerText = `${months[currMonth]} ${currYear}`; // passing current mon and yr as currentDate text
    daysTag.innerHTML = liTag;
}
renderCalendar();

prevNextIcon.forEach(icon => { // getting prev and next icons
    icon.addEventListener("click", () => { // adding click event on both icons
        // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

        if(currMonth < 0 || currMonth > 11) { // if current month is less than 0 or greater than 11
            // creating a new date of current year & month and pass it as date value
            date = new Date(currYear, currMonth, new Date().getDate());
            currYear = date.getFullYear(); // updating current year with new date year
            currMonth = date.getMonth(); // updating current month with new date month
        } else {
            date = new Date(); // pass the current date as date value
        }
        renderCalendar(); // calling renderCalendar function
    });
});

  // ... (previous code remains the same)

// //const colors = ["red"]; // List of colors

// const days = document.querySelectorAll(".days li");

// days.forEach(day => {
//     day.addEventListener("click", () => {
//         // Clear any previously opened color lists
//         const existingColorLists = document.querySelectorAll(".color");
//         existingColorLists.forEach(list => list.remove());

//         // Create a new color list
//         const colorList = document.createElement("ul");
//         colorList.classList.add("color");

//         // Add colors to the list
//         colors.forEach(color => {
//             const colorItem = document.createElement("li");
//             colorItem.textContent = color;
//             colorItem.style.color = color;
//             colorList.appendChild(colorItem);
//         });

//         // Append the color list to the clicked day
//         day.appendChild(colorList);
//     });
// });


const colors = ["pink", "red","lightblue","yellow","green", "black", "orange", "purple", "gray","blue"]; // List of colors

const days = document.querySelectorAll(".days li");

days.forEach(day => {
    day.addEventListener("click", () => {
        // Clear any previously opened color lists
        const existingColorLists = document.querySelectorAll(".color");
        existingColorLists.forEach(list => list.remove());

        // Create a new color list
        const colorList = document.createElement("ul");
        colorList.classList.add("color");

        // Add color shapes to the list
        colors.forEach(color => {
            const colorItem = document.createElement("li");
            colorItem.classList.add("color-circle");
            colorItem.style.backgroundColor = color;
        //     colorItem.addEventListener("click", () => {
        //         if (!colorSelected[day.textContent]) {
        //           day.style.backgroundColor = color;
        //           colorList.remove();
        //           colorSelected[day.textContent] = color;
        //           selectedDaysCount++;
      
        //           if (consecutiveColorCount === 5) {
        //             alert("You can get an NFT motion");
        //             consecutiveColorCount = 0;
        //           }
        //         }
        //       });
        //     colorList.appendChild(colorItem);
        // });

        // // Append the color list to the clicked day
        // day.appendChild(colorList);
        colorItem.addEventListener("click", () => {
            if (!colorSelected[day.textContent]) {
                day.style.backgroundColor = color;
                colorSelected[day.textContent] = color;
                selectedDaysCount++;
                consecutiveColorCount++;

                if (consecutiveColorCount === 5) {
                    displayImage(day);
                    consecutiveColorCount = 0;
                }
            }
        });
        colorList.appendChild(colorItem);
    });

    day.appendChild(colorList);
});
});


function displayImage(day) {
    day.style.backgroundImage = "url('image/crypcol-logo-y.png')";
    day.style.backgroundSize = "cover";
    day.style.zIndex = "1";
  
    const messageContainer = document.createElement("div");
    messageContainer.classList.add("message-container");
  
    const message = document.createElement("div");
    message.classList.add("message");
    message.innerHTML = '<a href="Landing.html#showcase">You got an NFT! Click here to Choose your CRYPCOL!</a>';
  
    messageContainer.appendChild(message);
    const description = document.querySelector('.description');
    description.appendChild(messageContainer);
    
}