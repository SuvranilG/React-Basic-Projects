import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [products,setProducts]=useState([]);
  const fetchProducts=async ()=>{
  const res= await fetch('https://dummyjson.com/products');
  const data= await res.json();
  setProducts(data.products);
  console.log(data.products);
  }
  const [page,setPage] = useState(5);
  const numOfProductsInPage =6;
  
  useEffect(()=>{
    fetchProducts();
  },[])
  
  const handlePageClick=(selectedPage)=>{
    if(selectedPage >0 && selectedPage<=products.length/numOfProductsInPage)
    setPage(selectedPage);
  }

  return (<>


    <div className='products'>

      {products.slice(page*numOfProductsInPage-numOfProductsInPage,page*numOfProductsInPage).map(product =>{
        return( 
        <div className='products__single'key={product.title}>
          <img src={product.thumbnail} ></img>
          <div >{product.title}</div>
          
        </div>
      )}
      )}

    </div>
    {products.length>0&& <div className="pagination">

    <span
    onClick={()=>handlePageClick(page-1)}
    className={page>1?"":"pagination__disabled"}
    >◀️</span>
    {[...Array(products.length/numOfProductsInPage)].map((_,i)=>
    <span 
      key={i} 
      onClick={()=>handlePageClick(i+1)}
      className={page===i+1?"pagination__selected":""}
      >{i+1}</span>
    )}
    <span
    onClick={()=>handlePageClick(page+1)}
    className={page<products.length/numOfProductsInPage?"":"pagination__disabled"}
    >▶️</span>
    </div>
    }
    </>
  )
}

export default App
