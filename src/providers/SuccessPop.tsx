"use client";

import React from "react";
import Success from "../components/default/utils/email/Success";

const SuccessPopCtx = React.createContext<{
  showPop: boolean;
  changeState: (val: boolean) => void;
}>({
  showPop: true,
  changeState() {},
});

export const useSuccessPop = () => React.useContext(SuccessPopCtx);

export const SuccessPopUpProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [show, setShow] = React.useState(false);
  const handelHook = (val: boolean) => setShow(val);
  const obj = React.useMemo(
    () => ({ showPop: show, changeState: handelHook }),
    []
  );
  return (
    <SuccessPopCtx.Provider value={obj}>
      {children}
      {show && <Success />}
    </SuccessPopCtx.Provider>
  );
};
