import React, { useEffect, useState } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setInlineRedux } from "../../redux/promodex/actions";
import { Row, Col, Button, Input, Table } from "antd"

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


    const usersCollectionRef = collection(db, "books");



    const createUser = async () => {
        await addDoc(usersCollectionRef, { name: newName, age: Number(newAge) });
        setNewName("")
        setNewAge(0)
        handleGetData()


    };

    const deleteUser = async (id) => {
        const userDoc = doc(db, "books", id);
        await deleteDoc(userDoc);
        handleGetData()
    };

    const handleGetData = async () => {
        const data = await getDocs(usersCollectionRef);
        setBooks(data.docs.map((doc) => ({ ...doc.data(), key: doc.id })));
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
            title: 'Year',
            dataIndex: 'year',
            key: 'year',
        },
        {
            title: 'Action',
            dataIndex: 'id',
            key: 'id',
            render: (data) => <Button onClick={() => deleteUser(data.id)}>Delete</Button>,
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
