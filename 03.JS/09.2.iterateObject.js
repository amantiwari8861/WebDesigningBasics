// let obj={
//     "state": "Andhra Pradesh",
//     "city": "Jammalamadugu",
//     "warehouse_name": "BLR RURAL GODOWNS jammalamadugu.",
//     "warehouse_id": 33
// };
// console.log(obj.city);
// console.log(obj["state"]);

// for (const key in obj) 
// {
//    console.log(obj[key]);
// }

let nestedObj =
{
    "message": "Warehouse List",
    "data": [
        {
            "state": "Delhi",
            "cities": [
                {
                    "cityName": "Bakoli",
                    "warehouses": [
                        {
                            "warehouse_name": "sandeep warehouse",
                            "warehouse_id": 1
                        }
                    ]
                }
            ]
        }
    ]
}

// console.log(nestedObj);
// console.table(nestedObj);
// console.table(nestedObj["data"][0]["cities"][0]["warehouses"][0]["warehouse_name"]);

// for (const key in nestedObj) 
// {
//     let k=nestedObj[key];
//     console.log(k);

//     if (typeof(k) === 'object') 
//     {
//         console.log("nested object found");
//         for (const k2 in k) 
//         {
//               console.log(k[k2]);  
//         }
//     }
// }

printObj(nestedObj);

function printObj(obj)
{

    for (const key in obj) 
    {
        let k=obj[key];
        if (typeof(k) === 'object') 
        {
            // console.log("nested object found");
            printObj(k);
        }
        else
        {
            console.log(key+" : "+k);
        }
    }   
}