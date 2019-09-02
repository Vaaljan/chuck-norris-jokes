"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_datasource_rest_1 = require("apollo-datasource-rest");
class JokeDataSource extends apollo_datasource_rest_1.RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://api.chucknorris.io/jokes/';
    }
    getJokeCategories() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield this.get('categories');
                return res ? res : [];
            }
            catch (error) {
                throw error;
            }
        });
    }
    getJokeByCategory(category) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return this.get('random', category);
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.JokeDataSource = JokeDataSource;
;
//# sourceMappingURL=datasource.js.map