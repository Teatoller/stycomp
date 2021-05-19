import styled from 'styled-components'
import AdaptButton from './components/button/AdaptButton';
import ExtendButton from './components/button/ExtendButton';
import PolymorphicButton from './components/button/PolymorphicButton';
import ReversedButton from './components/button/ReversedButton';

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
      <AdaptButton />
      <ExtendButton />
      <PolymorphicButton/>
      <ReversedButton/>
    </div>
  );
}

export default App;
