![Badge-Decodificador](Badge%20-%20Decodificador.png)

# Decodificador ONE
O DecodONE é um Aplicativo web que decodifica mensagens simples, ele foi desenvolvido para o desafio do programa ONE - Oracle Next Education, em parceria com a Alura. 
A proposta do desafio é de desenvolver um decodificador de texto que transforma as vogais mínusculas e não acentuadas em pequenas palavras pré-definidas, embaralhando a leitura convencional.

Como o objetivo do desafio é consolidar o aprendizado de desenvolvimento web com **HTML**, **CSS** e **Javascript**; foi proposto aos alunos o desafio de implementar funcionalidades opcionais que podem acrescentar na experiência do usuário dentro da aplicação, como um botão de copiar o texto de saída para área de transferência e a responsividade da tela para diferentes dispositivos. Eu aceitei o desafio da implementação de funcionalidades opcionais e também defini para mim, o desafio de criar um armazenamento local para as mensagens codificadas dos usuários, algo que eu nunca tinha feito anteriormente.

**[Clique aqui para conferir o resultado](https://vlozo.github.io/Decode-ONE/)**

## Considerações sobre o desenvolvimento
A parte de desenvolvimento com Javascript foi bem tranquila, eu já tinha conhecimento prévio da linguagem então as funcionalidades principais do aplicativo não foram
difíceis de realizar. Minha preocupação maior era como utilizar o local storage, e pelos meus achismos acreditei que seria algo terrivelmente complicado, porém com uma breve pesquisa vi que era incrívelmente simples de lidar. Mesmo assim eu enfrentei algumas dificuldades enquanto tentava armazenar objetos em uma mesma chave, pois pela forma que o navegador lida com os dados armazenados se eu limpasse o cache sem recarregar a página e gerasse novas mensagens codificadas, acabava que os dados antes removidos eram todos recuperados, porque a chave que identifica o conjunto de objetos continuava a mesma. Acabei contornando isso ao forçar que a página recarregue quando o armazenamento for limpo, assim os dados são definitivamente apagados deixando o conjunto vazio para receber novos textos, não sei se é o melhor método, mas é o que funcionou para mim por hora.

Minhas maiores dificuldades com certeza foram com **CSS**, ainda que eu desenvolva estilos com frequência para meus projetos, a organização e o posicionamento dos elementos é algo que eu preciso trabalhar mais. Optei por desenvolver o estilo em "mobile-first" porque é uma metodologia que permite a "fácil" adaptação de media-query no decorrer do processo. Eu tenho melhorado bastante com flexbox e ao desenvolver o ajuste de resolução para desktop me aventurei a utilizar display grid acreditando que seria igual, de certa forma sim, mas quebrei a cara ao me deparar com configuração de linhas e colunas. Depois de um **BOM** tempo lendo a documentação e alguns tutoriais consegui realizar o que eu tinha em mente, mas ainda vejo muito espaço para melhorar.
