import React from 'react';
import './login-form.styl';
import { useTablet } from 'src/app/hooks/use-media-query';

interface LoginFormProps {
  onConnect: () => void;
  onSubscribe: () => void;
  onChangeEmail: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePw: (event: React.ChangeEvent<HTMLInputElement>) => void;

  email: string;
  pw: string;
}

export const LoginForm: React.FC<LoginFormProps> = ({
  onConnect,
  onSubscribe,
  email,
  pw,
  onChangeEmail,
  onChangePw,
}) => {
  const tablet = useTablet();

  return (
    <div className={` input-box p-5 ${tablet ? 'w-100' : 'w-50'}`}>
      <h1 className="text-center display-1 w-100 mb-5">📝</h1>
      <div className="form-group">
        <label>Adresse mail</label>
        <input
          onChange={onChangeEmail}
          value={email}
          type="Prénom"
          className="form-control mb-4"
        />

        <label>Mot de passe</label>
        <input
          onChange={onChangePw}
          value={pw}
          type="password"
          className="form-control"
        />
      </div>
      <div className="d-flex justify-content-between">
        <button
          onClick={onConnect}
          className="mt-5 w-100 sign-in btn btn-primary text-white"
        >
          Se connecter
        </button>
      </div>
      <p className="mt-4 cursor-pointer text-secondary text-center">
        <small>Mot de passe oublié</small>
      </p>
      <p className="mt-4 cursor-pointer text-secondary text-center">
        <small onClick={onSubscribe} >S'inscrire</small>
      </p>
    </div>
  );
};
