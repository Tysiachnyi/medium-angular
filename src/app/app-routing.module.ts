import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AllPostsComponent} from './pages/all-posts/all-posts.component';

const routes: Routes = [{path: '', component: AllPostsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
