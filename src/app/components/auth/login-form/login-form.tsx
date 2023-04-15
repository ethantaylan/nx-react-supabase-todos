import './login-form.styl';

export default function LoginForm() {

  return (
    <form className="w-25">
      <h1 className="text-center w-100 mb-5">Login</h1>

      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Adresse mail</label>
        <input
          placeholder="Benoit"
          type="Prénom"
          className="form-control mb-4"
        />
        <label htmlFor="exampleInputEmail1">Mot de passe</label>
        <input type="email" className="form-control" />
      </div>
      <div className="d-flex justify-content-between">
        <button
          className="mt-5 sign-in btn btn-primary text-white"
          type="submit"
        >
          Se connecter
        </button>
        <button
          className="mt-5 btn btn-outline-secondary text-white"
          type="submit"
        >
          S'inscrire
        </button>
      </div>
    </form>
  );
}
