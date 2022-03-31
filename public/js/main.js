"use strict";

const cardDays = document.querySelector(".days");
const cardHours = document.querySelector(".hours");
const cardMinutes = document.querySelector(".minutes");
const cardSeconds = document.querySelector(".seconds");

// Get the target date
const targetDate = new Date("December 25 2022").getTime();

// Tick for every 1 second
const tick = function () {
  // Get the current date
  const currentDate = new Date().getTime();

  // Get the difference between the two duplicates
  const difference = targetDate - currentDate;

  // Get the formula to compute the days, hours, minutes, seconds.
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  // Display the results in the cards.
  cardDays.textContent = days;
  cardHours.textContent = hours;
  cardMinutes.textContent = minutes;
  cardSeconds.textContent = seconds;
};

tick();
const timer = setInterval(tick, 1000);
