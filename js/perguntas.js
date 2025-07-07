export const perguntas = [
    {
        enunciado: "Após assistir a um filme que apresenta uma nova tecnologia de IA, você reflete sobre o impacto disso na sociedade. Qual é o seu primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é preocupante!",
                afirmacao: [
                    "Fiquei apreensivo sobre as implicações éticas dessa tecnologia.",
                    "Pensei na rapidez com que a tecnologia pode mudar nossas vidas."
                ],
                proxima: 1,
            },
            {
                texto: "Isso é incrível!",
                afirmacao: [
                    "Quero explorar como a IA pode enriquecer a experiência cinematográfica.",
                    "Acredito que a IA pode facilitar a criação de histórias mais envolventes."
                ],
                proxima: 2,
            },
        ]
    },
    {
        enunciado: "Depois de assistir a um filme que aborda o uso de IA, seu professor pede que você escreva uma resenha sobre o tema. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Utilizo uma ferramenta de busca que usa IA para encontrar informações relevantes e explicações claras.",
                afirmacao: [
                    "Consegui encontrar dados úteis rapidamente.",
                    "Percebi que a IA pode ajudar a entender conceitos complexos de forma mais simples.",
                    "A IA facilitou minha pesquisa e me ajudou a organizar minhas ideias."
                ],
                proxima: 3,
            },
            {
                texto: "Escrevo a resenha com base nas minhas impressões, conversas com amigos e algumas pesquisas na internet.",
                afirmacao: [
                    "Prefiro usar meus próprios conhecimentos e experiências.",
                    "Acho que métodos tradicionais de pesquisa me ajudam a refletir melhor.",
                    "Sinto um certo receio sobre como a IA pode usar meus dados pessoais."
                ],
                proxima: 4,
            },
        ]
    },
    {
        enunciado: "Após assistir a um filme que explora o impacto da IA no futuro do trabalho, você precisa se posicionar em um debate. Qual é a sua opinião?",
        alternativas: [
            {
                texto: "Acredito que a IA pode criar novas oportunidades e aprimorar habilidades humanas.",
                afirmacao: [
                    "Estou animado com as inovações que a IA pode trazer para a indústria do cinema.",
                    "Quero participar do desenvolvimento de soluções criativas que envolvam IA."
                ],
                proxima: 5,
            },
            {
                texto: "Estou preocupado com a possibilidade de que a IA substitua empregos humanos.",
                afirmacao: [
                    "Minha preocupação me levou a discutir a ética do uso da IA na indústria.",
                    "Acredito que devemos proteger os trabalhadores e garantir que a tecnologia seja usada de forma justa."
                ],
                proxima: 6,
            },
        ]
    },
    {
        enunciado: "Refletindo sobre o impacto da IA no cinema, como você se posiciona em um debate sobre o futuro do trabalho?",
        alternativas: [
            {
                texto: "Defendo que a IA pode abrir novas oportunidades e melhorar a criatividade.",
                afirmacao: [
                    "Acredito que a IA pode ajudar a contar histórias de maneiras inovadoras.",
                    "Estou envolvido em projetos que utilizam IA para melhorar a produção cinematográfica."
                ],
                proxima: 5,
            },
            {
                texto: "Preocupo-me com os trabalhadores que podem ser substituídos por máquinas.",
                afirmacao: [
                    "Estou formando grupos de discussão sobre o uso ético da IA no cinema.",
                    "Busco maneiras de garantir que a tecnologia beneficie a todos, não apenas a alguns."
                ],
                proxima: 6,
            },
        ]
    },
    {
        enunciado: "Após um debate sobre o impacto da IA no cinema, como você se posiciona?",
        alternativas: [
            const nomes = ["Sofia", "Bruno", "Maria Eduarda", "Maria Luiza", "Samira", "Silvia", "Jhonatan"];

            export function aleatorio (lista){
                const posicao = Math.floor(Math.random()* lista.length);
                return lista[posicao];
            }
            
            export const nome = aleatorio(nomes)          {
                texto: "Defendo que a IA pode criar novas oportunidades e melhorar a criatividade.",
                afirmacao: [
                    "Acredito que a IA pode ajudar a contar histórias de maneiras inovadoras.",
                    "Estou envolvido em projetos que utilizam IA para melhorar a produção cinematográfica."
                ],
                proxima: 7,
            },
            {
                texto: "Preocupo-me com os trabalhadores que podem ser substituídos por máquinas.",
                afirmacao: [
                    "Estou formando grupos de discussão sobre o uso ético da IA no cinema.",
                    "Busco maneiras de garantir que a tecnologia beneficie a todos, não apenas a alguns."
                ],
                proxima: 7,
            },
        ]
    },
    {
        enunciado: "Ao final de uma discussão sobre IA no cinema, você precisa criar uma imagem que represente sua visão sobre o tema. O que você faz?",
        alternativas: [
            {
                texto: "Crio uma imagem usando um software de design tradicional.",
                afirmacao: [
                    "Percebo que muitos não sabem usar ferramentas de design e decido compartilhar meu conhecimento.",
                    "Acredito que técnicas tradicionais de arte são essenciais para a criatividade."
                ],
            },
            {
                texto: "Crio uma imagem usando um gerador de imagens de IA.",
                afirmacao: [
                    "A IA acelerou meu processo criativo e agora posso ajudar outros a expressarem suas ideias.",
                    "Compartilho minhas criações nas redes sociais para inspirar outros.",
                    "Acredito que a IA pode empoderar pessoas a materializarem suas ideias."
                ],
            },
        ]
    }
];
