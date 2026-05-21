import {
  PREVIEW_GATE_PASSWORD,
  PREVIEW_GATE_SESSION_KEY,
} from '../constants/previewGate.js';

export function isPreviewGateEnabled() {
  const value = import.meta.env.VITE_ENABLE_PREVIEW_GATE;

  if (value === 'true') return true;
  if (value === 'false') return false;

  return import.meta.env.PROD;
}

export function isPreviewAuthenticated() {
  if (!isPreviewGateEnabled()) return true;

  try {
    return sessionStorage.getItem(PREVIEW_GATE_SESSION_KEY) === '1';
  } catch {
    return false;
  }
}

export function authenticatePreview(password) {
  if (password !== PREVIEW_GATE_PASSWORD) return false;

  try {
    sessionStorage.setItem(PREVIEW_GATE_SESSION_KEY, '1');
  } catch {
    // sessionStorage が使えない環境では毎回入力が必要
  }

  return true;
}
