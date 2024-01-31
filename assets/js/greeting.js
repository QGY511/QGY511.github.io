// ┌─┐┬─┐┌─┐┌─┐┌┬┐┬┌┐┌┌─┐┌─┐
// │ ┬├┬┘├┤ ├┤  │ │││││ ┬└─┐
// └─┘┴└─└─┘└─┘ ┴ ┴┘└┘└─┘└─┘
// Function to set Greetings

// Function to set Greetings
// Function to set Greetings
const today = new Date();
const hour = today.getHours();
const name = CONFIG.name; // Assumes CONFIG.name contains your name

const greetingMessage =
  hour >= 23 || hour < 6
    ? CONFIG.greetingNight
    : hour >= 6 && hour < 12
    ? CONFIG.greetingMorning
    : hour >= 12 && hour < 17
    ? CONFIG.greetingAfternoon
    : CONFIG.greetingEvening;

// Wrap greeting and name in a div for styling

// Wrap greeting, name, and the additional sentence in a div for styling
document.getElementById(
  "greetings"
).innerHTML = `<div>${greetingMessage}<br><span>${name}</span></div>`;

//Chnaged on Jan 30,2024
