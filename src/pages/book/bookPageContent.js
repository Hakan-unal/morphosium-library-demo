import React, { useEffect, useState } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setInlineRedux } from "../../redux/promodex/actions";
import { Row, Col, Button, Table } from "antd"

import { db } from "../../firebase-config";
import {
    collection,
    getDocs,
    deleteDoc,
    doc
} from "firebase/firestore";


const BookPageContent = (props) => {
    const [loading, setLoading] = useState(true)
    const [books, setBooks] = useState([]);
    const [borrows, setBorrows] = useState([]);


    const booksCollectionRef = collection(db, "books");
    const borrowsCollectionRef = collection(db, "borrow");




    const deleteUser = async (id) => {
        const userDoc = doc(db, "books", id);
        await deleteDoc(userDoc);
        handleGetData()
    };

    const handleGetData = async () => {
        const data = await getDocs(booksCollectionRef);
        const data1 = await getDocs(borrowsCollectionRef);

        setBooks(data.docs.map((doc) => ({ ...doc.data(), key: doc.id })));
        setBorrows(data1.docs.map((doc) => ({ ...doc.data(), key: doc.id })));

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
            title: 'İşlem',
            dataIndex: 'id',
            key: 'id',
            render: (data) => <Button onClick={() => deleteUser(data.id)}>Delete</Button>,
        },

    ];

    const columns1 = [
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
            title: 'Ödünç Alan',
            dataIndex: 'user',
            key: 'user',
        },


    ];


    return (
        <>
            <Row>
                <Col xs={10}>
                    <p>Kitap Listesi</p>
                    <Table loading={loading} dataSource={books} columns={columns} />
                </Col>
                <Col xs={{ offset: 3, span: 10 }}>
                    <p>Ödünç Alınan Kitap Listesi</p>
                    <Table loading={loading} dataSource={borrows} columns={columns1} />
                </Col>
            </Row>
        </>
    );
}

const mapState = (globalState) => {
    return { inlineInformation: globalState.inlineInformation };
};
export default connect(mapState, { setInlineRedux })(withRouter(BookPageContent));
