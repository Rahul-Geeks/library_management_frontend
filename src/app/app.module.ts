import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FrontPageComponent } from './components/member/front-page/front-page.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { IssuedBooksComponent } from './components/member/issued-books/issued-books.component';
import { BooksIssuedComponent } from './components/librarian/books-issued/books-issued.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    IssuedBooksComponent,
    BooksIssuedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
