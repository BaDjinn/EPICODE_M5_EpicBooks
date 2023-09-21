import React, { Component } from "react";
import MyNav from "./components/navbar/MyNav";
import MyFooter from "./components/footer/MyFooter";
import MySpinner from "./components/spinner/MySpinner";
import { navLinks } from "./data/navLinks";
import LastestRelease from "./components/lastestRelease/LastestRelease";
import PostContext from "./contexts/BooksContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import ErrorPage from "./components/pages/ErrorPage";

export const App = () => {
	return (
		/*<PostContext>
			<MyNav links={navLinks} />
			<LastestRelease />
		</PostContext>*/
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Home />} />

				<Route path="/book/:bookId" />
				<Route />
			</Routes>
		</BrowserRouter>
	);
};
export default App;

/* export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      isLoading: false,
      error: null,
    };
  }

  async getBooks() {
    try {
      this.setState({ isLoading: true });
      console.log(`loading...`)
      const response = await fetch("https://epibooks.onrender.com/");
      const data = await response.json();

      

      this.setState({ books: data });
      this.setState({ isLoading: false });
      console.log(`loaded!!!`)
    } catch (errore) {
      console.log(`QUALCOSA È ANDATO STORTO: ${errore}`);
      this.setState({ error: errore });
    }
  }

  componentDidMount() {
    this.getBooks();
  }

  render() {
    console.log(this.state.books);
    return (
      <>
        <>
          <MyNav links={navLinks} />
          {this.state.isLoading && <MySpinner />}
          {!this.state.isLoading && <LastestRelease books={this.state.books} />}
        
          <MyFooter />
        </>
      </>
    );
  }
}
 */
