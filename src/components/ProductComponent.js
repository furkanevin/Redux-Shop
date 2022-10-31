import React from 'react';
import { useSelector } from 'react-redux';
import VanillaTilt from 'vanilla-tilt';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}

function cutString(s, n) {
  var cut = s.indexOf(' ', n);
  if (cut == -1) return s;
  return s.substring(0, cut);
}

const ProductComponent = () => {
  const options = {
    scale: 1.0,
    speed: 500,
    max: 10,
  };
  
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category, description } = product;
    return (
      <div className="ondan" key={id}>
        <div className="shop">
          <span className="material-symbols-outlined">
            shopping_cart_checkout
          </span>
        </div>
        <Tilt className="container" options={options}>
          <Link to={`/product/${id}`}>
            <div className="card">
              <div className="card-head">
                <img src={image} className="product-img" perspective="1000" />
                <div className="product-detail">
                  <h2>{title}</h2> {description.slice(0, 140)}
                </div>
                <span className="back-text">{title.slice(0, 3)}</span>
              </div>
              <div className="card-body">
                <div className="product-desc">
                  <span className="product-title">
                    {cutString(title, 29)}
                    <span className="badge">New</span>
                  </span>
                  <span className="product-caption">{category}</span>
                </div>
                <div className="product-properties">
                  <span className="product-color">
                    <h4>Colour</h4>
                    <ul className="ul-color">
                      <li>
                        <span className="orange "></span>
                      </li>
                      <li>
                        <span className="green"></span>
                      </li>
                      <li>
                        <span className="yellow"></span>
                      </li>
                    </ul>
                  </span>
                  <span className="product-price">
                    <p>
                      USD<b>{price}$</b>
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </Tilt>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
