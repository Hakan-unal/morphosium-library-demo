import React from 'react';
import LoginPageContent from './loginPageContent';
import InlineLayout from '../../components/layout/InlineLayout';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setInlineRedux } from "../../redux/promodex/actions";



const LoginPageLayout = (props) => {

    return (
        <InlineLayout page='LoginPageContent' content={<LoginPageContent />} />
    )

}

const mapState = (globalState) => {
    return { inlineInformation: globalState.inlineInformation };
};
export default connect(mapState, { setInlineRedux })(withRouter(LoginPageLayout));
