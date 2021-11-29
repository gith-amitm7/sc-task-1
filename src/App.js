import LetterCards from "./content/LetterCards";
import Layout from "./layout";

const App = () => {
  return (
    <div id="app">
      {/* Layout components has header and sidebar pre-fitted in a decided manner,
          this takes all the header, sidebar and main-content area related stylings &
          DOMs to one place
      */}
      <Layout>
        <LetterCards />
      </Layout>
    </div>
  );
};

export default App;
