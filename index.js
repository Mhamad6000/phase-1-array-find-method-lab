// code your solution here
const record = [
  { year: "2015", result: "W" },
  { year: "2014", result: "N/A" },
  { year: "2013", result: "L" },
  //...
];
function superbowlWin(record) {
  let newRecord = record.find((element) => {
    return element.result === "W";
  });
  return newRecord !== undefined ? newRecord.year : undefined;
}
console.log(superbowlWin(record));
