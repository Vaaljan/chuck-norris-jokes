"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const joke_datasource_1 = require("../joke.datasource");
describe('JokesAPI', () => {
    let JokesAPI;
    beforeEach(() => {
        JokesAPI = new joke_datasource_1.JokeDataSource();
    });
    it('[getJokeByCategory] returns random joke by category', () => __awaiter(void 0, void 0, void 0, function* () {
        const category = 'Animal';
        JokesAPI.get = jest.fn(() => category);
        expect(JokesAPI.get).toBeCalledWith('random', category);
    }));
    it('[getJokeCategories]', () => __awaiter(void 0, void 0, void 0, function* () {
        JokesAPI.get = jest.fn();
        const categories = yield JokesAPI.getJokeCategories();
        // Check if Categories return array of categories
        expect(JokesAPI.get).toBeCalledWith('categories');
        expect(Array.isArray(categories)).toBe(true);
    }));
});
//# sourceMappingURL=joke.datasource.test.js.map