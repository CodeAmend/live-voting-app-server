import server from 'socket.io';

export default function startServer(store) {
  const io = new server().attach(8090);

  // When store is updated
  store.subscribe( () => {
    return io.emit('state', store.getState().toJS() );
  });

  // When user initially connects
  io.on('connection', (socket) => {
    socket.emit('state', store.getState().toJS() );
  });

}
