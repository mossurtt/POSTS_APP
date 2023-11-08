import AvatarProps from './avatar.types';

function Avatar({ src, alt, size }: AvatarProps) {
  const avatarStyle = {
    width: size,
    height: size,
    borderRadius: '50%',
  };

  return <img src={src} alt={alt} style={avatarStyle} />;
}

export default Avatar;
