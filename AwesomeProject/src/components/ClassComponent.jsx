import {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log('Constructor is being called');
  }
  static getDerivedStateFromProps(props, state) {
    console.log('Get Derived Props', props, state);
    return null;
  }
  // useEffect
  componentDidMount(props) {
    console.log('componentDidMount: Component Mounted');
  }
  //
  shouldComponentUpdate(updatedProps, updatedState) {
    console.log(
      'shouldComponentUpdate: Should re-render ?',
      updatedState !== this.state.count,
      updatedProps,
    );
    return true;
  }
  //   {Get the picture before the state are getting Updated}
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(
      'getSnapshotBeforeUpdate: Before DOM is Update',
      prevProps,
      prevState,
    );
    return null;
  }
  //   DidUpdate = {is the component is updated = waiting for success of componentUpdate}
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(
      'componentDidUpdate: Component Updated',
      prevProps,
      prevState,
      snapshot,
    );
  }
  //   Will Unmount = {Close the older saves {is unmount previous screen}}
  // Manage the previous screen before its getting update.
  componentWillUnmount() {
    console.log('componentWillUnmount: Component Unmounted');
  }
  incrementCount = () => {
    this.setState({count: this.state.count + 1});
  };
  resetCount = () => {
    this.setState({count: 0});
  };
  render() {
    return (
      <>
        <View>
          <Text>ClassBased Component {this.state.count}</Text>
          <TouchableOpacity onPress={this.incrementCount}>
            <Text style={{fontSize: 20, color: 'green'}}>Increse</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.resetCount}>
            <Text style={{fontSize: 20, color: 'red'}}>Reset</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

export default ClassComponent;
