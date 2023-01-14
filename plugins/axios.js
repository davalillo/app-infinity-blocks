export default function ({ $axios, redirect }) {
  $axios.onRequest(config => {
    if (localStorage.auth) $axios.setToken(JSON.parse(localStorage.auth).token, 'Bearer')
  });

  $axios.onError(err => {
    if (err.response.status === 500) {
      redirect('/sorry')
    }
  });
}
