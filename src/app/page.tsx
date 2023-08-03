import Carousel from '@/components/Carousel'
import StartSession from '@/components/StartSession'
import theme from '@/theme/themeConfig'
import { ConfigProvider } from 'antd'

export default function Home() {
  return (
    <ConfigProvider theme={theme}>
      <Carousel />
      <section className="container relative">
        <StartSession />
        {/* <section className=""></section> */}
      </section>
    </ConfigProvider>
  )
}
