import {ButtonService} from './chat-msg/chat2-msg-btn/service';

export class BtnService extends ButtonService {

    registeFunctions = ['setInputValue', 'sendMessage'];

    setInputValue() {
        this.view.form.message = this.host.quote;
    }

    sendMessage() {
        this.view.form.message = this.host.quote;
        this.view.form.sendMessage();
    }

    onclick(host) {
        this.host = host;
        if (this.registeFunctions.includes(this.host.options.func)) {
            this[this.host.options.func]();
        }
    }
}
