import React from 'react';
import {
  QueryRenderer,
  graphql
} from 'react-relay';

import ListFaq from './ListFaq';

const FaqsQuery = graphql`
  query FaqsQuery {
    viewer {
      ...ListFaq_viewer
    }
  }
`;

export default ({match, environment}) => {
  return (
    <QueryRenderer
      dataFrom="STORE_THEN_NETWORK"
      environment={environment}
      query={FaqsQuery}
      render={({error, props}) => {
        if (error) {
          return <div>{error.message}</div>
        } else if (props) {
          return <ListFaq match={match} viewer={props.viewer} />
        }
        return <div></div>
      }}
    />
  );
};
