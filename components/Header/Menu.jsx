import ActiveLink from "../ActiveLink/ActiveLink";

export default function Menu() {
  return (
    <>
      <li>
        <ActiveLink href="/">Home</ActiveLink>
      </li>
      <li>
        <ActiveLink href="/about">About</ActiveLink>
      </li>
      <li>
        <ActiveLink href="/gallery">gallery</ActiveLink>
      </li>
      <li>
        <ActiveLink href="/schedule">Schedule</ActiveLink>
      </li>
      <li>
        <ActiveLink href="/contact">Contact</ActiveLink>
      </li>
      <li>
        <ActiveLink href="/blog">Blog</ActiveLink>
      </li>
    </>
  );
}
