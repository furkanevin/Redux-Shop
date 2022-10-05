import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectedProduct,
  removeSelectedProduct,
} from '../redux/actions/productsActions';

const ProductDetails = () => {
  const { productId } = useParams();
  let product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const dispatch = useDispatch();
  const fetchProductDetail = async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log('Err: ', err);
      });
    dispatch(selectedProduct(response.data));
    console.log(response.data);
  };
  useEffect(() => {
    fetchProductDetail(productId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);
  return (
    <div className="single-product-detail">
      <div className="single-detail-img">
        <img src={image} />
      </div>
      <div className="single-detail-content">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
