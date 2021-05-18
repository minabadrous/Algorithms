const dayOfProgrammer = (year) =>
  `${
    (year < 1918 && year % 4 === 0) ||
    (year > 1918 && year % 4 === 0 && year % 100 !== 0) ||
    year % 400 === 0
      ? "12"
      : year === 1918
      ? "26"
      : "13"
  }.09.${year}`;

console.log(dayOfProgrammer(2100));

/*
Given a year, y, find the date of the 256th day of that year according to 
the official Russian calendar during that year. Then print it in the format 
dd.mm.yyyy, where dd is the two-digit day, mm is the two-digit month, and yyyy is y.
*/
