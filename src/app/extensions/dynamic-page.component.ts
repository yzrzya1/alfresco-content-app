/*!
 * @license
 * Alfresco Example Content Application
 *
 * Copyright (C) 2005 - 2019 Alfresco Software Limited
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

import { ActivatedRoute } from '@angular/router';
import {
  OnInit,
  Component,
  Injector,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { PluginLoaderService } from './plugin-loader/plugin-loader.service';

export interface DynamicPageProps {
  pluginId: string;
  componentId: string;
}

@Component({
  selector: 'app-dynamic-page',
  template: '<ng-container #content></ng-container>'
})
export class DynamicPageComponent implements OnInit {
  @ViewChild('content', { read: ViewContainerRef })
  content: ViewContainerRef;

  constructor(
    private route: ActivatedRoute,
    private injector: Injector,
    private pluginLoader: PluginLoaderService
  ) {}

  ngOnInit() {
    const data = this.route.snapshot.data as DynamicPageProps;
    console.log(data);

    if (data && data.pluginId && data.componentId) {
      this.loadPlugin(data.pluginId, data.componentId);
    }
  }

  async loadPlugin(pluginName: string, componentId: string) {
    const moduleFactory = await this.pluginLoader.load(pluginName);
    const moduleRef = moduleFactory.create(this.injector);
    // const entryComponent = (moduleFactory.moduleType as any).entry;
    const entryComponent = (moduleFactory.moduleType as any)[componentId];
    const compFactory = moduleRef.componentFactoryResolver.resolveComponentFactory(
      entryComponent
    );
    this.content.createComponent(compFactory);
  }
}
