import styles from './Hero.module.css';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <h2>Welcome to My Website</h2>
      <br />
      <div>
        <h1>
        Web Development Courses
        </h1>
        <h3>Courses to get you started</h3>
        <br/>
        <p>HTML</p>
        <p>CSS</p>
        <p>TypeScript</p>

        <br/>
        <br/>
        <h1>After Completing Web-Development Courses</h1>
        <br/>
        <h3>We will learn Artificial intelligence (AI)</h3>

      </div>
    </div>
  );
};

export default Hero;