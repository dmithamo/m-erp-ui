import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Table from '../../common/components/Table';
import { fetchResources } from '../../common/storeLogic/actions';

export function Requisitions(props) {
  const { requisitions, fetchRequisitions } = props;

  const columns = [
    { key: 'number', displayName: '#', isFilterable: true, isSearchable: true },
    { key: 'id', displayName: 'id', isFilterable: true, isSearchable: true },
    {
      key: 'title',
      displayName: 'summary',
      isFilterable: true,
      isSearchable: true,
    },
    {
      key: 'amount',
      displayName: 'amount',
      isFilterable: true,
      isSearchable: true,
    },
    {
      key: 'approvals',
      displayName: 'approvals',
      isFilterable: true,
      isSearchable: true,
      details: [
        { key: 'name', displayName: 'by' },
        { key: 'role', displayName: 'role' },
      ],
    },
    {
      key: 'createdAt',
      displayName: 'date created',
      isFilterable: true,
      isSearchable: true,
    },
    {
      key: 'updatedAt',
      displayName: 'last reviewed',
      isFilterable: true,
      isSearchable: true,
    },
  ];

  const dataSource = requisitions.map((req) => ({
    number: requisitions.indexOf(req) + 1,
    id: req.id,
    title: req.title,
    amount: req.amount,
    approvals: req.approvals.map((approval) => ({
      name: approval.name,
      role: approval.role,
      status: approval.status,
    })),
    createdAt: req.createdAt,
    updatedAt: req.updatedAt,
  }));

  React.useEffect(() => {
    fetchRequisitions();
  }, [fetchRequisitions]);

  return (
    <Table stateName="requisitions" dataSource={dataSource} columns={columns} />
  );
}
Requisitions.propTypes = {
  requisitions: PropTypes.array.isRequired,
  fetchRequisitions: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({ requisitions: state.requisitions.data });
const mapDispatchToProps = (dispatch) => ({
  fetchRequisitions: () =>
    dispatch(fetchResources('requisitions', '/requisitions')),
});
export default connect(mapStateToProps, mapDispatchToProps)(Requisitions);
