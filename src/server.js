import server from 'socket.io';

export default function startServer(store) {
  const io = new server().attach(8090);

  store.subscribe( () => {
    return io.emit('state', store.getState().toJS() );
  });

  io.on('connection', (socket) => {
    socket.emit('state', store.getState().toJS() );
  });

}
