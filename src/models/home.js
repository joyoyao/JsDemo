import { query, logout } from '../services/app'
import { routerRedux } from 'dva/router'
import { parse } from 'qs'
import { config } from '../utils'
const { prefix } = config
import cookies from 'js-cookie';

export default {
  namespace: 'home',
  state: {
    user: {username:cookies.get("username")!=null?cookies.get("username"):""},
    isLogin:cookies.get("token")!=null?true:false,
  },

}
