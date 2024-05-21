# Backend do Projeto PetGuardian   

<br>
 <h1 align="left"> :large_orange_diamond: Olá <img src="https://raw.githubusercontent.com/kaueMarques/kaueMarques/master/hi.gif" height="30px"></h1>
<br>

#  :large_orange_diamond: Descrição do Projeto :page_with_curl: <br>
## Este projeto é um servidor backend para o sistema PetGuardian, que gerencia informações de adotantes e animais. <br> Ele utiliza Node.js com o framework Express para criar rotas e interagir com um banco de dados MySQL.

Dispõe das seguintes funcionalidades:

| :small_orange_diamond: :small_orange_diamond: :large_orange_diamond:  Backend :large_orange_diamond: :small_orange_diamond: :small_orange_diamond:| :small_orange_diamond: Pagina Login 
|:--------------|:-----
| :small_orange_diamond: Página Cadastro de Adotantes ; :white_check_mark: | :small_orange_diamond: Página Cadastro de Animais ; :white_check_mark:
| |    
| :small_orange_diamond: Página Lista Adotantes ; :white_check_mark:   |   :small_orange_diamond: Página Lista Animais ; :white_check_mark:  

*****

# :large_orange_diamond: Tecnologias Utilizadas
🔸 **JavaScript**  <img align="center" alt="Js" height="30" width="30" src="https://cdn.iconscout.com/icon/premium/png-512-thumb/javascript-2752148-2284965.png?f=webp&w=256"> 
Linguagem de programação utilizada para escrever o código do servidor.<br>

🔸 **Node.js**  <img align="center" alt="Js" height="70" width="70" src="https://cdn.iconscout.com/icon/free/png-512/free-node-js-2-1174936.png?f=webp&w=256">
Ambiente de execução para JavaScript no servidor.<br>
 
🔸 **Express** <img align="center" alt="Js" height="40" width="40" src="https://cdn.iconscout.com/icon/premium/png-512-thumb/express-js-11217675-9200670.png?f=webp&w=256">
Framework web para Node.js que simplifica a criação de servidores HTTP.<br>

🔸 **Banco de dados MySQL** <img align="center" alt="Js" height="60" width="60" src="https://cdn.iconscout.com/icon/free/png-512/free-mysql-3521596-2945040.png?f=webp&w=256">
Sistema de gerenciamento de banco de dados relacional.<br>

*****

#  :large_orange_diamond: Pré-requisitos
###  :small_orange_diamond: Node.js e npm (Node Package Manager) instalados.<br>
###  :small_orange_diamond: MySQL instalado e configurado.<br>
###  :small_orange_diamond: Banco de dados petguardian com as tabelas adotante e animal criadas.<br>

*****
# :large_orange_diamond: Rotas Disponíveis<br>
### :large_orange_diamond: Adotante                                                                                                               
* GET /adotante: Busca todos os adotantes.<br>
* POST /adotante: Insere um novo adotante.<br>
* PUT /adotante/:cpf: Atualiza um adotante existente.<br>
* DELETE /adotante/:cpf: Exclui um adotante.<br>

### :large_orange_diamond: Animal<br>
* GET /animal: Busca todos os animais.<br>
* POST /animal: Insere um novo animal.<br>
* PUT /animal/:matricula: Atualiza um animal existente.<br>
* DELETE /animal/:matricula: Exclui um animal.<br>

*****
#  :large_orange_diamond: Layout do Código : :notebook_with_decorative_cover:
![ezgif com-animated-gif-maker (3)](https://github.com/kenpsrossi/test_co/assets/102131657/59fb82eb-21ca-4492-bfb6-1a957439f15b)

*****

# :large_orange_diamond: Como executar o Backend: :bulb:

##  :flashlight: Front end : :octocat: https://github.com/kenpsrossi/Backend-JS
- Pré-requisitos : 

```bash
# Clonar repositório
https://github.com/kenpsrossi/Backend-JS.git

# Entrar na pasta do projeto 

# Instalar dependências
npm install

# Inicie o servidor
node app.js

O servidor estará rodando na porta 3000.

```
