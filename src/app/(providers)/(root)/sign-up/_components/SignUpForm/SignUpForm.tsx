import React from "react";

function SignUpForm() {
  return (
    <form className="flex flex-col max-w-sm mx-auto">
      <input
        type="text"
        placeholder="아이디를 입력해주세요"
        className="border border-black my-2 py-2 rounded"
      />
      <input
        type="password"
        placeholder="비밀번호를 입력해주세요"
        className="border border-black my-2 py-2 rounded"
      />
      <button className="bg-red-400 border-inherit rounded py-2 text-white">
        회원가입 하기
      </button>
    </form>
  );
}

export default SignUpForm;
