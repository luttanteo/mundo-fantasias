# Projeto da aula de Desenvolvimento de Sistemas Web.
## Usando JavaScript, HTML, CSS e JSON para criar uma API de Fantasias

Esta API tem como objetivo fornecer dados sobre fantasias, podendo ser de carnaval, Halloween, personagens, entre outros. Funciona como um cardápio digital: você faz uma requisição e recebe os dados em formato JSON, podendo adicionar ou filtrar fantasias conforme a escolha do usuário.

**Exemplo de uso:**  
Alice deseja a fantasia da princesa Ana do filme Frozen. Ela busca por "Ana" no site e encontra rapidamente a fantasia desejada.

---

### Requisitos Funcionais

1. **Exibir uma lista de fantasias disponíveis**  
    - Apresentar ao usuário uma lista inicial com todas as fantasias cadastradas.
    - Cada item deve conter: nome, categoria (ex: Halloween, Carnaval, Personagens) e breve descrição.
    - A lista é exibida ao carregar o site, permitindo navegação pelas opções.

2. **Permitir busca por nome da fantasia**  
    - Campo de busca para digitar o nome (ou parte do nome) da fantasia.
    - Filtrar resultados com base no texto digitado, ignorando maiúsculas/minúsculas.
    - Exemplo: ao digitar “Ana”, retorna “Princesa Ana”.

3. **Filtrar fantasias por categoria**  
    - Permitir seleção de uma categoria específica (ex:  Halloween, Carnaval, Personagens).
    - Pode ser implementado como menu suspenso ou botões interativos.

4. **Mostrar detalhes da fantasia selecionada**  
    - Ao selecionar uma fantasia, exibir detalhes completos: nome, categoria, descrição detalhada (opcional), imagem, preço ou disponibilidade (opcional).

5. **Utilizar JSON como fonte de dados**  
    - Todas as informações das fantasias devem estar em um arquivo ou estrutura JSON.
    - O arquivo será manipulado via JavaScript para exibir, filtrar e mostrar detalhes.

6. **Interface responsiva e amigável**  
    - Compatível com desktops.
    - Visualmente agradável, com uso de cores, ícones e espaçamento adequado.
    - Intuitiva, facilitando a busca e seleção de fantasias pelo usuário.
