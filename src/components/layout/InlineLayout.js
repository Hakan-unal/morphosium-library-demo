import React, { useEffect, useState } from 'react';
import { Layout, Menu } from "antd";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setInlineRedux } from "../../redux/promodex/actions";
import { useLocalStorage } from "../../components/hooks/useLocalStorage";
import { navigator } from "../../components/general/navigator"
import { useHistory } from "react-router-dom"
import { showNotification } from '../../components/general/showNotification';
import { useTranslation, withTranslation, Trans } from 'react-i18next';




const InlineLayout = (props) => {
    // const { t } = this.props;

    const [collapsed, setCollapsed] = useState(false);

    const { Content, Sider } = Layout
    const [auth, setAuth] = useLocalStorage("auth", null)
    const history = useHistory()


    const logout = () => {
        setAuth(null)
        showNotification("success", "Başarılı", "Çıkış yaptınız")
    }
    const navigation = (val) => {
        navigator(history, val === 1 ? "/book" : val === 2 ? "/admin" : "/student")
    }
    useEffect(() => {
        if (auth === null) console.log("test")
        else navigator(history, history?.location?.pathname)
    }, [auth])







    return (
        <div >

            <Layout>
                {auth?.isAdmin &&
                    <Sider style={{
                        minHeight: '100vh',
                    }} collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
                        <Menu theme="dark" mode="inline" >
                            <Menu.Item onClick={() => navigation(1)} key={1}>Kitap Listesi</Menu.Item>
                            <Menu.Item onClick={() => navigation(2)} key={2}>Kitap Ekle</Menu.Item>
                            <Menu.Item onClick={() => navigation(3)} key={3}>Öğrenci Listesi</Menu.Item>
                            <Menu.Item onClick={() => logout()} key={4}>Çıkış</Menu.Item>

                        </Menu>
                    </Sider>
                }
                {auth?.isAdmin === false &&
                    <Sider style={{
                        minHeight: '100vh',
                    }} collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
                        <Menu theme="dark" mode="inline" >
                            <Menu.Item onClick={() => logout()} key={4}>Çıkış</Menu.Item>

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