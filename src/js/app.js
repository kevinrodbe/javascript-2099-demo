import HelloWorld from './module';

const hello = new HelloWorld();

window.onload = () => hello.announce('bob');
