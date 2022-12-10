import React, { useEffect, useState } from "react";
import axios from "axios";
import ListProduct from "../ListProduct";
import { handlePercentDiscount } from "../../../utils/index";

function Iphone(props) {
  const [name, setName] = useState("cooker");
  const [hotIphone, setHotIphone] = useState([]);
  useEffect(() => {
    async function FetchApi() {
      try {
        const { data } = await axios.get(
          `http://localhost:4000/products/${name}`
        );
        setHotIphone(data);
      } catch (error) {}
    }
    FetchApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="hotsale iphone">
      <div className="hotsale">
        <h2>BẾP</h2>
        {hotIphone ? (
          <ListProduct
            HotSaleProducts={handlePercentDiscount(hotIphone)}
          ></ListProduct>
        ) : (
          ""
        )}
      </div>
    </section>
  );
}

export default Iphone;
