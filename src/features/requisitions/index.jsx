import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Table from '../../common/components/Table';
import { fetchResources } from '../../common/storeLogic/actions';
import Loader from '../../common/components/Loader';
import { InlineError } from '../../common/components/Error';

export default function Requisitions() {
  const { data, isFetching, fetchError } = useSelector(
    (state) => state.requisitions,
  );
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const history = useHistory();

  const columns = [
    { key: 'number', displayName: '#', isFilterable: true, isSearchable: true },
    {
      key: 'short_id',
      displayName: 'id',
      isFilterable: true,
      isSearchable: true,
    },
    {
      key: 'title',
      displayName: 'summary',
      isFilterable: true,
      isSearchable: true,
    },
    {
      key: 'amount',
      displayName: 'amount (KES)',
      isFilterable: true,
      isSearchable: true,
    },
    {
      key: 'approvals',
      displayName: 'approvals',
      isFilterable: true,
      isSearchable: true,
    },
    {
      key: 'createdAt',
      displayName: 'date created',
      isFilterable: true,
      isSearchable: true,
    },
  ];

  const dataSource = data.map((req) => ({
    number: data.indexOf(req) + 1,
    id: req.id,
    short_id: String(req.id).slice(0, 8),
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
    createdAt: req.createdAt,
    updatedAt: req.updatedAt,
  }));

  const actions = [
    {
      key: 'view',
      value: 'Details',
      onClick: (requisition) => {
        history.push(`/manage/resources/requisitions/${requisition.id}/edit`);
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
