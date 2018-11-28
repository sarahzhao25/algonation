function numHandshakesIterative(party) {
  let numHandshakes = 0;
  // first `for` loop to loop through the party
  for (let i = 0; i < party.length; i++) {
    // second `for` loop to search through each successive guest
    let guestA = party[i];  // an array of [startTime, endTime]
    for (let j = i + 1; j < party.length - 1; j++) {

      /* now we need to add in our statement: did their times overlap?
       aka the following:
       guestA is within guestB's timeFrame
       guestA[0] >= guestB[0] && guestA[0] <= guestB[1]
        OR
      guestA[1] >= guestB[0] && guestA[1] <= guestB[1] (same)
       or the oppposite
       guestB[0] >= guestA[0] && guestB[0] <= guestA[1]
         OR
      guestB[1] >= guestA[0] && guestB[1] <= guestA[1] (same)
      */

      let guestB = party[j];
      if ((guestA[0] >= guestB[0] && guestA[0] <= guestB[1]) || (guestB[0] >= guestA[0] && guestB[0] <= guestA[1])) numHandshakes++;
    }
  }
  return numHandshakes;
}

function numHandshakesDP(party) {
  let numHandshakes = 0, numGuests = 0, endTimeIndex = 0, endTimeDict = {};
  // first and as always, we need to sort our array by start time.
  party.sort((a, b) => ((a[0] > b[0] || (a[0] === b[0] && a[1] > b[1])) ? 1 : -1));
  // add the end times
  for (let i = 0; i < party.length; i++) {
    let endTime = party[i][1];
    endTimeDict[endTime] = endTimeDict[endTime] || 0;
    endTimeDict[endTime]++;
  }
  // obtain the end times in order!
  const endTimeSet = Object.keys(endTimeDict).sort();

  // run through the party again
  for (let i = 0; i < party.length; i++) {
    let currentTime = party[i][0];
    // at this current time, how many guests would have left?
    while (endTimeSet[endTimeIndex] < currentTime) {
      numGuests -= endTimeDict[endTimeSet[endTimeIndex]];
      endTimeIndex++;
    }
    // now that the appropriate guests have left, we can have the guest
    // shake hands with everyone, and then add them to the current party
    numHandshakes += numGuests;
    numGuests++;
  }
  return numHandshakes;
}
