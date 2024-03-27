function gpa(data) {
  const pointFilter = data.filter((d) => d.points !== 0);
  let a = 0;
  pointFilter.forEach((g) => (a += g.credit * g.points));

  let b = 0;
  pointFilter.forEach((g) => (b += g.credit));

  return a / b;
}

export default gpa;
