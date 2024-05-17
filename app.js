let habits = [];

const dateInput = document.getElementById('date');
const habitNameInput = document.getElementById('habitName');
const maindiv = document.querySelector('.app');
const button = document.getElementById('addNewHabit');

function calculateDaysSince(date) {
    const stopDate = new Date(date);
    const currentDate = new Date();
    const timeDifference = currentDate - stopDate;
    const daysSince = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    return daysSince;
}

function addHabits() {
    const dateValue = dateInput.value;
    const habitNameValue = habitNameInput.value;

    if (!dateValue) {
        alert("Please enter a valid date.");
        return;
    }

    let newHabit = {
        id: Math.floor(Math.random() * 1000),
        habitName: habitNameValue,
        date: dateValue,
        daysSince: calculateDaysSince(dateValue)
    };

    habits.push(newHabit);
    displayHabits();
    habitNameInput.value = '';
    dateInput.value = '';
}

function displayHabits() {
    let html = "";
    if (!habits.length) {
        html = '<p><i>Add habits to start tracking!!</i></p>';
    } else {
        habits.forEach(habit => {
            html += `
            <div class="item">
                <h1>${habit.habitName}</h1>
                <p >It has been <b> ${habit.daysSince} </b>days since you stopped ${habit.habitName}.</p>
                
            </div>
            `;
        });
    }
    maindiv.innerHTML = html;
}

button.addEventListener('click', addHabits);

displayHabits();
