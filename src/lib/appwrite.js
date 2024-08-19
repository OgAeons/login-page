import { Client, Account} from 'appwrite';

export const client = new Client();

client
    .setEndpoint('your endpoint url')
    .setProject('your project id');

export const account = new Account(client);
export { ID } from 'appwrite';