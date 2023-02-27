// average of an array

const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numArray)
const sum = numArray[0] + numArray[1] + numArray[2] + numArray[3] + numArray[4] + numArray[5] + numArray[6] + numArray[7] + numArray[8] + numArray[9];
console.log(`Sum of array elements: ${sum}`);
const arrayLength = numArray.length;
console.log(`Number of elements in array: ${arrayLength}`);
console.log(`Average of array elements: ${sum / numArray.length}`);


// array with 5 elements

const studentInfo = [
    {
        name: "Mariami",
        age: 26,
    },
    {
        name: "Ani",
        age: 30,
    },
    {
        name: "Nino",
        age: 32,
    },
    {
        name: "Levani",
        age: 17,
    },
    {
        name: "Giorgi",
        age: 55,
    },
];
console.log(studentInfo);


// object

const productInfo = {
    productTitle: "MacBook Pro",
    productDescription: "Supercharged by M2 Pro or M2 Max, MacBook Pro takes its power and efficiency further than ever. It delivers exceptional performance whether it’s plugged in or not, and now has even longer battery life. Combined with a stunning Liquid Retina XDR display and all the ports you need — this is a pro laptop without equal",
    productPrice: 2000,
    shopAddress: "13 Pekini Ave",
    productMemoryInGB: 400,
    productResolution: "16-inch",
};
console.log(productInfo);
console.log(`Product name is ${productInfo.productTitle}, product price is $${productInfo.productPrice}, product resolution is ${productInfo.productResolution} and you can buy it at ${productInfo.shopAddress}.`);