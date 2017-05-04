export namespace Resources {
    export interface Resource {
        id: string
        title: string;
        reviewCount: number;
        type: string;
        urlShort: string;
        tags: string[],
        rating: number,
        relatedResources: Resource[];
    }
}