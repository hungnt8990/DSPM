import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginAsync } from '../../actions/LOGIN/LoginAction';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

const FormItem = Form.Item;

class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleSubmit = (e) => {
        console.log(this.props);
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.loginAsync(values.username, values.password);
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div style={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
                {this.props.loggedInUser && <Redirect to="/" />}
                <Form onSubmit={this.handleSubmit} style={{ maxWidth: 300 }}>
                    <FormItem>
                        {
                            getFieldDecorator('username', {
                                rules: [
                                    { required: true, message: 'Please input your username!' }
                                ],
                            })(<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />)
                        }
                    </FormItem>
                    <FormItem>
                        {
                            getFieldDecorator('password', { rules: [{ required: true, message: 'Please input your password!' }], })(
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                            )
                        }
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox>Remember me</Checkbox>
                        )}
                        <a href="" style={{ float: 'right' }}>Forgot password</a>
                        <Button loading={this.props.loading} icon="login" type="primary" htmlType="submit" style={{ width: '100%' }} >
                            Log in
                        </Button>
                    </FormItem>
                </Form>
            </div>
        );
    }
}

const loginForm = Form.create()(LoginComponent);

const mapStateToProps = (state) => ({
    user: state.LoginReducer.user,
    loading: state.LoginReducer.loading
});

const mapDispatchToProps = (dispatch) => ({
    loginAsync: (username, password) => dispatch(loginAsync(username, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(loginForm);