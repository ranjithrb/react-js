import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { apiCall } from './feature.store';
import { getAllCourses } from './feature.selectors';

function FeatureName() {
  const dispatch = useDispatch();

  const { details: { results = [] } = {} } = useSelector(({ FeatureStore }) =>
    getAllCourses(FeatureStore)
  );

  useEffect(() => {
    function getPosts() {
      dispatch(apiCall());
    }

    getPosts();
  }, [dispatch]);

  return (
    <div>
      Lists
      <hr />
      {results.map((r) => (
        <div key={r.id}>
          {r.id}
          {'. '}
          {r.title}
        </div>
      ))}
    </div>
  );
}

export default FeatureName;
