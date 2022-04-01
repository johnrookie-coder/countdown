"use strict";

const cardDays = document.querySelector(".days");
const cardHours = document.querySelector(".hours");
const cardMinutes = document.querySelector(".minutes");
const cardSeconds = document.querySelector(".seconds");
const mainHeader = document.querySelector(".main__header");

// Get the target date
const targetDate = new Date("December 25 2022");

const tick = function () {
  // Get the current date
  const currentDate = new Date().getTime();

  // Get the difference between the current date and the target date
  const difference = targetDate - currentDate;

  // Get the formula to compute the days, hours, minutes, seconds.
  const days = Math.trunc(difference / (1000 * 60 * 60 * 24));
  const hours = Math.trunc(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.trunc((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.trunc((difference % (1000 * 60)) / 1000);

  // Display in UI
  cardDays.textContent = days;
  cardHours.textContent = hours;
  cardMinutes.textContent = minutes;
  cardSeconds.textContent = seconds;

  // If the difference < 0, stop the timer
  if (difference < 0) {
    mainHeader.textContent = "Merry Christmas";
    cardDays.textContent = "0";
    cardHours.textContent = "0";
    cardMinutes.textContent = "0";
    cardSeconds.textContent = "0";

    // clearInterval only if the targetDate > currentDate
    if (targetDate > currentDate) clearInterval(timer);
  }
};

tick();
const timer = setInterval(tick, 1000);
