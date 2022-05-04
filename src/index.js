import { createRoot } from 'react-dom/client'
import zhCN from 'antd/lib/locale-provider/zh_CN'
import App from './App'
import { ConfigProvider } from 'antd'

const root = createRoot( document.getElementById( 'root' ))

ConfigProvider.config({
  prefixCls: 'custom',
  theme: {
    primaryColor: 'red'
  }
});

root.render (
  <ConfigProvider locale={zhCN}>
    <App/>
  </ConfigProvider>
)