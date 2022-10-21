import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setInlineRedux } from "../../redux/promodex/actions";
import { Link } from "react-router-dom";
import { Result } from 'antd';

const Page404 = (props) => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sayfa Bulunamadı"
      extra={<Link to="/" type="primary">Anasayfa'ya dönmek için tıklayın</Link>}
    />
  )
}


const mapState = (globalState) => {
  return { inlineInformation: globalState.inlineInformation };
};
export default connect(mapState, { setInlineRedux })(withRouter(Page404));
