function gradeCount(data) {
  let O = 0,
    A = 0,
    A1 = 0,
    B = 0,
    B1 = 0,
    C = 0,
    RA = 0;

  data.forEach((e) => {
    if (e === "O") {
      O++;
    } else if (e === "A") {
      A++;
    } else if (e === "A+") {
      A1++;
    } else if (e === "B") {
      B++;
    } else if (e === "B+") {
      B1++;
    } else if (e === "C") {
      C++;
    } else {
      RA++;
    }
  });

  return [O, A1, A, B1, B, C, RA];
}

export default gradeCount;
