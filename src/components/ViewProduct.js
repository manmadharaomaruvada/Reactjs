import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import ProductServices from '../services/ProductServices';
function ViewProduct() {
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
    return (
        <div>
            <div className="card col-md-6 offset-md-3">
                <h3 className="text-center"> View Product </h3>
                <div className="card-body">
                    <center>

                        <table className='table-style' >
                            <tr>
                                <th><label>Id:</label></th>
                                <td><div> {id}</div></td>
                            </tr>
                            <tr>
                                <th><label>PName: </label></th>
                                <td><div> {pname}</div></td>
                            </tr>
                            <tr>
                                <th><label> Price: </label></th>
                                <td><div> {price}</div></td>
                            </tr>
                        </table>
                    </center>
                </div>
            </div>
        </div>
    )
}

export default ViewProduct