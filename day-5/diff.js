//using regular promise
function fetchData() {
    return new Promise(( resolve, reject) => {
        setTimeout(()=> {
            resolve('Data fetched');
        }, 1000);
    });
}

fetchData()
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error(error);
    });

    //using async-await

    async function fetchData(){
        try{
            const data = await new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve('Data fetched');
                } , 1000);
            });
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    }
    fetchData();