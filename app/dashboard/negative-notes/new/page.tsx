import type { Metadata } from "next";
import NewNegativeNote from "@/components/containers/negative-notes/new-negative-note";

export const metadata: Metadata = {
  title: "ネガティブノートの作成",
};

export default function Page() {
  return (
    <div className="size-full">
      <NewNegativeNote />
    </div>
  );
}
