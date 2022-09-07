import React, { useState } from 'react'
import ProductServices from '../services/ProductServices';

function CreateProducts() {
    const [id, setId] = useState();
    const [pname, setPname] = useState();
    const [price, setPrice] = useState();
    const CreateProducts = (e) => {

        let obj = {
            "id": parseInt(id),
            "pname": pname,
            "price": price
        }
        ProductServices.createProducts(obj).then((res) => {

        });
    };
    return (
        <div className='container'>
            <h1>Product List</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleId" className="form-label">Id </label>
                    <input type="number" className="form-control" id="formGroupExampleId" placeholder="Example input placeholder" onChange={(e) => setId(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExamplePname" className="form-label">Product Name </label>
                    <input type="text" className="form-control" id="formGroupExampleName" placeholder="Example input placeholder" onChange={(e) => setPname(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExamplePrice" className="form-label">Price </label>
                    <input type="number" className="form-control" id="formGroupExampleMarks" placeholder="Example input placeholder" onChange={(e) => setPrice(e.target.value)} />
                </div>
                <button onClick={CreateProducts} className="btn btn-primary" style={{ float: "center" }}>submit</button>
            </form>
        </div>
    )
}

export default CreateProducts