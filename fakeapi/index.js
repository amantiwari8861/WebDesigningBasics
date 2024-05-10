const URL = "http://localhost:4200/students";
fetch(URL)
    .then(res => res.json())
    .then(d => {
        console.log(d)
    });
// or
async function fetchData() {
    let respose = await fetch(URL);
    let data = await respose.json();
    console.log(data);
}
fetchData()

//json-server --watch DB.json --port=4200
//node index.js