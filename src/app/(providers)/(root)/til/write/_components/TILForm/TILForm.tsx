"use client";

import { FormEventHandler, useState } from "react";

function TILForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const url = `${window.location.origin}/api/til`;
    const options = {
      method: "POST",
      body: JSON.stringify({ title, content }),
    };
    const response = await fetch(url, options);
    const data = await response.json();

    console.log("Data", data);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col max-w-md mx-auto">
      <header className="font-semibold	text-lg">제목</header>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border border-black my-2 py-6 rounded"
      />
      <header className="font-semibold	text-lg mt-4">내용</header>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="border border-black my-2 py-6 rounded"
      />

      <button type="submit" className="bg-red-400 border-inherit rounded py-2">
        작성하기
      </button>
    </form>
  );
}

export default TILForm;
