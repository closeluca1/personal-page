import * as Styled from './styled';

import Gitlogo from '../../assets/github.svg';
import Linkedin from '../../assets/linkedin.svg';
import InstaLogo from '../../assets/instagram.svg';


const Social = () => {
  return (
    <Styled.Row>
      <a href="https://github.com/closeluca1" target='_blank'>
        <Styled.Button style={{ borderTopLeftRadius: 8, borderBottomLeftRadius: 8 }}>
          <Styled.Ico src={Gitlogo} />
        </Styled.Button>
      </a>

      <a href="https://www.linkedin.com/in/p-luca" target='_blank'>
        <Styled.Button style={{ backgroundColor: '#0e76a8' }}>
          <Styled.Ico src={Linkedin} />
        </Styled.Button>
      </a>

      <a href="https://www.instagram.com/_lucawww/" target='_blank'>
        <Styled.Button style={{ backgroundColor: '#3f729b', borderTopRightRadius: 8, borderBottomRightRadius: 8 }}>
          <Styled.Ico src={InstaLogo} />
        </Styled.Button>
      </a>

    </Styled.Row>
  );
}

export default Social;