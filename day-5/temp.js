const fetchData = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        const data = {id: 1, name: 'John Doe'};
        resolve(data);
    }, 1000)
});

fetchData 
    .then((data) => {
        throw new Error('Something went wrong');
    })
    .catch((error) => {
        console.error('Caught error:', error.message);
    });