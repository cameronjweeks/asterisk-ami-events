import {
  AGClientSocket,
  create as createSocket,
} from 'socketcluster-client';
import { SocketConnectOptions } from './interfaces/SocketConnectOptions';

interface scClient {
  connect: () => AGClientSocket;
  sendMessage: (
    socket: AGClientSocket,
    channel: string,
    message: string | object,
  ) => void;
}

const scClient: scClient = {
  connect: (): AGClientSocket => {
    console.log(
      `Starting to connect to socket ${process.env.SOCKET_HOST}`,
    );
    const options: SocketConnectOptions = {
      hostname: process.env.SOCKET_HOST,
      port: 8000,
      autoReconnect: true,
    };
    const socket: AGClientSocket = createSocket(options);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const channel = socket.subscribe('amiEvent');

    return socket;
  },
  sendMessage: (socket, channel, message) => {
    socket.transmitPublish(channel, message);
  },
};
export default scClient;
