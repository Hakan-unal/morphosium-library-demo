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
  doc,
  add
} from "firebase/firestore";


const LandingPageContent = (props) => {
  const [loading, setLoading] = useState(true)
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);
  const [users, setUsers] = useState([]);


  const usersCollectionRef = collection(db, "books");



  const createUser = async () => {
    await addDoc(usersCollectionRef, { name: newName, age: Number(newAge) });
    setNewName("")
    setNewAge(0)
    handleGetData()


  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, "test", id);
    await deleteDoc(userDoc);
    handleGetData()
  };

  const handleGetData = async () => {
    const data = await getDocs(usersCollectionRef);
    setUsers(data.docs.map((doc) => ({ ...doc.data(), key: doc.id })));
    setLoading(false)
  }




  useEffect(() => {

    handleGetData()
  }, [])




  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Year',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: (data) => <Button onClick={() => deleteUser(data.key)}>Delete</Button>,
    },

  ];


  return (
    <>
      <Row style={{ marginBottom: 50, marginTop: 50 }}>
        <Col sm={{ span: 6 }}>
          <Input onChange={(event) => setNewName(event.target.value)} value={newName} size='large'></Input>
        </Col>
        <Col sm={{ span: 6, offset: 2 }}>
          <Input type="number" onChange={(event) => setNewAge(event.target.value)} value={newAge} size='large'></Input>
        </Col>
        <Col sm={{ span: 4, offset: 4 }}>
          <Button onClick={() => createUser()} block size='large' shape="round">Create</Button>
        </Col>
      </Row>
      <Table loading={loading} dataSource={users} columns={columns} />;

    </>
  );
}

const mapState = (globalState) => {
  return { inlineInformation: globalState.inlineInformation };
};
export default connect(mapState, { setInlineRedux })(withRouter(LandingPageContent));
