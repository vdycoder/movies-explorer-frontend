export function checkRoute(array, route) {
    return array.includes(route);
};

export function getFormattedDuration(time) {
  if (time < 60) {
    return `${time}м`;
  } else if (time % 60 === 0) {
    return `${time / 60}ч`;
  } else {
    return `${Math.floor(time / 60)}ч ${time % 60}м`;
  }
};
