export interface ICreateClient {
  name: string;
  email: string;
  telephone: string;
  created_at: Date;
}

export interface IUpdateClient {
  id: string;
  name: string;
  email: string;
  telephone: string;
}

export interface IContact {
  id: string;
  name: string;
  email: string;
  telephone: string;
}

export interface IUpdateContact {
  id: string;
  name: string;
  email: string;
  telephone: string;
}
