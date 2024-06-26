import { User } from './user';

export interface Photo {
  // propriétés de l'utilisateur
  id: number;
  name: string;
  image: string;
  alt: string;
  owner: User;
  created: Date;
}
