import { Character } from "../entity/Character";
import { Page } from "../entity/Page";
import { apiClient } from "./ApiClient";
import { Params, ParamsBuilder } from './ParamsBuilder';

export class CharacterApiService {

    static async retrieveCharacterPage(name: string, page: number): Promise<Page<Character>> {
        const params: Params = ParamsBuilder.builder()
                                .append('name', name)
                                .append('num_page', page.toString())
                                .build();
        const result = await apiClient.get(`/person-info`, { params })
        return result.data;
    }

}