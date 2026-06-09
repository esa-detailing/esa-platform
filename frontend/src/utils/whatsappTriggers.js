const BASE = 'https://wa.me/'

export function waArrival(customerNumber) {
  return `${BASE}${customerNumber}?text=Hi%2C%20I%27ve%20arrived%20for%20your%20ESA%20Detailing%20appointment.`
}

export function waDelay(customerNumber) {
  return `${BASE}${customerNumber}?text=Hi%2C%20I%27m%20running%20slightly%20behind%20but%20I%27m%20on%20my%20way.`
}

export function waOnTheWay(customerNumber) {
  return `${BASE}${customerNumber}?text=Hi%2C%20I%27m%20on%20my%20way.%20I%27ll%20share%20my%20live%20location%20now.`
}

export function waJobComplete(customerNumber) {
  return `${BASE}${customerNumber}?text=Your%20vehicle%20is%20now%20complete.%20Thank%20you%20for%20choosing%20ESA%20Detailing.`
}
