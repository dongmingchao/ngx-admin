import {Component} from '@angular/core';

import {ChatService} from './chat.service';
import {BtnService} from './chat2.btn.service';

@Component({
    selector: 'ngx-chat',
    templateUrl: 'chat.component.html',
    styleUrls: ['chat.component.css'],
    providers: [ChatService, BtnService],
})
export class MyChatComponent {

    messages: any[];

    constructor(protected chatService: ChatService, protected btnService: BtnService) {
        this.messages = this.chatService.loadMessages();
    }

    sendMessage(event: any) {
        const files = !event.files ? [] : event.files.map((file) => {
            return {
                url: file.src,
                type: file.type,
                icon: 'nb-compose',
            };
        });
        this.messages.push({
            text: event.message,
            date: new Date(),
            withAvatar: true,
            reply: true,
            type: files.length ? 'file' : 'text',
            files: files,
            user: {
                name: 'Jonh Doe',
                avatar: 'https://i.gifer.com/no.gif',
            },
        });
        const botReply = this.chatService.reply(event.message);
        if (botReply) {
            setTimeout(() => {
                this.messages.push(botReply);
            }, 500);
        }
    }
}
