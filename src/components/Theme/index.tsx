import { ReactNode } from 'react';
import { Header } from '../Header';
import { SideBarItem } from '../SideBarItem';
import { useForm } from '../../contexts/FormContext';
import * as C from './styles';

type Props = {
    children: ReactNode;
}

export const Theme = ({ children }: Props) => {
    const { state } = useForm();

    return (
        <C.Container>
            <C.Area>
                <Header />

                <C.Steps>
                    <C.Sidebar>
                        <SideBarItem
                            title="Pessoal"
                            description="Se Identifique"
                            icon="profile"
                            path="/"
                            active={state.currentStep === 1}
                        />
                        <SideBarItem
                            title="Profissional"
                            description="Seu Nível"
                            icon="book"
                            path="/step2"
                            active={state.currentStep === 2}
                        />
                        <SideBarItem
                            title="Contatos"
                            description="Como te achar"
                            icon="mail"
                            path="/step3"
                            active={state.currentStep === 3}
                        />
                        <SideBarItem
                            title="Resumo"
                            description="Agora é só aguardar :)"
                            icon="rocket"
                            path="/resume"
                            active={state.currentStep === 4}
                        />
                    </C.Sidebar>
                    <C.Page>
                        {children}
                    </C.Page>
                </C.Steps>
            </C.Area>
        </C.Container>
    );
}