import { amiEvent } from './interfaces/amiEvent';
import ami from 'asterisk-manager';

const manager = new ami(
  '5038',
  'docker2.backdev.net',
  'nodeapp',
  '8a2f9735cd13ed7a2a9611152ecae0a2',
  true,
);

manager.keepConnected();

// Listen for any/all AMI events.
manager.on('managerevent', function (evt: amiEvent) {
  console.log(evt);
});

manager.on('response', function (evt: amiEvent) {
  console.log(evt);
});

// manager.action(
//   {
//     action: 'originate',
//     channel: 'SIP/myphone',
//     context: 'default',
//     exten: 1234,
//     priority: 1,
//     variable: {
//       name1: 'value1',
//       name2: 'value2',
//     },
//   },
//   function (err, res) {},
// );
