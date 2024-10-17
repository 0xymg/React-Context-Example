import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { useAuth } from '../context'

function Home() {
  const { user } = useAuth();
  return (
    <>
      <Header ></Header>
      <div style={{ padding: '5% 0' }}>
        App Body
        {user && (
          <div style={{border: '1px solid red', padding: 10}}>
            Logged in users can see this.
          </div>
        )}

      </div>
      <Footer ></Footer>
    </>

  )
}

export default Home