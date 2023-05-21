export type Params = { [key: string]: string };

export class ParamsBuilder {
    private map: Map<string, string>;

    private constructor() {
        this.map = new Map();
    }

    public static builder(): ParamsBuilder {
        return new ParamsBuilder();
    }

    public append(key: string, value?: string): ParamsBuilder {
        if ( value ) {
            this.map.set(key, value);
        }
        
        return this;
    }

    public build(): Params {
        return Object.fromEntries(this.map);
    }
}