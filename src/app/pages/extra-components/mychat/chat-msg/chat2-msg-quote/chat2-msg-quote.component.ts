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
    selector: 'chat2-msg-quote',
    templateUrl: './chat2-msg-quote.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./chat2-msg-quote.component.css'],
})
export class Chat2MsgQuoteComponent {

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

}
