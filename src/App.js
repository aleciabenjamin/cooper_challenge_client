import React, { Component } from 'react';
import DisplayCooperResult from './Components/DisplayCooperResult';
import InputFields from './Components/InputFields';
import LoginForm from './Components/LoginForm';
import { authenticate } from './Modules/Auth';
import DisplayPerformanceData from './Components/DisplayPerformanceData';
import { Container, Header, Button, Message } from 'semantic-ui-react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      distance: '',
      gender: 'female',
      age: '',
      renderLoginForm: false,
      authenticated: false,
      email: '',
      password: '',
      message: '',
      entrySaved: false
    }
  }

  onChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
      entrySaved: false
    });
  }

  async onLogin(e) {
    e.preventDefault();
    let resp = await authenticate(this.state.email, this.state.password)
    if (resp.authenticated === true) {
      this.setState({ authenticated: true });
    } else {
      this.setState({ message: resp.message, renderLoginForm: false })
    }
  }

  entryHandler(e) {
    this.setState({ entrySaved: true, updateIndex: true });
  }

  indexUpdated() {
    this.setState({ updateIndex: false });
  }

  onGenderChange(value) {
    this.setState({
      gender: value
    })
  }



  render() {
    let renderLogin;
    let user;
    let performanceDataIndex;

    if (this.state.authenticated === true) {
      user = JSON.parse(sessionStorage.getItem('credentials')).uid;
      renderLogin = (
        <Message positive>
          <p>Hi {user}</p>
        </Message>
      );
      performanceDataIndex = (
        <Button
          id="show-index" onClick={() => this.setState({ renderIndex: true })}>
          Show past entries
        </Button>
      )
      if (this.state.renderIndex === true) {
        performanceDataIndex = (
          <>
            <DisplayPerformanceData
              updateIndex={this.state.updateIndex}
              indexUpdated={this.indexUpdated.bind(this)}
            />
            <Button basic color='olive' content='Olive'
              primary
              onClick={() => this.setState({ renderIndex: false })}>
              Hide past entries
            </Button>
          </>
        )
      } else {
        performanceDataIndex = (
          <Button basic color='olive' content='Olive'
            primary
            id="show-index"
            onClick={() => this.setState({ renderIndex: true })}>
            Show past entries
          </Button>
        );
      }

    } else {
      if (this.state.renderLoginForm === true) {
        renderLogin = (
          <>
            <LoginForm
              loginHandler={this.onLogin.bind(this)}
              inputChangeHandler={this.onChange.bind(this)}
            />
          </>
        )
      } else {
        renderLogin = (
          <>
            <Button basic color='olive' content='Olive'
              primary
              id="login" onClick={() => this.setState({ renderLoginForm: true })}>
              Login
            </Button>
            <p>{this.state.message}</p>
          </>
        )
      }
    }
    return (
      <div>
        <Container>
          <Header as='h2' color='blue'>Cooper Test Assessment
          </Header>
          {renderLogin}
          <InputFields
            inputChangeHandler={this.onChange.bind(this)}
            inputGenderChangeHandler={this.onGenderChange.bind(this)}
          />

          <DisplayCooperResult
            distance={this.state.distance}
            gender={this.state.gender}
            age={this.state.age}
            authenticated={this.state.authenticated}
            entrySaved={this.state.entrySaved}
            entryHandler={this.entryHandler.bind(this)}
          />
          {performanceDataIndex}
        </Container>
      </div>
    );
  }
}

export default App;