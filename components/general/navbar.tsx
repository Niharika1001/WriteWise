"use client";

import Link from "next/link";
import { buttonVariants } from "../ui/button";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import React from "react";

export function Navbar() {
  const { getUser } = useKindeBrowserClient();
  const user = getUser();
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <>
      <nav className="py-5 flex items-center justify-between relative">
        {/* LEFT SIDE (Logo + Desktop Nav) */}
        <div className="flex items-center gap-6">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Write<span className="text-teal-600 font-bold">Wise</span>
            </h1>
          </Link>

          {/* DESKTOP NAV LINKS */}
          <div className="hidden sm:flex items-center gap-6">
            <Link
              className="text-sm font-medium hover:text-teal-600 transition-colors"
              href="/"
            >
              Home
            </Link>

            <Link
              className="text-sm font-medium hover:text-teal-600 transition-colors"
              href="/dashboard"
            >
              Dashboard
            </Link>
          </div>
        </div>

        {/* DESKTOP USERNAME + LOGOUT */}
        {user ? (
          <div className="hidden sm:flex items-center gap-4">
            <p className="font-semibold tracking-wide text-sm text-primary">
              Hi! {user.given_name} 👋
            </p>

            <LogoutLink className={buttonVariants()}>Logout</LogoutLink>
          </div>
        ) : (
          <div className="hidden sm:flex items-center gap-4">
            <LoginLink className={buttonVariants()}>Login</LoginLink>
            <RegisterLink
              className={buttonVariants({ variant: "secondary" })}
            >
              SignUp
            </RegisterLink>
          </div>
        )}

        {/* MOBILE USERNAME + HAMBURGER */}
        <div className="sm:hidden flex items-center gap-3">
          {user && (
            <p className="font-semibold tracking-wide text-sm text-primary">
              Hi! {user.given_name} 👋
            </p>
          )}

          <button
            className="flex flex-col gap-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="w-6 h-0.5 bg-teal-600"></span>
            <span className="w-6 h-0.5 bg-teal-600"></span>
            <span className="w-6 h-0.5 bg-teal-600"></span>
          </button>
        </div>

        {/* MOBILE FLOATING MENU */}
        {menuOpen && (
          <div className="sm:hidden absolute right-4 top-20 z-50 flex flex-col gap-4 bg-white p-4 rounded-md shadow-lg border">
            <Link
              href="/"
              className="text-sm font-medium hover:text-teal-600 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>

            <Link
              href="/dashboard"
              className="text-sm font-medium hover:text-teal-600 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Dashboard
            </Link>

            {user ? (
              <LogoutLink
                className={buttonVariants()}
                onClick={() => setMenuOpen(false)}
              >
                Logout
              </LogoutLink>
            ) : (
              <>
                <LoginLink
                  className={buttonVariants()}
                  onClick={() => setMenuOpen(false)}
                >
                  Login
                </LoginLink>

                <RegisterLink
                  className={buttonVariants({ variant: "secondary" })}
                  onClick={() => setMenuOpen(false)}
                >
                  SignUp
                </RegisterLink>
              </>
            )}
          </div>
        )}
      </nav>
    </>
  );
}
