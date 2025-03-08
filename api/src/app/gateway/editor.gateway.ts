import { WebSocketGateway, SubscribeMessage } from "@nestjs/websockets"
import { Socket } from 'socket.io';

@WebSocketGateway()
export class EditorGateway {
    @SubscribeMessage('codeChange')
    handleCodeChange(client: Socket, payload: { roomId: string; delta: string }) {
        client.to(payload.roomId).emit('codeUpdate', payload.delta);
    }
}