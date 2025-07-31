import config from '../config.js';
import { Client, Account } from 'appwrite'; 

export class AuthService{

      
    Client = new Client();
    account 

    constructor() {
        this.client = new Client()
             .setEndpoint(config.appwrite.appwriteUrl) // Your Appwrite Endpoint
             .setProject(config.appwrite.appwriteProjectId);
             this.account = new Account(this.client);
    }
    async createAccount(email, password, name) {
        try {
           const useracoount  = await this.account.create(ID.unique,email, password, name);
          if(useracoount) {
            //call another  method
            return this.login(email, password);
          }else return username;
        } catch (error) { 
            throw error;
        }
    }

    async login(email, password) {
        try {
           return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async currentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
        }

        return null;
    }

    async logout() {
        try {
            return await this.account.deleteSessions
        } catch (error) {
            throw error;
        }
    }
}
const authService = new AuthService();


export default AuthService;