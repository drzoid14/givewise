import React from 'react'


class Navigator extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
    componentDidMount() {
      fetch("https://api.data.charitynavigator.org/v2/Organizations?app_id=7e936180&app_key=e987adc960e988f2696165df3b84affd%0A")
        .then(res => res.json())
        .then(
          (result) => {
              console.log(result);
            this.setState({
              isLoaded: true,
              result: result
            });
            
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <h1>Things</h1>
        );
      }
    }
  }


export default 'Navigator' 