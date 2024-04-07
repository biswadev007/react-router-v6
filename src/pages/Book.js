import React from 'react'
import { useParams } from 'react-router-dom';

const Book = () => {
  const params = useParams();

  return (
    <h2>Book {params?.id}</h2>
  )
}

export default Book;