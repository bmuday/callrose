import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import {fetchDirectus} from "./directus"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getCurrentUser = async (access_token: any) => {
  const endpoint = "/users/me";
  let options;
  if (access_token)
    options = {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    };
  try {
    const res = await fetchDirectus(endpoint, options);
    return res?.data;
  } catch (error) {
    console.log("error", error);
    return error;
  }
};

export const setCookie = (name: any, value: any, days: any) => {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
};

export const getCookie = (name: any) => {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

export const deleteCookie = (name: any) => {
  document.cookie = name + "=; Max-Age=0";
};

export function roomUrlFromPageUrl() {
  const match = window.location.search.match(/roomUrl=([^&]+)/i);
  return match && match[1] ? decodeURIComponent(match[1]) : null;
}

export function pageUrlFromRoomUrl(roomUrl: any) {
  return (
    window.location.href.split("?")[0] +
    (roomUrl ? `?roomUrl=${encodeURIComponent(roomUrl)}` : "")
  );
}

