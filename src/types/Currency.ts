export interface Currency {
    featured: boolean;
    hasExternalId: boolean;
    image: string;
    isFiat: boolean;
    isStable: boolean;
    name: string;
    supportsFixedRate: boolean;
    ticker: string;
}