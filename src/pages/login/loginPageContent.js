import { Button, Checkbox, Form, Input, Popover, Row, Col } from 'antd';
import React, { useEffect, useState } from 'react';
import { db } from "../../firebase-config";
import {
    collection,
    getDocs,
    getDoc
} from "firebase/firestore";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { showNotification } from '../../components/general/showNotification';
import { navigator } from "../../components/general/navigator"
import { useHistory } from "react-router-dom"

const LoginPageContent = () => {
    const usersCollectionRef = collection(db, "users");
    const history = useHistory()
    const [users, setUsers] = useState([]);

    const onFinish = (values) => {
        const user = users.filter(data => data.username === values.username && data.password === values.password && data.isAdmin === values.isAdmin)
        if (user.length !== 0) {
            navigator(history, "/")
            showNotification("success", "Hoşgeldin", user[0].username)

        } else showNotification("warning", "Bilgilendirme", "Kullanıcı bulunamadı")

    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const handleGetData = async () => {
        const data = await getDocs(usersCollectionRef);
        setUsers(data.docs.map((doc) => ({ ...doc.data(), key: doc.id })))
    }

    useEffect(() => {
        handleGetData()
    }, [])


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
                <Input prefix={<Popover content="admin için kullanıcı adı: admin"><AiOutlineExclamationCircle /></Popover>} />
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
                <Input.Password prefix={<Popover content="admin için şifre : 123456"><AiOutlineExclamationCircle /></Popover>} />

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