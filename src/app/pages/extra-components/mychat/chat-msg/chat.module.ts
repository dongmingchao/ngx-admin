/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import {ModuleWithProviders, NgModule} from '@angular/core';

import {NbSharedModule} from '@nebular/theme/components/shared/shared.module';
import {NbButtonModule} from '@nebular/theme';
import {NbInputModule} from '@nebular/theme';
import {NbIconModule} from '../lib/icon/icon.module';

import {Chat2Component} from './chat.component';
import {ChatMsgComponent} from './chat-message.component';
import {Chat2FormComponent} from './chat-form.component';
import {Chat2MsgQuoteComponent} from './chat2-msg-quote/chat2-msg-quote.component';
import {NbChatMessageTextComponent} from './chat-message-text.component';
import {Chat2MsgFileComponent} from './chat2-msg-file/chat2-msg-file.component';
import {NbChatMessageMapComponent} from './chat-message-map.component';
import {NbChatOptions} from './chat.options';
import {Chat2MsgLinkComponent} from './chat2-msg-link/chat2-msg-link.component';

const NB_CHAT_COMPONENTS = [
    Chat2Component,
    ChatMsgComponent,
    Chat2FormComponent,
    NbChatMessageTextComponent,
    Chat2MsgFileComponent,
    Chat2MsgQuoteComponent,
    Chat2MsgLinkComponent,
    NbChatMessageMapComponent,
];

@NgModule({
    imports: [
        NbSharedModule,
        NbIconModule,
        NbInputModule,
        NbButtonModule,
    ],
    declarations: [
        ...NB_CHAT_COMPONENTS,
    ],
    exports: [
        ...NB_CHAT_COMPONENTS,
    ],
})
export class ChatModule {

    static forRoot(options?: NbChatOptions) {
        return <ModuleWithProviders>{
            ngModule: ChatModule,
            providers: [
                {provide: NbChatOptions, useValue: options || {}},
            ],
        };
    }

    static forChild(options?: NbChatOptions) {
        return <ModuleWithProviders>{
            ngModule: ChatModule,
            providers: [
                {provide: NbChatOptions, useValue: options || {}},
            ],
        };
    }
}
