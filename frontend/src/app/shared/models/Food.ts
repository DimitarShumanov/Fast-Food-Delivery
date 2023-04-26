export class Food {
    id!: string;
    name!: string;
    price!: number;
    tags?: string[];
    stars: number = 0;
    favorite!: boolean;
    imageUrl!: string;
    origins!: string[];
    cookingTime!: string;
    description!: string;
    isOnSale!: boolean;
    salePrice!: number;
}