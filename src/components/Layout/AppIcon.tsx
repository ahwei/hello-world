const activeIconSrc = './icons/active-icon.png';
const inactiveIconSrc = './icons/inactive-icon.png';

const AppIcon = ({ active }: { active?: boolean }) => {
  return (
    <img
      src={active ? activeIconSrc : inactiveIconSrc}
      alt="App Icon"
      width={24}
      height={24}
    />
  );
};

export default AppIcon;
