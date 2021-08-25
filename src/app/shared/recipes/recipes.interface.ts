export interface Recipe {
  recipeId: number;
  name: string;
  image?: string;
}

export const dummyData: Recipe[] = [
  {recipeId: 1, name: 'Test Recipe 1'},
  {recipeId: 2, name: 'Test Recipe 2'},
  {recipeId: 3, name: 'Test Recipe 3'}
];
