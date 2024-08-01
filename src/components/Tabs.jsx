export default function Tabs({ children, buttons , ButtonsConatainer }) {
  return (
    <>
      <ButtonsConatainer>{buttons}</ButtonsConatainer>
      {children}
    </>
  );
}
