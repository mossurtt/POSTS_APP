import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PATHS } from '../constants/paths';
import Root from '../pages/root';
import Posts from '../pages/posts';
import ErrorPage from '../pages/error-page';
import Best from '../pages/best';
import EditPage from '../pages/edit-page';
import NewPost from '../pages/new-post';

function RootNavigator() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATHS.ROOT} element={<Root />} />
        <Route path={PATHS.POSTS} element={<Posts />} />
        <Route path={PATHS.POST_DETAILS} element={<EditPage />} />
        <Route path={PATHS.BEST} element={<Best />} />
        <Route path={PATHS.NEW_POST} element={<NewPost />} />
        <Route path={PATHS.ERROR} element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RootNavigator;
