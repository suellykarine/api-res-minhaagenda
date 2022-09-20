export interface ICreateClient {
  name: string;
  email: string;
  telephone: number;
  created_at: Date;
}

export interface IUpdateClient {
  id: string;
  name: string;
  email: string;
  telephone: number;
}
