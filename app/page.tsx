"use client"
 
import * as React from "react"
import { CalendarIcon } from "@radix-ui/react-icons"
import { differenceInDays, format } from "date-fns"
 
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { pl } from "date-fns/locale";

export default function Home() {
  const [date, setDate] = React.useState<Date>();

  const daysDifference = date ? Math.abs(differenceInDays(new Date(), date || new Date()) + 1) : 0;

  return (
    <main className="flex min-h-screen flex-col items-center pt-24">
      <h1 className="lg:text-6xl md:text-5xl text-4xl">ILE JESZCZE DNI?</h1>

      <div className="flex flex-col gap-5 items-center mt-20 sm:flex-row">
        <h2 className="">Wybierz datę: </h2>
        <div className={cn("grid gap-2")}>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-[280px] justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "dd LLL, y", {locale: pl}) : <span>Wybierz datę</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
                disabled={(date) =>
                  date < new Date()
                }
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <h2 className="mt-16 text-3xl">Jeszcze <b>{daysDifference} {daysDifference != 1 ? "dni" : "dzień"}!</b></h2>
    </main>
  );
};