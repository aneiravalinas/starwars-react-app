import { Character } from "../entity/Character";
import { Page } from "../entity/Page";
import { apiClient } from "./ApiClient";
import { Params, ParamsBuilder } from './ParamsBuilder';
import { ErrorResponse } from '../entity/ErrorResponse';

export class CharacterApiService {

    private static handleErrorResponse(error: any): Promise<never> {
        return Promise.reject(new ErrorResponse(error.response.status, error.response.data.message));
    }

    static async retrieveCharacterPage(name: string, page: number): Promise<Page<Character>> {
        const params: Params = ParamsBuilder.builder()
                                .append('name', name)
                                .append('num_page', page.toString())
                                .build();

        try {
            const result = await apiClient.get(`/person-info`, { params })
            return result.data;
        } catch (error: any) {
            return this.handleErrorResponse(error);
        }
    }

}