import { IconNotebook } from "@tabler/icons-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
};

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <Card className="w-sm md:w-md">
        <div className="mb-8 flex items-center justify-center gap-2 text-primary">
          <IconNotebook className="size-10 bg-red" />
          <span className="font-semibold text-2xl">Habit Log</span>
        </div>
        <CardHeader className="text-center">
          <CardTitle>404 - Page Not Found</CardTitle>
          <CardDescription>ご指定のページが見つかりません。</CardDescription>
        </CardHeader>
        <CardContent></CardContent>
        <CardFooter className="flex justify-center items-center">
          <Button>
            <Link href="/dashboard">トップページへ戻る</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
