// import React from 'react'

import Item from "../Footer/Item"
import {PRODUCTS,RESOURCES,COMPANY,SUPPORT} from "../Footer/Menu"
const itemsContainer = () => {
  return (
    <>
            <div className="bg-slate-50 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
                <Item Links={PRODUCTS} title="SERVICES"/>
                <Item Links={RESOURCES} title="RESOURCES"/>
                <Item Links={COMPANY} title="COMPANY"/>
                <Item Links={SUPPORT} title="SUPPORT"/>
            </div>
    </>
  )
}

export default itemsContainer