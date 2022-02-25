export interface Account {
  id: string;
  tokensOwned: string;
  tokens: Tokens[];
}

interface Tokens {
  id: string;
  event: Event;
  created: string;
}

interface Event {
  id: string;
}
