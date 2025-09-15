const obj1 = {name:'Apple'};
const obj2 = {color:'Red', taste:'Sweet'};

const merged = {...obj1,...obj2};
console.log(merged);