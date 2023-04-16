import { Auth } from '@supabase/auth-ui-react';
import { createClient } from '@supabase/supabase-js';
import { Config } from '../../../config/index';
import {
  ThemeSupa,
} from '@supabase/auth-ui-shared';
import { useTablet } from 'src/app/hooks/use-media-query';
import './supabase-auth.stylus'

export const SupabaseAuth = () => {
  const supabase = createClient(Config.PROJECT_URL, Config.ANON_KEY);

  const tablet = useTablet()

  return (
    <div className={`input-box p-5 ${tablet ? "w-100" : 'w-100'}`}>
      <Auth
        theme='light'
        socialLayout="horizontal"
        view="sign_in"
        appearance={{
          theme: ThemeSupa,
          extend: true,
        }}
        supabaseClient={supabase}
      />
    </div>
  );
};
