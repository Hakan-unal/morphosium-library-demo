import React, { useEffect, useState } from 'react';
import AdminPageContent from './adminPageContent';
import InlineLayout from '../../components/layout/InlineLayout';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setInlineRedux } from "../../redux/promodex/actions";



const AdminPageLayout = (props) => {
    return (
        <InlineLayout page='AdminPageContent' content={<AdminPageContent />} />
    )

}

const mapState = (globalState) => {
    return { inlineInformation: globalState.inlineInformation };
};
export default connect(mapState, { setInlineRedux })(withRouter(AdminPageLayout));
