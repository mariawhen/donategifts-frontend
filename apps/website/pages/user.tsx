import React from 'react';

interface IAPIUser {
  _id: string;
  fName: string;
  lName: string;
  email: string;
  verificationHash: string;
  emailVerified: boolean;
  password: string;
  passwordResetToken: string;
  passwordResetTokenExpires: Date;
  userRole: string;
  wishCards: string;
  donationsMade: string;
  joined: Date;
  aboutMe: string;
  loginMode: string;
}

export default function User(props: { users: IAPIUser[] }): JSX.Element {
  return (
    <div>
      {props.users.map((user) => (
        <p key={user._id}>{`${JSON.stringify(user, null, 3)}`}</p>
      ))}
    </div>
  );
}

export async function getStaticProps(_context): Promise<any> {
  try {
    const res = await fetch(
      `${process.env.BASE_HOST || 'http://localhost:3010'}/website-api/user/get-users`,
    );
    const data = await res.json();

    if (!data || data.length < 1) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      };
    }

    return {
      props: {
        users: data,
      },
    };
  } catch (error) {
    console.log(error.toString());
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
}
