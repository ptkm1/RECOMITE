import Menu from '../../components/elements/menu'
import Notify from '../../components/elements/notify'
import ProfileComponent from '../../components/elements/profile'
import RegisterFormComponent from '../../components/others/forms/common/registerRG'
import { Layout } from '../../layout/pages'

export default function RegisterCommon() {
  return (
    <Layout>
      <Menu />
      <ProfileComponent />
      <Notify top="50%" left="77%" text="Erro!" />
      <RegisterFormComponent />
    </Layout>
  )
}
