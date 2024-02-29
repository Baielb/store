import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import Spinner from '../../component/Spinner/Spinner';

const url = 'https://api.escuelajs.co/api/v1/categories/'



const CategpryPage = () => {
    const params = useParams()
    console.log(params);
    const [products, setProducts] = useState([])

    useEffect(() => {
        const getProductsById = async () => {
          const res = await axios(url + params.id)
        }
        getProductsById()
      }, [params.id])
    
      if (products.length === 0) {
        return <Spinner />
      }
  return (
    <div>
      cdf
    </div>
  )
}

export default CategpryPage
