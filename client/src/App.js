import React from 'react';
import logo from './logo.svg';
import axios from 'axios';
import Header from './components/Header';

class App extends React.Component {
  constructor(){
   super()
   this.state = {
     name: "",
     message: ""
  }
 }

 componentDidMount = () => {
    this.loadPeople()
  }

  newName = (event) => {
    this.setState({
      name: event.target.value
    })
}

  newMessage = (event) => {
    this.setState({
      message: event.target.value
    })
  }

 createPerson = (event) => {
    event.preventDefault();
    axios.post(
      '/api',
      {
        person: {
          name: this.state.name,
          message: this.state.message
        }
      }
      ).then(
      (response) => {
        console.log(response)
      }
  )
}

loadPeople = () => {
axios.get('/api').then(
  (response) => {
    console.log(response.people)
  }
)
}

render = () => {
  return (
    <div className="container">
      <Header />
      <main>
        <form className="login">
          <div className="login_field">
            <label className="login_field_label">email</label>
            <input type="text" placeholder="example@mail.ru"></input>
          </div>
          <div className="login_field">
            <label className="login_field_label">password</label>
            <input type="text"></input>
          </div>
          <div className="login_field">
            {/* <input onClick={goToPage} type="submit" value="LogIn" /> */}
          </div>
        </form>
      </main>
      <footer>
        <a
          href="https://webreznov.now.sh"
          target="_blank"
          rel="noopener noreferrer"
        >
          Разработано от студии{' '}
          <h2> #webreznov__studio</h2>
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .login .login_field {
            margin-bottom: 20px;
        }
        .login .login_field_label {
            display: block;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
  }
}

export default App;
