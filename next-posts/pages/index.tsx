import { NextPage } from 'next';
import React from 'react';

import { getPosts, PostType } from '../api';
import { MainLayout } from '../components/MainLayout';
import { PostList } from '../components/PostList';

interface Props {
  posts: PostType[];
}

const Home: NextPage<Props> = ({ posts }) => (
  <MainLayout title="Home">
    <PostList posts={posts} />
  </MainLayout>
);


export async function getStaticProps() {
    const { posts } = await getPosts();

    return {
      props: {
        posts
      }
    }
}

export default Home;
