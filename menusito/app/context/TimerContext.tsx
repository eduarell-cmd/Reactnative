import React, { createContext, ReactNode, useContext, useState } from 'react';

type Session = {
  start: string;
  end: string;
  duration: string;
};

type TimerContextType = {
  sessions: Session[];
  addSession: (session: Session) => void;
};

const TimerContext = createContext<TimerContextType | undefined>(undefined);

export const TimerProvider = ({ children }: { children: ReactNode }) => {
  const [sessions, setSessions] = useState<Session[]>([]);

  const addSession = (session: Session) => {
    setSessions((prev) => [...prev, session]);
  };

  return (
    <TimerContext.Provider value={{ sessions, addSession }}>
      {children}
    </TimerContext.Provider>
  );
};

export const useTimer = () => {
  const context = useContext(TimerContext);
  if (!context) throw new Error("useTimer must be used within TimerProvider");
  return context;
};
