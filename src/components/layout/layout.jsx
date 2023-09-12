import React from 'react'
import Header from '../header/header'
import { Card } from '../card/card'
import { Outlet } from 'react-router-dom'
import layoutStyles from "./layout.module.css";

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <div className={layoutStyles.main}>
            <div>
              <Card />
            </div>
            <Outlet />
          </div>
        </div>
      </main>
    </>
  )
}
