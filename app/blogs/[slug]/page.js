"use client";

import { useParams } from "next/navigation";

const BlogPostPage = () => {
  const { slug } = useParams();


  const title = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <main>
      <h1>{title}</h1>
      <p>You are reading: {slug}</p>
    </main>
  );
};

export default BlogPostPage;