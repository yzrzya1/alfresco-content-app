import {
  Component,
  ContentChild,
  Input,
  TemplateRef,
  OnInit,
  ViewEncapsulation,
  OnDestroy
} from '@angular/core';
import { LinkListTemplateDirective } from './link/link-list-template.directive';
import { IconListTemplateDirective } from './icon-link/icon-list-template.directive';
import { AppExtensionService } from '../../extensions/extension.service';
import { NavBarGroupRef } from '@alfresco/adf-extensions';
import { Store } from '@ngrx/store';
import { AppStore } from '../../store/states';
import { ruleContext } from '../../store/selectors/app.selectors';
import { Subject } from 'rxjs';
import { takeUntil, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: { class: 'app-sidenav' }
})
export class SidenavComponent implements OnInit, OnDestroy {
  @Input() mode: 'collapsed' | 'expanded' = 'expanded';

  // Read in our structural directives as TemplateRefs
  @ContentChild(LinkListTemplateDirective, { read: TemplateRef })
  linkListTemplate;
  @ContentChild(IconListTemplateDirective, { read: TemplateRef })
  iconListTemplate;

  groups: Array<NavBarGroupRef> = [];
  private onDestroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private store: Store<AppStore>,
    private extensions: AppExtensionService
  ) {}

  ngOnInit() {
    this.store
      .select(ruleContext)
      .pipe(
        map(rules => rules.repository),
        distinctUntilChanged(),
        takeUntil(this.onDestroy$)
      )
      .subscribe(() => {
        this.groups = this.extensions.getApplicationNavigation(
          this.extensions.navbar
        );
      });
  }

  trackById(index: number, obj: { id: string }) {
    return obj.id;
  }

  ngOnDestroy() {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }

  // groups = [
  //   {
  //     id: 'primary',
  //     items: [
  //       {
  //         description: 'Link 1',
  //         icon: 'extension',
  //         id: 'app.navbar.testLink',
  //         order: 1,
  //         route: '/1',
  //         title: 'Link 1'
  //       },
  //       {
  //         description: 'Link 2',
  //         id: 'app.navbar.testLink',
  //         order: 1,
  //         title: 'Link 2',
  //         children: [
  //           {
  //             id: 'app.navbar.libraries.files',
  //             order: 100,
  //             route: '/2',
  //             title: 'Child 1'
  //           },
  //           {
  //             id: 'app.navbar.libraries.files',
  //             order: 100,
  //             route: '/3',
  //             title: 'Child 2'
  //           }
  //         ]
  //       }
  //     ]
  //   },
  //   {
  //     id: 'secondary',
  //     items: [
  //       {
  //         description: 'Link 3',
  //         icon: 'extension',
  //         id: 'app.navbar.testLink',
  //         order: 1,
  //         route: '/4',
  //         title: 'Link 3'
  //       },
  //       {
  //         description: 'Link 4',
  //         icon: 'extension',
  //         id: 'app.navbar.testLink',
  //         order: 2,
  //         title: 'Link 4',
  //         children: [
  //           {
  //             description: 'Link 1',
  //             icon: 'extension',
  //             id: 'app.navbar.testLink',
  //             order: 1,
  //             route: '/5',
  //             title: 'Link 1'
  //           }
  //         ]
  //       }
  //     ]
  //   }
  // ];

  // trackById(index: number, obj: { id: string }) {
  //   return obj.id;
  // }
}
