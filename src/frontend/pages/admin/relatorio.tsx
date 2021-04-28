import Menu from '../../components/elements/menu'
import ProfileComponent from '../../components/elements/profile'
import RelatorioComponent from '../../components/others/forms/relatorioComponent'
import { Layout } from '../../layout/pages'

export default function Relatorio() {

  return (
    <Layout>
      <Menu />
      <ProfileComponent />
      <RelatorioComponent />
    </Layout>
  )
}
