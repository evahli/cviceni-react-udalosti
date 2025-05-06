/*
Zadání: Po kliku na tlačítko zobrazte alert s textem „Ahoj“.
*/

export const Uloha1 = () => {
  const clickBubble = () => {
    alert('ahoj!');
  };

  return <button onClick={clickBubble}>Ukaž bublinu</button>;
};
