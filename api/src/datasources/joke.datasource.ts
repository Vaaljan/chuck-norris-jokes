import { RESTDataSource } from 'apollo-datasource-rest';

export class JokeDataSource extends RESTDataSource {

    constructor() {
        super()
        this.baseURL = 'https://api.chucknorris.io/jokes/';
        
    }

    async getJokeCategories(): Promise<any> {
        try {
            const res = await this.get('categories');
            return res ? res : [];
        } catch (error) {
            throw error;
        }
    }

    async getJokeByCategory(category : string): Promise<any> {
        try {
            return this.get('random',category);
        }
        catch (error) {
            throw error;
        }
    }

};