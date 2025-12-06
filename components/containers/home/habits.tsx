"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Habit } from "@/types/habits";
import { Label } from "@/components/ui/label";
import { getStreak } from "@/lib/habits/get-streak";

export function Habits({ goodHabits, badHabits }: { goodHabits: Habit[], badHabits: Habit[] }) {

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>習慣</CardTitle>
        <CardDescription>
        </CardDescription>
        <CardAction>
        </CardAction>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        {goodHabits.map((habit) => (
          <div key={habit.id} className="grid gap-2">
            <Label>{habit.title}</Label>
            <p>{getStreak(habit.updatedAt)}</p>
          </div>
        ))}
        {badHabits.map((habit) => (
          <div key={habit.id} className="grid gap-2">
            <Label>{habit.title}</Label>
          </div>
        ))}
      </CardContent>
      <CardFooter>
        <Button type="button">
          <Link href="dashboard/habits">
            もっと見る
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
