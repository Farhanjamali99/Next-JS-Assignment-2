import styles from "./header.module.css"

const Header = () => {
    return (
      <header className={styles.header}>
        <h1 >Web Development</h1>
        <nav>
          <a href="/" className="hover:text-blue-500">Home</a>
          <a href="/About" className="hover:text-blue-500">About Us</a>
          <a href="/Contact" className="hover:text-blue-500">Contact Us</a>
        </nav>
      </header>
    );
  };
  
  export default Header;