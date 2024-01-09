import React from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'

export const ProductDisplay = (props) => {
    const {product} = props;
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt="" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-stars">
                <img src={star_icon}alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-prise-old">${product.old_price}</div>
                <div className="productdisplay-right-prise-new">${product.new_price}</div>
            </div>
            <div className="productdisplay-right-description">
            Introducing our Classic Cotton Product, a wardrobe staple for every fashion enthusiast. Made from high-quality cotton, this offers a perfect blend of comfort and style. The timeless design making it ideal for casual outings or layering with your favorite jackets. Whether you're dressing up or down, our Classic Cotton T-Shirt is the epitome of relaxed fashion, ensuring you stay effortlessly cool in any setting.
            </div>
            <div className="productdisplay-right-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-size">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button>ADD TO CART</button>
            <p className='productdisplay-right-category'><span>Category :</span>Woman, T-shirt, Crop-Top</p>
            <p className='productdisplay-right-category'><span>Tags :</span>Modern, Latest</p>

        </div>
    </div>
  )
}
