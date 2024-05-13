import React from 'react'

const Product = (prop) => {
    let {pObj}=prop;//object destructuring
    return (
    <div className="col">
        <div className="card">
        <div className="container-fluid p-3">
        <img src={pObj.image} className="card-img-top" alt="" />
        </div>
        <div className="card-body">
            <h5 className="card-title text-center">{pObj.id}.{pObj.name}</h5>
            <p className="card-text">Price <del>{Math.floor(pObj.price*1.15)}</del> <span style={{color:"green"}}>15% off</span> {pObj.price}</p>
            <div className="d-flex justify-content-around">
            <button className="btn btn-primary">edit</button>
            <button className="btn btn-danger">delete</button>
            </div>
        </div>
        </div>
    </div>
    )
}

export default Product
