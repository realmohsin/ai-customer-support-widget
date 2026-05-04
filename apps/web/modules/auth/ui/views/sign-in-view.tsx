import { SignIn } from "@clerk/nextjs";

export const SignInView = () => {
  return (
    <div className="flex flex-col items-center gap-y-6">
      <div className="w-full max-w-md rounded-xl border border-primary/20 bg-primary px-5 py-4 text-primary-foreground shadow-lg">
        <p className="font-semibold text-base">Demo access</p>
        <p className="mt-1 text-sm text-primary-foreground/80">
          This is a public demo. Sign in with the credentials below to explore
          the admin dashboard.
        </p>
        <div className="mt-3 space-y-1 font-mono text-sm">
          <p>
            <span className="text-primary-foreground/70">Email:</span>{" "}
            <span className="font-semibold text-[#64ffda]">
              realmohsin@outlook.com
            </span>
          </p>
          <p>
            <span className="text-primary-foreground/70">Password:</span>{" "}
            <span className="font-semibold text-[#64ffda]">demoPw_12</span>
          </p>
        </div>
      </div>
      <SignIn routing="hash" />
    </div>
  );
};
