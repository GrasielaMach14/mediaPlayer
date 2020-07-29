import React from 'react';
import styled from 'styled-components';
import Menu from '../Menu';
import Footer from '../Footer';
import '../../index.css';

 const Main = styled.main`
     background-color: var(--black);
     color: var(--white);
     flex: 1;
     padding-top: 50px;
     padding-left: 5%;
     padding-right: 5%;
 `;

function PageDefault({children}){
    
    return (
        <React.Fragment>
            <Menu/>
                <Main>
                    {children}
                </Main>                
            <Footer/>
        </React.Fragment>        
    );
}

export default PageDefault;