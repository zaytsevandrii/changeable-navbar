import './App.scss';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <nav>
      <Navbar/>
    </nav>
    <div className='hero'>
      <div className='container'>
        <h1>Welcome To my Website</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, dolores?</p>
      </div>
    </div>

    <section className="container content">
      <h2>Content One</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti consectetur aspernatur maxime, cupiditate ea, voluptatum beatae facilis corporis, ratione asperiores earum accusantium amet eum neque eius quam. Explicabo commodi a suscipit accusantium velit, alias adipisci blanditiis sunt saepe quidem ipsam unde reprehenderit maiores enim nostrum! Inventore impedit incidunt rerum, maiores eligendi laudantium, doloribus autem non blanditiis nam labore aperiam assumenda ipsam error tenetur a harum quas! Amet debitis neque id, consequatur cupiditate ab ducimus commodi expedita officia, dolores fugiat quos delectus? Consequuntur qui nobis atque consectetur magnam eveniet harum dolores, fuga odit. Ab, reprehenderit. Repellat et tempore mollitia laudantium id.</p>
      <h3>Content Two</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, culpa perferendis. Non porro nam architecto laboriosam dolor quidem eveniet mollitia laborum quisquam nihil ab nulla temporibus eius magnam alias reprehenderit repellat consectetur veritatis voluptatem, eligendi voluptates quos labore nemo? Omnis facilis magnam cupiditate quod labore minima provident adipisci quaerat possimus similique unde, laborum eos! Itaque distinctio ducimus aliquid impedit et?</p>
    </section>
    </>
  );
}

export default App;
