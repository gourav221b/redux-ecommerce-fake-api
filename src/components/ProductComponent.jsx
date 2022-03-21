import { useSelector,useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
function ProductComponent() {
    const products= useSelector((state)=>state.allProducts.products)
    
        
 
  return ( 
      <section className='row '>
    {products.map((product)=>(
        <>
    <Link to={`/product/${product.id}`} className='col-md-4' key={product.id}>
            <div className="productCard">
                <div className="card">
                <img className="card-img-top cardImg" src={product.image} alt="Card image cap"/>
                    <div className="card-body">
                        <div className="header">{product.title}</div>
                        <div className="meta price">${product.price}</div>
                        <div className="meta">{product.category}</div>
                    </div>
                </div>
            </div>
    </Link>  
    </>
     ))}
     </section>
  )
}

export default ProductComponent