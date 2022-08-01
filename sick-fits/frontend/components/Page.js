import PropTypes from 'prop-types';
import Header from './Header';

export default function Page({ children, cool }) {
  // going to be used in every component, or at least can be
  return (
    <div>
      <Header />
      <h3>{cool}</h3>
      {children}
    </div>
  );
}

Page.propTypes = {
  cool: PropTypes.string,
  children: PropTypes.any,
};
