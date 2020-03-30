import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Loader from '../../common/components/Loader';
import { fetchResources } from '../../common/storeLogic/actions';

const SingleRequisitionView = () => {
  const params = useParams;
  const dispatch = useDispatch();
  const { requisition, isFetching } = useSelector(
    (state) => state.singleRequisition,
  );

  useEffect(() => {
    dispatch(
      fetchResources('singleRequisition', `/requisitions/${params.id}`, {
        id: params.id,
      }),
    );
  }, [params.id, dispatch]);

  if (isFetching) {
    return <Loader />;
  }
  return <>{JSON.stringify(requisition)}</>;
};

export default SingleRequisitionView;
