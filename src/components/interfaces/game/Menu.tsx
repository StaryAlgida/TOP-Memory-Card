export default function Menu({
  isMenu,
  setIsMenu,
}: {
  isMenu: boolean;
  setIsMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="menu">
      <h1>MENU</h1>
      <div className="dificulty">
        <button className="dificulty-button easy">Easy</button>
        <button className="dificulty-button medium">Meduim</button>
        <button className="dificulty-button hard">Hard</button>
      </div>
    </div>
  );
}
