import { connect } from 'react-redux';
import ContractsComponent from './ContractsComponent';

const mapStateToProps = state => {
    return state
};

const ContractsContainer = connect(mapStateToProps)(ContractsComponent);

export default ContractsContainer;