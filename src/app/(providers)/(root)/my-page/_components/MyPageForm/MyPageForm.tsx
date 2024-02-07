"use client";
import { setProfile } from "../../../../../(providers)/_store/reducers/profileSlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function MyPageForm() {
  const dispatch = useDispatch();
  const { nickname, age } = useSelector((state) => state.profile);
  const [newNickname, setNewNickname] = useState(nickname);
  const [newAge, setNewAge] = useState(age);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setProfile({ nickname: newNickname, age: newAge }));
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col max-w-sm mx-auto">
      <label>
        <div>닉네임</div>
        <input
          type="text"
          value={newNickname}
          onChange={(e) => setNewNickname(e.target.value)}
          className="border border-black my-2 py-2 rounded"
        />
      </label>
      <label>
        <div>나이</div>
        <input
          type="number"
          value={newAge}
          onChange={(e) => setNewAge(Number(e.target.value))}
          className="border border-black my-2 py-2 rounded"
        />
      </label>
      <button type="submit" className="bg-red-400 border-inherit rounded py-2">
        프로필 업데이트
      </button>
    </form>
  );
}

export default MyPageForm;
