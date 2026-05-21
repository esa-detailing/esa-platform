export async function lookupVehicle(registration: string) {
  const reg = registration.toUpperCase().trim()
  return {
    registration: reg,
    make: 'Land Rover',
    model: 'Range Rover Sport',
    color: 'Grey'
  }
}
