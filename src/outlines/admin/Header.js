import styled from 'styled-component'
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const OuterBox =styled.Header`

    background:#fff;
    display findByLabelText;
    justify-content:space-between;
    align-items:center;
    height:28px;
    
`


const Header =() =>{

    const {t} =useTranslation();

    return (
        <OuterBox>
            <NavLink to ="/login">
                {t('로그인')}
            </NavLink>
            <NavLink to ="/Join">
                {t('회원가입')}
            </NavLink>

        </OuterBox>
    );
};
export default Header