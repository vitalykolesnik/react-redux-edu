import React from 'react';
import { connect } from 'react-redux';
import { getIsAuth, getUserName } from '../../redux/authSelectors';
import Header from './Header';

class HeaderContainer extends React.Component {
    render() {
        const { isAuth, userName } = this.props;
        return <Header isAuth={isAuth} userName={userName} />;
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: getIsAuth(state),
        userName: getUserName(state),
    };
};

export default connect(mapStateToProps, {})(HeaderContainer);
