import { createContext, useRef } from "react";
import { useContext } from "react";
import { useState } from "react";

const myContext = createContext();

export const AppProvider = ({ children }) => {
  const localViewRef = useRef();
  const remoteViewRef = useRef();
  const localViewSrc = (stream: any) => {
    console.log({ localStream: stream });
    localViewRef.current.srcObject = stream;
  };

  const remoteViewSrc = (stream: any) => {
    console.log({ remoteStream: stream });
    remoteViewRef.current.srcObject = stream;
  };

  return (
    <myContext.Provider
      value={{ localViewRef, remoteViewRef, localViewSrc, remoteViewSrc }}
    >
      {children}
    </myContext.Provider>
  );
};

export const useAppProvider = () => useContext(myContext);
