import { Modal } from "bootstrap";
import { useEffect, useRef, useState } from "react"

const EditModal = ({proEdit,editMethod}) => {
    let modalRef=useRef(null);
    let [editedProduct,setEditedPro]=useState({...proEdit});
    useEffect(()=>{
        let modal=new Modal(modalRef.current);
        modal.show();
    },[proEdit]);
    const handleInputChange=(e)=>{
        let {name,value}=e.target;
        // console.log(name+":"+value);
        setEditedPro({
            ...editedProduct,
            [name]:value
        });
    }
  return (
    <div className="modal fade" ref={modalRef} id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit product</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            image : <input type="text" name="image" value={editedProduct.image} onChange={handleInputChange}/> <br />
            name : <input type="text" name="name" value={editedProduct.name} onChange={handleInputChange}/> <br />
            price : <input type="text" name="price" value={editedProduct.price} onChange={handleInputChange}/> <br />
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary" onClick={()=>editMethod(editedProduct)} data-bs-dismiss="modal">edit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditModal
