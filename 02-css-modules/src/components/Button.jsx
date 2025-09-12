export default function Button({
  children,
  childrensId,
  childrenOnClick,
  disabled,
}) {

  let boolean = disabled;
  const handleDisabled = (state) => {
    if (state) {
      return true;
    } else {
      return false;
    }
  };


  return (
    <button id="button"
      disabled={handleDisabled(boolean)}
      id={childrensId}
      onClick={childrenOnClick}
    >
      {children}
    </button>
  );
}
