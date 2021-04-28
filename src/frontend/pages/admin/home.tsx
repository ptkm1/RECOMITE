import Menu from '../../components/elements/menu'
import ProfileComponent from '../../components/elements/profile'
import { Layout } from '../../layout/pages'
import Card from '../../components/elements/cards'
import React from 'react'

function HomeAdmin() {

  return (
    <Layout>
      <Menu />
      <ProfileComponent />
        <div style={{ display: 'flex', flexDirection:'column' }}>
          <div style={{ display: 'flex', flexDirection: 'row' }}> 
        <h2 style={{ position: 'fixed', top: "120px", color: 'gray' }}>Opções Geráis</h2>
          <Card  title="Relatórios" width="320px" height="200px" callback={ "/relatorios" } />
          <Card  title="Pesquisar Certidão" width="320px" height="200px" callback={ "/pesquisarcertidao" }  />
          <Card  title="Registrar Certidão" width="320px" height="200px" callback={ "/registrarcertidao" }  />
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', marginTop: '50px' }}> 
        <h2 style={{ position: 'absolute', marginTop: '-50px', color: 'gray' }}>Opções Privilegiadas</h2>
          <Card  title="Gerenciar Usuarios" width="320px" height="200px" callback={ "/relatorios" } />
          <Card  title="Gerenciar Postos" width="320px" height="200px" callback={ "/pesquisarcertidao" }  />
          <Card  title="Gerenciar Status" width="320px" height="200px" callback={ "/registrarcertidao" }  />
        </div>
      </div>
    </Layout>
  )
}

export default HomeAdmin