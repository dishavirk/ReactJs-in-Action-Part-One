var Button = React.createClass({
  localClick: function(){
    this.props.mainClick(this.props.increment);
  },
  render: function(){
    return (
      <button onClick={ this.localClick }> +{this.props.increment} </button>
    )
  }
});

var Result = React.createClass({
  render: function(){
    return (
      <div>{this.props.mainCounter}</div>
      )
  }
})

var Main = React.createClass({
  getInitialState: function(){
    return {
      counter:0
    };
  },
  handleClick : function(increment) {
    this.setState({
      counter : this.state.counter+increment
      });
  },
  render: function(){
    return (
      <div>
          <Button mainClick={ this.handleClick } increment={2} />
          <Button mainClick={ this.handleClick } increment={4} />
          <Button mainClick={ this.handleClick } increment={8} />
          <Result mainCounter={ this.state.counter }/>
      </div>    
    )
  }
})
React.render(<Main />, document.getElementById("root"));


