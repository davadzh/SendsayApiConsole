export const deleteCookie = (name: string) => {
  document.cookie = [
    name, '=',
    '; expires=' + new Date(0).toUTCString()
  ].join('');
}