"use client";

import {
  createContext,
  useContext,
  useState,
} from "react";

type Notification = {
  id: string;

  message: string;
};

type NotificationContextType = {
  notifications: Notification[];

  notify: (
    message: string
  ) => void;
};

const NotificationContext =
  createContext<
    NotificationContextType | undefined
  >(undefined);

export function NotificationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [
    notifications,
    setNotifications,
  ] = useState<
    Notification[]
  >([]);

  function notify(
    message: string
  ) {
    const id =
      crypto.randomUUID();

    setNotifications(
      (prev) => [
        ...prev,
        {
          id,
          message,
        },
      ]
    );

    setTimeout(() => {
      setNotifications(
        (prev) =>
          prev.filter(
            (
              notification
            ) =>
              notification.id !==
              id
          )
      );
    }, 3000);
  }

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        notify,
      }}
    >
      {children}

      <div
        className="
          fixed
          top-6
          right-6
          z-[99999]
          space-y-4
        "
      >

        {notifications.map(
          (notification) => (
            <div
              key={
                notification.id
              }
              className="
                rounded-2xl
                border
                border-zinc-800
                bg-zinc-950/90
                px-5
                py-4
                backdrop-blur-xl
                shadow-2xl
              "
            >
              {
                notification.message
              }
            </div>
          )
        )}

      </div>

    </NotificationContext.Provider>
  );
}

export function useNotification() {
  const context =
    useContext(
      NotificationContext
    );

  if (!context) {
    throw new Error(
      "useNotification must be used inside NotificationProvider"
    );
  }

  return context;
}