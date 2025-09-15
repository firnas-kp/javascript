// flttens nested array in to a single-level array(depth can be specified)

const nested = [1,[2,[3]]];

const flat1 = nested.flat(); /*   level1   */
console.log(flat1);

const flat2 = nested.flat(2); /*   level2   */
console.log(flat2);
