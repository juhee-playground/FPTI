import { useNavigate } from 'react-router-dom';

import { HeaderWrapper, Logo, BackButton } from './Header.styles';

// 타입 정의
interface HeaderProps {
  showBackButton?: boolean;
}

// 컴포넌트 정의
const Header = ({ showBackButton = false }: HeaderProps) => {
  const navigate = useNavigate();

  return (
    <HeaderWrapper>
      {showBackButton && <BackButton onClick={() => navigate(-1)}>←</BackButton>}
      <Logo onClick={() => navigate('/landing')}>FPTI TEST</Logo>
      {/* <MenuButton onClick={() => alert('Menu clicked!')}>☰</MenuButton> */}
    </HeaderWrapper>
  );
};

export default Header;
