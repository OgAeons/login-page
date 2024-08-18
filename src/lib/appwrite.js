import { Client, Account} from 'appwrite';

export const client = new Client();

client
    .setEndpoint('http://localhost/v1')
    .setProject('66c1ea050006d7f81a50');

export const account = new Account(client);
export { ID } from 'appwrite';
