<h1 align="center">API Minha Agenda</h1>

- Simula uma agenda virtual, onde o usuário se cadastra como também cadastra e deleta seus contatos. Projeto em NodeJs.

## Tecnologias e ferramentas :wrench:

- Nodejs
- Express
- Typeorm
- Typescript
- Uuid
- Postgres

## Como utilizar:

### BASE URL:

https://github.com/suellykarine/projeto-minhaagenda-frontend

- Clone o repositório
- Rode a aplicação em localhost

### BASE API:

https://github.com/suellykarine/api-res-minhaagenda

- Clone o repositório da api
- Rode a aplicação em localhost
- Projeto em Nodejs

## Notes:

- Routes that uses ID are in the uuid format.

## Route Client:

### POST /client

#### Cria um cliente

ERRORS:

- 400 Incorrect body format;
- 500 Interal server error;

Body format:

```

{
  "name": "suelly",
  "email": "email@mail.com",
  "telephone": "123456789"

```

Response:

> 201 OK

```

{
  "id": "223ko2idmw-32le-23e233dpfs",
  "name": "suelly",
  "email": "email@mail.com",
  "telephone": 123456789,
  "created_at": "Date"
}

```

### GET /client

#### Lista todos os clientes

ERRORS:

- 404 not found;
- 500 Internal server error;

Response:

> 200 OK

```


{
  "id": "223ko2idmw-32le-23e233dpfs"
  "user_name": "suelly",
  "email": "email@mail.com",
  "telephone": 123456789,
  "created_at": "Date"
}


```

### GET /client/:id

#### lista um cliente

ERRORS:

- 400 ID need to be uuid format;
- 404 ID not found;
- 500 Internal server error;

Response:

> 200 OK

```

{
  "id": "223ko2idmw-32le-23e233dpfs"
  "name": "suelly",
  "email": "email@mail.com",
  "is_adm": true,
  "creattelephone": "Date"
}

```

### PATCH /client/:id

#### Atualiza um cliente

ERRORS:

- 400 ID need to be uuid format;
- 404 ID not found;
- 500 Internal server error;

Body format,
both changes are optional:

```

{
  "email": "new@email.com",
  "telephone": "newtelephone"
}

```

Response:

> 200 OK

```
{
  "id": "223ko2idmw-32le-23e233dpfs"
  "name": "fabio",
  "email": "new@email.com",
  "telefone": newtelephone,
  "created_at": "Date"
}

```

### DELETE /client/:id

#### Deleta um cliente

ERR0RS:

- 404 ID not found;
- 500 Internal server error;

Response:

> 200 OK

## Route Contacts

### POST /contact/:client_id

#### Cria um contato

ERRORS:

- 400 Incorrect body format;
- 500 Interal server error;
- 404 ID not exist;

Body format:

```

{
  "name": "fabio",
  "email": "email@mail.com",
  "telephone": "123456789"

```

Response:

> 201 OK

```

{
  "id": "223ko2idmw-32le-23e233dpfs",
  "name": "fabio",
  "email": "email@mail.com",
  "telephone": 123456789,
  "client": {
    "id": "80c23594-a542-4d35-b81f-ad199c87a6e2",
	"name": "suelly",
	"email": "email@mail.com.br",
	"telephone": "123456789",
	"created_at: date"
    }
}

```

### GET /contact

#### Lista todos os contatos

ERRORS:

- 404 ID not found;
- 500 Internal server error;

Response:

> 200 OK

```

{
  "id": "223ko2idmw-32le-23e233dpfs"
  "name": "fabio",
  "email": "email@mail.com",
  "telephone": 123456789,
  "client": {
			"id": "80c23594-a542-4d35-b81f-ad199c87a6e2",
			"name": "suelly",
			"email": "mail@mail.com.br",
			"telephone": "123456789",
			"created_at": "2022-09-22T19:31:15.553Z",
  }


```

### GET /contact/:id

#### Lista um contato

ERRORS:

- 400 ID need to be uuid format;
- 404 ID not found;
- 500 Internal server error;

Response:

> 200 OK

```

{
  "id": "223ko2idmw-32le-23e233dpfs"
  "name": "fabio",
  "email": "email@mail.com",
  "telephone": 123456789,
  "client": {
			"id": "80c23594-a542-4d35-b81f-ad199c87a6e2",
			"name": "suelly",
			"email": "mail@mail.com.br",
			"telephone": "123456789",
			"created_at": "2022-09-22T19:31:15.553Z",
}

```

### PATCH /contact/:id

#### Atualiza um contato

ERRORS:

- 400 ID need to be uuid format;
- 404 ID not found;
- 500 Internal server error;

Body format,
both changes are optional:

```

{
  "email": "new@email.com",
  "telephone": "newtelephone"
}

```

Response:

> 200 OK

```
{
  "id": "223ko2idmw-32le-23e233dpfs"
  "name": "fabio",
  "email": "new@email.com",
  "telefone": newtelephone,
  "client": {
			"id": "80c23594-a542-4d35-b81f-ad199c87a6e2",
			"name": "suelly",
			"email": "mail@mail.com.br",
			"telephone": "123456789",
			"created_at": "2022-09-22T19:31:15.553Z",
}

  }

```

### DELETE /contact/:id

#### Deleta um contato

ERR0RS:

- 404 ID not found;
- 500 Internal server error;

Response:

> 200 OK
