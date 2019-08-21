import React, { ComponentType } from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';

interface IDefaultProps {
  layout: ComponentType;
  component: ComponentType<RouteComponentProps>;
  path?: string;
  exact?: boolean;
}

const LayoutRoute: React.FC<IDefaultProps> = ({
  layout: Layout,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(matchProps: any) => (
        <Layout>
          <Component {...matchProps} />
        </Layout>
      )}
    />
  );
};

export default LayoutRoute;
