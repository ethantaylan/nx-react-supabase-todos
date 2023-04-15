import { AuthResponse, createClient } from '@supabase/supabase-js';
import './auth.styl';
import { LoginForm } from './login-form/login-form';
import { Config } from 'src/app/config';
import React from 'react';
import Swal from 'sweetalert2';
// import { SupabaseAuth } from './supabase-auth/supabase-auth';

export const Auth = () => {
  const supabase = createClient(Config.PROJECT_URL, Config.ANON_KEY);

  const [data, setData] = React.useState<any>();
  const [email, setEmail] = React.useState<string>('');
  const [pw, setPw] = React.useState<string>('');
  const [isLoged, setIsLoged] = React.useState<boolean>(false)

  const createUser = async () => {
    const { error } = await supabase.auth.signUp({
      email: email,
      password: pw,
    });
    if (error) {
      Swal.fire({
        title: error.message,
        icon: 'error',
      });
    } else {
      Swal.fire({
        title: 'Success creating account',
        icon: 'success',
      });
    }
  };

  const signIn = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: pw,
    });
    if (error) {
      Swal.fire({
        title: error.message,
        icon: 'error',
      });
    } else {
      Swal.fire({
        title: 'You are connected',
        icon: 'success',
      });
      setData(data);
    }
  };

  const signOff = async () => {
    const { error } = await supabase.auth.signOut()
    setData(null)
  }

React.useEffect(() => {
  console.log(data)

}, [data])


  return (
    <div className="w-100 p-5 text-white input-box h-100 d-flex justify-content-center align-items-center">
      <span onClick={() => signOff()} className='disconnect-button'>Disconnect</span>
      {!data ? (
        <LoginForm
          onChangePw={(event) => setPw(event.target.value)}
          onChangeEmail={(event) => setEmail(event.target.value)}
          onConnect={() => signIn()}
          onSubscribe={() => createUser()}
          email={email}
          pw={pw}
        />
        // <SupabaseAuth />
      ) : (
        <h1>You are online</h1>
      )}
    </div>
  );
};
