import server from 'socket.io';

export default function startServer() {
  const io = new server().attach(8090);
}
