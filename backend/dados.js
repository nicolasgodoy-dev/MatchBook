/*
Este arquivo é responsável por simular um banco de dados da aplicação.
Como o projeto utiliza apenas HTML, CSS e JavaScript puro (sem backend),
os dados são armazenados e gerenciados localmente neste arquivo JavaScript,
permitindo testes, prototipação e funcionamento das funcionalidades
sem a necessidade de um servidor ou banco de dados real.
*/

const livros =
    [
        {
            "id": 1,
            "titulo": "Dom Casmurro",
            "autor": "Machado de Assis",
            "ano": 1899,
            "genero": "Romance",
            "categoria": "Clássico Brasileiro",
            "descricao": "A história de Bento Santiago e sua dúvida eterna sobre a traição de Capitu.",
            "imagem": "https://covers.openlibrary.org/b/id/8225631-L.jpg"
        },
        {
            "id": 2,
            "titulo": "1984",
            "autor": "George Orwell",
            "ano": 1949,
            "genero": "Ficção Científica",
            "categoria": "Distopia",
            "descricao": "Uma sociedade totalitária sob o olhar constante do Grande Irmão.",
            "imagem": "https://covers.openlibrary.org/b/id/7222246-L.jpg"
        },
        {
            "id": 3,
            "titulo": "O Retrato de Dorian Gray",
            "autor": "Oscar Wilde",
            "ano": 1890,
            "genero": "Romance Gótico",
            "categoria": "Clássico",
            "descricao": "Um jovem vende sua alma para que um retrato envelheça em seu lugar.",
            "imagem": "https://covers.openlibrary.org/b/id/8228638-L.jpg"
        },
        {
            "id": 4,
            "titulo": "Orgulho e Preconceito",
            "autor": "Jane Austen",
            "ano": 1813,
            "genero": "Romance",
            "categoria": "Clássico",
            "descricao": "O embate entre a espirituosa Elizabeth Bennet e o orgulhoso Sr. Darcy.",
            "imagem": "https://covers.openlibrary.org/b/id/8231856-L.jpg"
        },
        {
            "id": 5,
            "titulo": "Cem Anos de Solidão",
            "autor": "Gabriel García Márquez",
            "ano": 1967,
            "genero": "Realismo Mágico",
            "categoria": "Clássico Latino",
            "descricao": "A saga de gerações da família Buendía na cidade fictícia de Macondo.",
            "imagem": "https://covers.openlibrary.org/b/id/12662833-L.jpg"
        },
        {
            "id": 6,
            "titulo": "Crime e Castigo",
            "autor": "Fiódor Dostoiévski",
            "ano": 1866,
            "genero": "Romance Psicológico",
            "categoria": "Clássico Russo",
            "descricao": "Raskólnikov comete um assassinato e enfrenta o tormento de sua própria consciência.",
            "imagem": "https://covers.openlibrary.org/b/id/8393699-L.jpg"
        },
        {
            "id": 7,
            "titulo": "Duna",
            "autor": "Frank Herbert",
            "ano": 1965,
            "genero": "Ficção Científica",
            "categoria": "Sci-Fi",
            "descricao": "Intriga política e misticismo no planeta deserto de Arrakis.",
            "imagem": "https://covers.openlibrary.org/b/id/8108691-L.jpg"
        },
        {
            "id": 8,
            "titulo": "O Guia do Mochileiro das Galáxias",
            "autor": "Douglas Adams",
            "ano": 1979,
            "genero": "Ficção Científica",
            "categoria": "Humor",
            "descricao": "As aventuras espaciais de Arthur Dent após a destruição da Terra.",
            "imagem": "https://covers.openlibrary.org/b/id/8306786-L.jpg"
        },
        {
            "id": 9,
            "titulo": "O Hobbit",
            "autor": "J.R.R. Tolkien",
            "ano": 1937,
            "genero": "Fantasia",
            "categoria": "Aventura",
            "descricao": "Bilbo Bolseiro deixa o Condado para uma aventura com anões e um dragão.",
            "imagem": "https://covers.openlibrary.org/b/id/6979861-L.jpg"
        },
        {
            "id": 10,
            "titulo": "Matéria Escura",
            "autor": "Blake Crouch",
            "ano": 2016,
            "genero": "Ficção Científica",
            "categoria": "Thriller",
            "descricao": "Um professor é sequestrado e acorda em um mundo onde sua vida é completamente diferente.",
            "imagem": "https://covers.openlibrary.org/b/id/8378652-L.jpg"
        },
        {
            "id": 11,
            "titulo": "Frankenstein",
            "autor": "Mary Shelley",
            "ano": 1818,
            "genero": "Terror",
            "categoria": "Clássico",
            "descricao": "O cientista Victor Frankenstein cria uma vida, mas rejeita sua criatura.",
            "imagem": "https://covers.openlibrary.org/b/id/8225261-L.jpg"
        },
        {
            "id": 12,
            "titulo": "Sapiens: Uma Breve História da Humanidade",
            "autor": "Yuval Noah Harari",
            "ano": 2011,
            "genero": "Não-Ficção",
            "categoria": "História",
            "descricao": "Uma narrativa sobre a evolução e o impacto da espécie humana na Terra.",
            "imagem": "https://covers.openlibrary.org/b/id/8243166-L.jpg"
        },
        {
            "id": 13,
            "titulo": "O Poder do Hábito",
            "autor": "Charles Duhigg",
            "ano": 2012,
            "genero": "Não-Ficção",
            "categoria": "Autoajuda",
            "descricao": "Como os hábitos funcionam e como podem ser transformados.",
            "imagem": "https://covers.openlibrary.org/b/id/8390664-L.jpg"
        },
        {
            "id": 14,
            "titulo": "Rápido e Devagar",
            "autor": "Daniel Kahneman",
            "ano": 2011,
            "genero": "Não-Ficção",
            "categoria": "Psicologia",
            "descricao": "Uma exploração dos dois sistemas que dirigem a forma como pensamos.",
            "imagem": "https://covers.openlibrary.org/b/id/7946864-L.jpg"
        },
        {
            "id": 15,
            "titulo": "A Coragem de ser Imperfeito",
            "autor": "Brené Brown",
            "ano": 2012,
            "genero": "Não-Ficção",
            "categoria": "Autoajuda",
            "descricao": "Como aceitar a própria vulnerabilidade vence a vergonha.",
            "imagem": "https://covers.openlibrary.org/b/id/8410287-L.jpg"
        },
        {
            "id": 16,
            "titulo": "Em Busca de Sentido",
            "autor": "Viktor Frankl",
            "ano": 1946,
            "genero": "Biografia",
            "categoria": "Psicologia",
            "descricao": "As experiências do autor em campos de concentração e sua teoria logoterapêutica.",
            "imagem": "https://covers.openlibrary.org/b/id/10582234-L.jpg"
        },
        {
            "id": 17,
            "titulo": "E Não Sobrou Nenhum",
            "autor": "Agatha Christie",
            "ano": 1939,
            "genero": "Mistério",
            "categoria": "Policial",
            "descricao": "Dez estranhos são convidados para uma ilha e começam a morrer um a um.",
            "imagem": "https://covers.openlibrary.org/b/id/8260025-L.jpg"
        },
        {
            "id": 18,
            "titulo": "Garota Exemplar",
            "autor": "Gillian Flynn",
            "ano": 2012,
            "genero": "Thriller",
            "categoria": "Suspense",
            "descricao": "No dia de seu aniversário de casamento, uma mulher desaparece e o marido vira suspeito.",
            "imagem": "https://covers.openlibrary.org/b/id/8259443-L.jpg"
        },
        {
            "id": 19,
            "titulo": "O Silêncio dos Inocentes",
            "autor": "Thomas Harris",
            "ano": 1988,
            "genero": "Thriller",
            "categoria": "Policial",
            "descricao": "Uma agente do FBI busca a ajuda de um canibal encarcerado para pegar um serial killer.",
            "imagem": "https://covers.openlibrary.org/b/id/8261337-L.jpg"
        },
        {
            "id": 20,
            "titulo": "A Paciente Silenciosa",
            "autor": "Alex Michaelides",
            "ano": 2019,
            "genero": "Thriller",
            "categoria": "Suspense Psicológico",
            "descricao": "Uma pintora famosa atira no marido e depois para de falar completamente.",
            "imagem": "https://covers.openlibrary.org/b/id/10526038-L.jpg"
        },
        {
            "id": 21,
            "titulo": "Torto Arado",
            "autor": "Itamar Vieira Junior",
            "ano": 2019,
            "genero": "Romance",
            "categoria": "Contemporâneo Brasileiro",
            "descricao": "A vida de duas irmãs no sertão baiano marcada por um acidente na infância.",
            "imagem": "https://covers.openlibrary.org/b/id/12658189-L.jpg"
        },
        {
            "id": 22,
            "titulo": "Flores para Algernon",
            "autor": "Daniel Keyes",
            "ano": 1966,
            "genero": "Ficção Científica",
            "categoria": "Drama",
            "descricao": "Um homem com deficiência intelectual passa por uma cirurgia para aumentar sua inteligência.",
            "imagem": "https://covers.openlibrary.org/b/id/8236166-L.jpg"
        },
        {
            "id": 23,
            "titulo": "A Vida Invisível de Addie LaRue",
            "autor": "V.E. Schwab",
            "ano": 2020,
            "genero": "Fantasia",
            "categoria": "Romance",
            "descricao": "Uma jovem faz um pacto para viver para sempre, mas é esquecida por todos que conhece.",
            "imagem": "https://covers.openlibrary.org/b/id/10636254-L.jpg"
        },
        {
            "id": 24,
            "titulo": "O Caçador de Pipas",
            "autor": "Khaled Hosseini",
            "ano": 2003,
            "genero": "Drama",
            "categoria": "Contemporâneo",
            "descricao": "Uma história de amizade e redenção ambientada no Afeganistão.",
            "imagem": "https://covers.openlibrary.org/b/id/8231998-L.jpg"
        },
        {
            "id": 25,
            "titulo": "Pessoas Normais",
            "autor": "Sally Rooney",
            "ano": 2018,
            "genero": "Romance",
            "categoria": "Contemporâneo",
            "descricao": "A complexa relação entre Connell e Marianne da escola até a vida adulta.",
            "imagem": "https://covers.openlibrary.org/b/id/8838327-L.jpg"
        },
        {
            "id": 26,
            "titulo": "A Metamorfose",
            "autor": "Franz Kafka",
            "ano": 1915,
            "genero": "Ficção Absurda",
            "categoria": "Clássico",
            "descricao": "Gregor Samsa acorda certa manhã transformado em um inseto monstruoso.",
            "imagem": "https://covers.openlibrary.org/b/id/8224376-L.jpg"
        },
        {
            "id": 27,
            "titulo": "O Pequeno Príncipe",
            "autor": "Antoine de Saint-Exupéry",
            "ano": 1943,
            "genero": "Fábula",
            "categoria": "Filosofia",
            "descricao": "Um piloto cai no deserto e encontra um príncipe de outro planeta.",
            "imagem": "https://covers.openlibrary.org/b/id/8319254-L.jpg"
        },
        {
            "id": 28,
            "titulo": "Ensaio Sobre a Cegueira",
            "autor": "José Saramago",
            "ano": 1995,
            "genero": "Romance",
            "categoria": "Distopia",
            "descricao": "Uma epidemia de cegueira branca devasta a sociedade.",
            "imagem": "https://covers.openlibrary.org/b/id/8227092-L.jpg"
        },
        {
            "id": 29,
            "titulo": "Tudo Sobre o Amor",
            "autor": "bell hooks",
            "ano": 2000,
            "genero": "Não-Ficção",
            "categoria": "Filosofia",
            "descricao": "Uma análise profunda sobre o significado e a prática do amor na sociedade moderna.",
            "imagem": "https://covers.openlibrary.org/b/id/8499231-L.jpg"
        },
        {
            "id": 30,
            "titulo": "Quarto de Despejo",
            "autor": "Carolina Maria de Jesus",
            "ano": 1960,
            "genero": "Biografia",
            "categoria": "Literatura Brasileira",
            "descricao": "O diário real de uma catadora de papel narrando a vida na favela do Canindé.",
            "imagem": "https://covers.openlibrary.org/b/id/8750849-L.jpg"
        },
        {
            "id": 31,
            "titulo": "O Senhor dos Anéis: A Sociedade do Anel",
            "autor": "J.R.R. Tolkien",
            "ano": 1954,
            "genero": "Fantasia",
            "categoria": "Épico",
            "descricao": "O início da jornada de Frodo para destruir o Um Anel.",
            "imagem": "https://covers.openlibrary.org/b/id/8231996-L.jpg"
        },
        {
            "id": 32,
            "titulo": "Harry Potter e a Pedra Filosofal",
            "autor": "J.K. Rowling",
            "ano": 1997,
            "genero": "Fantasia",
            "categoria": "Jovem Adulto",
            "descricao": "Um garoto descobre que é bruxo e vai para a escola de magia de Hogwarts.",
            "imagem": "https://covers.openlibrary.org/b/id/7984916-L.jpg"
        },
        {
            "id": 33,
            "titulo": "A Revolução dos Bichos",
            "autor": "George Orwell",
            "ano": 1945,
            "genero": "Sátira Política",
            "categoria": "Fábula",
            "descricao": "Animais de uma granja se rebelam contra seus donos humanos.",
            "imagem": "https://covers.openlibrary.org/b/id/7222161-L.jpg"
        },
        {
            "id": 34,
            "titulo": "O Grande Gatsby",
            "autor": "F. Scott Fitzgerald",
            "ano": 1925,
            "genero": "Romance",
            "categoria": "Clássico Americano",
            "descricao": "A trágica história de Jay Gatsby e seu sonho americano.",
            "imagem": "https://covers.openlibrary.org/b/id/8432069-L.jpg"
        },
        {
            "id": 35,
            "titulo": "O Sol é Para Todos",
            "autor": "Harper Lee",
            "ano": 1960,
            "genero": "Drama Legal",
            "categoria": "Clássico",
            "descricao": "Um advogado defende um homem negro acusado injustamente em um sul racista.",
            "imagem": "https://covers.openlibrary.org/b/id/8225275-L.jpg"
        },
        {
            "id": 36,
            "titulo": "Grande Sertão: Veredas",
            "autor": "João Guimarães Rosa",
            "ano": 1956,
            "genero": "Romance Experimental",
            "categoria": "Clássico Brasileiro",
            "descricao": "As reflexões do jagunço Riobaldo sobre o sertão, a guerra e o diabo.",
            "imagem": "https://covers.openlibrary.org/b/id/10521633-L.jpg"
        },
        {
            "id": 37,
            "titulo": "A Hora da Estrela",
            "autor": "Clarice Lispector",
            "ano": 1977,
            "genero": "Romance",
            "categoria": "Literatura Brasileira",
            "descricao": "A vida miserável e ingênua da datilógrafa nordestina Macabéa.",
            "imagem": "https://covers.openlibrary.org/b/id/8235272-L.jpg"
        },
        {
            "id": 38,
            "titulo": "Capitães da Areia",
            "autor": "Jorge Amado",
            "ano": 1937,
            "genero": "Romance",
            "categoria": "Literatura Brasileira",
            "descricao": "A vida de um grupo de menores abandonados nas ruas de Salvador.",
            "imagem": "https://covers.openlibrary.org/b/id/7361622-L.jpg"
        },
        {
            "id": 39,
            "titulo": "Fahrenheit 451",
            "autor": "Ray Bradbury",
            "ano": 1953,
            "genero": "Ficção Científica",
            "categoria": "Distopia",
            "descricao": "Em um futuro onde livros são proibidos, bombeiros ateiam fogo neles.",
            "imagem": "https://covers.openlibrary.org/b/id/8235071-L.jpg"
        },
        {
            "id": 40,
            "titulo": "Admirável Mundo Novo",
            "autor": "Aldous Huxley",
            "ano": 1932,
            "genero": "Ficção Científica",
            "categoria": "Distopia",
            "descricao": "Uma sociedade futurista controlada pela engenharia genética e drogas.",
            "imagem": "https://covers.openlibrary.org/b/id/8231885-L.jpg"
        },
        {
            "id": 41,
            "titulo": "O Conto da Aia",
            "autor": "Margaret Atwood",
            "ano": 1985,
            "genero": "Ficção Científica",
            "categoria": "Distopia",
            "descricao": "Mulheres perdem seus direitos em uma teocracia totalitária.",
            "imagem": "https://covers.openlibrary.org/b/id/8235338-L.jpg"
        },
        {
            "id": 42,
            "titulo": "It: A Coisa",
            "autor": "Stephen King",
            "ano": 1986,
            "genero": "Terror",
            "categoria": "Sobrenatural",
            "descricao": "Um grupo de crianças enfrenta uma entidade que assume a forma de um palhaço.",
            "imagem": "https://covers.openlibrary.org/b/id/8231991-L.jpg"
        },
        {
            "id": 43,
            "titulo": "O Iluminado",
            "autor": "Stephen King",
            "ano": 1977,
            "genero": "Terror",
            "categoria": "Thriller Psicológico",
            "descricao": "O zelador de um hotel isolado começa a perder a sanidade.",
            "imagem": "https://covers.openlibrary.org/b/id/8231993-L.jpg"
        },
        {
            "id": 44,
            "titulo": "Drácula",
            "autor": "Bram Stoker",
            "ano": 1897,
            "genero": "Terror Gótico",
            "categoria": "Clássico",
            "descricao": "A história original do vampiro mais famoso do mundo.",
            "imagem": "https://covers.openlibrary.org/b/id/8225251-L.jpg"
        },
        {
            "id": 45,
            "titulo": "O Código Da Vinci",
            "autor": "Dan Brown",
            "ano": 2003,
            "genero": "Suspense",
            "categoria": "Mistério",
            "descricao": "Um simbologista descobre segredos religiosos em obras de arte.",
            "imagem": "https://covers.openlibrary.org/b/id/240726-L.jpg"
        },
        {
            "id": 46,
            "titulo": "Um Estudo em Vermelho",
            "autor": "Arthur Conan Doyle",
            "ano": 1887,
            "genero": "Mistério",
            "categoria": "Policial",
            "descricao": "A primeira aparição do detetive Sherlock Holmes.",
            "imagem": "https://covers.openlibrary.org/b/id/8232014-L.jpg"
        },
        {
            "id": 47,
            "titulo": "A Menina que Roubava Livros",
            "autor": "Markus Zusak",
            "ano": 2005,
            "genero": "Drama Histórico",
            "categoria": "Guerra",
            "descricao": "Uma menina na Alemanha nazista encontra conforto nos livros.",
            "imagem": "https://covers.openlibrary.org/b/id/7261381-L.jpg"
        },
        {
            "id": 48,
            "titulo": "O Nome do Vento",
            "autor": "Patrick Rothfuss",
            "ano": 2007,
            "genero": "Fantasia",
            "categoria": "Fantasia Épica",
            "descricao": "As memórias de Kvothe, o mago mais notório de seu mundo.",
            "imagem": "https://covers.openlibrary.org/b/id/8235086-L.jpg"
        },
        {
            "id": 49,
            "titulo": "Jogos Vorazes",
            "autor": "Suzanne Collins",
            "ano": 2008,
            "genero": "Distopia",
            "categoria": "Jovem Adulto",
            "descricao": "Jovens são forçados a lutar até a morte em um reality show.",
            "imagem": "https://covers.openlibrary.org/b/id/7165231-L.jpg"
        },
        {
            "id": 50,
            "titulo": "Percy Jackson e o Ladrão de Raios",
            "autor": "Rick Riordan",
            "ano": 2005,
            "genero": "Fantasia",
            "categoria": "Mitologia",
            "descricao": "Deuses gregos existem no mundo moderno e Percy é um semideus.",
            "imagem": "https://covers.openlibrary.org/b/id/8235116-L.jpg"
        },
        {
            "id": 51,
            "titulo": "Os Miseráveis",
            "autor": "Victor Hugo",
            "ano": 1862,
            "genero": "Romance Histórico",
            "categoria": "Clássico Francês",
            "descricao": "A luta por redenção de Jean Valjean na França do século XIX.",
            "imagem": "https://covers.openlibrary.org/b/id/8225272-L.jpg"
        },
        {
            "id": 52,
            "titulo": "Guerra e Paz",
            "autor": "Lev Tolstói",
            "ano": 1869,
            "genero": "Romance Histórico",
            "categoria": "Clássico Russo",
            "descricao": "A invasão napoleônica na Rússia vista por cinco famílias aristocráticas.",
            "imagem": "https://covers.openlibrary.org/b/id/8193892-L.jpg"
        },
        {
            "id": 53,
            "titulo": "A Divina Comédia",
            "autor": "Dante Alighieri",
            "ano": 1320,
            "genero": "Poesia Épica",
            "categoria": "Clássico",
            "descricao": "A viagem de Dante pelo Inferno, Purgatório e Paraíso.",
            "imagem": "https://covers.openlibrary.org/b/id/8226197-L.jpg"
        },
        {
            "id": 54,
            "titulo": "Cosmos",
            "autor": "Carl Sagan",
            "ano": 1980,
            "genero": "Não-Ficção",
            "categoria": "Ciência",
            "descricao": "Uma jornada pela evolução do universo e da ciência.",
            "imagem": "https://covers.openlibrary.org/b/id/8224933-L.jpg"
        },
        {
            "id": 55,
            "titulo": "Uma Breve História do Tempo",
            "autor": "Stephen Hawking",
            "ano": 1988,
            "genero": "Não-Ficção",
            "categoria": "Ciência",
            "descricao": "Explicações sobre o Big Bang, buracos negros e a natureza do tempo.",
            "imagem": "https://covers.openlibrary.org/b/id/8232047-L.jpg"
        },
        {
            "id": 56,
            "titulo": "Hábitos Atômicos",
            "autor": "James Clear",
            "ano": 2018,
            "genero": "Autoajuda",
            "categoria": "Produtividade",
            "descricao": "Pequenas mudanças que geram resultados impressionantes.",
            "imagem": "https://covers.openlibrary.org/b/id/12555547-L.jpg"
        },
        {
            "id": 57,
            "titulo": "A Arte da Guerra",
            "autor": "Sun Tzu",
            "ano": -500,
            "genero": "Tratado Militar",
            "categoria": "Estratégia",
            "descricao": "Ensinamentos milenares sobre estratégia e resolução de conflitos.",
            "imagem": "https://covers.openlibrary.org/b/id/8225278-L.jpg"
        },
        {
            "id": 58,
            "titulo": "Meditações",
            "autor": "Marco Aurélio",
            "ano": 180,
            "genero": "Filosofia",
            "categoria": "Estoicismo",
            "descricao": "Anotações pessoais do imperador romano sobre como viver bem.",
            "imagem": "https://covers.openlibrary.org/b/id/8212628-L.jpg"
        },
        {
            "id": 59,
            "titulo": "Persépolis",
            "autor": "Marjane Satrapi",
            "ano": 2000,
            "genero": "Graphic Novel",
            "categoria": "Biografia",
            "descricao": "A infância da autora durante a Revolução Islâmica no Irã.",
            "imagem": "https://covers.openlibrary.org/b/id/8231922-L.jpg"
        },
        {
            "id": 60,
            "titulo": "Maus",
            "autor": "Art Spiegelman",
            "ano": 1980,
            "genero": "Graphic Novel",
            "categoria": "Histórico",
            "descricao": "A história de um sobrevivente do Holocausto contada através de animais.",
            "imagem": "https://covers.openlibrary.org/b/id/8231871-L.jpg"
        },
        {
            "id": 61,
            "titulo": "Memórias Póstumas de Brás Cubas",
            "autor": "Machado de Assis",
            "ano": 1881,
            "genero": "Romance",
            "categoria": "Realismo",
            "descricao": "Um defunto autor narra sua própria vida com ironia e pessimismo.",
            "imagem": "https://covers.openlibrary.org/b/id/8225631-L.jpg"
        },
        {
            "id": 62,
            "titulo": "Quincas Borba",
            "autor": "Machado de Assis",
            "ano": 1891,
            "genero": "Romance",
            "categoria": "Realismo",
            "descricao": "A trágica herança do filósofo louco Quincas Borba deixada para Rubião.",
            "imagem": "https://covers.openlibrary.org/b/id/12555026-L.jpg"
        },
        {
            "id": 63,
            "titulo": "O Alienista",
            "autor": "Machado de Assis",
            "ano": 1882,
            "genero": "Novela",
            "categoria": "Sátira",
            "descricao": "O Dr. Simão Bacamarte constrói um hospício e começa a internar a cidade inteira.",
            "imagem": "https://covers.openlibrary.org/b/id/8235266-L.jpg"
        },
        {
            "id": 64,
            "titulo": "Esaú e Jacó",
            "autor": "Machado de Assis",
            "ano": 1904,
            "genero": "Romance",
            "categoria": "Realismo",
            "descricao": "A rivalidade eterna entre dois irmãos gêmeos, Pedro e Paulo, no fim do Império.",
            "imagem": "https://covers.openlibrary.org/b/id/8232011-L.jpg"
        },
        {
            "id": 65,
            "titulo": "Memorial de Aires",
            "autor": "Machado de Assis",
            "ano": 1908,
            "genero": "Romance",
            "categoria": "Diário Ficcional",
            "descricao": "O último romance de Machado, escrito em forma de diário por um diplomata aposentado.",
            "imagem": "https://covers.openlibrary.org/b/id/6533083-L.jpg"
        },
        {
            "id": 66,
            "titulo": "Helena",
            "autor": "Machado de Assis",
            "ano": 1876,
            "genero": "Romance",
            "categoria": "Romantismo",
            "descricao": "Um drama romântico sobre uma filha ilegítima reconhecida em testamento.",
            "imagem": "https://covers.openlibrary.org/b/id/8225641-L.jpg"
        },
        {
            "id": 67,
            "titulo": "Iaiá Garcia",
            "autor": "Machado de Assis",
            "ano": 1878,
            "genero": "Romance",
            "categoria": "Romantismo",
            "descricao": "Uma história de amor e sacrifício que encerra a fase romântica do autor.",
            "imagem": "https://covers.openlibrary.org/b/id/249339-L.jpg"
        },
        {
            "id": 68,
            "titulo": "A Mão e a Luva",
            "autor": "Machado de Assis",
            "ano": 1874,
            "genero": "Romance",
            "categoria": "Romantismo",
            "descricao": "Guiomar deve escolher entre o amor romântico e a ambição social.",
            "imagem": "https://covers.openlibrary.org/b/id/10521628-L.jpg"
        },
        {
            "id": 69,
            "titulo": "Ressurreição",
            "autor": "Machado de Assis",
            "ano": 1872,
            "genero": "Romance",
            "categoria": "Romantismo",
            "descricao": "O primeiro romance de Machado, focado no ciúme e na hesitação amorosa.",
            "imagem": "https://covers.openlibrary.org/b/id/6533107-L.jpg"
        },
        {
            "id": 70,
            "titulo": "Várias Histórias",
            "autor": "Machado de Assis",
            "ano": 1896,
            "genero": "Contos",
            "categoria": "Coletânea",
            "descricao": "Uma das melhores coletâneas de contos do autor, incluindo 'A Cartomante'.",
            "imagem": "https://covers.openlibrary.org/b/id/8169996-L.jpg"
        },

        // 🔹 FRANZ KAFKA (10 Livros)
        {
            "id": 71,
            "titulo": "O Processo",
            "autor": "Franz Kafka",
            "ano": 1925,
            "genero": "Romance",
            "categoria": "Absurdo",
            "descricao": "Josef K. é processado por um crime que desconhece, em um sistema judicial incompreensível.",
            "imagem": "https://covers.openlibrary.org/b/id/8226252-L.jpg"
        },
        {
            "id": 72,
            "titulo": "O Castelo",
            "autor": "Franz Kafka",
            "ano": 1926,
            "genero": "Romance",
            "categoria": "Absurdo",
            "descricao": "Um agrimensor tenta inutilmente entrar em contato com as autoridades de um castelo.",
            "imagem": "https://covers.openlibrary.org/b/id/8231851-L.jpg"
        },
        {
            "id": 73,
            "titulo": "Carta ao Pai",
            "autor": "Franz Kafka",
            "ano": 1919,
            "genero": "Não-Ficção",
            "categoria": "Epistolar",
            "descricao": "Uma carta real e dolorosa onde Kafka expõe o medo e a relação abusiva com seu pai.",
            "imagem": "https://covers.openlibrary.org/b/id/8282362-L.jpg"
        },
        {
            "id": 74,
            "titulo": "Na Colônia Penal",
            "autor": "Franz Kafka",
            "ano": 1919,
            "genero": "Conto",
            "categoria": "Horror Psicológico",
            "descricao": "A descrição detalhada de um aparelho de tortura e execução brutal.",
            "imagem": "https://covers.openlibrary.org/b/id/7161736-L.jpg"
        },
        {
            "id": 75,
            "titulo": "O Desaparecido (América)",
            "autor": "Franz Kafka",
            "ano": 1927,
            "genero": "Romance",
            "categoria": "Ficção",
            "descricao": "As desventuras de um jovem imigrante europeu nos Estados Unidos.",
            "imagem": "https://covers.openlibrary.org/b/id/8235212-L.jpg"
        },
        {
            "id": 76,
            "titulo": "Um Artista da Fome",
            "autor": "Franz Kafka",
            "ano": 1922,
            "genero": "Conto",
            "categoria": "Ficção",
            "descricao": "A história de um homem que faz do jejum extremo sua forma de arte.",
            "imagem": "https://covers.openlibrary.org/b/id/8232042-L.jpg"
        },
        {
            "id": 77,
            "titulo": "O Veredicto",
            "autor": "Franz Kafka",
            "ano": 1913,
            "genero": "Conto",
            "categoria": "Drama Psicológico",
            "descricao": "Um conflito entre pai e filho termina de forma trágica e repentina.",
            "imagem": "https://covers.openlibrary.org/b/id/10600465-L.jpg"
        },
        {
            "id": 78,
            "titulo": "Cartas a Milena",
            "autor": "Franz Kafka",
            "ano": 1952,
            "genero": "Não-Ficção",
            "categoria": "Epistolar",
            "descricao": "A correspondência intensa e apaixonada de Kafka para sua tradutora Milena Jesenská.",
            "imagem": "https://covers.openlibrary.org/b/id/6429983-L.jpg"
        },
        {
            "id": 79,
            "titulo": "A Muralha da China",
            "autor": "Franz Kafka",
            "ano": 1931,
            "genero": "Conto",
            "categoria": "Ficção",
            "descricao": "Reflexões sobre a construção da muralha e a natureza do poder imperial.",
            "imagem": "https://covers.openlibrary.org/b/id/12662283-L.jpg"
        },
        {
            "id": 80,
            "titulo": "Diários (1910-1923)",
            "autor": "Franz Kafka",
            "ano": 1948,
            "genero": "Não-Ficção",
            "categoria": "Autobiografia",
            "descricao": "Os pensamentos íntimos, rascunhos e angústias do autor ao longo da vida.",
            "imagem": "https://covers.openlibrary.org/b/id/8374826-L.jpg"
        }
    ]