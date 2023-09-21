import { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
import {getProducts} from '../../redux/actions/productActions';
import { Link } from "react-router-dom";

const Search=()=>{
  const [text, setText] = useState('');
  const [open, setOpen] = useState(true);

  const {products} = useSelector(state=>state.getProducts);

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getProducts())
  },[dispatch])

  const getText = (text) => {
    setText(text)
    setOpen(false)
  }
  const linkClicked =() => {
    setOpen(true)
    setText('')
  }
    return(
      <>
      <div className="search1">
        <input type="text" className="search2" aria-label="Search" value={text}  placeholder="Search for products, brands and more" onChange={(e)=> getText(e.target.value)}/>
        <div className="search3">
        <i className="bi bi-search" style={{color:'blue',padding:'5px'}}></i>
        </div>
        </div>
        {
          text &&
                <ul className="search-list" hidden={open}>
                  {
                    products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product =>
                      <li className="list-group-item" style={{padding:'5px'}}>
                        <Link 
                          to={`/product/${product.id}`} 
                          onClick={()=>linkClicked()}
                          style={{ textDecoration:'none',color:'inherit'}}
                          >
                        {product.title.longTitle}
                        </Link>
                      </li>
                    )
                  }
                </ul>
        }
      </>
    )
}
export default Search;