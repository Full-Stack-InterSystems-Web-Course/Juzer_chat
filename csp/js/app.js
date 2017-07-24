const host = `127.0.0.1:57772`;
let ws = new WebSocket(`ws://${ host}/csp/chatwithall/Web.ChatWebSocket.cls`);
ws.addEventListener(`open`,()=>{
console.log(`We are connectedd to chat!`);
});
ws.addEventListener(`error`,(err)=>{
console.error(`Connection error:`,err);
});
ws.addEventListener(`close`,()=>{
console.log(`We are disconnected from chat!`)
});
ws.addEventListener(`message`,({data})=>{
console.log(`Data received from server:`,JSON.stringify(data))
});