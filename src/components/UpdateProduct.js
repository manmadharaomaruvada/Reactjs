import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import ProductServices from '../services/ProductServices';
function UpdateProduct() {
    const [id, setId] = useState();
    const [pname, setPname] = useState();
    const [price, setPrice] = useState();
    const params = useParams();
    let navigate = useNavigate();
    useEffect(() => {
        ProductServices.getProducts(params.id).then(res => {
            setId(res.data.id);
            setPname(res.data.pname);
            setPrice(res.data.price);
        })
    }, []);
    const update=()=>{
      
        ProductServices.updateProduct(id,{id,pname,price})
        
        navigate("/ProductList")
    }

    return (
        <div className="container">
            <h1>Update Product</h1>
            <form>

                <div className="mb-3">
                    <label htmlFor="formGroupExampleId" className="form-label">Id </label>
                    <input type="number" className="form-control" id="formGroupExampleId" placeholder="Example input placeholder" value={id} onChange={(e) => setId(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExamplePname" className="form-label">Product Name </label>
                    <input type="text" className="form-control" id="formGroupExampleName" placeholder="Example input placeholder" value={pname} onChange={(e) => setPname(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExamplePrice" className="form-label">Price </label>
                    <input type="number" className="form-control" id="formGroupExampleMarks" placeholder="Example input placeholder" value={price} onChange={(e) => setPrice(e.target.value)} />
                </div>
                <button type='submit' className='btn btn-primary' onClick={() => update()}>Upadate </button>
            </form>
        </div>
    )
}

export default UpdateProduct