import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SignaturesListComponent } from './components/signatures.list/signaturesListComponent';
import { DocumentSignatureRequestComponent } from './components/document.signature.request/documentUploadComponent';

const routes: Routes = [
  { path: '', component: DocumentSignatureRequestComponent },
  { path: 'list', component: SignaturesListComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
