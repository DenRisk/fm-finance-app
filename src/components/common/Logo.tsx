import React from 'react';
import Icon from '@/components/common/Icon'

type LogoProps = {
    size: 'small' | 'large';
}

const Logo = ({size}: LogoProps) => {
    return (
        <>
            {
                size == 'small' ? (
                    <Icon id="logoSmall" pointer={false} useCurrentColor={false}/>
                ) : (
                    <Icon id="logoLarge" pointer={false} useCurrentColor={false}/>
                )
            }
        </>
    );
};

export default Logo;