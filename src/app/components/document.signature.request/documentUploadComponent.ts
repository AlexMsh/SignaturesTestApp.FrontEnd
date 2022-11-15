import { Component } from '@angular/core';
import { DocumentSignatureModel } from 'src/app/models/documentSignatureModel';
import { SignaturesService } from 'src/app/services/signaturesService';

@Component({
  selector: 'document-signature-request',
  templateUrl: './documentUploadComponent.html',
})
export class DocumentSignatureRequestComponent {
  file: File|undefined;
  signatureModel: DocumentSignatureModel = {
    message: '',
    recipientName: '',
    recipientEmail: ''
  } as DocumentSignatureModel;

  isUploading: boolean = false;

  constructor(private signaturesService: SignaturesService) {}

  private isValid(): boolean {
    return this.file != null 
    && this.signatureModel.message != null 
    && this.signatureModel.recipientEmail != null 
    && this.signatureModel.recipientName != null;
  }

  onSubmit() {
    if (!this.isValid()) {
      return;
    }
    
    const formData = new FormData();
    if (this.file) {
      formData.append('file', this.file, this.file.name);
      formData.append('message', this.signatureModel.message);
      formData.append('recipientName', this.signatureModel.recipientName);
      formData.append('recipientEmail', this.signatureModel.recipientEmail);
    }

    this.isUploading = true;
    this.signaturesService.postSignatureRequest(formData).subscribe({
      complete: () => this.isUploading = false,
      error: () => this.isUploading = false
    });
  }

  onFileSelected(event: any) {
    this.file = event.target.files[0]; 
  }
}
