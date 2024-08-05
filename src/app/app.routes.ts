import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [

    { path: '', component: SearchComponent }, // Default route
    { path: 'gallery', component: GalleryComponent },
    { path: '**', redirectTo: '' } // Wildcard route 
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
