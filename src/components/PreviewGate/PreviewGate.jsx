import { useEffect, useState } from 'react';
import {
  authenticatePreview,
  isPreviewAuthenticated,
  isPreviewGateEnabled,
} from '../../utils/previewGate.js';
import './PreviewGate.scss';

function PreviewGate({ children }) {
  const [gateEnabled] = useState(() => isPreviewGateEnabled());
  const [authorized, setAuthorized] = useState(() => isPreviewAuthenticated());
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (!gateEnabled) {
      setAuthorized(true);
      return;
    }

    setAuthorized(isPreviewAuthenticated());
  }, [gateEnabled]);

  if (!gateEnabled || authorized) {
    return children;
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (authenticatePreview(password.trim())) {
      setAuthorized(true);
      setError('');
      return;
    }

    setError('パスワードが正しくありません');
  };

  return (
    <div className="previewGate">
      <div className="previewGate__panel">
        <p className="previewGate__label">PREVIEW</p>
        <h1 className="previewGate__title">確認用ページ</h1>
        <p className="previewGate__description">
          パスワードを入力して LP を表示してください。
        </p>
        <form className="previewGate__form" onSubmit={handleSubmit}>
          <label className="previewGate__field">
            <span className="previewGate__fieldLabel">パスワード</span>
            <input
              className="previewGate__input"
              type="password"
              name="password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </label>
          {error ? (
            <p className="previewGate__error" role="alert">
              {error}
            </p>
          ) : null}
          <button className="previewGate__submit" type="submit">
            表示する
          </button>
        </form>
        <p className="previewGate__note">
          簡易確認用のため、完全なアクセス制限ではありません。
        </p>
      </div>
    </div>
  );
}

export default PreviewGate;
