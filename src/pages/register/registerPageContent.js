import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Form, Input, Row, Col, Divider } from 'antd';
import { db } from "../../firebase-config";
import {
    collection,
    getDocs,
    addDoc,
    deleteDoc,
    doc,
} from "firebase/firestore";
import { showNotification } from "../../components/general/showNotification"
import { navigator } from "../../components/general/navigator"
import { useHistory } from "react-router-dom"

const RegisterPageContent = () => {
    const usersCollectionRef = collection(db, "users");
    const [form] = Form.useForm();
    const history = useHistory()

    const onFinish = async (values) => {
        addDoc(usersCollectionRef, { ...values, isAdmin: false })
            .then(() => {
                showNotification("success", "Başarılı", "Kayıt işlemi başarılı (Hoşgeldin " + values.username + ")")
                navigator(history, "/login")
            }).catch((err) => showNotification("error", "Hata", "Kayıt işlemi başarısız"))

    };
    const onFinishFailed = (errorInfo) => {
        showNotification("warning", "Bilgilendirme", "Lütfen zorunlu alanları doldurunuz")
    };



    return (<>
        <p className='textCenter'>Kayıt Ekranı</p>
        <Form
            form={form}
            name="basic"
            labelCol={{ span: 2, offset: 6 }}
            wrapperCol={{ span: 6, offset: 2 }}
            initialValues={{ remember: true, }}
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
                <Input allowClear />
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
                <Input.Password allowClear />
            </Form.Item>


            <Form.Item
                wrapperCol={{
                    offset: 14,
                    span: 2,
                }}
            >
                <Button type="primary" htmlType="submit" block>
                    Kayıt Ol
                </Button>
            </Form.Item>
        </Form>
    </>
    );
};
export default RegisterPageContent;