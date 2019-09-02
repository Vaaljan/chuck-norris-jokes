import { JokeDataSource } from "../joke.datasource";


describe('JokesAPI', () => {
  let JokesAPI;

  beforeEach(() => {
    JokesAPI = new JokeDataSource();
  });

  it('[getJokeByCategory] returns random joke by category', async () => {
    const category = 'Animal';
    JokesAPI.get = jest.fn(() => category);

    expect(JokesAPI.get).toBeCalledWith('random',category);
  });

  it('[getJokeCategories]', async () => {
    JokesAPI.get = jest.fn();
    const categories = await JokesAPI.getJokeCategories();

    // Check if Categories return array of categories
    expect(JokesAPI.get).toBeCalledWith('categories');
    expect(Array.isArray(categories)).toBe(true);
  
  });
});
