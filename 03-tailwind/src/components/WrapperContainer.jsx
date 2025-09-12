export default function WrapperContainer({ children }) {
  return <div id="wrapper" class="bg-[var(--background-color)] flex flex-col justify-between h-min min-h-screen m-0 text-white">{children}</div>;
}
