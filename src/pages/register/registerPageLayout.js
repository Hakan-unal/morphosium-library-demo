import React from 'react';
import RegisterPageContent from './registerPageContent';
import InlineLayout from '../../components/layout/InlineLayout';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setInlineRedux } from "../../redux/promodex/actions";



const RegisterPageLayout = (props) => {

    return (
        <InlineLayout page='RegisterPageContent' content={<RegisterPageContent />} />
    )

}

const mapState = (globalState) => {
    return { inlineInformation: globalState.inlineInformation };
};
export default connect(mapState, { setInlineRedux })(withRouter(RegisterPageLayout));
