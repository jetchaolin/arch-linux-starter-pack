export default function Button({
  children,
  childrenOnClick,
  disabled,
}) {
  let boolean = disabled;
  const handleDisabled = (state) => {
    if (state) {
      return true;
    }
    return false;
  };

  return (
    <button
      id="button"
      disabled={handleDisabled(boolean)}
      onClick={childrenOnClick}
    >
      {children}
    </button>
  );
}
