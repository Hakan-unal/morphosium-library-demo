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


    const usersCollectionRef = collection(db, "users");







    const handleGetData = async () => {
        const temp = await getDocs(usersCollectionRef);
        const data = temp.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        setBooks(data.filter(val => !val.isAdmin));
        setLoading(false)
    }




    useEffect(() => {

        handleGetData()
    }, [])




    const columns = [
        {
            title: 'Kullanıcı Adı',
            dataIndex: 'username',
            key: 'name',
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