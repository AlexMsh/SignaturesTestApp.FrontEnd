import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocumentSignatureRequestComponent } from './components/document.signature.request/documentUploadComponent';
import { SignaturesListComponent } from './components/signatures.list/signaturesListComponent';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SignaturesService } from './services/signaturesService';

@NgModule({
  declarations: [
    AppComponent,
    DocumentSignatureRequestComponent,
    SignaturesListComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    SignaturesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
