import { connect } from 'react-redux';
import TableContent from '../components/TableContent';
import { getFilteredBundles } from '../reducers';

const mapStateToProps = state => ({
  bundles: getFilteredBundles(state),
});

const TableBody = connect(mapStateToProps)(TableContent);

export default TableBody;
