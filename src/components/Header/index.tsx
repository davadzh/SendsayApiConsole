import React from 'react';
import styled from 'styled-components';
import {useAppDispatch} from '../../store';
import {useHistory} from 'react-router-dom';
import { logout } from 'src/store/actions/auth';

const Wrapper = styled.div`
  padding: 10px 15px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const Logo = styled.img`
  margin-right: 20px;
`;

const Title = styled.h1`
  font-size: 20px;
  display: flex;
  margin: 0;
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
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin-right: 30px;
  padding: 5px 15px;
  border-radius: 5px;
  
  &>span{
    color: rgba(0, 0, 0, 0.2);
  }
`;

const ExitButton = styled.button`
  padding: 0;
  margin-right: 30px;
  border: none;
  background: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  height: 30px;
`;

const ExitText = styled.div`
  font-size: 16px;
`;

const ExitIcon = styled.img`
  margin-left: 8px;
`;

const FullScreenButton = styled.button`
  padding: 0;
  border: none;
  cursor: pointer;
  background: none;
  height: 30px;
  display: flex;
  align-items: center;
`;

const Header = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();

  const onExit = () => {
    history.push("/");
    dispatch(logout())
  }

  return (
    <Wrapper>
      <LogoPart>
        <Logo src="/icons/logo.svg" alt='' />
        <Title>API-консолька</Title>
      </LogoPart>

      <NavPanel>
        <UserInfo>email <span>:</span> sublogin</UserInfo>

        <ExitButton onClick={onExit}>
          <ExitText>Выйти</ExitText>
          <ExitIcon src='/icons/log-out.svg' alt='' />
        </ExitButton>

        <FullScreenButton>
          <img src='/icons/full-screen.svg' alt='' />
        </FullScreenButton>
      </NavPanel>
    </Wrapper>
  );
};

export default Header;