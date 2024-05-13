import { useEffect, useState } from "react"
import Product from "./Product"
import axios from "axios";

const Cards = () => {

    let [products,setProducts]=useState([{}]);
    // useEffect(()=>{
    //     setProducts(
    //     [
    //         {"id":1,"name":"Realme","price":10000,"image":"https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/k/l/l/-original-imagtc5fz9spysyk.jpeg?q=70&crop=false"},
    //         {"id":2,"name":"Realme 9","price":20000,"image":"https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/k/l/l/-original-imagtc5fz9spysyk.jpeg?q=70&crop=false"},
    //         {"id":3,"name":"Realme 12","price":40000,"image":"https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/k/l/l/-original-imagtc5fz9spysyk.jpeg?q=70&crop=false"},
    //         {"id":4,"name":"Realme 23","price":30000,"image":"https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/k/l/l/-original-imagtc5fz9spysyk.jpeg?q=70&crop=false"},
    //         {"id":5,"name":"Realme 67","price":80000,"image":"https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/k/l/l/-original-imagtc5fz9spysyk.jpeg?q=70&crop=false"},
    //         {"id":6,"name":"redmi 23","price":90000,"image":"https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/k/l/l/-original-imagtc5fz9spysyk.jpeg?q=70&crop=false"},
    //     ]
    //     )
    // },[])
    useEffect(()=>{
        fetchData()
    },[])
    const fetchData=()=>    {
        axios.get("http://localhost:5000/products").then(res=>setProducts(res.data))
    }
    return (
        <div className='container p-2'>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {
                    // products.map(p=><Product/>)
                    products.map(p=><Product pObj={p} key={p.id}/>)
                }
            </div>
        </div>
    )
}

export default Cards