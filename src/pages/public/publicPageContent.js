import React, { useEffect, useState } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setInlineRedux } from "../../redux/promodex/actions";
import { Button, Table } from "antd"
import { useLocalStorage } from "../../components/hooks/useLocalStorage";
import { showNotification } from '../../components/general/showNotification';

import { db } from "../../firebase-config";
import {
    collection,
    getDocs,
    addDoc,
    deleteDoc,
    doc
} from "firebase/firestore";


const BookPageContent = (props) => {
    const [loading, setLoading] = useState(true)
    const [newName, setNewName] = useState("");
    const [newAge, setNewAge] = useState(0);
    const [books, setBooks] = useState([]);
    const [auth, setAuth] = useLocalStorage("auth", null)


    const booksCollectionRef = collection(db, "books");
    const borrowsCollectionRef = collection(db, "borrow");



    const createUser = async (data) => {
        await addDoc(borrowsCollectionRef, { ...data, user: auth.id });
        setNewName("")
        setNewAge(0)
        handleGetData()


    };

    const deleteUser = async (data) => {
        const userDoc = doc(db, "books", data.id);
        createUser(data)
        await deleteDoc(userDoc);
        showNotification("success", "Başarılı", "Kitabı ödünç aldınız")
        handleGetData()
    };

    const handleGetData = async () => {
        const data = await getDocs(booksCollectionRef);
        setBooks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id, key: doc.id })));
        setLoading(false)
    }




    useEffect(() => {

        handleGetData()
    }, [])




    const columns = [
        {
            title: 'Kitap Adı',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Kitap Yazarı',
            dataIndex: 'author',
            key: 'author',
        },
        {
            title: 'Yayınevi',
            dataIndex: 'home',
            key: 'home',
        },
        {
            title: 'Yıl',
            dataIndex: 'year',
            key: 'year',
        },
        {
            title: 'İşlem',
            key: 'action',
            render: data => <Button onClick={() => deleteUser(data)}>Ödünç Al</Button>,
        },

    ];


    return (
        <>

            <Table loading={loading} dataSource={books} columns={columns} />;

        </>
    );
}

const mapState = (globalState) => {
    return { inlineInformation: globalState.inlineInformation };
};
export default connect(mapState, { setInlineRedux })(withRouter(BookPageContent));