import React from 'react';
import {
  QueryRenderer,
  createFragmentContainer,
  graphql
} from 'react-relay';

import styled, { css } from 'styled-components';

import environment from '../Environment'

import { Link } from 'react-router-dom';

const Banner = styled.div`
  position: relative;
  height: 0;
  padding-bottom: 66.67%;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-image: url(${props => props.src});

  &:before {
    position: absolute;
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    opacity: 0.2;
  }

  @media (min-width: 769px) {
    height: 490px;
    padding-bottom: 0%;
  }
`;

const BannerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: block;
`

const Heading = styled.div`
  position: relative;
  font-size: 1.75rem;

  @media (min-width: 769px) {
    font-size: 2.5rem;
    padding-top: 2rem;

    &:before {
      content: "";
      position: absolute;
      height: 4px;
      top: 0px;
      background-color: rgb(228, 0, 0);
      width: 40px;
      border-radius: 4px;
    }
  }
`;

const SubHeading = styled.div`
  position: relative;
  font-size: 1.125rem;
  margin-top: 1rem;
  line-height: 1.5;
`;

const Cta = styled(Link)`
  display: flex;
  margin-top: 2rem;
  padding: 1rem 2rem;
  background-color: #e40000;
  color: white;
  border-radius: 3px;
  letter-spacing: 2px;
  text-decoration: none;
  align-items: center;
  justify-content: center;

  @media (min-width: 769px) {
    display: inline-flex;
  }
`

const Card = styled.div`
  background-color: white;
  color: #323232;
  padding: 20px;

  @media (min-width: 769px) {
    border-radius: 0 0 5px 5px;
    padding: 3rem;
    width: 40%;
    top: 0;
    right: 2rem;
    position: absolute
  }
`;

const CardBody = styled.div`
`;

class Page extends React.Component {
  render () {
    return (
      <div>

      <BannerWrapper>
        <Banner src={this.props.heroImageUrl}>
        </Banner>
        <Card>
          <CardBody>
            <Heading>{this.props.heading}</Heading>
            <SubHeading>{this.props.subHeading}</SubHeading>
            <Cta to="/faqs">LEARN MORE</Cta>
          </CardBody>
        </Card>
      </BannerWrapper>
      </div>
    )
  }
}

const PageAllPageQuery = graphql`
  query PageAllPageQuery {
    viewer {
      allPages(last: 100, orderBy: heading_DESC) @connection(key: "ListPage_allPages", filters: []) {
        edges {
          node {
            id
            heading
            subHeading
            heroImageUrl
          }
        }
      }
    }
  }
`;

export default () => {
  return (
    <QueryRenderer
      environment={environment}
      query={PageAllPageQuery}
      render={({error, props}) => {
        if (error) {
          return <div>{error.message}</div>
        } else if (props) {
          return <Page {...props.viewer.allPages.edges.map(({node}) => node).reduce((a, b) => a ? a : b)} />
        }
        return <div>Loading</div>
      }}
    />
  );
};
