import { amiEvent } from './interfaces/amiEvent';
import ami from 'asterisk-manager';

const manager = new ami(
  process.env.AMI_PORT,
  process.env.AMI_HOST,
  process.env.AMI_USER,
  process.env.AMI_PASSWORD,
  true,
);

manager.keepConnected();

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
