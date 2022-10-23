import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setInlineRedux } from "../../redux/promodex/actions";
import { Link } from "react-router-dom";
import { Result } from 'antd';
import { navigator } from "../../components/general/navigator"
import { useLocalStorage } from "../../components/hooks/useLocalStorage";
import { useHistory } from "react-router-dom"

const Page404 = (props) => {
  const [auth, setAuth] = useLocalStorage("auth", null)

  const history = useHistory()


  useEffect(() => {
    if (auth === null) navigator(history, "/login")
    else navigator(history, "public")
  }, [])

  return (
    <Result
      status="404"
      title="404"
      subTitle="Sayfa Bulunamadı"
      extra={<Link to="/public" type="primary">Anasayfa'ya dönmek için tıklayın</Link>}
    />
  )
}


const mapState = (globalState) => {
  return { inlineInformation: globalState.inlineInformation };
};
export default connect(mapState, { setInlineRedux })(withRouter(Page404));
