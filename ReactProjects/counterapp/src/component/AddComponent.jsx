import React, { useState } from 'react'

const AddComponent = (prop) => {
    let { addProductMethod } = prop;
    let [product, setProduct] = useState({});
    const handleInputChange = (e) => {
        let { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value
        });
    }
    let addpro = (e) => {
        e.preventDefault();
        addProductMethod(product)
    }
    return (
        <div className="container-fluid">
            <form onSubmit={addpro}>
                ID : <input type="text" name="id" onChange={handleInputChange} /> <br />
                image : <input type="text" name="image" onChange={handleInputChange} /> <br />
                name : <input type="text" name="name" onChange={handleInputChange} /> <br />
                price : <input type="text" name="price" onChange={handleInputChange} /> <br />
                <button type="submit" className="btn btn-primary">submit</button>
            </form>
        </div>
    )
}

export default AddComponent
