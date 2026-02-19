import { PageContextProvider } from "./context";
import { Header, Hero, Posts, Section, ContactUs, Footer } from "./components";

export default function Page() {
    return (
        <PageContextProvider>
            <Header />
            <Hero />
            <Posts />

            <Section
                heading="Арт Майстерня"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pretium sapien risus, ut malesuada nisi facilisis quis. Vivamus dignissim erat et vulputate tristique. In eros urna, efficitur vitae fermentum ut, blandit id justo. Donec blandit nunc pulvinar ipsum ultrices vestibulum. Nam nec lectus vitae justo finibus auctor tristique vel arcu. Vivamus pulvinar est ipsum, non finibus purus suscipit vel. Maecenas ultricies bibendum velit sit amet efficitur."
                alignment="end"
            />

            <Section
                heading="Берегиня"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pretium sapien risus, ut malesuada nisi facilisis quis. Vivamus dignissim erat et vulputate tristique. In eros urna, efficitur vitae fermentum ut, blandit id justo. Donec blandit nunc pulvinar ipsum ultrices vestibulum. Nam nec lectus vitae justo finibus auctor tristique vel arcu. Vivamus pulvinar est ipsum, non finibus purus suscipit vel. Maecenas ultricies bibendum velit sit amet efficitur."
                alignment="start"
            />

            <Section
                heading="Табір"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pretium sapien risus, ut malesuada nisi facilisis quis. Vivamus dignissim erat et vulputate tristique. In eros urna, efficitur vitae fermentum ut, blandit id justo. Donec blandit nunc pulvinar ipsum ultrices vestibulum. Nam nec lectus vitae justo finibus auctor tristique vel arcu. Vivamus pulvinar est ipsum, non finibus purus suscipit vel. Maecenas ultricies bibendum velit sit amet efficitur."
                alignment="end"
            />

            <Section
                heading="Музичний Бенд"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pretium sapien risus, ut malesuada nisi facilisis quis. Vivamus dignissim erat et vulputate tristique. In eros urna, efficitur vitae fermentum ut, blandit id justo. Donec blandit nunc pulvinar ipsum ultrices vestibulum. Nam nec lectus vitae justo finibus auctor tristique vel arcu. Vivamus pulvinar est ipsum, non finibus purus suscipit vel. Maecenas ultricies bibendum velit sit amet efficitur."
                alignment="start"
            />

            <div className="h-40" />
            <ContactUs />
            <div className="h-40" />
            <Footer />
        </PageContextProvider>
    );
}
