/*
setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   ');
}, 700);
setTimeout(() => {
  process.stdout.write('\r|   ');
}, 900);
*/
const animation = ['|', '/', '-', '\\', '|'];
for (let i = 0; i < animation.length; i++) {
  const e = animation[i];
  setTimeout(() => {
    process.stdout.write(`\r${e}`)
  }, i * 170);
}
