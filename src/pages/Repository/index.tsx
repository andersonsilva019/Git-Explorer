import React from 'react';
/* Pegando os parametros da rota */
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronsLeft, FiChevronRight } from 'react-icons/fi';
import imgLogo from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {

  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={imgLogo} alt="GitHubExplorer" />
        <Link to="/">
          <FiChevronsLeft size={16} />
        Voltar
      </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img src="" alt="" />
          <div>
            <strong>rocketseat/unform</strong>
            <p>descriptim</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>1808</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>1808</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link
          to={"sadasasd"}
        >
          <div>
            <strong>sadas</strong>
            <p>dsadasd</p>
          </div>

          <FiChevronRight size={20} color="#cbcbd6" />
        </Link>
      </Issues>
    </>
  );
}

export default Repository;
