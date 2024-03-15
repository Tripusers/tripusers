"use client";
import React, {
  DetailedHTMLProps,
  InputHTMLAttributes,
  useEffect,
  useState,
} from "react";
import "./style.scss";
const DatePickerInput = (
  props: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen((prev) => !prev);
  const [value, setValue] = useState<string>();

  const date = new Date();
  const currentMonth = date.getMonth() + 1; // Adding 1 because getMonth() returns zero-based index
  const currentDate = date.getDate();
  const currentYear = date.getFullYear();
  const [data, setData] = useState({
    dd: currentDate,
    yyy: currentYear,
    mm: currentMonth,
  });
  const generateCalendarDates = () => {
    const daysInMonth = new Date(data.yyy, data.mm, 0).getDate();
    const dates = [];

    for (let i = 1; i <= daysInMonth; i++) {
      dates.push(i);
    }

    return dates;
  };
  useEffect(() => {
    if (
      `${data.dd}/${data.mm}/${data.yyy}` !=
      `${currentDate}/${currentMonth}/${currentYear}`
    )
      setValue(`${data.dd}/${data.mm}/${data.yyy}`);
  }, [data.dd]);
  return (
    <div className="date-picker-container">
      <input
        {...props}
        className="date-picker-input"
        onFocus={handleOpen}
        value={value}
      />
      {open && (
        <div className={`calendar ${open ? "visible" : null}`}>
          <div className="buttons">
            <button
              onClick={() => {
                if (data.mm > 1) {
                  if (data.mm !== currentMonth || data.yyy !== currentYear)
                    setData((prev) => ({ ...prev, mm: prev.mm - 1 }));
                } else {
                  if (data.yyy !== currentYear) {
                    setData((prev) => ({ ...prev, mm: 12, yyy: prev.yyy - 1 }));
                  }
                }
              }}
            >
              Prev
            </button>
            <p>
              {data.dd}/{data.mm}/{data.yyy}{" "}
            </p>
            <button
              onClick={() => {
                if (data.mm < 12) {
                  setData((prev) => ({ ...prev, mm: prev.mm + 1 }));
                } else {
                  setData((prev) => ({ ...prev, mm: 1, yyy: prev.yyy + 1 }));
                }
              }}
            >
              Next
            </button>
          </div>
          <div>
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((v) => (
              <span>{v}</span>
            ))}
            {[
              ...new Array(new Date(data.yyy, data.mm - 1, 1).getDay()).fill(
                ""
              ),
            ].map(() => (
              <span></span>
            ))}
            {generateCalendarDates().map((date, index) => (
              <span
                className="date"
                onClick={() => {
                  setData((prv) => ({ ...prv, dd: date }));
                  setOpen(false);
                }}
                key={index}
              >
                {date}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DatePickerInput;
