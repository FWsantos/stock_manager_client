import { useEffect, useState } from "react";
import { Product } from "../store/interfaces";
import axios from "axios";

function TableList() {
  const [produtos, setProdutos] = useState<Product[]>([]);
  const apiUrl = import.meta.env.VITE_API_URL;

  const fetchData = async () => {
    const fetchProdutos = async () => {
      try {
        axios.get(apiUrl + "/produtos").then((response) => {
          const data = response.data;
          setProdutos(data);
        });
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      } finally {
        console.log("Busca de produtos finalizada.");
      }
    };

    fetchProdutos();
  };

  useEffect(() => {
    fetchData();
  }, []);

  const list = produtos.map((produto) => (
    <li key={produto.id}>
      <p>
        {produto.name} {produto.price}
      </p>
      {produto.image && (
        <img
          src={`data:image/jpeg;base64,${produto.image}`}
          alt={produto.name}
        />
      )}
    </li>
  ));

  return <ul>{list}</ul>;
}

export default TableList;
