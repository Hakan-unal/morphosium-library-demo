import React, { useEffect } from 'react';
import { Layout } from "antd";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setInlineRedux } from "../../redux/promodex/actions";
import { useLocalStorage } from "../../components/hooks/useLocalStorage";
import { navigator } from "../../components/general/navigator"
import { useHistory } from "react-router-dom"




const InlineLayout = (props) => {
    const { Content } = Layout
    const [auth, setAuth] = useLocalStorage("auth", null)
    const history = useHistory()

    useEffect(() => {
        console.log()
        if (auth === null) navigator(history, "/login")
        else navigator(history, "/")
    }, [auth])





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