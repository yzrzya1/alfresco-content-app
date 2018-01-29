/*!
 * @license
 * Alfresco Example Content Application
 *
 * Copyright (C) 2005 - 2017 Alfresco Software Limited
 *
 * This file is part of the Alfresco Example Content Application.
 * If the software was purchased under a paid Alfresco license, the terms of
 * the paid license agreement will prevail.  Otherwise, the software is
 * provided under the following open source license terms:
 *
 * The Alfresco Example Content Application is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * The Alfresco Example Content Application is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with Alfresco. If not, see <http://www.gnu.org/licenses/>.
 */

import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { TranslationService, AlfrescoApiService, NotificationService } from '@alfresco/adf-core';
import { MinimalNodeEntity, FilesApi, RootCategoryBodyCreate } from 'alfresco-js-api';

@Directive({
    selector: '[app-declare-record]'
})
export class NodeDeclareRecordDirective {

    // tslint:disable-next-line:no-input-rename
    @Input('app-declare-record')
    selection: MinimalNodeEntity[];

    constructor(
        private apiService: AlfrescoApiService,
        private el: ElementRef) {
    }

    @HostListener('click')
    onClick() {
        if (this.selection.length > 0) {
            this.declareRecord(this.selection);
        }
    }

    private async declareRecord(files: MinimalNodeEntity[]) {
        const promises = files
            .map(file => this.apiService.getInstance().gsCore.filesApi.declareRecord(file.entry.id));
        await Promise.all(promises);
        this.emitDone();

        // const promises = files
        //     .map(file => this.apiService.getInstance().gsCore.recordCategoriesApi.deleteRecordCategory(file.entry.id));
        // await Promise.all(promises);
        // this.emitDone();
    }

    private emitDone() {
        const e = new CustomEvent('selection-declare-record', { bubbles: true });
        this.el.nativeElement.dispatchEvent(e);
    }

}
