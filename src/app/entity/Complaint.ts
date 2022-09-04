export class Complaint {
    name: string = '';

    id: number;
    owner_username : string;
    owner_email    : string;
    client  : string;
    client_email    : string
    client_username : string;
    text: string;
    answer  : string;
    answered: Boolean;
    ownerId : string;
    clientId : string;

    constructor(  id: number, owner_username : string, owner_email : string, client  : string, client_email    : string, client_username : string, text: string, answer  : string,  answered: Boolean,  ownerId : string, clientId : string) {
        this.id = id;
        this.owner_username = owner_username;
        this.owner_email = owner_email;
        this.client = client;
        this.client_email = client_email;
        this.client_username = client_username;
        this.text = text;
        this.answer = answer;
        this.answered = answered;
        this.ownerId = ownerId;
        this.clientId = clientId;
    }


}
