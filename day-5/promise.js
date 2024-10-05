Promise.all([promise1, promise2, ....])
    .then((results) =>{
        //results is an array of resolved values
    })
    .catch((error) => {
        //Error from the first rejected promise
    });

const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);

Promise.all([p1, p2, p3])
    .then((values) => {
        console.log(values);
    })
    .catch((error) => {
        console.error('');
    });