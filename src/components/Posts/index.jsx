import P from 'prop-types';
import './styles.css';
import { PostCard } from '../PostCard';
import React from 'react';

export const Posts = ({ posts }) => (
  <div className="posts">
    {posts.map((post) => (
      <PostCard
        key={post.id}
        title={post.title}
        body={post.body}
        cover={post.cover}
        id={post.id}
        // post={post}
      />
    ))}
  </div>
);

Posts.defaultProps = {
  posts: [],
};

Posts.propTypes = {
  posts: P.arrayOf(
    P.shape({
      title: P.string.isRequired,
      cover: P.string.isRequired,
      body: P.string.isRequired,
      id: P.number.isRequired,
    }),
  ),
};
