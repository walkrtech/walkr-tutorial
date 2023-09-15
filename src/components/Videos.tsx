import ReactPlayer from "react-player";

export const Videos = () => {
    const videoData = [
        {
            title: "Passo 1",
            subtitle: "Cadastro Básico",
            description:
                "Seja muito bem-vindo! Vamos aprender como fazer o cadastro básico para iniciarmos a jornada rumo a sua independência financeira.",
            url: "https://www.youtube.com/watch?v=QpZLFWdW3o4&t=4s",
        },
        {
            title: "Passo 2",
            subtitle: "Como cadastrar Renda, Custo Fixo e Investimentos",
            description:
                "Agora você vai aprender não só a preencher da forma correta suas finanças, como vai entender porque a maioria das pessoas não entendem sua próprias sobras, e guardam apenas se sobrar no fim do mês.",
            url: "https://www.youtube.com/watch?v=-Q20v4R9Lc4",
        },
        {
            title: "Passo 3",
            subtitle: "Preenchendo a Independência Financeira",
            description:
                "Talvez o objetivo mais caro de um projeto de vida, poder viver de renda sem ter que trabalhar. Nesse vídeo você vai aprender a preencher da forma correta esse objetivo, bem como, vai entender o seu verdadeiro conceito.",
            url: "https://www.youtube.com/watch?v=L8t0AabVRi4&t=21s",
        },
        {
            title: "Passo 4",
            subtitle: "Como cadastrar da forma correta os seus sonhos e objetivos de vida",
            description:
                "Chegou a hora mais importante do seu Projeto de vida, após definir sua independência financeira, você precisa preencher os principais objetivos de qualidade de vida e aquisição de bens. Lembre o segredo do protagonismo e sucesso financeiro não está em aprender a investir, mas sim aprender a mensurar da forma correta a vida que você quer viver. Aproveite esse momento único para decidir e mensurar o para que você tanto trabalha, defina seus sonhos e descubra quanto custa a vida que você quer viver.",
            url: "https://www.youtube.com/watch?v=evdxtvcPzyI&t=51s",
        },
        {
            title: "Passo 5",
            subtitle: "Entendendo o Seu Número",
            description:
                "WalkrApp é o primeiro e único aplicativo do mundo capaz de reunir e traduzir todos seus objetivos financeiros e os seus maiores sonhos em um único número. Descubra e entenda o número da sua própria loteria.",
            url: "https://www.youtube.com/watch?v=-a4PrM41vg8",
        },
        {
            title: "Passo 6",
            subtitle: "Independência em risco? Não se preocupe! Aprenda a ajustar seu projeto.",
            description:
                "Após viver a vida dos seus sonhos o WalkrApp irá fazer mais de 3.000 cálculos para dizer de forma precisa qual renda você alcançará na sua aposentadoria/independência. Nesse vídeo você vai entender os 3 cenários possíveis para suas independência:\n\n1) Projeto Inviável\n2) Independência em Risco\n3) Independência Conquistada\n\nTambém irá aprender as principais funcionalidades para ajustar o seu projeto e torná-lo viável.",
            url: "https://www.youtube.com/watch?v=4PHnPaPg4jo&t=19s",
        },
        {
            title: "Passo 7",
            subtitle: "Descubra as principais funcionalidades do WalkrApp",
            description:
                "Nesse vídeo iremos explorar todas as funcionalidades do WalkrApp.",
            url: "https://www.youtube.com/watch?v=wGeZl6MntFc&t=1s",
        },
        {
            title: "Passo 8",
            subtitle: "Conheça a versão Premium e as sugestões para alcançar sua independência",
            description:
                "Nesse vídeo, você vai conhecer o poder das sugestões da Versão Premium (WALKRAPP+) na hora de ajustar seu projeto de vida para conquistar a vida dos seus sonhos e ter todas as respostas necessárias para se tornar protagonista financeiro, e ter as rédeas das suas tomadas de decisões financeiras nas mãos.",
            url: "https://www.youtube.com/watch?v=SSLVB-PJ1SQ&t=1s",
        },
        {
            title: "Passo 9",
            subtitle: "Funcionalidades Walkrapp+",
            description:
                "Mais funcionalidades exclusivas para assinantes Premium, poderosas ferramentas para torná-lo protagonista financeiro, nesse vídeo você irá explorar:\n\n1) Carteira de Investimentos\n2) Metas de Economia\n3) Mapa Financeiro\n4) Open Finance\n5) Monitores em Tempo Real do seu Projeto de Vida",
            url: "https://www.youtube.com/watch?v=bSdmSfTOqKA&t=3s",
        },
        {
            title: "Passo 10",
            subtitle: "Relatório Premium PDF",
            description:
                "Entenda como exportar e como funciona o Relatório Financeiro do seu projeto de vida mais completo do mercado. São 11 páginas em PDF, para você salvar e compartilhar, com todas informações que você precisa saber para ter uma visão macro da sua própria vida em busca de alcançar seus sonhos e a sua independência financeira.",
            url: "https://www.youtube.com/watch?v=xPqwpV8LMcA",
        },
    ];

    return (
        <div className="container mt-5 mb-5 d-flex flex-column justify-content-center">
            {videoData.map((video, index) => (
                <div key={index}>
                    <div className="col-md-9 mb-3">
                        <div className="title mt-5">
                            <h4 className="text-white" style={{ textAlign: 'left' }} >{video.title}</h4>
                            <h5 className="mt-3" style={{ color: "#29BCBA", fontWeight: 'bold', fontSize: 24, textAlign: 'left' }}>{video.subtitle}</h5>
                            <p className="text-white mt-3" style={{ fontSize: 14, textAlign: 'left' }}>{video.description}</p>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="video d-flex">
                            <ReactPlayer url={video.url} controls={true} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
