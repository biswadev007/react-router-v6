import { Link, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Contactus from './pages/Contactus';
import Books from './pages/Books';
import Book from './pages/Book';
import CelebrityBooks from './pages/CelebrityBooks';
import BooksLayout from './BooksLayout';

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/about'}>About</Link>
        </li>
        <li>
          <Link to={'/contact-us'}>Contact us</Link>
        </li>
        <li>
          <Link to={'/books'}>Books</Link>
        </li>
      </ul>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact-us' element={<Contactus />} />
        <Route path='/books' element={<BooksLayout />} >
          <Route index element={<Books />} />
          <Route path=':id' element={<Book />} />
          <Route path='celebrityBooks' element={<CelebrityBooks />} />
        </Route>
        <Route path='*' element={<h1>Not found 404</h1>} />
      </Routes>
    </div>
  );
};

export default App;
