import type { Metadata } from "next";
import { Suspense } from "react";
import { fetchDiaries, fetchDiary } from "@/actions/diaries-actions";
import { DiaryArchive } from "@/components/containers/diary-archive/diary-archive";
import { DiaryForm } from "@/components/containers/diary-form/diary-form";
import { Skeleton } from "@/components/ui/skeleton";
import { getDateOneMonthAgo, getDateStr } from "@/lib/date/date";

export const metadata: Metadata = {
  title: "日記",
};

export default async function Page({ params }: { params: { date: string } }) {
  const todayDate = getDateStr();
  const oneMonthAgo = getDateOneMonthAgo();
  const { date } = (await params) || { date: todayDate };

  const result = await fetchDiary(date);
  const diary = result.data;

  const diaries = await fetchDiaries(oneMonthAgo, todayDate);

  return (
    <div className="grid h-full grid-cols-1 gap-4 md:grid-cols-2">
      <Suspense fallback={<Skeleton className="h-full w-full rounded-xl" />}>
        <DiaryForm data={diary} />
      </Suspense>
      <Suspense fallback={<Skeleton className="h-full w-full rounded-xl" />}>
        <DiaryArchive data={diaries} />
      </Suspense>
    </div>
  );
}
