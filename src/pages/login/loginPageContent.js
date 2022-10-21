import { Button, Checkbox, Form, Input, Popover, Row, Col } from 'antd';
import React from 'react';
import { db } from "../../firebase-config";
import {
    collection,
    getDocs,
    addDoc,
    deleteDoc,
    doc,
} from "firebase/firestore";
import { AiOutlineExclamationCircle } from "react-icons/ai";


const LoginPageContent = () => {
    const usersCollectionRef = collection(db, "test2");


    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    return (
        <Form
            name="basic"
            labelCol={{ span: 2, offset: 6 }}
            wrapperCol={{ span: 6, offset: 2 }}
            initialValues={{ isAdmin: false, }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input suffix={<Popover content="admin için kullanıcı adı: admin"><AiOutlineExclamationCircle /></Popover>} />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input.Password />
            </Form.Item>
            <Row>
                <Col xs={{ span: 2, offset: 12 }}>
                    <Form.Item
                        name="isAdmin"
                        valuePropName="checked"

                    >
                        <Checkbox>Admin</Checkbox>
                    </Form.Item>
                </Col>
                <Col xs={{ span: 6 }}>

                    <Form.Item

                    >
                        <Button type="primary" htmlType="submit" block>
                            Giriş
                        </Button>
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    );
};
export default LoginPageContent;