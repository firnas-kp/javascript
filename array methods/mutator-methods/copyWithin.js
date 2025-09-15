// copy a part of  the Array to another location within thesame array.

let arr = [1,2,3,4,5];
arr.copyWithin(0,3);
console.log(arr);


// copyWithin(target,start,end)
// 0- this is the index , where copied elements will be placed
// 3 - this is th index to start copying from