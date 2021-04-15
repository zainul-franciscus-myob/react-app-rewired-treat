import React, { useEffect } from 'react';

const deprecated = (
  InnerComponent,
  msg = `${InnerComponent.name} is deprecated`
) => props => {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.warn(msg);
    }
  }, []);

  return <InnerComponent {...props} />;
};

export default deprecated;
