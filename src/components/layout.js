import React from 'react'

import Header from './Header'

const Template = ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
)

export default Template;