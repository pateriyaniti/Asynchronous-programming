const p1 = Promise.reject('Error 1');
const p2 = Promise.resolve('Success');
const p3 = Promise.reject('Error 2');

Promise.any([p1,p2,p3])
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.error('All promisess are rejected');
    });
