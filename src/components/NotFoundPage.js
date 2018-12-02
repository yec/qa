import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const Container = styled.div`
max-width: 1350px;
margin-left: auto;
margin-right: auto;
padding: 1rem;

@media (min-width: 769px) {
  padding: 2rem;
}
`;

const HeadingLarge = styled.div`
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

const SubHeading = styled.div`
  font-size: 1.25rem;
  padding: 2rem 2rem 0;
`;

const Heading = styled.div`
  font-size: 1.5rem;
  padding: 1.5rem;
  border-bottom: 1px solid #eeeeee;
`;

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

const Item = styled.div`

  &:not(:last-child) {
    padding-bottom: 1rem;
  }

  a {
    color: inherit;
  }

  ${props => props.active && css`
    a {
      color: #e40000;
    }
  `}
`;

const Column = styled.div`

  &:not(:last-child) {
    padding-bottom: 1rem;
  }

  @media (min-width: 769px) {
    padding: 0.75rem;
  }
`

const ThreeQuarter = styled(Column)`
@media (min-width: 769px) {
  flex-basis: 67%;
}
@media (min-width: 1024px) {
  flex-basis: 75%;
}
`;

const Quarter = styled(Column)`
@media (min-width: 769px) {
  flex-basis: 33%;
}
@media (min-width: 1024px) {
  flex-basis: 25%;
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

const Divider = styled.div`
  height: 1px;
  background-color: #eeeeee;
  margin: 0 2rem;
`;

const L = styled(Link)`
  color: inherit;
`;

const NotFoundPage = () => {
  return (
    <Container className="animated fadeIn">
    <Card>
      <HeadingLarge>404 Page Not Found</HeadingLarge>
      <Divider />
      <Body><L to="/">Return to homepage</L></Body>
    </Card>
    </Container>
  );
};

export default NotFoundPage;
