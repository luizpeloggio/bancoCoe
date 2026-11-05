<div align="center">

# 🏦 Banco Coe

**Site institucional fictício de um banco digital, com simulador interativo de aplicativo mobile.**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![jQuery](https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white)

</div>

---

> ⚠️ **Projeto fictício, com fins exclusivamente educacionais e de portfólio.**
> O Banco Coe, a cidade de Coelhândia, o CNPJ, as taxas, os valores e todos os dados exibidos são inventados. Não se trata de uma instituição financeira real e a página não coleta nem processa nenhuma informação.

<!-- Para adicionar uma prévia, salve um print em docs/preview.png e descomente a linha abaixo -->
<!-- ![Prévia do projeto](docs/preview.png) -->

## 📖 Sobre o projeto

O **Banco Coe** é uma página institucional criada para praticar o desenvolvimento de interfaces web com HTML, CSS e JavaScript, sem back-end. O projeto reproduz a estrutura de um site bancário real: menus de navegação por segmento, manifesto da instituição, vitrine de cartões e rodapé institucional.

O destaque é um **simulador de aplicativo bancário** desenhado inteiramente em CSS, no formato de um smartphone, que reage aos cliques do usuário.

## ✨ Funcionalidades

- **Menus de navegação por segmento:** Setor Público, Para Você, Para Negócios e Indústria
- **Manifesto institucional** com botão "Ver Mais" que expande o texto completo
- **Simulador de smartphone interativo**
  - Menu lateral que abre e fecha pelo botão "Voltar"
  - Atalhos de **Empréstimos**, **Fatura**, **Cofrinho** e **Pix** que exibem telas de exemplo
  - Vitrine de cartão de crédito e de investimentos dentro do aplicativo
- **Vitrine de cartões:** Black, Empresas, Gold e Pessoal
- **Galeria de momentos:** ao clicar em uma imagem, ela se expande e mostra o texto correspondente
- **Rodapé institucional** com seções de transparência, produtos digitais e ouvidoria

## 🛠️ Tecnologias

| Tecnologia | Uso |
|---|---|
| **HTML5** | Estrutura semântica das seções |
| **CSS3** | Layout, simulador de smartphone e animações de transição |
| **JavaScript** | Interações do manifesto e do menu do aplicativo |
| **jQuery 3.7.1** | Alternância das telas do app e expansão da galeria (arquivo local em `start/jquery.js`) |

## 📁 Estrutura do projeto

```
bancoCoe/
├── README.md
└── Banco Coe/
    └── Coe/
        ├── index.html
        ├── css/
        │   └── style.css
        ├── js/
        │   └── function.js
        ├── start/
        │   └── jquery.js
        └── img/
```

## 🚀 Como executar

Não há dependências nem etapa de build.

```bash
# Clone o repositório
git clone https://github.com/luizpeloggio/bancoCoe.git

# Acesse a pasta do projeto
cd "bancoCoe/Banco Coe/Coe"

# Abra o index.html no navegador
```

Se preferir, use a extensão **Live Server** do VS Code, que atualiza a página automaticamente a cada alteração.

## 🗺️ Próximos passos

- [ ] Tornar o layout responsivo para tablets e celulares com *media queries*
- [ ] Substituir os links de exemplo dos cartões por páginas reais de detalhes
- [ ] Ativar as opções dos menus de navegação
- [ ] Adicionar uma prévia (print) do projeto a este README

## 🎯 Aprendizados

- Construção de componentes complexos, como o simulador de smartphone, apenas com CSS
- Manipulação do DOM com JavaScript puro e com jQuery
- Alternância de estados visuais com classes CSS e transições
- Organização de uma página longa em seções independentes

## 👤 Autor

**Luiz Neto** — Desenvolvedor Front-End

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/luizpeloggio)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/luiz-neto-698430218/)
