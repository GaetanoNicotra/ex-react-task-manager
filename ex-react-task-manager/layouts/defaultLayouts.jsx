import React from 'react'
import Header from '../components/Header'

const defaultLayouts = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default defaultLayouts
