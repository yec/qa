import React from 'react';
import {
  QueryRenderer,
  createFragmentContainer,
  graphql
} from 'react-relay';

import styled, { css } from 'styled-components';

import environment from '../Environment'

import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';


const Heading = styled.div`
  font-size: 1.5rem;
  padding: 1.5rem;
  border-bottom: 1px solid #eeeeee;
`;

const Body = styled.div`
  display: block;
`;

const Card = styled.div`
  background-color: white;
  border-radius: 3px;
  box-shadow: 0 0 1px 0px rgba(0,0,0,.1);
`;

const Item = styled.div`
  padding: 1.5rem;
  a {
    color: inherit;
  }

  ${props => props.active && css`
    a {
      color: #e40000;
    }
  `}
`;

class ListFaq extends React.Component {
  render () {
    return (
      <Card>
        <Heading>FAQS</Heading>
        <Body>
        {this.props.viewer.allSnippets.edges.map(({node}) =>
          <Item active={node.id == this.props.match.params.id} key={node.id}>
            <Link to={'/faqs/' + node.id} >
              {node.title}
            </Link>
          </Item>
        )}
        </Body>
      </Card>
    )
  }
}

export default withRouter(createFragmentContainer(ListFaq, graphql`
  fragment ListFaq_viewer on Viewer {
    allSnippets(last: 100, orderBy: id_DESC) @connection(key: "ListFaq_allSnippets", filters: []) {
      edges {
        node {
          id
          title
          body
        }
      }
    }
  }
`));
