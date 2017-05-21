import Content0 from './Content0';
import Content1 from './Content1';
import { connect } from 'dva'


// const Content = () =>{


//   return (
//       <div>true
//     </div>
//   )

// }

const Content = () => (
   <div>
     <Content0 id="content_10_0" key="content_10_0" isMode={true}/>
     <Content1 id="content_9_0" key="content_9_0" isMode={true}/>
    </div>
)


export default connect()(Content)

