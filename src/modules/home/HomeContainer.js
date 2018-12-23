import { connect } from 'react-redux';
import HomeComponent from './HomeComponent';

const mapStateToProps = state => {
    return state
};

const HomeContainer = connect(mapStateToProps)(HomeComponent);

export default HomeContainer;