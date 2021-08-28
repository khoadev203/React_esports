// !Do not remove the Layout import
import Layout from '@layouts/HorizontalLayout'

// ** Components
// import CustomMenu from './components/Menu'
import CustomNavbar from './components/navbar'
// import CustomFooter from './components/Footer'

const HorizontalLayout = props => (
  <Layout
    navbar={props => <CustomNavbar {...props} />}
    // menu={props => <CustomMenu {...props} />}
    // footer={props => <CustomFooter {...props} />}
    {...props}
  >
    {props.children}
  </Layout>
)

export default HorizontalLayout
