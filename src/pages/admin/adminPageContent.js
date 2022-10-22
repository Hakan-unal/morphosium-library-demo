import { Button, Checkbox, Form, Input, Popover, Row, Col } from 'antd';
import React, { useEffect, useState } from 'react';
import { db } from "../../firebase-config";
import {
    collection,
    getDocs,
    addDoc
} from "firebase/firestore";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { showNotification } from '../../components/general/showNotification';
import { navigator } from "../../components/general/navigator"
import { useHistory } from "react-router-dom"
import { useLocalStorage } from "../../components/hooks/useLocalStorage";

const LoginPageContent = () => {
    const usersCollectionRef = collection(db, "books");
    const history = useHistory()
    const [form] = Form.useForm();


    const onFinishFailed = (errorInfo) => {
        showNotification("warning", "Bilgilendirme", "Lütfen zorunlu alanları doldurunuz")
    };
    const onFinish = (values) => {
        addDoc(usersCollectionRef, values)
            .then((eee) => {
                showNotification("success", "Başarılı", "Yeni kitap oluşturuldu")
                form.resetFields()
            }).catch((err) => showNotification("error", "Hata", "Kayıt işlemi başarısız"))


    };





    return (<div>
        <p className='textCenter'>Kitap Girişi</p>
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
                label="Kitap Adı"
                name="name"
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
                label="Kitap Yazarı"
                name="author"
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
                label="Yayınevi"
                name="home"
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
                label="Basım Yılı"
                name="year"
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
                wrapperCol={{
                    offset: 14,
                    span: 2,
                }}
            >
                <Button type="primary" htmlType="submit" block>
                    Oluştur
                </Button>
            </Form.Item>
        </Form>

    </div>
    );
};
export default LoginPageContent;