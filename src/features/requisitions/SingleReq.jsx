import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Loader from '../../common/components/Loader';
import { fetchResources } from '../../common/storeLogic/actions';

const SingleRequisitionView = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { data: requisition, isFetching } = useSelector(
    (state) => state.requisition,
    shallowEqual,
  );

  useEffect(() => {
    console.log(requisition);
    dispatch(
      fetchResources('requisition', `/requisitions/${params.id}`, {
        id: params.id,
      }),
    );
  }, [params.id, dispatch]);

  if (isFetching) {
    return <Loader />;
  }
  return (
    <div>
      {Object.entries(requisition).map(([key, value]) => (
        <p key={key}>
          <strong>{key}</strong>:<span>{JSON.stringify(value)}</span>
        </p>
      ))}
    </div>
  );
};

export default SingleRequisitionView;
