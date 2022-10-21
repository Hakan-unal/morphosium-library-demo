import React, { useState, useEffect } from "react";
import logo from "../../assets/images/test3.png";
import { Header } from "antd/es/layout/layout";
import { Link } from "react-router-dom";
import { Col, Image, Row, Button, Drawer } from "antd";
import { FiChevronRight } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai"

const Navbar = (props) => {

    const [width, setWidth] = useState(window.innerWidth);
    const [visible, setVisible] = useState(false);

    const onClose = () => {
        setVisible(false);
    };

    const showDrawer = () => {
        setVisible(true);
    };

    useEffect(() => {
        const updateWindowDimensions = () => {
            const newWidth = window.innerWidth;
            setWidth(newWidth);
        };

        window.addEventListener("resize", updateWindowDimensions);

        return () => window.removeEventListener("resize", updateWindowDimensions)

    }, []);
    return (
        <Header
            style={{
                padding: "24px 16px 0px 16px",
                backgroundColor: "white",
            }}
        >
            <Row align="middle" style={{ marginLeft: "10px" }} >
                <Col xs={6}>
                    <Link to="/">
                        <Image
                            width={width / 6}
                            preview={false}
                            src={logo}
                        />
                    </Link>
                </Col>
                {width > 665 ?
                    <>
                        <Col xs={{ span: 3 }} >
                            <Link to="/dashboard">
                                <span className="f16 ml_40 hOrange">Özellikler</span>
                            </Link>
                            <Link to="/dashboard">
                                <span className="f16 ml_40 hOrange">Fiyatlar</span>
                            </Link>
                            <Link to="/dashboard">
                                <span className="f16 ml_40 hOrange">Blog</span>
                            </Link>
                            <Link to="/dashboard">
                                <span className="f16 ml_40 hOrange">Hakkımızda</span>
                            </Link>
                        </Col>

                        <Col xs={{ span: 3, offset: 10 }} align="right">
                            <Link
                                to="/"
                                className=" shadow"
                            >
                                <Button size="large" block type="primary"><span className="f16">Giriş Yap <FiChevronRight /></span> </Button>

                            </Link>
                        </Col>
                    </>
                    :

                    <Col xs={{ span: 3, offset: 12 }} md={{ span: 3, offset: 10 }} align="right">
                        <Link
                            to="/"
                            className=""
                        >
                            <Button onClick={showDrawer} size="large" block type="primary"><span className="f16"> <AiOutlineMenu /></span> </Button>

                        </Link>
                    </Col>
                }
            </Row>

            <Drawer placement="right" onClose={onClose} visible={visible}>
                <Row>
                    <Col className="mt_20" xs={24} >
                        <Link to="/dashboard">
                            <span className="f32 ml_40 hOrange">Özellikler</span>
                        </Link>
                    </Col>
                    <Col className="mt_20" xs={24} >
                        <Link to="/dashboard">
                            <span className="f32 ml_40 hOrange">Fiyatlar</span>
                        </Link>
                    </Col>
                    <Col className="mt_20" xs={24} >
                        <Link to="/dashboard">
                            <span className="f32 ml_40 hOrange">Blog</span>
                        </Link>
                    </Col>
                    <Col className="mt_20" xs={24} >
                        <Link to="/dashboard">
                            <span className="f32 ml_40 hOrange">Hakkımızda</span>
                        </Link>
                    </Col>
                    <Col className="mt_20" xs={24} >
                        <Button size="large" className="ml_40"><span className="orange">Ücretsiz Deneyin</span> </Button>
                    </Col>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <Col className="mt_20" xs={24} >
                        <Button size="large" className="ml_40"><span className="orange">Giriş Yap</span> </Button>
                    </Col>
                </Row>
            </Drawer>
        </Header >
    );

}

export default Navbar;