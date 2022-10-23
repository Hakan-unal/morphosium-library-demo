import React from 'react';
import PublicPageContent from './publicPageContent';
import InlineLayout from '../../components/layout/InlineLayout';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setInlineRedux } from "../../redux/promodex/actions";



const PublicPageLayout = (props) => {

    return (
        <InlineLayout page='PublicPageContent' content={<PublicPageContent />} />
    )

}

const mapState = (globalState) => {
    return { inlineInformation: globalState.inlineInformation };
};
export default connect(mapState, { setInlineRedux })(withRouter(PublicPageLayout));