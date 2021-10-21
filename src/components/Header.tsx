import React from 'react';
import styled from 'styled-components';
import {useAppDispatch} from '../store';
import {useHistory} from 'react-router-dom';
import {logout} from 'src/store/actions/auth';
import {ReactComponent as ExitIcon} from '../media/icons/log-out.svg';
import {ReactComponent as LogoIcon} from '../media/icons/logo.svg';
import {ReactComponent as FullScreenIcon} from '../media/icons/full-screen.svg';
import {ReactComponent as FullScreenEnabledIcon} from '../media/icons/full-screen-enabled.svg';
import {FullScreenHandle} from 'react-full-screen';
import {Colors} from '../helpers/constants/styleConstants';
import {staticTexts} from '../helpers/constants/namingConstants';

const HeaderStyled = styled.div`
  padding: 10px 15px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${Colors.translucentBlack};
`;

const Title = styled.h1`
  font-size: 20px;
  display: flex;
  margin: 0 0 0 20px;
  line-height: 30px;
  font-weight: normal;
`;

const LogoPart = styled.div`
  display: flex;
`;

const NavPanel = styled.div`
  display: flex;
  align-items: center;
`;

const UserInfo = styled.div`
  border: 1px solid ${Colors.lightGray};
  margin-right: 30px;
  padding: 5px 15px;
  border-radius: 5px;

  & > span {
    color: ${Colors.almostBlack};
  }
`;

const ExitButton = styled.button`
  padding: 0;
  border: none;
  margin-right: 30px;
  background: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  height: 30px;

  & > svg {
    path {
      transition: 0.2s ease;
    }
  }

  & > div {
    transition: 0.2s ease;
  }

  &:hover {
    & > svg {
      path {
        stroke: ${Colors.blue};
      }
    }

    & > div {
      color: ${Colors.blue};
    }
  }
`;

const ExitText = styled.div`
  font-size: 16px;
  margin-right: 8px;
`;

const FullScreenButton = styled.button`
  padding: 0;
  border: none;
  cursor: pointer;
  background: none;
  height: 30px;
  display: flex;
  align-items: center;

  & > svg {
    path {
      transition: 0.2s ease;
    }
  }

  &:hover {
    & > svg {
      path {
        stroke: ${Colors.blue};
      }
    }
  }
`;

type HeaderPropsType = {
  fullScreenHandler: FullScreenHandle;
};

const Header = ({fullScreenHandler}: HeaderPropsType) => {
  const dispatch = useAppDispatch();
  const history = useHistory();

  const onExit = () => {
    dispatch(logout());
    history.push('/');
  };

  const changeFullScreenStatus = async () => {
    if (fullScreenHandler.active) {
      await fullScreenHandler.exit();
    } else {
      await fullScreenHandler.enter();
    }
  };

  return (
    <HeaderStyled>
      <LogoPart>
        <LogoIcon />
        <Title>{staticTexts.API_CONSOLE}</Title>
      </LogoPart>

      <NavPanel>
        {/*TODO use real user data*/}
        <UserInfo>
          email <span>:</span> sublogin
        </UserInfo>

        <ExitButton onClick={onExit}>
          <ExitText>{staticTexts.EXIT}</ExitText>
          <ExitIcon />
        </ExitButton>

        <FullScreenButton onClick={changeFullScreenStatus}>
          {fullScreenHandler.active ? <FullScreenEnabledIcon /> : <FullScreenIcon />}
        </FullScreenButton>
      </NavPanel>
    </HeaderStyled>
  );
};

export default Header;
