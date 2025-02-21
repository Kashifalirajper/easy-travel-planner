import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import { useNavigation } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { AiOutlineMenu } from "react-icons/ai"; // Hamburger Icon
import { Dialog, DialogContent, DialogDescription, DialogHeader } from "@/components/ui/dialog";
import axios from 'axios';

function Header() {
  const user = JSON.parse(localStorage.getItem('user'));
  const [openDailog, setOpenDailog] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu

  const login = useGoogleLogin({
    onSuccess: (codeResp) => GetUserProfile(codeResp),
    onError: (error) => console.log(error)
  });

  const GetUserProfile = async (tokenInfo) => {
    axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?acess_token=${tokenInfo?.access_token}`, {
      headers: {
        Authorization: `Bearer ${tokenInfo?.access_token}`,
        Accept: 'Application/json'
      }
    }).then((resp) => {
      localStorage.setItem('user', JSON.stringify(resp.data));
      setOpenDailog(false);
      window.location.reload();
    });
  };

  return (
    <div className='p-3 shadow-sm flex justify-between items-center px-5 bg-transparent'>
      {/* Logo / "ETP" on Small Screens */}
      <a href='/'>
        <span className='text-2xl font-bold sm:hidden'>ETP</span>
        <img src='/logo.png' className='h-16 hidden sm:block' alt="Logo" />
      </a>

      {/* Desktop View Buttons */}
      <div className="hidden sm:flex items-center gap-3">
        {user ? (
          <>
            <a href='/create-trip'>
              <Button variant="outline" className="rounded-full">+ Create Trip</Button>
            </a>
            <a href='/my-trips'>
              <Button variant="outline" className="rounded-full">My Trips</Button>
            </a>
            <Popover>
              <PopoverTrigger>
                <img src={user?.picture} className='h-[35px] w-[35px] rounded-full' alt="User" />
              </PopoverTrigger>
              <PopoverContent>
                <h2 className='cursor-pointer' onClick={() => {
                  googleLogout();
                  localStorage.clear();
                  window.location.reload();
                }}>Logout</h2>
              </PopoverContent>
            </Popover>
          </>
        ) : (
          <Button onClick={() => setOpenDailog(true)}>Sign In</Button>
        )}
      </div>

      {/* Mobile View - Hamburger Menu */}
      <div className="sm:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <AiOutlineMenu className="text-2xl" />
        </button>

        {menuOpen && (
          <div className="absolute z-10 top-16 right-5 bg-white shadow-lg rounded-md p-4 flex flex-col gap-3">
            {user ? (
              <>
                <a href='/create-trip'>
                  <Button variant="outline" className="rounded-full w-full">+ Create Trip</Button>
                </a>
                <a href='/my-trips'>
                  <Button variant="outline" className="rounded-full w-full">My Trips</Button>
                </a>
                <Button onClick={() => {
                  googleLogout();
                  localStorage.clear();
                  window.location.reload();
                }} className="w-full">Logout</Button>
              </>
            ) : (
              <Button onClick={() => setOpenDailog(true)} className="w-full">Sign In</Button>
            )}
          </div>
        )}
      </div>

      {/* Google Sign-In Dialog */}
      <Dialog open={openDailog}>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              <img src="/logo.png" className='h-16' alt="Logo" />
              <h2 className='font-bold text-lg mt-2'>Sign In With Google</h2>
              <p>Sign in to the App with Google authentication securely</p>
              <Button onClick={login} className="w-full mt-5 flex gap-4 items-center">
                <FcGoogle className='h-7 w-7' />
                Sign In With Google
              </Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Header;
