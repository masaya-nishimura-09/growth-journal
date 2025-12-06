import type { Metadata } from "next";
import { getUsername } from "@/actions/user-actions";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "ホーム",
};

export default async function Page() {
  const username = await getUsername();

  return (
    <div className="size-full">
      <div>
        <p className="text-xl font-semibold">おかえりなさい、{username}さん！</p>
      </div>
      <div>
        <Card className="w-md">
          <CardHeader>
            <CardTitle></CardTitle>
            <CardDescription></CardDescription>
            <CardAction></CardAction>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
      </div>
    </div>
  );
}
