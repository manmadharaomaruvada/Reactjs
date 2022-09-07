import React, { useEffect, useState } from 'react'
import ProductServices from '../services/ProductServices';
import UpdateProduct from './UpdateProduct';
import { useNavigate } from 'react-router-dom'
function ProductList() {
    const [products, setProducts] = useState([]);
    let navigate = useNavigate();
    useEffect(() => {
        getAllProducts()

    }, []);
    const getAllProducts = async () => {
        const data = await ProductServices.getAllProducts();
        console.log(data.data);
        setProducts(data.data);
        console.log("Products Data" + products)
    }
    const deleteData = (id) => {
        ProductServices.deleteProduct(id);
        getAllProducts();
    }
    const updateProduct = (id) => {

        navigate(`/update/${id}`);
    }
    const viewProduct=(id)=>{
        navigate(`/view/${id}`)
    }
    return (
        <div>
            <h1>ProductList</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Price</th>
                        <th colSpan={2}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => {
                        return (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.pname}</td>
                                <td>{product.price}</td>
                                <td>
                                    <a className="btn btn-primary" style={{ margin: "10px" }} onClick={() => viewProduct(product.id)}>View</a>
                                    <a className="btn btn-primary" style={{ margin: "10px" }} onClick={() => updateProduct(product.id)}>Edit</a>
                                    <button className="btn btn-danger" onClick={() => deleteData(product.id)} >Delete</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ProductList