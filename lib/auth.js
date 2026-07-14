"use client";

// Simple client-side auth using localStorage.
// Stores a "users" table and a "session" key.

const USERS_KEY = "lateral_users";
const SESSION_KEY = "lateral_session";

function readUsers() {
  try {
    const raw = localStorage.getItem(USERS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function writeUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function getSession() {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function setSession(user) {
  localStorage.setItem(
    SESSION_KEY,
    JSON.stringify({ name: user.name, email: user.email, plan: user.plan || "FREE" })
  );
}

export function logout() {
  localStorage.removeItem(SESSION_KEY);
}

export function registerUser({ name, email, password, plan }) {
  const users = readUsers();
  const exists = users.some(
    (u) => u.email.toLowerCase() === email.toLowerCase()
  );
  if (exists) {
    return { ok: false, error: "An account with this email already exists." };
  }
  const newUser = { name, email, password, plan: plan || "FREE" };
  users.push(newUser);
  writeUsers(users);
  setSession(newUser);
  return { ok: true };
}

export function loginUser({ email, password }) {
  const users = readUsers();
  const user = users.find(
    (u) => u.email.toLowerCase() === email.toLowerCase()
  );
  if (!user) {
    return { ok: false, error: "No account found with this email." };
  }
  if (user.password !== password) {
    return { ok: false, error: "Incorrect password." };
  }
  setSession(user);
  return { ok: true };
}
