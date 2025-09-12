export default function Button({ children, childrensId, childrenOnClick, disabled }) {
  let boolean = disabled;
  const handleDisabled = (state) => {
    if (state) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <button
      id="button"
      disabled={handleDisabled(boolean)}
      id={childrensId}
      onClick={childrenOnClick}
      class="bg-[var(--background-color)] text-[var(--primary-color)] border border-[var(--primary-color)]
         px-3 py-2 rounded-md cursor-pointer text-center text-base font-bold
         transition-colors duration-300
         hover:bg-[var(--primary-color)] hover:text-[var(--background-color)] hover:border-white
         active:bg-[var(--primary-color)]
         focus-visible:outline-2 focus-visible:outline-[var(--primary-color)] focus-visible:outline-offset-2 focus-visible:rounded
         disabled:bg-gray-400 disabled:text-gray-700 disabled:cursor-not-allowed disabled:opacity-70"
    >
      {children}
    </button>
  );
}
