import React from 'react';
import imgLogo from '../../assets/logo.svg';
import { FiChevronRight } from 'react-icons/fi';

import { Container, Title, Form, Repository } from './styles';

const Dashboard: React.FC = () => (
  <Container>
    <img src={imgLogo} alt="github" />
    <Title>Explore repositórios no GitHub</Title>

    <Form>
      <input type="text" placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button>
    </Form>

    <Repository>
      <a href="teste">
        <img src="https://avatars0.githubusercontent.com/u/52974388?s=460&u=b9d2b2f5be1753df2933ea4fee79c16648ce3977&v=4" alt="Anderson silva" />
        <div>
          <strong>GitExplorer</strong>
          <p>Descrição do repositório</p>
        </div>

        <FiChevronRight size={20} color="#cbcbd6" />
      </a>
      <a href="teste">
        <img src="https://avatars0.githubusercontent.com/u/52974388?s=460&u=b9d2b2f5be1753df2933ea4fee79c16648ce3977&v=4" alt="Anderson silva" />
        <div>
          <strong>GitExplorer</strong>
          <p>Descrição do repositório</p>
        </div>

        <FiChevronRight size={20} color="#cbcbd6" />
      </a>
      <a href="teste">
        <img src="https://avatars0.githubusercontent.com/u/52974388?s=460&u=b9d2b2f5be1753df2933ea4fee79c16648ce3977&v=4" alt="Anderson silva" />
        <div>
          <strong>GitExplorer</strong>
          <p>Descrição do repositório</p>
        </div>

        <FiChevronRight size={20} color="#cbcbd6" />
      </a>
      <a href="teste">
        <img src="https://avatars0.githubusercontent.com/u/52974388?s=460&u=b9d2b2f5be1753df2933ea4fee79c16648ce3977&v=4" alt="Anderson silva" />
        <div>
          <strong>GitExplorer</strong>
          <p>Descrição do repositório</p>
        </div>

        <FiChevronRight size={20} color="#cbcbd6" />
      </a>
      <a href="teste">
        <img src="https://avatars0.githubusercontent.com/u/52974388?s=460&u=b9d2b2f5be1753df2933ea4fee79c16648ce3977&v=4" alt="Anderson silva" />
        <div>
          <strong>GitExplorer</strong>
          <p>Descrição do repositório</p>
        </div>

        <FiChevronRight size={20} color="#cbcbd6" />
      </a>
      <a href="teste">
        <img src="https://avatars0.githubusercontent.com/u/52974388?s=460&u=b9d2b2f5be1753df2933ea4fee79c16648ce3977&v=4" alt="Anderson silva" />
        <div>
          <strong>GitExplorer</strong>
          <p>Descrição do repositório</p>
        </div>

        <FiChevronRight size={20} color="#cbcbd6" />
      </a>
      <a href="teste">
        <img src="https://avatars0.githubusercontent.com/u/52974388?s=460&u=b9d2b2f5be1753df2933ea4fee79c16648ce3977&v=4" alt="Anderson silva" />
        <div>
          <strong>GitExplorer</strong>
          <p>Descrição do repositório</p>
        </div>

        <FiChevronRight size={20} color="#cbcbd6" />
      </a>
    </Repository>
  </Container>
);

export default Dashboard;
