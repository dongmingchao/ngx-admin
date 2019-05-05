/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import {ChangeDetectionStrategy, Component, HostBinding, Input} from '@angular/core';

function convertToBoolProperty(val: any): boolean {
    if (typeof val === 'string') {
        val = val.toLowerCase().trim();

        return (val === 'true' || val === '');
    }

    return !!val;
}

import {DomSanitizer, SafeStyle} from '@angular/platform-browser';
import {animate, state, style, transition, trigger} from '@angular/animations';

/**
 * Chat message component.
 *
 * Multiple message types are available through a `type` property, such as
 * - text - simple text message
 * - file - could be a file preview or a file icon
 * if multiple files are provided grouped files are shown
 * - quote - quotes a message with specific quote styles
 * - map - shows a google map picture by provided [latitude] and [longitude] properties
 *
 * @stacked-example(Available Types, chat/chat-message-types-showcase.component)
 *
 * Message with attached files:
 * ```html
 * <nb-chat-message
 *   type="file"
 *   [files]="[ { url: '...' } ]"
 *   message="Hello world!">
 * </nb-chat-message>
 * ```
 *
 * Map message:
 * ```html
 * <nb-chat-message
 *   type="map"
 *   [latitude]="53.914"
 *   [longitude]="27.59"
 *   message="Here I am">
 * </nb-chat-message>
 * ```
 *
 * @styles
 *
 * chat-message-background:
 * chat-message-text-color:
 * chat-message-reply-background-color:
 * chat-message-reply-text-color:
 * chat-message-avatar-background-color:
 * chat-message-sender-text-color:
 * chat-message-quote-background-color:
 * chat-message-quote-text-color:
 * chat-message-file-text-color:
 * chat-message-file-background-color:
 */
@Component({
    selector: 'chat-msg',
    templateUrl: './chat2-msg.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatMsgComponent {

    @HostBinding('class.not-reply')
    get notReply() {
        return !this.reply;
    }

    avatarStyle: SafeStyle;

    /**
     * Determines if a message is a reply
     */
    @Input()
    @HostBinding('class.reply')
    get reply(): boolean {
        return this._reply;
    }

    set reply(value: boolean) {
        this._reply = convertToBoolProperty(value);
    }

    protected _reply: boolean = false;

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
     * Array of files `{ url: 'file url', icon: 'file icon class' }`
     * @type {string}
     */
    @Input() files: { url: string, icon: string }[];

    /**
     * Quoted message text
     * @type {string}
     */
    @Input() quote: string;
    @Input() link: string;

    /**
     * Map latitude
     * @type {number}
     */
    @Input() latitude: number;

    /**
     * Map longitude
     * @type {number}
     */
    @Input() longitude: number;

    /**
     * Message send avatar
     * @type {string}
     */
    @Input()
    set avatar(value: string) {
        this.avatarStyle = value ? this.domSanitizer.bypassSecurityTrustStyle(`url(${value})`) : null;
    }

    /**
     * Message type, available options `text|file|map|quote`
     * @type {string}
     */
    @Input() type: string;

    constructor(protected domSanitizer: DomSanitizer) {
    }

    getInitials(): string {
        if (this.sender) {
            const names = this.sender.split(' ');

            return names.map(n => n.charAt(0)).splice(0, 2).join('').toUpperCase();
        }

        return '';
    }
}
