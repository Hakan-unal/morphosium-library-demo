import React from 'react';
import StudentPageContent from './studentPageContent';
import InlineLayout from '../../components/layout/InlineLayout';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setInlineRedux } from "../../redux/promodex/actions";



const StudentPageLayout = (props) => {

    return (
        <InlineLayout page='BookPageContent' content={<StudentPageContent />} />
    )

}

const mapState = (globalState) => {
    return { inlineInformation: globalState.inlineInformation };
};
export default connect(mapState, { setInlineRedux })(withRouter(StudentPageLayout));