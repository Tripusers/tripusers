"use client";
import React, {
  DetailedHTMLProps,
  InputHTMLAttributes,
  useEffect,
  useState,
} from "react";

import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const CountryPhoneCodeSelector = (
  props:
    | DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
    | any
) => {
  const [value, setValue] = useState<any>();
  useEffect(() => {
    props.setValue("phone", value);
  }, [value]);
  return <PhoneInput onChange={setValue} value={value} />;
};

export default CountryPhoneCodeSelector;
