import { connect } from 'react-redux';
import ContractsComponent from './ContractsComponent';
import requireAuthenticated from '@common/hocs/requireAuthenticated'

const mapStateToProps = state => {
    return {
        contracts: state.global.contracts
    }
}

const ContractsContainer = connect(mapStateToProps)(requireAuthenticated(ContractsComponent))

export default ContractsContainer;