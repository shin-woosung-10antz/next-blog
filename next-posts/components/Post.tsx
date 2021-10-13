import React from 'react';
import styled from 'styled-components';

import { PostType } from '../api';

interface Props {
  post: PostType;
}

export const Post: React.FC<Props> = ({ post }) => {
  return (
    <Container>
      <Header>
        <Title>{post.title}</Title>
        <Content>{post.content}</Content>
      </Header>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

const Header = styled.div`
  margin-bottom: 12px;
`;

const Title = styled.h1`
    color: #222222;
    font-size: 18px;
    font-weight: bold;
    width: 80%;
    border: 1px solid #000;
    padding: 10px;
`;

const Content = styled.p`
    font-size: 14px;
    color: #222222;
    width: 80%;
    height: 300px;
    border: 1px solid #000;
    padding: 10px;
`;
