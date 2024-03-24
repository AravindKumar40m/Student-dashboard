function gpa(data) {
  let a = 0;
  data.forEach((g) => (a += g.credit * g.points));

  let b = 0;
  data.forEach((g) => (b += g.credit));

  return a / b;
}

export default gpa;
