import {ViewInterface} from '../../interface/view.interface';
import {Chat2MsgBtnComponent} from './chat2-msg-btn.component';

export class ButtonService {
    view: ViewInterface;
    msg: {
        quote: string,
    };
    options: {
        func: string,
    };
    host: Chat2MsgBtnComponent;

    onclick(host: Chat2MsgBtnComponent) {
    }
}
