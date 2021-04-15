const indentStyle = indentLevel => {
  const indent = indentLevel || 0;
  return { paddingLeft: `${indent * 24}px` };
};

export default indentStyle;
