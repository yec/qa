import React from 'react';
import {
  QueryRenderer,
  createFragmentContainer,
  graphql
} from 'react-relay';

import styled, { css } from 'styled-components';

import environment from '../Environment'

import { Link } from 'react-router-dom';

import ListFaq from './ListFaq';

const Background = styled.div`
  background-color: rgb(248, 248, 248);
  padding: 1rem;

  @media (min-width: 769px) {
    padding: 2rem;
  }
`;

const Heading = styled.div`
  font-size: 1.75rem;
  padding: 2rem;

  @media (min-width: 769px) {
    &:before {
      display: block;
      top: 0;
      left: 0;
      width: 40px;
      height: 4px;
      background-color: #e40000;
      content: '';
      margin-bottom: 1.5rem;
    }
  }
`;

const Divider = styled.div`
  height: 1px;
  background-color: #eeeeee;
  margin: 0 2rem;
`;

const SubHeading = styled.div`
  font-size: 1.25rem;
  padding: 2rem 2rem 0;
`;

  // font-size: 1.5rem;
// border-bottom: 1px solid #eeeeee;


const Body = styled.div`
  display: block;
  padding: 2rem;
  line-height: 1.5;
`;

const Card = styled.div`
  background-color: white;
  border-radius: 3px;
  box-shadow: 0 0 1px 0px rgba(0,0,0,.1);
`;

const ThreeQuarter = styled.div`
@media (min-width: 769px) {
  padding: 0.75rem;
}
`;
const Quarter = styled.div`
  padding-bottom: 1rem;

@media (min-width: 769px) {
  padding: 0.75rem;
  min-width: 250px;
  flex-grow: 1;
}
`;

const Columns = styled.div`
  @media (min-width: 769px) {
    display: flex;
    flex-direction: row-reverse;

    margin-left: -0.75rem;
    margin-right: -0.75rem;
    margin-top: -0.75rem;
  }
`;



class Faqs extends React.Component {
  render () {
    return (
      <Background>
        <Columns>
          <Quarter>
            <ListFaq viewer={this.props.viewer} />
          </Quarter>
          {this.props.viewer.Snippet && <ThreeQuarter>
            <Card>
            <Heading>Frequently Asked Questions</Heading>
            <Divider />
            <SubHeading>{this.props.viewer.Snippet.title}</SubHeading>
            <Body dangerouslySetInnerHTML={{__html: this.props.viewer.Snippet.body}}/>
            </Card>
          </ThreeQuarter>}
        </Columns>
      </Background>
    )
  }
}

const FaqsQuery = graphql`
  query FaqsQuery($snippetId: ID) {
    viewer {
      Snippet(id: $snippetId) {
        title
        body
      }
      ...ListFaq_viewer
    }
  }
`;

export default ({match}) => {
  return (
    <QueryRenderer
      environment={environment}
      query={FaqsQuery}
      variables={{snippetId: match.params.id || ''}}
      render={({error, props}) => {
        if (error) {
          return <div>{error.message}</div>
        } else if (props) {
          return <Faqs viewer={props.viewer} />
        }
        return <div>Loading</div>
      }}
    />
  );
};
