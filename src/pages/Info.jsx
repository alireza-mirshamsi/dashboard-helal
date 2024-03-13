import React from 'react'
import Column from 'antd/es/table/Column';
import { Table } from 'antd';

const columns = [
  {
    title: 'نام و نام خانوادگی',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'سن',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'آدرس',
    dataIndex: 'address',
    key: 'address',
  },
];

const data1 = []
for(let i = 0; i < 46 ; i++){
  data1.push({
    key: i,
    name: `علیرضا میرشمسی ${i}`,
    age: 32,
    address: `شیراز. ${i}`
  })
}

const Info = () => {
  return (
    <div>
        <h3 className='mb-4 text-lg font-bold'> اطلاعات پایه </h3>
        <Table columns={columns} dataSource={data1} />
    </div>
    
  )
}

export default Info