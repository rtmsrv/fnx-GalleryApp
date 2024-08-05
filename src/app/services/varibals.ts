let Token: string  = "";


export const setToken = (newToken: string): void => {
  Token = `Bearer `+newToken;
  console.log(Token)
};


export const getToken = (): string  => Token;

let search: string  = "";


export const setSearchTarm = (searchTerm: string): void => {
  search = searchTerm;
};


export const getSearchTarm = (): string  => search;