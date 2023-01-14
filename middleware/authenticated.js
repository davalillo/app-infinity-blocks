export default function ({ redirect }) {
  // If the user is not authenticated
  if (!JSON.parse(localStorage.getItem('auth'))) {
    return redirect('/login')
  }
}
