import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { SearchComponent } from './components/search/search.component';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpService } from './services/httpService';
import { AppRoutingModule } from './app.routes';

@NgModule({
  declarations: [AppComponent,GalleryComponent, SearchComponent],
  imports: [
    MatInputModule,
    BrowserModule,
    NgOptimizedImage,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CommonModule,
    MatButtonModule,
    HttpClientModule,
    AppRoutingModule 
  ],

  providers: [HttpService],
  bootstrap: [AppComponent],
})
export class AppModule {}
