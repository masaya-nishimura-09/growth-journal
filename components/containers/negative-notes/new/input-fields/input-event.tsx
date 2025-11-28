import { ja } from "date-fns/locale";
import { ChevronDownIcon } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { formatDateToYYYYMMDD, getDateWithDayOfWeek } from "@/lib/date/date";
import { NegativeNotesFormData } from "@/types/negative-notes";

export default function InputEvent({
  formData,
  setFormData,
}: {
  formData: NegativeNotesFormData;
  setFormData: Dispatch<SetStateAction<NegativeNotesFormData>>;
}) {
  const [open, setOpen] = useState(false);

  return (
    <Card>
      <CardHeader>
        <CardTitle>ネガティブだと思った出来事の説明</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="grid gap-2">
          <Label htmlFor="description">起きたこと</Label>
          <Input
            id="description"
            type="text"
            value={formData.description}
            onChange={(e) =>
              setFormData({
                ...formData,
                description: e.target.value,
              })
            }
            placeholder="起きたことを入力して下さい。"
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="when" className="px-1">
            いつ
          </Label>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button variant="outline" id="date" className="w-48 justify-between font-normal">
                {formData.when
                  ? getDateWithDayOfWeek(formatDateToYYYYMMDD(formData.when))
                  : "日付を選択"}
                <ChevronDownIcon />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto overflow-hidden p-0" align="start">
              <Calendar
                mode="single"
                selected={formData.when}
                captionLayout="dropdown"
                onSelect={(date) => {
                  setFormData({
                    ...formData,
                    when: date,
                  });
                  setOpen(false);
                }}
                locale={ja}
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="where">場所</Label>
          <Input
            id="where"
            type="text"
            value={formData.where}
            onChange={(e) =>
              setFormData({
                ...formData,
                where: e.target.value,
              })
            }
            placeholder="場所を入力して下さい。"
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="withWhom">誰と</Label>
          <Input
            id="withWhom"
            type="text"
            value={formData.withWhom}
            onChange={(e) =>
              setFormData({
                ...formData,
                withWhom: e.target.value,
              })
            }
            placeholder="関わった人を入力して下さい。"
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="userAction">行動</Label>
          <Input
            id="userAction"
            type="text"
            value={formData.userAction}
            onChange={(e) =>
              setFormData({
                ...formData,
                userAction: e.target.value,
              })
            }
            placeholder="そのときとった行動を入力して下さい。"
          />
        </div>
      </CardContent>
    </Card>
  );
}
