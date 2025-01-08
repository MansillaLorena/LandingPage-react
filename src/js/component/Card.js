import React from 'react';
const Card = ({ title, text, img, link }) => {
  return (
    <div className="container mt-2 d-flex justify-content-center align-item-center"> 
    <div className="card" style={{ width: '18rem' }}>
      <img src={img} className="card-img-top" alt={title} />
      <div className="card-body text-center">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href={link} className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    </div>
  );
}
export default Card