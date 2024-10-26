import { Link } from 'react-router-dom';

import { PATH } from '../../constants/path';

const Header = () => {
  return (
    <header className="border-b bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl justify-between p-4 sm:px-6 lg:px-8">
        <Link
          to={PATH.LANDING}
          className="text-lg font-bold transition-transform duration-300 hover:scale-105"
        >
          글로벌커넥팅
        </Link>
        <h1 className="text-lg font-bold">AI 자기소개서 첨삭</h1>
      </div>
    </header>
  );
};

export default Header;
