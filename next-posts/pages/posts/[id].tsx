import { NextPage, NextPageContext } from 'next';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

import { getPost, PostType } from '../../api';
import { MainLayout } from '../../components/MainLayout';
import { Post } from '../../components/Post';

interface Props {
  post: PostType;
}

const PostDetailPage: NextPage<Props> = ({ post }) => {
  return (
    <MainLayout title={`${post.title} post`}>
      <Link href="/">
        <BackToHome>Home</BackToHome>
      </Link>
      <Divier />
      <Post post={post} />
    </MainLayout>
  );
};

export async function getServerSideProps({ query }) {
    const { id } = query;

    const { post } = await getPost(id as string);

    return {
        props: {
            post
        }
    };
}

export default PostDetailPage;

const BackToHome = styled.a`
  color: #2f5fd1;
  cursor: pointer;
  display: block;
`;

const Divier = styled.div`
  height: 1px;
  border-bottom: 1px solid #eeeeee;
  margin: 24px 0;
`;
