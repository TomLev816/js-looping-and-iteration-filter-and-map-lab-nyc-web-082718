// Code your solution here:
// Yes sir

function driversWithRevenueOver(drivers, revenue) {
  highEarn = []
  drivers.filter(function (driver) { if (driver.revenue > revenue) {
    highEarn.push(driver)
  } });
  return highEarn
}

function driverNamesWithRevenueOver(drivers, revenue){
  highEarn = []
  drivers.filter(function (driver) { if (driver.revenue > revenue) {
    highEarn.push(driver.name)
  } });
  return highEarn
}

function exactMatch(drivers, obj) {
  match = []
  drivers.filter(function(driver){
    if (driver[Object.keys(obj)[0]] === obj[Object.keys(obj)[0]]) {
      match.push(driver)
    }
  })
  return match
}

function exactMatchToList(drivers, obj) {
  match = []
  drivers.filter(function(driver){
    if (driver[Object.keys(obj)[0]] === obj[Object.keys(obj)[0]]) {
      match.push(driver.name)
    }
  })
  return match
}

// exactMatch(drivers, { revenue: 3000 })
// exactMatch(drivers, { name: 'Bob' })
// name: 'Sally',   revenue: 400
