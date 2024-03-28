import {
  Links,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { LinksFunction } from "@vercel/remix";
import styles from "./main.css?url";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export function Layout({ children }: React.PropsWithChildren) {
  const menuLinks: {
    to: string;
    label: string;
  }[] = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
  ];

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <header className="page-header">
          <ul className="main-menu">
            {menuLinks.map(({ to, label }) => (
              <li key={label} className="main-menu__item">
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    isActive ? "main-menu__link--current" : "main-menu__link"
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </header>
        <div className="page-content">{children}</div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
