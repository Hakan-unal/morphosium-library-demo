import React, { useState, useEffect } from "react";
import logo from "../../assets/images/test3.png";
import { Footer } from "antd/es/layout/layout";
import { Link } from "react-router-dom";
import { Col, Row } from "antd";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setInlineRedux } from "../../redux/promodex/actions";

const LayFooter = (props) => {


    return (
        <Footer className="mt_50 gradientColor">
            <Row>
                <Col sm={6}>
                    <p className="f16 white">Registify</p>
                    <p className="f8 white">Özellikler</p>
                    <p className="f8 white">Nasıl Çalışır</p>
                    <p className="f8 white">Sıkça Sorunlan Sorular</p>
                    <p className="f8 white">Sözleşmeler ve Politikalar</p>
                </Col>
                <Col sm={6}>
                    <p className="f16 white">Hakkımızda</p>
                    <p className="f8 white">Biz Kimiz?</p>
                    <p className="f8 white">Destek</p>
                    <p className="f8 white">İletişim</p>

                </Col>
                <Col sm={6}>
                    <p className="f16 white">Takip Edin</p>
                    <p className="f8 white">Twitter</p>
                    <p className="f8 white">Linkedln</p>
                    <p className="f8 white">Youtube</p>
                    <p className="f8 white">API</p>

                </Col>
            </Row>
        </Footer>
    );

}



const mapState = (globalState) => {
    return { inlineInformation: globalState.inlineInformation };
};
export default connect(mapState, { setInlineRedux })(withRouter(LayFooter));
