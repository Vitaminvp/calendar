import React, { FC } from "react";
import {
  format,
  endOfMonth,
  startOfMonth,
  differenceInDays,
  parse,
} from "date-fns";
import Cell from "./Cell";

const weeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

interface Props {
  value: string;
}

const Calendar: FC<Props> = ({ value }) => {
  const passedDate = parse(value, "MM/dd/yyyy", new Date());
  const startDate = startOfMonth(passedDate);
  const endDate = endOfMonth(passedDate);
  const numDays = differenceInDays(endDate, startDate) + 1;

  const prefixDays = startDate.getDay();
  const suffixDays = 6 - endDate.getDay();

  return (
    <div className="mt-16 flex flex-col items-center gap-8">
      <div className="flex flex-col items-center gap-4">
        <div className="w-[400px] border-t border-l">
          <div className="grid grid-cols-7 items-center justify-center text-center">
            <Cell className="col-span-7">
              {format(passedDate, "LLLL yyyy")}
            </Cell>

            {weeks.map((week) => (
              <Cell className="text-xs font-bold uppercase">{week}</Cell>
            ))}

            {Array.from({ length: prefixDays }).map((_, index) => (
              <Cell key={index} />
            ))}

            {Array.from({ length: numDays }).map((_, index) => {
              const date = index + 1;
              const isCurrentDate = date === passedDate.getDate();

              return (
                <Cell key={date} isActive={isCurrentDate}>
                  {date}
                </Cell>
              );
            })}

            {Array.from({ length: suffixDays }).map((_, index) => (
              <Cell key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
