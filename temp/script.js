const vegMenu = {
    "Day 1": {
        breakfast: "Veg Sandwich",
        lunch: "Paneer Curry with Rice",
        snacks: "Fruit Salad",
        dinner: "Vegetable Biryani"
    },
    "Day 2": {
        breakfast: "Poha",
        lunch: "Dal Tadka with Rice",
        snacks: "Samosa",
        dinner: "Palak Paneer with Roti"
    },
    // Add more days...
};

const nonVegMenu = {
    "Day 1": {
        breakfast: "Paav Bhaji / Vada Paav, Pongal, Fresh Juice, Cold Milk, Corn Flakes, B,B,J Tea, Coffee, Milk, Sambar, Chutney, Green Salad, Fried Eggs (2 nos)",
        lunch: "Phulka, Dal Rajma, Chicken Biryani, Veg Biryani, Banaras Baigan, Crumb Fry Panneer, Onion Raitha, White Rice, Sambar, Tomato Rasam, Papad, Sweet: Assorted Ice Cream",
        snacks: "Veg Puff, Sauce, Tea, Coffee, Milk",
        dinner: "Phulka, Dal Banjara, Baby Corn Masala, White Rice, Drumstick Sambar, Poriyal, Butter Milk, Mint Pulav, Rasam, Minestroni Soup, Fruits: Papaya"
    },
    "Day 2": {
        breakfast: "Omelette",
        lunch: "Mutton Biryani",
        snacks: "Chicken Nuggets",
        dinner: "Grilled Chicken with Vegetables"
    },
    // Add more days...
};

const specialMenu = {
    "Day 1": {
        breakfast: "Paav Bhaji / Vada Paav, Pongal, Fresh Juice, Cold Milk, Corn Flakes, B,B,J Tea, Coffee, Milk, Sambar, Chutney, Green Salad, Fried Eggs (2 nos)",
        lunch: "Phulka, Dal Rajma, Chicken Biryani, Veg Biryani, Banaras Baigan, Crumb Fry Panneer, Onion Raitha, White Rice, Sambar, Tomato Rasam, Papad, Sweet: Assorted Ice Cream",
        snacks: "Veg Puff, Sauce, Tea, Coffee, Milk",
        dinner: "Phulka, Dal Banjara, Baby Corn Masala, White Rice, Drumstick Sambar, Poriyal, Butter Milk, Mint Pulav, Rasam, Minestroni Soup, Fruits: Papaya"
    },
    "Day 2": {
        breakfast: "Poori, Aloo Masala, Poha Nampkin, Banana Milk Shake, Cold Milk, Chocos, B,B,J Tea, Coffee, Milk, Mint Chutney, Cow Peas Salad, French toast",
        lunch: "Phulka, Chilly Chicken, Dragon Panneer, Schezwan Fried Rice, Poriyal, Dhal Fry, White Rice, Sambar, Rasam, Wheel Chips, Curd, Sweet: Chandrakala / Suryakala",
        snacks: "Spring Roll. Veg Roll, Sauce, Milk, COFFEE, Tea",
        dinner: "Plain Dosa, Dal Panchmela, Sambar, Chutney, Veg Jal Frizhi, Methi Roti, White Rice, Rasam, Butter Milk, Hot n Sour Veg Soup, Fruits: Fresh Fruits"
      },
    // Add more days...
};

function displayMenu(menu, day) {
    const menuDisplay = document.getElementById('menuDisplay');
    menuDisplay.innerHTML = ''; // Clear previous menu

    if (menu[day]) {
        const dayMenu = document.createElement('div');
        dayMenu.className = 'menu-day';
        dayMenu.innerHTML = `
            <h3>${day}</h3>
            <div class="menu-item">Breakfast: ${menu[day].breakfast}</div>
            <div class="menu-item">Lunch: ${menu[day].lunch}</div>
            <div class="menu-item">Snacks: ${menu[day].snacks}</div>
            <div class="menu-item">Dinner: ${menu[day].dinner}</div>
        `;
        menuDisplay.appendChild(dayMenu);
    } else {
        menuDisplay.innerHTML = '<p>Please select a valid day.</p>';
    }
}

document.getElementById('vegMenuBtn').addEventListener('click', () => {
    const selectedDay = document.getElementById('daySelect').value;
    displayMenu(vegMenu, selectedDay);
});

document.getElementById('nonVegMenuBtn').addEventListener('click', () => {
    const selectedDay = document.getElementById('daySelect').value;
    displayMenu(nonVegMenu, selectedDay);
});

document.getElementById('specialMenuBtn').addEventListener('click', () => {
    const selectedDay = document.getElementById('daySelect').value;
    displayMenu(specialMenu, selectedDay);
});
