import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { authGuard } from './_guards/auth.guard';

export const routes: Routes = [
    {path: '',component: HomeComponent},
    {
        path: '',        // Empty path to match the root URL i.e, localhost:4200/
                         // This is a lazy-loaded route, meaning the components will be loaded only when the user navigates to this path
        runGuardsAndResolvers: 'always',
        canActivate: [authGuard],
        children: [
            {path: 'members',component: MemberListComponent},
            {path: 'members/:id',component: MemberDetailComponent},
            {path: 'lists',component: ListsComponent},    // i.e, localhost:4200/lists
            {path: 'messages',component: MessagesComponent},
        ]
    }, 
    {path: '**',component: HomeComponent, pathMatch: 'full'},
];
