const input = process.argv[2];

function validator(S) {
  return 4 - (S % 4)
}

const n = validator(input);

if (n !== 1) {
  console.log(`N = ${n}`)
  console.log('Input must be expressed in terms of 4n - 1, where n is a positive integer');
  return;
}

function row_mtx(S, i) {
  let row = new Array(+S).fill('@');
  if (i % 2) {
    row = row.fill(' ', 1, S - 1);
  } else if (validator(i) === 2) {
    row[S - 2] = ' ';
  } else {
    row[1] = ' ';
  }
  return row.join('');
}

function generate(S) {
  for (let i = 0; i < S; i++) {
    console.log(row_mtx(S, i));
  }
}

generate(input)