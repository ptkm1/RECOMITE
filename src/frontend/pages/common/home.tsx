import React from 'react'
import Menu from '../../components/elements/menu'
import ProfileComponent from '../../components/elements/profile'
import { Layout } from '../../layout/pages'

function HomeCommon() {
  return (
    <Layout>
      <Menu />
      <ProfileComponent />
    </Layout>
  )
}

export default HomeCommon