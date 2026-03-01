import { PageContextProvider } from "./context";
import { Header, Hero, Posts, AboutUs, Section, Footer } from "./components";

export default function Page() {
    return (
        <PageContextProvider>
            <Header />
            <Hero />
            <Posts />
            <AboutUs />

            <Section
                heading="Перша українська школа у трірі «Берегиня»"
                content="Це культурно-освітній простір, створений у березні 2024 року за ініціативою об’єднання «DACH». Наша мета — дати змогу дітям українських родин у Німеччині зберегти рідну мову, культуру та зв’язок з Батьківщиною, успішно інтегруючись у нове суспільство"
                alignment="start"
            />

            <Section
                heading="Дитячі табори"
                content="Запрошуємо дітей віком 9–16 років провести незабутні канікули в нашому таборі! Це місце, де панує дружба, тепло та любов до рідної культури, створене для відпочинку, розвитку та нових знайомств"
                alignment="end"
            />

            <Section
                heading="Музичний молодіжний гурт"
                content="Для творчого самовираження та розвитку музичних талантів ..."
                alignment="start"
            />

            <Footer />
        </PageContextProvider>
    );
}
