function minIntervals(arr) {
  arr.sort();
  let rooms = [arr[0]];
  for (var i = 1; i < arr.length; i++) {
    var roomsIndex = 0;
    while ((arr[i][0] >= rooms[roomsIndex][0] && arr[i][0] <= rooms[roomsIndex][1]) || (arr[i][1] >= rooms[roomsIndex][0] && arr[i][1] <= rooms[roomsIndex[1]])) {
      roomsIndex++;
      if (roomsIndex === rooms.length) {
        rooms[roomsIndex] = arr[i];
        break;
      }
    }
    rooms[roomsIndex] = arr[i];
  }
  return rooms.length;
}
