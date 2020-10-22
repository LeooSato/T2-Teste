            import React,{Component} from 'react';
            import axios from 'axios';
export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Nome: "",
      mail: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNome = this.handleNome.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
  }

  handleNome(e) {
    this.setState({ Nome: e.target.value });
  }
  handleEmail(e) {
    this.setState({ email: e.target.value });
  }
  async handleSubmit(e) {
    const url =
      "https://85k7bv04na.execute-api.us-east-1.amazonaws.com/dev/register";
    const data = { 
      name: this.state.nome,
      email: this.state.email 
    };
    const options = {
      headers: { Authorization: "lksato@uol.com.br"},
    };

    if (this.state.nome.valueOf !== '' && this.state.email.valueOf !== '') {
      axios
        .post(url, data, options).then((r) => {
          console.log(r);
          alert("Cadastro realizado! Bem vindo a NeoVision!");
        }).catch((error) => {
          console.log("error", error);
        });
    } else {
      alert("Nome e/ou Email inválidos");
    }

    e.preventDefault();
  }

  render() {
  return(
                 
                <form onSubmit={this.handleSubmit} method="post" >
                 <div className="input">
              <input onChange={(e) => this.setState({ nome: e.target.value })}  id="name-input"  value={this.state.nome} placeholder="name" type="text"></input>
              <input onChange={this.handleEmail} id="email-input"  value={this.state.email} placeholder="e-mail" type="email"></input>
              <input id="btn" type="submit"  style={{ backgroundColor: 'orange' }}></input>
                </div>
              </form>
              )
}}