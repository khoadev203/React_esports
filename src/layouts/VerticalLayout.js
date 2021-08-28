// !Do not remove the Layout import
import Layout from '@layouts/VerticalLayout'

// ** Components
import CustomMenu from './components/Menu'
import Navbar from './components/navbar'
import CustomFooter from './components/Footer'

const VerticalLayout = props => (
  <Layout
    navbar={props => <Navbar {...props} />}
    menu={props => <CustomMenu {...props} />}
    footer={props => <CustomFooter {...props} />}
    {...props}
  >
    {props.children}
  </Layout>
)

export default VerticalLayout
