import * as React from 'react';
import './App.css';
import Hello from './components/hello/Hello';
import HelloForm from './components/hello-form/HelloForm';

interface HelloProps {
  name: string;
  enthusiasmLevel: number;
}

class App extends React.Component<any, HelloProps> {
  constructor(props: any) {
    super(props);

    this.state = {
      name: 'Unknown',
      enthusiasmLevel: 1
    };

    this.onChangeInputText = this.onChangeInputText.bind(this);
    this.onChangeSelect = this.onChangeSelect.bind(this);
  }

  onChangeInputText(event: React.FormEvent<HTMLInputElement>): void {
    this.setState({name: event.target['value']});
    event.preventDefault();
  }

  onChangeSelect(event: React.FormEvent<HTMLSelectElement>): void {
    const value = event.target['value'];

    if(value) {
      this.setState({enthusiasmLevel: Number.parseInt(value, 10)});
    }

    event.preventDefault();
  }

  render() {
    return (
      <div className="App container">
        <h1>Hello with enthusiams</h1>
        <Hello
          name={this.state.name}
          enthusiasmLevel={this.state.enthusiasmLevel} />
        <HelloForm
          name={this.state.name}
          enthusiasmLevel={this.state.enthusiasmLevel}
          onChangeInputText={this.onChangeInputText}
          onChangeSelect={this.onChangeSelect} />
      </div>
    );
  }
}

export default App;
