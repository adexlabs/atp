import { useNavigate } from "@remix-run/react";

export default function LanguageSelector({ currentLocale }) {
  const navigate = useNavigate();

  const changeLanguage = (locale) => {
    navigate(`/${locale}`);
  };

  return (
    <select value={currentLocale} onChange={(e) => changeLanguage(e.target.value)}>
      <option value="en">🇺🇸 English</option>
      <option value="fr">🇫🇷 Français</option>
      <option value="es">🇪🇸 Español</option>
      <option value="de">🇩🇪 Deutsch</option>
    </select>
  );
}
