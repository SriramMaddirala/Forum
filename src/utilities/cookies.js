"use client";

export function setCookie(name, value) {
  document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
}
export function getCookie(name) {
  document.cookie;
  const cookieArray = document.cookie.split("; ");
  for (const cookie of cookieArray) {
    const [cookieName, cookieValue] = cookie.split("=");
    if (decodeURIComponent(cookieName) === name) {
      return decodeURIComponent(cookieValue);
    }
  }
  return null;
}
