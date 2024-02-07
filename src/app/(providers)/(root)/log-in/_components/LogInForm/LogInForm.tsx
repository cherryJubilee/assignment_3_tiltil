"use client";

import { useAuth } from "@/app/(providers)/_contexts/auth.context";
import { FormEventHandler, useState } from "react";

function LogInForm() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const auth = useAuth();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const url = `${window.location.origin}/api/auth/log-in`;
    const options = { method: "POST", body: JSON.stringify({ id, pw }) };
    const response = await fetch(url, options);
    const data = await response.json();

    if (data === "OK" && response.status === 200) {
      auth.setIsLoggedIn(true);
      auth.setUsername(id);
    } else {
      alert("로그인 실패~");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col max-w-sm mx-auto">
      <input
        type="text"
        value={id}
        placeholder="아이디를 입력해주세요"
        onChange={(e) => setId(e.target.value)}
        className="border border-black my-2 py-2 rounded"
      />
      <input
        type="password"
        value={pw}
        placeholder="비밀번호를 입력해주세요"
        onChange={(e) => setPw(e.target.value)}
        className="border border-black my-2 py-2 rounded"
      />
      <button
        type="submit"
        className="text-white bg-red-400 border-inherit rounded py-2"
      >
        로그인하기
      </button>
    </form>
  );
}

export default LogInForm;
