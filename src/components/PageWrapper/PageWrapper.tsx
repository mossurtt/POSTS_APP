import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PageWrapperProps from './PageWrapper.types';

function PageWrapper(props: PageWrapperProps) {
  return (
    <div className="min-h-screen bg-[#82d6ca]">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}

export default PageWrapper;
