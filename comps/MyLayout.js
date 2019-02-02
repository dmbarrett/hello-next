import Header from './Header'

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
}

const Layout = (props) => (
    <div style={layoutStyle}>
        <Header />
        {props.children}
    </div>
)

export default Layout

//This is just one way to create a Layout component. Here are some other methods of creating a Layout component:

//import withLayout from '../lib/layout'
//const Page = () => (
//    <p>This is the about page</p>
//  )
//  export default withLayout(Page)

//const Page = () => (
//  <p>This is the about page</p>
//)
//export default () => (<Layout page={Page}/>)

//const content = (<p>This is the about page</p>)
//export default () => (<Layout content={content}/>)