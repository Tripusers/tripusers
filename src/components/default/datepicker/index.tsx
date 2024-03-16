"use client";
import React, {
  DetailedHTMLProps,
  InputHTMLAttributes,
  useEffect,
  useState,
} from "react";
import "./style.scss";
const DatePickerInput = ({
  ...props
}:
  | DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
  | any) => {
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
    console.log(
      `${data.dd}/${data.mm}/${data.yyy}` !=
        `${currentDate}/${currentMonth}/${currentYear}`
    );

    if (
      `${data.dd}/${data.mm}/${data.yyy}` !=
      `${currentDate}/${currentMonth}/${currentYear}`
    ) {
      props.setValue("date", `${data.dd}/${data.mm}/${data.yyy}`);
      setValue(`${data.dd}/${data.mm}/${data.yyy}`);
    }
  }, [data.dd]);
  // console.log(data);

  return (
    <div className="date-picker-container">
      <input
        {...props}
        className="date-picker-input"
        onFocus={handleOpen}
        value={value}
        autoCorrect={false}
        autoComplete="off"
      />
      {open && (
        <div className={`calendar ${open ? "visible" : null}`}>
          <div className="buttons">
            <select
              value={data.mm}
              onChange={(e) => {
                // console.log(e.target.value);
                setData((prv) => ({
                  ...prv,
                  mm: parseInt(e.target.value),
                }));
              }}
            >
              {[
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
              ].map((v, i) => (
                <option value={i + 1}>{v}</option>
              ))}
            </select>

            <select
              onChange={(e) => {
                // console.log(e.currentTarget.value);
                setData(JSON.parse(e.currentTarget.value));
              }}
            >
              <option>{data.yyy}</option>
              {[...new Array(100)].map((v, i) => (
                <option
                  key={i}
                  value={JSON.stringify({ ...data, yyy: data.yyy + i + 1 })}
                >
                  {data.yyy + i + 1}
                </option>
              ))}
            </select>
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
