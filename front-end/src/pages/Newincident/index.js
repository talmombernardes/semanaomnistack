import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import './styles.css';
import logoImg from '../../assets/logo.svg';
import api from '../Services/api';

export default function Newincident(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const ongId = localStorage.getItem('ongId');

    async function handleNewIncident(e) {
        e.preventDefault();

        const data = {
            title,
            description,
            value,
        };

        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId,
                }
            })
            history.pushState('/profile')
        } catch(err) {
           alert('Erro ao cadastrat caso, tente novamente.'); 
        }
    }


    return (
        <div className='new-incident-container'>
            <div className='content'>
                <section>
                    <img src={logoImg} alt='Be The Hero'/>

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um heroi para resolver isso.</p>

                    <Link className='back-link' to='/profile'>
                        <FiArrowLeft size={16} color='#E02041'/>
                        Voltar para home
                    </Link>
                </section>
                <form>
                    <input placeholder='Titulo do caso'/>
                    <textarea placeholder='Descricao' />
                    <input placeholder='Valor em Reais'/>

                
                    <button className='button' type='submit'>Cadastrar</button>
                
                </form>
            </div>
        </div>
    )
}