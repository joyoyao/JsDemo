import { login ,register} from '../services/login'
import { routerRedux } from 'dva/router'
import { queryURL } from '../utils'
import cookies from 'js-cookie';
import { message } from 'antd'

export default {
  namespace: 'password',
  state: {
    passwordLoading: false,
  },

  effects: {
    *login ({
      payload,
    }, { put, call }) {
      yield put({ type: 'showLoginLoading' })
            console.log("111")

            console.log("payloadlogin"+payload)

      const data = yield call(login, payload)
      yield put({ type: 'hideLoginLoading' })

         console.log("222"+JSON.stringify(data))

      if (data.success) {

        cookies.set("token", data.data.access_token, { expires: data.data.expires });
        cookies.set("username", data.data.username);

         yield put(routerRedux.push('/'))

 
         // const from = queryURL('from')
        // yield put({ type: 'app/query' })
        // if (from) {
        //   yield put(routerRedux.push(from))
        // } else {
        //   yield put(routerRedux.push('/dashboard'))
        // }

      //  cookies.add(cookies.get('userid'));
        // cookies.add(cookies.get('username'));
       message.success("登陆成功，请登录！")

      } else {
       message.success("登陆失败")

        // throw data
      }
    },
    *register ({
      payload,
    }, { put, call }) {
      yield put({ type: 'showLoginLoading' })
      console.log("payload"+payload)
      const data = yield call(register, payload)
      yield put({ type: 'hideLoginLoading' })
      if (data.success) {
        // cookies.remove(cookies.get('userid'));
        // cookies.remove(cookies.get('userid'));
        cookies.remove("token");
        message.success("注册成功，请登录！")
        yield put(routerRedux.push('/login'))
        // const from = queryURL('from')
        // yield put({ type: 'app/query' })
        // if (from) {
        //   yield put(routerRedux.push(from))
        // } else {
        //   yield put(routerRedux.push('/dashboard'))
        // }
      } else {

           message.warn(""+data)

        // throw data
      }
    },
  },
  reducers: {
    showLoginLoading (state) {
      return {
        ...state,
        passwordLoading: true,
      }
    },
    hideLoginLoading (state) {
      return {
        ...state,
        passwordLoading: false,
      }
    },
  },
}
