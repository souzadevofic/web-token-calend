import { SectionCard } from "../../Components/SectionCard/SectionCard"
import { Section } from "../../Components/Section/Section"
import { Footer } from '../../Components/Footer/Footer';
import Layout from '../Layout/Layout'


export function HomePage() {
    return (
        <>
            <Layout>
                <SectionCard />
                <Section />
                <Footer />
            </Layout>
        </>
    )
}