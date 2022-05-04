import React from 'react'
import { Button, Spin, Pagination } from 'antd'
import './App.less'

export default function App() {
  const onShowSizeChange = () => {
    console.log('onShowSizeChange')
  }

  return (
    <div>
      <Button loading type='primary'>Test Button</Button>

      <Spin>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta expedita molestiae omnis perferendis, debitis velit minima illo quis, similique officia quae sapiente aliquid natus magnam, illum aliquam cupiditate cumque! Error!
      </Spin>

      <Pagination
      showSizeChanger
      onShowSizeChange={onShowSizeChange}
      defaultCurrent={3}
      total={500}
    />
    </div>
  )
}
