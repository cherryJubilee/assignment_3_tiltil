"use client";

import { useAuth } from "@/app/(providers)/_contexts/auth.context";
import Link from "next/link";

function HeaderAuthButtons() {
  const { isLoggedIn, username } = useAuth();

  return (
    <div className="flex gap-x-4 items-center">
      {!isLoggedIn ? (
        // 로그인이 안된 상태
        <>
          <Link
            href="/sign-up"
            className="bg-black text-white rounded-2xl px-3 py-1 m-1"
          >
            회원가입
          </Link>
          <Link
            href="/log-in"
            className="bg-red-500 text-white rounded-2xl px-3 py-1 m-1"
          >
            로그인
          </Link>
        </>
      ) : (
        // 로그인이 된 상태
        <>
          <span>{username}님 안녕하세요.</span>
          <Link
            href="/my-page"
            className="bg-amber-500 text-white rounded-2xl px-3 py-1 m-1"
          >
            마이페이지
          </Link>
          <button className="bg-stone-400 text-white rounded-2xl px-3 py-1 m-1">
            로그아웃
          </button>
        </>
      )}
    </div>
  );
}
export default HeaderAuthButtons;
