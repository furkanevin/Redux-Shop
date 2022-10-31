import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectedProduct,
  removeSelectedProduct,
} from '../redux/actions/productsActions';
import '../product.scss';
function cutString(s, n) {
  var cut = s.indexOf(' ', n);
  if (cut == -1) return s;
  return s.substring(0, cut);
}

const ProductDetails = () => {
  //! yappp

  const routeParams = useParams();
  //! yappp

  let product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const dispatch = useDispatch();

  const fetchProductDetail = async (routeParams) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${routeParams.product}`)
      .catch((err) => {
        console.log('Err: ', err);
      });
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    fetchProductDetail(routeParams);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [routeParams]);
  function cutString(s, n) {
    var cut = s.indexOf(' ', n);
    if (cut == -1) return s;
    return s.substring(0, cut);
  }
  return (
    <div className="single-product-detail">
      <div className="container">
        <div className="product-image">
          <img
            src="http://co0kie.github.io/codepen/nike-product-page/nikeLogo.png"
            alt=""
            className="product-logo"
          />
          <img src={image} alt="" className="product-pic" />
          <div className="dots">
            <a href="#!" className="active">
              <i>1</i>
            </a>
            <a href="#!">
              <i>2</i>
            </a>
            <a href="#!">
              <i>3</i>
            </a>
            <a href="#!">
              <i>4</i>
            </a>
          </div>
        </div>
        <div className="product-details">
          <header>
            <h1 className="title">{title?.slice(0, 50)}</h1>
            <span className="colorCat">{category}</span>
            <div className="price">
              <span className="before">$150</span>
              <span className="current">$ {price}</span>
            </div>
            <div className="rate">
              <a href="#!" className="active">
                ★
              </a>
              <a href="#!" className="active">
                ★
              </a>
              <a href="#!" className="active">
                ★
              </a>
              <a href="#!">★</a>
              <a href="#!">★</a>
            </div>
          </header>
          <article>
            <h5>Description</h5>
            <p>{description?.slice(0, 200)}</p>
          </article>
          <div className="controls">
            <div className="color">
              <h5>color</h5>
              <ul>
                <li>
                  <a href="#!" className="colors color-bdot1 active"></a>
                </li>
                <li>
                  <a href="#!" className="colors color-bdot2"></a>
                </li>
                <li>
                  <a href="#!" className="colors color-bdot3"></a>
                </li>
                <li>
                  <a href="#!" className="colors color-bdot4"></a>
                </li>
                <li>
                  <a href="#!" className="colors color-bdot5"></a>
                </li>
              </ul>
            </div>
            <div className="size">
              <h5>size</h5>
              <a href="#!" className="option">
                (UK 8)
              </a>
            </div>
            <div className="qty">
              <h5>qty</h5>
              <a href="#!" className="option">
                (1)
              </a>
            </div>
          </div>
          <div className="footer">
            <button type="button">
              <img
                src="http://co0kie.github.io/codepen/nike-product-page/cart.png"
                alt=""
              />
              <span>add to cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
