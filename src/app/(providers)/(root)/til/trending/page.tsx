"use client";

import { useEffect, useState } from "react";

type TILPost = {
  id: string;
  title: string;
  content: string;
  author: {
    name: string;
  };
};

// API를 통해 TIL 게시물 가져오기
const fetchTILPosts = async () => {
  const url =
    "https://port-0-ballang-server-qrd2als49b8m4.sel5.cloudtype.app/til";
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
function TrendingPage() {
  const [tilPosts, setTilPosts] = useState<TILPost[]>([]);

  useEffect(() => {
    fetchTILPosts().then((data) => {
      setTilPosts(data);
    });
  }, []);

  return (
    <div className="mx-32 my-12">
      <ul className="grid grid-cols-3 gap-12  max-w-5xl m-auto">
        {tilPosts.map((post) => (
          <li
            className="border-red-300 bg-slate-50 p-8 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            key={post.id}
          >
            <h1 className="font-semibold min-h-4">{post.title}</h1>
            <p className="text-slate-500 min-h-28">{post.content}</p>
            <p className="text-blue-500">by {post.author.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TrendingPage;
