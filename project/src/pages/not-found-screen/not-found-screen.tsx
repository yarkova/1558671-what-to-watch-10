import { Link } from 'react-router-dom';

const NotFoundScreen = () => (
  <div>
    404 not found<br />
    <Link to='/'>Вернуться на главную страницу</Link>
  </div>
);

export default NotFoundScreen;
