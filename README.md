# 🎁 Gift List

Aplicação **Angular** integrada ao **Firebase Firestore** para gerenciamento de presentes.
Permite cadastrar, listar, editar e remover presentes em tempo real.

---

## 🚀 Tecnologias
- [Angular 19](https://angular.dev/)
- [Firebase Firestore](https://firebase.google.com/docs/firestore)
- [TypeScript](https://www.typescriptlang.org/)

---

## 📂 Estrutura do Projeto
src/
├─ app/ # Componentes, serviços e módulos
├─ assets/ # Imagens e arquivos estáticos
├─ environments/ # Configurações para dev/prod
├─ index.html # HTML principal
└─ main.ts # Ponto de entrada da aplicação


---

## ⚙️ Pré-requisitos
- **Node.js** 18+
- **Angular CLI** 19+
- Conta no [Firebase](https://console.firebase.google.com/)

---

## 🛠️ Configuração

1.  **Clonar o repositório**
    ```bash
    git clone [https://github.com/](https://github.com/)<seu-usuario>/gift-list.git
    cd gift-list
    ```

2.  **Instalar dependências**
    ```bash
    npm install
    ```

3.  **Configurar Firebase**
    * Crie um projeto no [Firebase Console](https://console.firebase.google.com/).
    * Ative o **Firestore Database** em modo de teste ou produção.
    * Vá em **Configurações do Projeto > Suas apps > Web** e copie as credenciais.
    * No arquivo `src/environments/environment.ts`, adicione as credenciais:
    ```ts
    export const environment = {
      production: false,
      firebase: {
        apiKey: "SUA_API_KEY",
        authDomain: "SEU_DOMINIO.firebaseapp.com",
        projectId: "SEU_PROJECT_ID",
        storageBucket: "SEU_BUCKET.appspot.com",
        messagingSenderId: "SEU_SENDER_ID",
        appId: "SUA_APP_ID"
      }
    };
    ```

---

## 🚀 Rodar em desenvolvimento
```bash
ng serve
```
Acesse a aplicação em http://localhost:4200.

## 📦 Build para produção
```Bash
ng build
```
Os arquivos prontos para deploy estarão na pasta dist/.

## ☁️ Deploy no Firebase Hosting (opcional)
Instale a CLI:

```Bash
npm install -g firebase-tools
```
## Inicialize o hosting:

```Bash
firebase login
firebase init
```
## Faça o deploy:

```Bash
firebase deploy
```

## 🧩 Funcionalidades
- CRUD de Presentes: adicione, edite ou remova presentes em tempo real.

- Integração com Firestore: dados persistidos e sincronizados automaticamente.

- Interface Responsiva: desenvolvida com Angular e CSS.

### 🤝 Contribuição
Contribuições são bem-vindas!
Faça um fork, crie uma branch com sua feature e abra um pull request.

Feito com ❤️ em Angular + Firebase.