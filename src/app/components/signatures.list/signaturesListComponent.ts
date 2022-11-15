import { Component } from '@angular/core';
import { SignatureData } from 'src/app/models/signatureData';
import { SignaturesService } from 'src/app/services/signaturesService';

@Component({
  selector: 'signatures-list',
  templateUrl: './signaturesListComponent.html',
})
export class SignaturesListComponent {
  signatures: SignatureData[] = [];

  constructor(private signaturesService: SignaturesService) {
    // todo: move to a service
    // todo: configure host
    this.signaturesService.getSignatures().subscribe(res => {
      this.signatures = res as SignatureData[]
    });
  }
}
