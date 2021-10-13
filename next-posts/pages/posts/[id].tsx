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
        <BackToHome> Main </BackToHome>
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
  color: #000;
  border-bottom: 1px solid;
  padding-bottom: 2px;
  &:hover {
    color: blue;
    cursor: pointer;
    padding-bottom: 5px;
  }
`;

const Divier = styled.div`
  height: 1px;
  border-bottom: 1px solid #eeeeee;
  margin: 24px 0;
`;
