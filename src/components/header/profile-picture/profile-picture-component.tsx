import React from 'react';
import { ProfilePictureProps } from './profile-picture-types';
import { StyledProfilePicture } from './profile-picture-styles';

export default ({ imgUrl, className }: ProfilePictureProps) => {
    return (
        <StyledProfilePicture className={className} src={imgUrl} alt="Imagem de perfil" />
    )
}