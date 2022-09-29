import React from 'react';
import TopBar from './TopBar';
import ContentRowTop from './ContentRowTop';
import Footer from './Footer';
import './Table/styles.css'

function ContentWrapper(){
    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <TopBar />
                    <ContentRowTop/>

                    <div>
                        <ul className='t-head'>
                            <li>
                                Titulo
                            </li>
                            <li>
                                Duração
                            </li>
                            <li>
                                Avaliação
                            </li>
                            <li>
                                Gênero
                            </li>
                            <li>
                                Prêmios
                            </li>
                        </ul>
                        <div className='t-body'>
                            <ul className='t-row'>
                                <li>
                                    Homem-Aranha
                                </li>
                                <li>
                                    1h40
                                </li>
                                <li>
                                    10
                                </li>
                                <li>
                                    Ação
                                </li>
                                <li>
                                    5    
                                </li>
                            </ul>
                            <ul className='t-row'>
                                <li>
                                    Metal lords
                                </li>
                                <li>
                                    1h40
                                </li>
                                <li>
                                    10
                                </li>
                                <li>
                                    Musical
                                </li>
                                <li>
                                    7    
                                </li>
                            </ul>
                            <ul className='t-row'>
                                <li>
                                    Interelar
                                </li>
                                <li>
                                    2h20
                                </li>
                                <li>
                                    10
                                </li>
                                <li>
                                    Ação
                                </li>
                                <li>
                                    10   
                                </li>
                            </ul>
                        </div >
                    </div>

                    <Footer />
                </div>
            </div>    
        </React.Fragment>
    )
}
export default ContentWrapper;