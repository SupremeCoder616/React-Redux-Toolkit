import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { add } from '../stor/cartSlice';

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(()=>{

        const fetchProducts =  async () =>{
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
            setProducts(data);
        }
        fetchProducts();
    },[])
    
    const dispatch = useDispatch();

    const handleAdd = (product)=>{
      dispatch(add(product))
    }
  return (
    <div className='productsWrapper'>
      {
        products.map(product=>
           <div className='card' key={product.id}>
             <img src={product.image}/>
             <h4>{product.title}</h4>
             <h4>{product.price}</h4>
             <button onClick={()=> handleAdd(product)} className='btn'> Add to cart</button>
           </div>
          )
      }
    </div>
  )
}

export default Products
