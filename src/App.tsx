import { Banner } from './components/Banner'
import { FindYourStyle } from './components/FindYourStyle'
import { Header } from './components/Header'
import { OffShoes } from './components/OffShoes'
import './global.css'

export function App() {
  return (
    <div>
      <Header />
      <main>
        <Banner />
        <FindYourStyle />
        <OffShoes />
      </main>
    </div>
  )
}
