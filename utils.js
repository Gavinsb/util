export const SCREEN_WIDTH = 348;
export const SCREEN_HEIGHT = 250;

// Add zero in front of numbers < 10
export function zeroPad(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

const shortMonthNames = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

export function getShortMonthName(monthIndex) {
  return shortMonthNames[monthIndex];
}

export function random(min = 0, max = 1) {
  return (Math.random() * (max - min)) + min;
}

export function clamp(num, min, max) {
  return Math.max(Math.min(num, max), min);
}

export function isPointOffScreen(x, y) {
  return x > SCREEN_WIDTH || x < 0 || y > SCREEN_HEIGHT || y < 0
}
