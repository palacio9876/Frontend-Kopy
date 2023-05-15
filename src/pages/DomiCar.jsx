import React from 'react'

export const DomiCar = ( articles) => {
   

  return (
    <div className="container-items">
      {articles.map((article) => (
    <div className="item" key={article.id}>
        
         <figure>
            <img src={article.urlImage} alt={article.nameProduct} />
          </figure>
          <div className="info-product">
            <h2>{article.nameProduct}</h2>
            <p className="price">${article.price}</p>
            </div>
            </div>
            ))}
            </div>
    )
}





