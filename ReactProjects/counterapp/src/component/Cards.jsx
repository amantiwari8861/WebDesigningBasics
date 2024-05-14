import { useEffect, useState } from "react"
import Product from "./Product"
import axios from "axios";
import EditModal from "./EditModal";
import AddComponent from "./AddComponent";

const Cards = () => {

    const URL = "http://localhost:5000/products";
    let [products, setProducts] = useState([]);
    // let [product,setProduct]=useState({});
    let [isModalVisible, setModalVisibility] = useState(false);
    let [tempProduct, setTempProduct] = useState({});
    let [showAddForm,setAddForm]=useState(false);
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
    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = async () => {
        await axios.get(URL).then(res => setProducts(res.data)).catch(err => console.log(err))
    }
    const deleteProduct = async (id) => {
        console.log(id);
        await axios.delete(URL + "/" + id).then(res => console.log(res));
        fetchData()
    }
    // const handleInputChange=(e)=>{
    //     let {name,value}=e.target;
    //     // console.log(name+":"+value);
    //     setProduct({
    //         ...product,
    //         [name]:value
    //     });
    //     console.log(product);
    // }
    const addProduct = async (product) => {
        await axios.post(URL, product).then(res => console.log(res));
        fetchData()
    }
    const editProduct = async (newData) => {
        await axios.put(URL + "/" + newData.id, newData)
            .then(res => console.log(res.status))
        fetchData()
    }
    const showModal = (prod) => {
        setModalVisibility(true);
        setTempProduct(prod);
        console.log("u requested to edit :" + JSON.stringify(prod));
    }
    return (
        <div className='container p-2'>
            <div className="row">
                <div className="col-12">
                <button className="btn btn-primary" onClick={()=>setAddForm(!showAddForm)}>Add</button><br /><br />
                </div>
            </div>
            { showAddForm ? <AddComponent addProductMethod={addProduct} /> : ""}
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {
                    // products.map(p=><Product/>)
                    products.length > 0 ? products.map(p => <Product pObj={p} delt={deleteProduct} mVis={showModal} key={p.id} />) : "no products to display"
                }
            </div>
            <br /><br />
            {isModalVisible && tempProduct ? <EditModal proEdit={tempProduct} editMethod={editProduct} /> : ""}
        </div>
    )
}

export default Cards