const getInitials = (name, isBusiness) => {
  if (!name) {
    return '';
  }

  let parsedName = name.toUpperCase();
  if (isBusiness) {
    parsedName = parsedName.replace('PTY', '').replace('LTD', '');
  }
  parsedName = parsedName.trim();

  const parts = parsedName && parsedName.split(' ');
  const secondBusinessInitialPosition = parts.length > 1 ? 1 : parts.length - 1;
  const secondInitialPosition = isBusiness
    ? secondBusinessInitialPosition
    : parts.length - 1;

  if (parts.length === 0) return '';
  if (secondInitialPosition <= 0) return parts[0][0];

  return parts[0][0] + parts[secondInitialPosition][0];
};

export default getInitials;
