const temp = {
  draw: 1,
  recordsTotal: 5,
  recordsFiltered: 5,
  data: [
    {
      sr: 1,
      nsecode: "STOVEKRAFT",
      name: "Stove Kraft Ltd",
      bsecode: "543260",
      per_chg: 4.92,
      close: 545.9,
      volume: 508280,
    },
    {
      sr: 2,
      nsecode: "FDC",
      name: "Fdc Limited",
      bsecode: "531599",
      per_chg: 4.16,
      close: 401.45,
      volume: 1240287,
    },
    {
      sr: 3,
      nsecode: "RECLTD",
      name: "Rural Electrification Corporation Limited",
      bsecode: "532955",
      per_chg: 4.65,
      close: 245.55,
      volume: 21384056,
    },
    {
      sr: 4,
      nsecode: "KTKBANK",
      name: "The Karnataka Bank Limited",
      bsecode: "532652",
      per_chg: 1.76,
      close: 225.95,
      volume: 2555104,
    },
    {
      sr: 5,
      nsecode: "MORARJEE",
      name: "Morarjee Textiles Limited",
      bsecode: "532621",
      per_chg: 14.71,
      close: 23,
      volume: 2019200,
    },
  ],
};

console.log(temp.data.map((item) => item.nsecode));
