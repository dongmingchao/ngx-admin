/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

/**
 * Chat message component.
 */
@Component({
    selector: 'chat2-msg-file',
    templateUrl: './chat2-msg-file.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./chat2-msg-file.component.css'],
})
export class Chat2MsgFileComponent {

    readyFiles: any[];

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
     * Message file path
     * @type {Date}
     */
    @Input()
    set files(files: any[]) {
        this.readyFiles = (files || []).map((file: any) => {
            const isImage = this.isImage(file);
            return {
                ...file,
                urlStyle: isImage && this.domSanitizer.bypassSecurityTrustStyle(`url(${file.url})`),
                isImage: isImage,
            };
        });
        this.cd.detectChanges();
    }

    constructor(protected cd: ChangeDetectorRef, protected domSanitizer: DomSanitizer) {
    }


    isImage(file: any): boolean {
        return ['image/png', 'image/jpeg', 'image/gif'].includes(file.type);
    }
}
