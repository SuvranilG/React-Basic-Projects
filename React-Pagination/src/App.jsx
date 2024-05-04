import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [products,setProducts]=useState([]);
  const[productsLength,setProductsLength]=useState(0);
  const [page,setPage] = useState(1);
  const productsPerPage =9;
  const fetchProducts=async ()=>{
    const res= await fetch(`https://dummyjson.com/products?limit=${productsPerPage}&skip=${page*productsPerPage-productsPerPage}`);
    const data= await res.json();
    setProducts(data.products);
    setProductsLength(data.total)
    console.log(data);
    console.log(data.total);
    }
  useEffect(()=>{
    fetchProducts();
  },[page])
  
  const handlePageClick=(selectedPage)=>{
    if(selectedPage >0 && selectedPage<=productsLength/productsPerPage)
    setPage(selectedPage);
  }

  return (<>


    <div className='products'>

      {products.map(product =>{
        return( 
        <div className='products__single'key={product.title}>
          <img src={product.thumbnail} ></img>
          <div >{product.title}</div>
          
        </div>
      )}
      )}

    </div>
    {productsLength>0&& <div className="pagination">

    <span
    onClick={()=>handlePageClick(page-1)}
    className={page>1?"":"pagination__disabled"}
    >◀️</span>
    {[...Array(Math.floor(productsLength/productsPerPage))].map((_,i)=>
    <span 
      key={i} 
      onClick={()=>handlePageClick(i+1)}
      className={page===i+1?"pagination__selected":""}
      >{i+1}</span>
    )}
    <span
    onClick={()=>handlePageClick(page+1)}
    className={page<productsLength/productsPerPage?"":"pagination__disabled"}
    >▶️</span>
    </div>
    }
    </>
  )
}

export default App
