import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { config } from '../../utils'
import styles from './index.less'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;
import {
  Link
} from 'dva/router'

const NormalLoginForm = ({
  login,
  dispatch,
  form: {
    getFieldDecorator,
    validateFields,
  },
}) => {
  const { loginLoading } = login



  function handleSubmit (e) {
        e.preventDefault();

    validateFields((errors, values) => {
      if (errors) {
        return
      }
      dispatch({ type: 'login/login', payload: values })
    })
  }

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   this.props.form.validateFields((err, values) => {
  //     if (!err) {
  //       console.log('Received values of form: ', values);
  //     }
  //   });
  // }

  return (
         <Form onSubmit={handleSubmit} className={styles.form}>
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <a className={styles.loginforgot} href="">Forgot password</a>
          <Button type="primary" htmlType="submit" className={styles.loginbutton} loading={loginLoading}>
           登陆
          </Button>
          Or <Link to="/register">注册</Link>
        </FormItem>
      </Form>
  )
}

NormalLoginForm.propTypes = {
  form: PropTypes.object,
  login: PropTypes.object,
  dispatch: PropTypes.func,
}

export default connect(({ login }) => ({ login }))(Form.create()(NormalLoginForm))
