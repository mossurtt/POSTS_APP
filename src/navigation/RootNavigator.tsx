import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PATHS } from '../constants/paths';
import Root from '../routes/root';
import Posts from '../routes/posts';
import ErrorPage from '../error-page';
import Best from '../routes/best';

function RootNavigator() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATHS.ERROR} element={<ErrorPage />} />
        <Route path={PATHS.ROOT} element={<Root />} />
        <Route path={PATHS.POSTS} element={<Posts />} />
        <Route path={PATHS.BEST} element={<Best />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RootNavigator;
