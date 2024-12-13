import React from 'react'
import Ttitle from './shared/Ttitle';
import Table from './shared/Table';

const RecentDate = [
    {
      id: '1',
      product_id: '4324',
      customer_id: '23143',
      customer_name: 'Shirley A. Lape',
      order_total: '$435.50',
      current_order_status: 'PLACED',
      Shipment_address: 'Cottage Grove, OR 97424',
    },
    {
      id: '2',
      product_id: '5432',
      customer_id: '12231',
      customer_name: 'David J. Miller',
      order_total: '$120.00',
      current_order_status: 'SHIPPED',
      Shipment_address: 'Austin, TX 78701',
    },
    {
      id: '3',
      product_id: '3123',
      customer_id: '45321',
      customer_name: 'Karen P. Woods',
      order_total: '$255.75',
      current_order_status: 'DELIVERED',
      Shipment_address: 'Denver, CO 80205',
    },
    {
      id: '6',
      product_id: '1234',
      customer_id: '56432',
      customer_name: 'John M. Doe',
      order_total: '$310.25',
      current_order_status: 'CANCLED',
      Shipment_address: 'Chicago, IL 60601',
    },
    {
      id: '7',
      product_id: '7654',
      customer_id: '67890',
      customer_name: 'Linda F. Green',
      order_total: '$190.00',
      current_order_status: 'SHIPPED',
      Shipment_address: 'New York, NY 10001',
    },
    {
      id: '8',
      product_id: '2345',
      customer_id: '34567',
      customer_name: 'Daniel E. King',
      order_total: '$425.50',
      current_order_status: 'DELIVERED',
      Shipment_address: 'Dallas, TX 75201',
    },
    {
      id: '9',
      product_id: '9821',
      customer_id: '54321',
      customer_name: 'Emily J. Parker',
      order_total: '$150.75',
      current_order_status: 'PROCESSING',
      Shipment_address: 'Phoenix, AZ 85001',
    },
    {
      id: '10',
      product_id: '8712',
      customer_id: '32415',
      customer_name: 'Robert T. Clark',
      order_total: '$99.99',
      current_order_status: 'PLACED',
      Shipment_address: 'San Francisco, CA 94101',
    },
  ];
  const columns = [
    { label: "ID", accessor: "id" },
    { label: "Product ID", accessor: "product_id" },
    { label: "Customer Name", accessor: "customer_name" },
    { label: "Order Total", accessor: "order_total" },
    { label: "Shipment Address", accessor: "Shipment_address" },
    { label: "Order Status", accessor: "current_order_status" },
  ];
const RecentOrders = () => {
  return (
    <div className='bg-white p-4 rounded-md border-gray-200 border flex-1'>
         <Ttitle>Recent Orders</Ttitle>
      <div className='mt-3 w-full'>
        <Table columns={columns} data={RecentDate}  />
      </div>
    </div>
  )
}

export default RecentOrders