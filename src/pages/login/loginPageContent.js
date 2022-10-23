import { Button, Checkbox, Form, Input, Popover, Row, Col } from 'antd';
import React, { useEffect, useState } from 'react';
import { db } from "../../firebase-config";
import {
    collection,
    getDocs,
} from "firebase/firestore";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { showNotification } from '../../components/general/showNotification';
import { navigator } from "../../components/general/navigator"
import { useHistory } from "react-router-dom"
import { useLocalStorage } from "../../components/hooks/useLocalStorage";

const LoginPageContent = () => {
    const usersCollectionRef = collection(db, "users");
    const history = useHistory()
    const [users, setUsers] = useState([]);
    const [auth, setAuth] = useLocalStorage("auth", null)

    const onFinish = (values) => {

        const user = users.filter(data => (data.username === values.username) && (data.password === values.password))

        if (user.length !== 0) {
            setAuth(user[0])
            showNotification("success", "Hoşgeldin", user[0].username)
            navigator(history, user[0].isAdmin ? "admin" : "public")

        } else showNotification("warning", "Bilgilendirme", "Kullanıcı bulunamadı")

    };
    const onFinishFailed = (errorInfo) => {
        showNotification("warning", "Bilgilendirme", "Lütfen zorunlu alanları doldurunuz")
    };

    const handleGetData = async () => {
        const data = await getDocs(usersCollectionRef);
        setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    useEffect(() => {
        handleGetData()
    }, [])

    useEffect(() => {
        if (auth === null) navigator(history, "/login")
        else navigator(history, "public")
    }, [auth])


    return (<>        <p className='textCenter'>Giriş Ekranı</p>

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
                label="Kullanıcı Adı"
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Lütfen kullanıcı adı giriniz',
                    },
                ]}
            >
                <Input prefix={<Popover content="admin için kullanıcı adı: test"><AiOutlineExclamationCircle /></Popover>} />
            </Form.Item>

            <Form.Item
                label="Şifre"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Lütfen şifrenizi giriniz',
                    },
                ]}
            >
                <Input.Password prefix={<Popover content="admin için şifre : test"><AiOutlineExclamationCircle /></Popover>} />

            </Form.Item>


            <Form.Item
                wrapperCol={{ offset: 14, span: 2 }}

            >
                <Button type="primary" htmlType="submit" block>
                    Giriş
                </Button>
            </Form.Item>
            <Form.Item
                wrapperCol={{ offset: 14, span: 2 }}

            >
                <Button type="primary" onClick={() => navigator(history, "register")} block>
                    Kayıt Ol
                </Button>
            </Form.Item>
        </Form>
    </>
    );
};
export default LoginPageContent;