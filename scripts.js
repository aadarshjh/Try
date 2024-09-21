const events = [
    {
        title: 'DevJams',
        startDate: '2024-09-20',
        endDate: '2024-09-22',
        description: "DevJams'24 is our flagship hackathon for tech enthusiasts to turn their ideas into reality.",
        location: 'Auditorium',
        time: '10:00 AM - 5:00 PM',
        club: 'Tech Club'
    },
    {
        title: 'Cultural Night',
        startDate: '2024-10-12',
        endDate: '2024-10-12',
        description: 'A celebration of diverse cultures with performances from around the world.',
        location: 'Open Grounds',
        time: '6:00 PM - 10:00 PM',
        club: 'Cultural Society'
    },
    {
        title: 'Hackathon 2024',
        startDate: '2024-10-20',
        endDate: '2024-10-21',
        description: 'A 24-hour hackathon event for budding developers to create innovative software solutions.',
        location: 'Tech Park',
        time: '9:00 AM - 9:00 PM',
        club: 'Developer\'s Guild'
    }
];

// The rest of the code remains the same...


function formatEventDate(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const startDay = start.getDate();
    const startMonth = start.toLocaleString('default', { month: 'short' });
    const endDay = end.getDate();
    const endMonth = end.toLocaleString('default', { month: 'short' });

    return startMonth === endMonth
        ? `${startDay} to ${endDay} ${startMonth}`
        : `${startDay} ${startMonth} to ${endDay} ${endMonth}`;
}

function renderEvents(events) {
    const eventsContainer = document.getElementById('events-container');
    eventsContainer.innerHTML = '';

    events.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.classList.add('event-card');

        const eventDate = formatEventDate(event.startDate, event.endDate);
        eventCard.innerHTML = `
            <div class="event-content">
                <h3 class="event-title">${event.title}</h3>
                <p class="event-description">${event.description}</p>
                <p class="event-location"><strong>Location:</strong> ${event.location}</p>
                <p class="event-time"><strong>Time:</strong> ${event.time}</p>
                <p class="event-club"><strong>Club:</strong> ${event.club}</p> <!-- Club displayed -->
                <span class="event-range">${eventDate}</span>
            </div>
        `;

        eventsContainer.appendChild(eventCard);
    });
}

function filterEventsByDate(events, startDate, endDate) {
    return events.filter(event => {
        const eventStart = new Date(event.startDate);
        const eventEnd = new Date(event.endDate);
        const start = startDate ? new Date(startDate) : null;
        const end = endDate ? new Date(endDate) : null;

        if (start && end) {
            return eventStart <= end && eventEnd >= start;
        } else if (start) {
            return eventEnd >= start;
        } else if (end) {
            return eventStart <= end;
        }
        return true;
    });
}

function searchEvents(events, query) {
    return events.filter(event => event.title.toLowerCase().includes(query.toLowerCase()));
}

document.addEventListener('DOMContentLoaded', () => {
    const filterBtn = document.getElementById('filter-btn');
    const resetBtn = document.getElementById('reset-btn');
    const searchBar = document.getElementById('search-bar');

    renderEvents(events);

    filterBtn.addEventListener('click', () => {
        const startDate = document.getElementById('start-date').value;
        const endDate = document.getElementById('end-date').value;
        const filteredEvents = filterEventsByDate(events, startDate, endDate);
        const searchQuery = searchBar.value;
        const searchedEvents = searchEvents(filteredEvents, searchQuery);
        renderEvents(searchedEvents);
    });

    resetBtn.addEventListener('click', () => {
        document.getElementById('start-date').value = '';
        document.getElementById('end-date').value = '';
        searchBar.value = '';
        renderEvents(events);
    });

    searchBar.addEventListener('input', () => {
        const searchQuery = searchBar.value;
        const filteredEvents = filterEventsByDate(events, document.getElementById('start-date').value, document.getElementById('end-date').value);
        const searchedEvents = searchEvents(filteredEvents, searchQuery);
        renderEvents(searchedEvents);
    });
});
