// Help function for date

function parseDateString(date: string) {
  const year = parseInt(date.substr(0, 4), 10) || 0;
  const month = parseInt(date.substr(5, 2), 10) || 0;
  const day = parseInt(date.substr(8, 2), 10) || 0;
  return { year, month, day };
}

function parseTimeString(time: string) {
  const hour = parseInt(time.substr(0, 2), 10) || 0;
  const minutes = parseInt(time.substr(3, 2), 10) || 0;
  const seconds = parseInt(time.substr(6, 2), 10) || 0;
  const miliseconds = parseInt(time.substr(9, 3), 10) || 0;
  return { hour, minutes, seconds, miliseconds };
}

function parseZoneString(zone: string) {
  const signal = zone.substr(0, 1) || '';
  const hours = parseInt(zone.substr(1, 2), 10) || 0;
  const minutes = parseInt(zone.substr(3, 2), 10) || 0;
  let z = hours * 60 + minutes;
  switch (signal) {
    case '+':
      return z;
    case '-':
      return -z;
  }
  return 0;
}

// Javascript core can't parse iso dates, use this function instead
export function parseIsoDate(value: string) {
  if (value && value.length === 28) {
    const [d, t] = value.split('T');
    const z = value.substr(23, 5);
    if (d && t) {
      const date = parseDateString(d);
      const time = parseTimeString(t);
      const zone = parseZoneString(z);
      const currentZone = new Date().getTimezoneOffset();
      if (date && time) {
        const newDate = new Date(
          date.year,
          date.month - 1,
          date.day,
          time.hour,
          time.minutes,
          time.seconds,
          time.miliseconds,
        );
        newDate.setUTCMinutes(time.minutes - zone - currentZone);
        return newDate;
      }
    }
  }
  return new Date();
}