export interface SignatureData {
    id: string;
    recipient: Recipient|null
    status: string;
}

export interface Recipient {
    email: string;
    name: string;
}