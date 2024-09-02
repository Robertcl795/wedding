export function load({ url }) {
    if (url.pathname !== '/') {
      return {
        status: 302,
        redirect: '/'
      };
    }
  }