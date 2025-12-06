import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "設定",
};

export default async function Page() {
  return (
    <div className="size-full">
      <p>設定</p>
    </div>
  );
}
