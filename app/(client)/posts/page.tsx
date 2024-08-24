import React from 'react';
import Card from '../../component/Client/Card';

interface Post {
  id: number;
  title: string;
  views: number;
}

export default async function Page() {
  const response = await fetch(`https://dummyjson.com/posts?limit=12`);
  const data = await response.json();

  const posts: Post[] = data.posts || [];

  return (
    <div className="h-screen container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">General Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {posts.map((post) => (
          <Card key={post.id} title={post.title} views={post.views} />
        ))}
      </div>
    </div>
  );
}
