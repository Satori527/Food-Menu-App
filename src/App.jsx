import FilterSection from "./components/FilterSection"
import Footer from "./components/Footer"
import Header from "./components/Header"
import ProductGrid from "./components/ProductGrid"

function App() {

  return (
    <div className="flex flex-col min-h-screen w-full items-center ">
      <Header />
      <div className="flex-col mt-20 w-full overflow-hidden">
        <FilterSection />
        <ProductGrid />
        <Footer />
      </div>

    </div>
  )
}

export default App
