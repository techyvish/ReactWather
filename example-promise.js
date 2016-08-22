// function getTempCallback(location, callback) {
//     callback(undefined,78);
//     callback('city not found');
// }
//
// getTempCallback('VVNAGAR', function (err, temp) {
//     if (err){
//         console.log('err',error);
//     }else {
//         console.log('success',temp);
//     }
// });
//
// function getTempPromise(location) {
//     return new Promise(function (resolve,reject) {
//         resolve(79);
//         reject('City not found');
//     });
// }
//
// getTempPromise('VVNAGAR').then(function (temp) {
//     console.log('success',temp);
// },function (err) {
//     console.log('err',error);
// });

'use strict';
require('babel-polyfill');

function addPromise(a,b){
    return new Promise(function (resolve,reject) {
        if ( typeof  a === 'number' && typeof  b == 'number'){
            resolve(a+b);
        }else {
            reject('Not a valid number');
        }
    })
}

addPromise(5,6).then(function (sum) {
    console.log(sum);
},function (error) {
    console.log(error);
});


function getQuote() {
    return new Promise(function (resolve,reject) {
         setTimeout(function () {
            resolve('Awesome quote');
         },3000)
    });
}


async
function main(){
    var quote = await
                getQuote();
    console.log(quote);
}


main();
console.log('TEST');