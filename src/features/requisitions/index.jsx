import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { InlineError } from '../../common/components/Error';
import Loader from '../../common/components/Loader';
import Table from '../../common/components/Table';
import { fetchResources } from '../../common/storeLogic/actions';

/**
 * @description The Requisitions view
 * @return {JSX}
 */
export default function Requisitions() {
  const { data, isFetching, fetchError } = useSelector(
    (state) => state.requisitions,
    shallowEqual,
  );
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const history = useHistory();

  const columns = [
    {
      key: 'short_id',
      displayName: '#',
      isFilterable: true,
      isSortable: true,
    },
    {
      key: 'createdAt',
      displayName: 'Created',
      isFilterable: true,
      isSortable: true,
    },
    // {
    //   key: 'updatedAt',
    //   displayName: 'Updated',
    //   isFilterable: true,
    //   isSortable: true,
    // },
    {
      key: 'title',
      displayName: 'summary',
      isFilterable: true,
      isSortable: true,
    },
    {
      key: 'amount',
      displayName: 'amount',
      isFilterable: true,
      isSortable: true,
    },
    {
      key: 'approvals',
      displayName: 'Status',
      isFilterable: true,
      isSortable: true,
    },
  ];

  const dataSource = data.map((req) => ({
    id: req.id,
    short_id: String(req.id).slice(0),
    title: req.title,
    amount: req.amount,
    approvals: req.approvals
      .filter((apr) => apr.name === user.reportsTo)
      .map((approval) => ({
        id: approval.id,
        name: approval.name,
        role: approval.role,
        status: approval.status,
        createdAt: approval.createdAt,
      })),
    createdAt: new Date(req.createdAt).toLocaleString('en-ke'),
    updatedAt: new Date(req.updatedAt).toLocaleString('en-ke'),
  }));

  const actions = [
    {
      key: 'view',
      value: 'View',
      onClick: (requisition) => {
        history.push(`/requisitions/${requisition.id}/edit`);
      },
    },
    {
      key: 'archive',
      value: 'archive',
      onClick: (requisition) => {
        console.log(requisition);
      },
    },
  ];

  React.useEffect(() => {
    dispatch(fetchResources('requisitions', '/requisitions'));
  }, [dispatch]);

  if (isFetching) {
    return <Loader />;
  }
  if (fetchError) {
    return <InlineError category="requisitions" error={fetchError} />;
  }
  return (
    <Table
      stateName="requisitions"
      dataSource={dataSource}
      columns={columns}
      actions={actions}
    />
  );
}
