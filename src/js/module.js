const HelloWorld = function(name = 'alice') {
  return {
    name,

    announce(name = 'default name') {
      let msg = `Hello ${name}! my name is ${this.name}`;
      let content = document.querySelector('#content');
      content.textContent = msg;
    },
  };
};

export default HelloWorld;
