import { useState, useEffect } from "react";
import productsApi from "../../service/productsApi";
import Spinner from "../Spinner/Spinner";

const Products = () => {
  const [data, setData] = useState([]);
  const getPropducts = async () => {
    const res = await productsApi.getProducts();
    console.log(res);
    setData(res.data);
  };

  useEffect(() => {
    getPropducts();
  }, []);

  if (data.length === 0) {
    return <Spinner />;
  }

  return <section className="container mx-auto my-20 grid grid-cols-6 gap-9 mt-40 ">
    {data.map(el => {
        return(
            <div key={el.id}>
                <img width={250} src={el.images[0]} alt="" />
                {el.price + "  $"}  
                <br />
                {el.title}
            </div>
        )
    })}
  </section>;
};

export default Products;
