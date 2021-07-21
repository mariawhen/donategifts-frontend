import React from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import {
  formClass,
  formContainerClass,
  formHeaderClass,
  loginResolver,
  OrClass,
  submitBtnClass,
  authBtnClass,
} from './AuthHelpers';
import { FormInput } from './FormInput';

export default function LoginForm(): JSX.Element {
  const { register, handleSubmit, errors } = useForm({
    resolver: loginResolver,
  });

  // eslint-disable-next-line unicorn/consistent-function-scoping
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className={formContainerClass}>
      <form onSubmit={handleSubmit(onSubmit)} className={formClass}>
        <div className={formHeaderClass}>
          <Link href="/login">
            <button type="button" className={authBtnClass}>
              Login
            </button>
          </Link>
          <div className={OrClass}>OR</div>
          <Link href="/signup">
            <button type="button" className={authBtnClass}>
              Sign Up
            </button>
          </Link>
        </div>

        <FormInput
          type="text"
          name="email"
          ref={register}
          placeholder="Email/Username"
          errorMsg={errors.email?.message}
        />

        <FormInput
          type="password"
          name="password"
          ref={register}
          placeholder="Password"
          errorMsg={errors.password?.message}
        />

        <input type="submit" className={submitBtnClass} value="Log In" />
      </form>
    </div>
  );
}
