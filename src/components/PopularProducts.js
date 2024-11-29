import React from 'react'
import Ttitle from './shared/Ttitle'
import { Link } from 'react-router-dom';

const PopularProductData = [
  {
    id: '3432',
    product_name: 'MacBook M1 Pro 14"',
    product_price: '$1499.00',
    product_stock: 341,
    product_image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&q=80',
  },
  {
    id: '4532',
    product_name: 'iPhone 13 Pro Max',
    product_price: '$1099.00',
    product_stock: 212,
    product_image: 'https://images.unsplash.com/photo-1694570149728-b1011c2a772b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '5623',
    product_name: 'Samsung Galaxy S22 Ultra',
    product_price: '$1199.99',
    product_stock: 182,
    product_image: 'https://images.unsplash.com/photo-1709744722656-9b850470293f?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '6745',
    product_name: 'Dell XPS 13',
    product_price: '$999.99',
    product_stock: 0,
    product_image: 'https://images.unsplash.com/photo-1557180295-76eee20ae8aa?w=500&q=80',
  },
  {
    id: '7854',
    product_name: 'Sony WH-1000XM4 Headphones',
    product_price: '$348.00',
    product_stock: 254,
    product_image: 'https://plus.unsplash.com/premium_photo-1677838847804-4054143fb91a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '8923',
    product_name: 'Apple Watch Series 8',
    product_price: '$399.00',
    product_stock: 305,
    product_image: 'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?w=500&q=80',
  },
  {
    id: '9123',
    product_name: 'Google Pixel 7 Pro',
    product_price: '$899.00',
    product_stock: 0,
    product_image: 'https://images.unsplash.com/photo-1668834860184-69ebc6d0756d?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '1023',
    product_name: 'Lenovo ThinkPad X1 Carbon',
    product_price: '$1249.99',
    product_stock: 96,
    product_image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&q=80',
  },
];

const PopularProducts = () => {
  return (
    <div className='bg-white p-4 rounded-md border-gray-200 border w-[28rem]'>
        <Ttitle>Populars Charts</Ttitle>
        <div className='mt-4 flex flex-col gap-3'>
          {PopularProductData.map((product)=>{
            return (
              <Link to={`/product${product.id}`} className='flex'>
                <div className='w-10 h-10 min-w-10 bg-gray-200 rounded-full overflow-hidden'>
                  <img src={product.product_image} alt={product.product_name} className='w-full h-full object-cover' ></img>
                </div>
                <div className='ml-4 flex-1'>
                  <p className='text-sm text-gray-800' >{product.product_name}</p>
                  <span className={`text-sm font-medium ${product.product_stock === 0 ? 'text-orange-500' : 'text-green-500'}`}>
                    {product.product_stock === 0 ? 'Out of stock' : product.product_stock + 'in stock'}
                  </span>
                </div>
                <div className='text-xs text-gray-400'>{product.product_price}</div>
              </Link>
            )
          })}
        </div>
      </div>  
    )
}

export default PopularProducts