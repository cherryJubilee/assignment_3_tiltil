import { nanoid } from "nanoid";
import { NextRequest, NextResponse } from "next/server";

// post 게시물 등록
export async function POST(request: NextRequest) {
  const data = await request.json();
  const { title, content } = data;

  const response = await fetch(
    "https://port-0-ballang-server-qrd2als49b8m4.sel5.cloudtype.app/til",
    {
      method: "POST",
      body: JSON.stringify({
        id: nanoid(),
        title,
        content,
        author: {
          name: "박혜원",
        },
      }),
    }
  );
  const tilPosts = await response.json();

  return NextResponse.json(tilPosts);
}

// GET 게시물 불러오기
export async function GET(request: NextRequest) {
  const url =
    "https://port-0-ballang-server-qrd2als49b8m4.sel5.cloudtype.app/til";
  const option = {
    method: "GET",
  };

  const response = await fetch(url, option);
  const tilPost = response.json();

  return NextResponse.json(tilPost);
}
