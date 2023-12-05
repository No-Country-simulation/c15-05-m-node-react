import React from "react";
import Card from "../card/Card"
//import { UseSelector } from "react-redux";

const CardsContainer = () => {
  const products = [
      {
        "_id":"5f8a0a5b6e95510f8c6d1a15",
        "name": "Producto Ejemplo 1",
        "price": 19.99,
        "image": {
          "url": "https://isorepublic.com/wp-content/uploads/2023/09/iso-republic-rainbow_birds-768x512.jpg",
          "public_id": "abcd1234"
        },
        "quantity": 30,
        "description": "Este es el primer producto de ejemplo.",
        "category": ["Ropa", "Accesorios"],
        "currency": "EUR",
        "company": "5f8a0a5b6e95510f8c6d1a15"
      },
      {
        "_id":"5f8a0a5b6e95510f8c6d1a616",
        "name": "Producto Ejemplo 2",
        "price": 39.99,
        "image": {
          "url": "https://isorepublic.com/wp-content/uploads/2023/09/iso-republic-rainbow_birds-768x512.jpg",
          "public_id": "efgh5678"
        },
        "quantity": 20,
        "description": "Este es el segundo producto de ejemplo.",
        "category": ["Electrónicos", "Tecnología"],
        "currency": "USD",
        "company": "5f8a0a5b6e95510f8c6d1a16"
      },
      {
        "_id":"5f8a0a5b6e95510f8c6d1a17",
        "name": "Producto Ejemplo 3",
        "price": 39.99,
        "image": {
          "url": "https://isorepublic.com/wp-content/uploads/2023/09/iso-republic-rainbow_birds-768x512.jpg",
          "public_id": "efgh5678"
        },
        "quantity": 20,
        "description": "Este es el segundo producto de ejemplo.",
        "category": ["Electrónicos", "Tecnología"],
        "currency": "USD",
        "company": "5f8a0a5b6e95510f8c6d1a16"
      },
      {
        "_id":"5f8a0a5b6e95510f8c6d1a18",
        "name": "Producto Ejemplo 4",
        "price": 39.99,
        "image": {
          "url": "https://isorepublic.com/wp-content/uploads/2023/09/iso-republic-rainbow_birds-768x512.jpg",
          "public_id": "efgh5678"
        },
        "quantity": 20,
        "description": "Este es el segundo producto de ejemplo.",
        "category": ["Electrónicos", "Tecnología"],
        "currency": "USD",
        "company": "5f8a0a5b6e95510f8c6d1a16"
      },
      {
        "_id":"5f8a0a5b6e95510f8c6d1a19",
        "name": "Producto Ejemplo 5",
        "price": 39.99,
        "image": {
          "url": "https://isorepublic.com/wp-content/uploads/2023/09/iso-republic-rainbow_birds-768x512.jpg",
          "public_id": "efgh5678"
        },
        "quantity": 20,
        "description": "Este es el segundo producto de ejemplo.",
        "category": ["Electrónicos", "Tecnología"],
        "currency": "USD",
        "company": "5f8a0a5b6e95510f8c6d1a16"
      },
      {
        "_id":"5f8a0a5b6e95510f8c6d1a20",
        "name": "Producto Ejemplo 6",
        "price": 39.99,
        "image": {
          "url": "https://isorepublic.com/wp-content/uploads/2023/09/iso-republic-rainbow_birds-768x512.jpg",
          "public_id": "efgh5678"
        },
        "quantity": 20,
        "description": "Este es el segundo producto de ejemplo.",
        "category": ["Electrónicos", "Tecnología"],
        "currency": "USD",
        "company": "5f8a0a5b6e95510f8c6d1a16"
      },
      {
        "_id":"5f8a0a5b6e95510f8c6d1a21",
        "name": "Producto Ejemplo 7",
        "price": 39.99,
        "image": {
          "url": "https://isorepublic.com/wp-content/uploads/2023/09/iso-republic-rainbow_birds-768x512.jpg",
          "public_id": "efgh5678"
        },
        "quantity": 20,
        "description": "Este es el segundo producto de ejemplo.",
        "category": ["Electrónicos", "Tecnología"],
        "currency": "USD",
        "company": "5f8a0a5b6e95510f8c6d1a16"
      },
      {
        "_id":"5f8a0a5b6e95510f8c6d1a22",
        "name": "Producto Ejemplo 8",
        "price": 39.99,
        "image": {
          "url": "https://isorepublic.com/wp-content/uploads/2023/09/iso-republic-rainbow_birds-768x512.jpg",
          "public_id": "efgh5678"
        },
        "quantity": 20,
        "description": "Este es el segundo producto de ejemplo.",
        "category": ["Electrónicos", "Tecnología"],
        "currency": "USD",
        "company": "5f8a0a5b6e95510f8c6d1a16"
      },
      {
        "_id":"5f8a0a5b6e95510f8c6d1a23",
        "name": "Producto Ejemplo 9",
        "price": 39.99,
        "image": {
          "url": "https://isorepublic.com/wp-content/uploads/2023/09/iso-republic-rainbow_birds-768x512.jpg",
          "public_id": "efgh5678"
        },
        "quantity": 20,
        "description": "Este es el segundo producto de ejemplo.",
        "category": ["Electrónicos", "Tecnología"],
        "currency": "USD",
        "company": "5f8a0a5b6e95510f8c6d1a16"
      },
      {
        "_id":"5f8a0a5b6e95510f8c6d1a24",
        "name": "Producto Ejemplo 10",
        "price": 39.99,
        "image": {
          "url": "https://isorepublic.com/wp-content/uploads/2023/09/iso-republic-rainbow_birds-768x512.jpg",
          "public_id": "efgh5678"
        },
        "quantity": 20,
        "description": "Este es el segundo producto de ejemplo.",
        "category": ["Electrónicos", "Tecnología"],
        "currency": "USD",
        "company": "5f8a0a5b6e95510f8c6d1a16"
      }
    ];
//const products = useSelector(state => state.products)

    return (
    <div>
        {products && products.map((p) => (
            <Card
            id={p.id}
            image={p.image.url}
            name={p.name}
            category={p.category}
            price={p.price}
            key={p.id}
            />
        ))}
    </div>
    ) 
}

export default CardsContainer;