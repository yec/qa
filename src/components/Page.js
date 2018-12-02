import React from 'react';
import {
  QueryRenderer,
  graphql
} from 'react-relay';

import styled from 'styled-components';

import environment from '../Environment'

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Banner = styled.div`
  position: relative;
  height: calc(100vh - 56px);
  padding-bottom: 0;
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
    background-color: black;
    opacity: 0.2;
  }

  @media (min-width: 769px) {
    height: calc(100vh - 112px);
  }
`;

const BannerContent = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  color: white;
  align-items: center;
  justify-content: center;
`

const Heading = styled.div`
  position: relative;
  font-size: 1.75rem;

  @media (min-width: 769px) {
    font-size: 2.5rem;
  }
`;

const SubHeading = styled.div`
  position: relative;
  font-size: 1.125rem;
  margin: 1rem 1rem 0;
  line-height: 1.5;
  text-align: center;
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

class Page extends React.Component {
  // componentDidUpdate() {
  //   this.props.menuClose();
  // }

  render () {
    return (
      <div>

      <Banner src={this.props.heroImageUrl}>
        <BannerContent>
          <Heading>{this.props.heading}</Heading>
          <SubHeading>{this.props.subHeading}</SubHeading>
          <Cta to="/faqs">LEARN MORE</Cta>
        </BannerContent>
      </Banner>
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

export default connect(null, {
  menuClose: () => ({type: 'MENU_CLOSE'})
})(({menuClose}) => {
  return (
    <QueryRenderer
      environment={environment}
      query={PageAllPageQuery}
      render={({error, props}) => {
        if (error) {
          return <div>{error.message}</div>
        } else if (props) {
          return <Page menuClose={menuClose} {...props.viewer.allPages.edges.map(({node}) => node).reduce((a, b) => a ? a : b)} />
        }
        return <div></div>
      }}
    />
  );
});
