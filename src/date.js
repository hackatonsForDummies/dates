const now = new Date();
const utcIso = {now, utc: now.toUTCString(), iso: now.toISOString()}
const dateFormat = new Date('05-08-2021');
const badFormat = '05/08/2021';
const dateBadFormat = new Date(`${badFormat.split('/')[2]}-${badFormat.split('/')[0]}-${badFormat.split('/')[1]}`);
const toDateString = now.toDateString();
const toLocaleString = now.toLocaleString();
const toKRString = now.toLocaleString('ko-KR', { timeZone: 'UTC' });
const toLocaleDateString = now.toLocaleDateString();
const toJSON = now.toJSON();

const options = {
  weekday: 'short',
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  timeZone: 'UTC',
  timeZoneName: 'long',
  hour12: true,
};
const localeWithOptions = now.toLocaleDateString('es-ES', options);

const monthYear = `${
  now.toLocaleString('es-ES', { month: 'long' }).toLocaleUpperCase()
} del ${
  now.getFullYear() - 2000
}`;

// getters
const yearToday = now.getFullYear();
const monthToday = now.getMonth(); // formato array enero => 0
const dayToday = now.getDay(); // dia de la semana
const weekDateToday = now.getDate(); // dia en numero del mes
const hourNow = now.getHours();

// utc
const yearTodayUtc = now.getUTCFullYear();
const monthTodayUtc = now.getUTCMonth();
const dayTodayUtc = now.getUTCDay(); // dia de la semana
const weekDateTodayUtc = now.getUTCDate(); // dia en numero del mes
const hourNowUtc = now.getUTCHours();

// set
const newNow = new Date();
newNow.setFullYear(2020);
newNow.setMonth(0);
newNow.setDate(1); // dia en numero del mes
newNow.setHours(0); // Tue, 31 Dec 2019 23:41:34 GMT

// sumar
const nextDate = new Date();
nextDate.setFullYear(nextDate.getFullYear() + 1);
nextDate.setMonth(nextDate.getMonth() + 1);
nextDate.setDate(nextDate.getDate() + 1);
nextDate.setHours(nextDate.getHours() + 1)

function smartPooling() {
  // fecha en el futuro
  const futureDate = new Date('2021-05-08T10:30:26.887Z');
  const dif = futureDate - now; // lo que queda para que llegue el futuro

  if (dif >= 0) { // si sigue en el futuro
    console.log('dif', dif)

    setTimeout(() => {
      console.log('tiempo')
    }, dif);
    return dif; // no necesario
  }

  return 'el futuro ya ha pasado';
}

// una hora antes de empezar la reunión hacer smart pooling
// el servidor tarda unos segundos en darse cuenta del cambio de la hora
function customSmartPooling() {
  const futureDate = new Date('2021-05-08T12:00:000Z'); // fecha reunion (dentro de una hora y algo)
  futureDate.setHours(futureDate.getHours() - 1);
  futureDate.setMinutes(futureDate.getMinutes() + 1); // margen al servidor
  const dif = futureDate - now;

  if (dif >= 0) {
    console.log('dif', dif)

    setTimeout(() => {
      console.log('tiempo')
    }, dif);
    return dif;
  }

  return 'el futuro ya ha pasado';
}

export default function date() {
  return monthYear;
}
