import React, {Component} from 'react';
import './lista.css';//cuando se usa asi la clase se llama directamente en el className
//import styles from './lista.css' se llama con className={styles.bg-red}
import MyComponent from '../my_component/my_component'


class Lista extends Component {
  constructor(){
    super()
    this.state = {
      name: 'Luis',
      age : '24'
    }
  }

  render() {
    return (
      <div className="bg-red">
        <h1 id="test" >Hola soy {this.state.name}</h1>
        <MyComponent />
      </div>
    );
  }
}

export default Lista;
