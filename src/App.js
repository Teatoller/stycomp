import styled from 'styled-components'
import Buton from './components/button/Button';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const App = () => {
  return (
    <div>
      <header>
        <Wrapper>
          <Title>
            Styled Components
          </Title>
        </Wrapper>
      </header>
      <Buton/>
    </div>
  );
}

export default App;
