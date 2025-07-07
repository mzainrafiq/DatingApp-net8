import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { authGuard } from './_guards/auth.guard';
import { TestErrorsComponent } from './errors/test-errors/test-errors.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';

export const routes: Routes = [
    {path: '',component: HomeComponent},
    {
        path: '',        // Empty path to match the root URL i.e, localhost:4200/
                         // This is a lazy-loaded route, meaning the components will be loaded only when the user navigates to this path
        runGuardsAndResolvers: 'always',
        canActivate: [authGuard],
        children: [
            {path: 'members',component: MemberListComponent},
            {path: 'members/:username',component: MemberDetailComponent},
            {path: 'lists',component: ListsComponent},    // i.e, localhost:4200/lists
            {path: 'messages',component: MessagesComponent},
        ]
    }, 
    {path: 'errors', component: TestErrorsComponent},
    {path: 'not-found', component: NotFoundComponent},
    {path: 'server-error', component: ServerErrorComponent},
    {path: '**',component: HomeComponent, pathMatch: 'full'}, // Wildcard route is typically used as a fallback for any undefined or incorrect routes, 
                // and in your case, it redirects to the HomeComponent if no other routes match.
];
