import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SignatureData } from 'src/app/models/signatureData';
import { environment } from 'src/environments/environment';

@Injectable()
export class SignaturesService {
    private hostUrl: string;
    constructor(private http: HttpClient) {
        this.hostUrl = environment.backendUrl;
    }

    getSignatures(): Observable<SignatureData[]> {
        return this.http.get<SignatureData[]>(`${this.hostUrl}/api/Signatures`);
    }

    postSignatureRequest(formData: FormData): Observable<any> {
        let headers = new HttpHeaders();

        /** In Angular 5, including the header Content-Type can invalidate your request */
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Content-Disposition', 'multipart/form-data');
    
        let options = { headers: headers };
        return this.http.post(`${this.hostUrl}/api/Signatures`, formData, options);
    }
}