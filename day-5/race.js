const p1 = new Promise((resolve) => setTimeout(resolve,500,'First'));
const p2 = new Promise((resolve) => setTimeout(resolve,100,'Second'));

Promise.race([p1,p2])
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.error('Error', error);
    });