import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { fetchNegativeNote } from "@/actions/negative-notes-actions";
import UpdateNegativeNote from "@/components/containers/negative-notes/update-negative-note";

export const metadata: Metadata = {
  title: "ネガティブノートの編集",
};

export default async function Page({ params }: { params: { id: number } }) {
  const { id } = await params;
  const result = await fetchNegativeNote(id);
  let data = null;
  if (result && result.success) {
    data = result.data;
  } else {
    notFound();
  }

  return <div className="size-full">{data && <UpdateNegativeNote data={data} />}</div>;
}
