import { Client } from "aidbox-sdk";
import { createContext } from "react";
import { Socket } from "socket.io-client";

export type AppContextType = {
  client: Client;
  socketIo: Socket;
};

export const AppContext = createContext<AppContextType>({} as AppContextType);
