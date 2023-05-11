import React from 'react'
import Products from '../component/Products';

const Home = () => {
  return (
    <>
      <div>
            <h2 className="heading">Welcome to the Redux toolkit store</h2>
            <section>
                <h3>Products</h3>
                {/* <Products /> */}
                <Products/>
            </section>
        </div>
    </>
  )
}

export default Home
