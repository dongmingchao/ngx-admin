/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

/**
 * Chat message component.
 */
@Component({
    selector: 'chat2-msg-text',
    templateUrl: './chat2-msg-text.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./chat2-msg-text.component.css'],
})
export class Chat2MsgTextComponent {

    /**
     * Message sender
     * @type {string}
     */
    @Input() sender: string;

    /**
     * Message sender
     * @type {string}
     */
    @Input() message: string;

    /**
     * Message send date
     * @type {Date}
     */
    @Input() date: Date;

}
