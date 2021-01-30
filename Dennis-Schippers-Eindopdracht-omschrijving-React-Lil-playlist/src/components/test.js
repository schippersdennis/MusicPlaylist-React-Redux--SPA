// const stringCompare = (str1, str2) => {
//     str1 = str1.toLowerCase();
//     str2 = str2.toLowerCase();
//     if (str1 > str2) return 1;
//     if (str2 > str1) return -1;
//     return 0;
// }


// ​const numCompare = (numA, numB) => numA - numB;
// ​
// const generateSortFunction = (sampleObject, key) => {
//     const dataType = typeof sampleObject[key];
//     const sortFn = (a, b) => {
//         a = a[key];
//         b = b[key];
//         if (dataType === "string") return stringCompare(a, b);
//         if (dataType === "number") return numCompare(a, b);
//     };
//     return sortFn;
// };
​
const sortByObjectKey = (arrObjects, key, asc = true) => {
    // Do a deep copy here if necessary
    const arrObjectsCopy = [...arrObjects];
    const sorted = arrObjectsCopy.sort(
        generateSortFunction(arrObjectsCopy[0], key)
    );
    if (!asc) sorted.reverse();
    return sorted;
};
​
const people = [
    { name: "Jim", age: 50 },
    { name: "Pradeep", age: 10 },
    { name: "Elsa", age: 20 },
    { name: "Lux", age: 40 },
    { name: "Jolijn", age: 60 },
    { name: "kailey", age: 70 },
];
​
console.log(sortByObjectKey(people, "name"));
console.log(sortByObjectKey(people, "name", false));
console.log(sortByObjectKey(people, "age"));
console.log(sortByObjectKey(people, "age", false));
