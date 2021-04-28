import SearchComponent from '../../components/contents/searchComponent'
import Menu from '../../components/elements/menu'
import ProfileComponent from '../../components/elements/profile'
import { Layout } from '../../layout/pages'

export default function Search() {
  return (
    <Layout>
      <Menu />
      <ProfileComponent />
        <SearchComponent />
    </Layout>
  )
}
