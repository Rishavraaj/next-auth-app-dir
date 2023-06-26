"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

const SigninButton = () => {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <div>
        <p>{session.user.name}</p>
        <button onClick={() => signOut()}>signOut</button>
      </div>
    );
  }
  return (
    <div>
      <button onClick={() => signIn()}>sign in</button>
    </div>
  );
};

export default SigninButton;
