import React, { lazy, Suspense } from 'react';

const LazyParallex = lazy(() => import('./Parallex'));

const Parallex = props => (
  <Suspense fallback={null}>
    <LazyParallex {...props} />
  </Suspense>
);

export default Parallex;
