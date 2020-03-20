import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ItemsContainer from '../../common/components/ItemsContainer';

export function Requisitions(props) {
  const { requisitions } = props;
  return <ItemsContainer stateName="requisitions" items={requisitions} />;
}
Requisitions.propTypes = {
  requisitions: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({ requisitions: state.requisitions.data });
export default connect(mapStateToProps, null)(Requisitions);
