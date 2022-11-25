import React from 'react';

class Formulario extends React.Component {
   constructor(props) {
        super(props);
        this.state = { email: "", pass: "" };
        console.log("Entró");
        console.log(this.email + this.pass);
      
    }
    //cambia = (e) => {
    //    this.setState({email: e.target.value, pass: e.target.value})
    
    /*cambiaEmail = ()=> {
        this.setState({email: this.target.value})}

    cambiaPass = () => {
            this.setState({email: this.target.value})}
*/
    //e=>cambiaPass(e, e.target.value)
    render() {
        return (
            <form>
                <label>email </label>
                <input type="email" className="email" value={this.state.email} 
                onChange={event => this.setState({ pass: event.target.value })}></input>
                <br/>
                <label>contraseña </label>
                <input type="password" 
                className="pass" 
                value={this.state.pass} 
                onChange={event => this.setState({ pass: event.target.value })}></input>
                <br/>
                <button onClick={this.cambia}>Enviar</button>
            </form>
        );
    }
}

export default Formulario;