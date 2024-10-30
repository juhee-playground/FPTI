import { useNavigate } from 'react-router-dom';

import { HeaderWrapper, Logo, BackButton } from './Header.styles';

interface HeaderProps {
  showBackButton?: boolean;
}

const Header = ({ showBackButton = false }: HeaderProps) => {
  const navigate = useNavigate();

  return (
    <HeaderWrapper>
      {showBackButton && <BackButton onClick={() => navigate(-1)}>←</BackButton>}
      <Logo onClick={() => navigate('/landing')}>FPTI TEST</Logo>
    </HeaderWrapper>
  );
};

export default Header;
