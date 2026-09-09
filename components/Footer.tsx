import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="bg-base">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <p className="text-xs text-faint">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js.
        </p>
      </div>
    </footer>
  );
}
