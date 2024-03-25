function gradePoints(data) {
  let point = 0;
  if (data == "O") {
    point = 10;
  } else if (data == "A+") {
    point = 9;
  } else if (data == "A") {
    point = 8;
  } else if (data == "B+") {
    point = 7;
  } else if (data == "B") {
    point = 6;
  } else if (data == "C") {
    point = 5;
  } else {
    point = 0;
  }
  return point;
}

export default gradePoints;
