import React, { useEffect, useState } from 'react';
import { Layout, Menu } from "antd";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setInlineRedux } from "../../redux/promodex/actions";
import { useLocalStorage } from "../../components/hooks/useLocalStorage";
import { navigator } from "../../components/general/navigator"
import { useHistory } from "react-router-dom"




const InlineLayout = (props) => {

    const [collapsed, setCollapsed] = useState(false);

    const { Content, Sider } = Layout
    const [auth, setAuth] = useLocalStorage("auth", null)
    const history = useHistory()

    useEffect(() => {
        if (auth === null) navigator(history, "/login")
        else navigator(history, history?.location?.pathname)
    }, [auth])

    useEffect(() => {
        console.log(props.page)
    }, [props.page])





    return (
        <div >

            <Layout>
                {(props.page === "AdminPageContent" || props.page === "BookPageContent") &&
                    <Sider style={{
                        minHeight: '100vh',
                    }} collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
                        <Menu theme="dark" mode="inline" >
                            <Menu.Item key={1}>Kitap Listesi</Menu.Item>
                            <Menu.Item key={2}>Öğrenci Listesi</Menu.Item>
                            <Menu.Item key={3}>Çıkış</Menu.Item>

                        </Menu>
                    </Sider>
                }
                <Layout className="site-layout-background" style={{ backgroundColor: "white" }}   >

                    <Content >
                        {props.content}
                    </Content>


                </Layout>

            </Layout>

        </div >
    );
}

const mapState = (globalState) => {
    return { inlineInformation: globalState.inlineInformation };
};
export default connect(mapState, { setInlineRedux })(withRouter(InlineLayout));