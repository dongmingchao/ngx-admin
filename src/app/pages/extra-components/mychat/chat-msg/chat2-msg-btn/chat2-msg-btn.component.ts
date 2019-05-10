/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    Input,
    OnChanges,
    SimpleChanges, ViewChild,
} from '@angular/core';
import {Chat2FormComponent} from '../chat2-form/chat2-form.component';
import {ButtonService} from './service';
import {ViewInterface} from '../../interface/view.interface';

/**
 * Chat message component.
 */
@Component({
    selector: 'chat2-msg-btn',
    templateUrl: './chat2-msg-btn.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./chat2-msg-btn.component.css'],
})
export class Chat2MsgBtnComponent implements OnChanges {

    /**
     * Message sender
     * @type {string}
     */
    @Input() message: string;

    /**
     * Message sender
     * @type {string}
     */
    @Input() sender: string;

    /**
     * Message send date
     * @type {Date}
     */
    @Input() date: Date;

    /**
     * Quoted message
     * @type {Date}
     */
    @Input() quote: string;
    @Input() link: string;
    @Input() options: {
        func: string;
    };
    @Input() view: ViewInterface;
    @Input() service: ButtonService;

    ngOnChanges(changes: SimpleChanges) {
        if ('service' in changes) {
            this.service.view = this.view;
        }
    }

    onclick() {
        this.service.onclick(this);
    }
}
