import Menu from '../../components/elements/menu'
import ProfileComponent from '../../components/elements/profile'
import RegisterFormComponentAdmin from '../../components/others/forms/admin/registerRG'
import { Layout } from '../../layout/pages'

export default function RegisterAdmin() {
  return (
    <Layout>
      <Menu />
      <ProfileComponent />
      <RegisterFormComponentAdmin />
    </Layout>
  )
}
