import React, { useState, FormEvent, useEffect } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import { Title, Form, Repositories, Error } from './styles';
import { GithubExplorerHeader } from '../../components/GithubExplorerHeader';

interface Repository {
  /** Nem tudo que retorna precisa ser colocado na tipagem, cria a tipagem só do que será utilizado */
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  // eslint-disable-next-line prettier/prettier
  const [newRepo, setNewRepo] = useState(''); /** Estado só pra armazenar valor do input */
  const [inputError, setInputError] = useState('');

  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storagedRepositories = localStorage.getItem(
      '@GithubExplorer:repositories',
    );

    if (storagedRepositories) {
      return JSON.parse(storagedRepositories);
    }
    return [];
  });

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    localStorage.setItem(
      '@GithubExplorer:repositories',
      JSON.stringify(repositories),
      // eslint-disable-next-line no-sequences
    ),
      [repositories];
  });

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!newRepo) {
      setInputError('Type "author/name_of_repository"');
      return;
    }

    try {
      const response = await api.get(`repos/${newRepo}`);
      /** Procurando por "rocketseat/unform" vai retorna a DB do site no console.log */

      const repository = response.data;

      setRepositories([...repositories, repository]);
      setNewRepo('');
      setInputError('');
    } catch (err) {
      setInputError('Erro na busca por esse repositório');
    }
  }

  return (
    <>
      <GithubExplorerHeader />
      <Title>Explore Github Repositorys</Title>

      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          // eslint-disable-next-line prettier/prettier
          onChange={(e) => setNewRepo(e.target.value)}
          placeholder="Digit: ''Account''/''Repositorys_name''"
        />
        <button type="submit">Research</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {repositories.map(repository => (
          <Link
            key={repository.full_name}
            to={`/repository/${repository.full_name}`}
          >
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>

            <FiChevronRight size={20} />
          </Link>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
