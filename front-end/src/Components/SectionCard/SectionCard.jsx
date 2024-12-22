import { ButtonCard } from '../ButtonCard/ButtonCard'
import './SectionCard.css'

export function SectionCard() {
    return (
        <>
            <div className='color-bg'>
                <section className='ContainerSectionCard'>
                    <div className='container-title-card'>
                        <h1>Eventos em Destaque</h1>
                    </div>
                    <div className='container-collection'>
                        <div className='collection-1'>
                            <div className='title-card'>
                                <h3>Brainstorming</h3>
                            </div>
                            <div className='date'>
                                <span>
                                28/09/2024 09:00 às 10:00 
                                </span>
                            </div>
                            <ButtonCard/>
                        </div>
                        <div className='collection-2'>
                            <div className='title-card'>
                                <h3>Workshop</h3>
                            </div>
                            <div className='date'>
                            <span>
                                28/09/2024 09:00 às 10:00 
                            </span>
                            </div>
                            <ButtonCard/>
                        </div>
                        <div className='collection-3'>
                            <div className='title-card'>
                                <h3>Confraternização</h3>
                            </div>
                            <div className='date'>
                            <span>
                                28/09/2024 15:00 às 00:00 
                            </span>
                            </div>
                            <ButtonCard/>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}
