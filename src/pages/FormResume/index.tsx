import { useNavigate } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { ChangeEvent, useEffect } from 'react';
import { ReactComponent as ProfileIcon } from '../../svgs/profile.svg';
import { ReactComponent as BookIcon } from '../../svgs/book.svg';
import { ReactComponent as MailIcon } from '../../svgs/mail.svg';

export const FormResume = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if (state.name === '') {
            navigate('/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 4
            });
        }
    }, []);

    return (
        <Theme>
            <C.Container>
                <p>Cadastro Realizado!</p>
                <h1>Finalizado {state.name}.</h1>
                <p>Agora é só esperar que entraremos em contato.</p>

                <hr />

                <C.ResumeArea>
                    <C.Title>
                        <ProfileIcon fill='white' width={25} height={25} />
                        <h3>Dados Pessoais</h3>
                    </C.Title>
                    <C.InfoArea>
                        <C.Info>
                            <p>Nome:</p>
                            <div>{state.name}</div>
                        </C.Info>
                    </C.InfoArea>

                    <C.Title>
                        <BookIcon fill='white' width={25} height={25} />
                        <h3>Dados Profissionais</h3>
                    </C.Title>
                    <C.InfoArea>
                        <C.Info>
                            <p>Nível de Experiência:</p>
                            <div>{state.level === 0 ? "👶 Sou Iniciante" : "🧒 Sou Desenvolvedor"}</div>
                        </C.Info>
                    </C.InfoArea>

                    <C.Title>
                        <MailIcon fill='white' width={25} height={25} />
                        <h3>Dados de Contatos</h3>
                    </C.Title>
                    <C.InfoArea>
                        <C.Info>
                            <p>E-mail:</p>
                            <div>{state.email}</div>
                        </C.Info>
                        <C.Info>
                            <p>GitHub:</p>
                            <div>{state.github}</div>
                        </C.Info>
                    </C.InfoArea>
                </C.ResumeArea>
            </C.Container>
        </Theme>
    );
}