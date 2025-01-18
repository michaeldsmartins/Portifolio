import React from 'react';
import Header from './components/Header';
import ProjectCard from './components/ProjectCard';
import SocialCard from './components/SocialCard';
import './App.scss';



import logoPokemon from './image/logo_pokemon.png';
import calculadora from './image/calc.jpg';
import logoFilmes from './image/logomovie.jpeg';
import Cadastro_P from './image/Cadastro_P.webp';

const App = () => {
  const projects = [
    
    {
      title: 'Lista Pokémon',
      description: 'Projeto usando React para listar Pokémon.',
      url: 'https://lista-pokemon-psi.vercel.app',
      technologies: ['React'],
      imageSrc: logoPokemon,
      imageAlt: 'Logo do Projeto Lista Pokémon PSI'
    },
    {
      title: 'Interface Filmes',
      description: 'Projeto usando React, Next.js e SASS para exibir filmes.',
      url: 'https://interface-filmes.vercel.app',
      technologies: ['React', 'Next.js', 'SASS'],
      imageSrc: logoFilmes,
      imageAlt: 'Logo do Projeto Interface Filmes'
    }, {
      title: 'Calculadora',
      description: 'Projeto Calculadora usando React,.',
      url: 'https://project-react-j1ou.vercel.app',
      technologies: ['React'],
      imageSrc: calculadora,
      imageAlt: 'Logo do Projeto Interface Filmes'
    }, {
      title: 'Tela Admin',
      description: 'Projeto usando React, CSS  SASS Site Simples Para adicionar e  controlar Usuarios.',
      url: 'https://frontend-rho-ten-36.vercel.app',
      technologies: ['React', 'CSS', ],
      imageSrc: Cadastro_P,
      imageAlt: 'Cadastro pessoal'
    }, 
  ];

  return (
    <div className="App">
      <Header />
      <main>
        <SocialCard 
          githubUrl="https://github.com/michaeldsmartins" 
          linkedinUrl="https://www.linkedin.com/in/michael-david-276aa5330/" 
        />
        <div className="projects">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;
