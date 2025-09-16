(function fork() {
  setTimeout(fork, 0);
  fork();
})();