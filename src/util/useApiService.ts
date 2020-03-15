import { Root } from './../types/data.d';

async function useApiService() {
  const API_BASE_URL: string = 'https://api.magicthegathering.io/v1/cards';

  try {
    const response = await fetch(API_BASE_URL);
    const data: Root = await response.json();

    return data.cards;
  } catch (err) {
    throw err;
  }
}

export default useApiService;
