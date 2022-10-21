import React, { useEffect, useState } from 'react';
import { Layout, Row, Col, Image } from "antd";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setInlineRedux } from "../../redux/promodex/actions";
import Navbar from "./navbar.js"
import Footer from './footer';
import logo from "../../assets/images/test3.png";

import vk from "../../assets/svg/social media/vk.svg"
import pinterest from "../../assets/svg/social media/pinterest.svg"
import instagram from "../../assets/svg/social media/instagram.svg"
import twitter from "../../assets/svg/social media/twitter.svg"
import facebook from "../../assets/svg/social media/facebook.svg"



const InlineLayout = (props) => {
    const { Content } = Layout

    const smallScreen = {
        position: "absolute",
        left: - (window.innerWidth / 5),
        top: - (window.innerWidth / 2.9),
        width: (window.innerWidth * 1.25),
        height: (window.innerWidth)
    }

    const largeScreen = {
        position: "absolute",
        left: - (window.innerWidth / 5),
        top: - (window.innerWidth / 2.5),
        width: (window.innerWidth * 1.2),
        height: (window.innerWidth)
    }

    const [leftLineStyle, setLeftLineStyle] = useState(window.innerWidth > 1000 ? largeScreen : smallScreen)

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const updateWindowDimensions = () => {
            const newWidth = window.innerWidth;
            setWidth(newWidth);
            if (newWidth > 1000) {
                setLeftLineStyle({
                    position: "absolute",
                    left: - (window.innerWidth / 5),
                    top: - (window.innerWidth / 2.5),
                    width: (window.innerWidth * 1.2),
                    height: (window.innerWidth)
                })

            } else {
                setLeftLineStyle({
                    position: "absolute",
                    left: - (window.innerWidth / 5),
                    top: - (window.innerWidth / 2.9),
                    width: (window.innerWidth * 1.25),
                    height: (window.innerWidth)
                })

            }

        };

        window.addEventListener("resize", updateWindowDimensions);

        return () => window.removeEventListener("resize", updateWindowDimensions)

    }, []);


    return (
        <div >

            <Layout>

                <Layout className="site-layout-background" style={{ backgroundColor: "white" }}   >
                    <Content >
                        {props.content}
                    </Content>


                </Layout>

            </Layout>

        </div>
    );
}

const mapState = (globalState) => {
    return { inlineInformation: globalState.inlineInformation };
};
export default connect(mapState, { setInlineRedux })(withRouter(InlineLayout));