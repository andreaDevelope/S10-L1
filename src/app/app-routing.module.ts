import { ActivePostsComponent } from './pages/active-posts/active-posts.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { InactivePostsComponent } from './pages/inactive-posts/inactive-posts.component';
import { PostsDetailsComponent } from './pages/posts-details/posts-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'active-posts', component: ActivePostsComponent },
  { path: 'inactive-posts', component: InactivePostsComponent },
  { path: 'posts-details/:id', component: PostsDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
