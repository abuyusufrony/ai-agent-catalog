import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function AuthButton() {
    const { data: session } = useSession();

    return session ? (
        <div className="flex items-center gap-3 p-2 border rounded-full shadow-sm bg-white hover:shadow-md transition-all">
            <Image
                src={session.user?.image ?? "/default-avatar.png"}
                alt="Profile picture"
                width={32}
                height={32}
                className="rounded-full"
            />
            <span className="text-sm font-medium text-gray-700">{session.user?.name}</span>
            <Button
                variant="destructive" // if using shadcn
                onClick={() => signOut()}
                className="ml-2"
            >
                Logout
            </Button>
        </div>
    ) : (
        <Button
            onClick={() => signIn("google")}
            className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 text-white px-5 py-2 rounded-full shadow-md transition-all">

            <svg
                className="w-5 h-5 mr-2"
                viewBox="0 0 533.5 544.3"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M533.5 278.4c0-17.4-1.4-34.1-4.1-50.2H272v95h146.9c-6.3 34.2-25 63.2-53.3 82.7v68h85.9c50.3-46.3 79-114.5 79-195.5z"
                    fill="#4285F4"
                />
                <path
                    d="M272 544.3c72.6 0 133.7-23.9 178.3-64.9l-85.9-68c-23.9 16-54.5 25.4-92.4 25.4-71.2 0-131.6-48-153.2-112.4h-90.2v70.6c44.6 87.8 136.4 149.3 243.4 149.3z"
                    fill="#34A853"
                />
                <path
                    d="M118.8 324.4c-10.8-32.1-10.8-66.8 0-98.9v-70.6h-90.2c-36.6 71.6-36.6 156.5 0 228.1l90.2-70.6z"
                    fill="#FBBC05"
                />
                <path
                    d="M272 107.7c39.5-.6 77.3 13.9 106.2 39.5l79.3-79.3C417.6 25.1 346.1-1.5 272 0 165 0 73.2 61.5 28.6 149.3l90.2 70.6C140.4 155.7 200.8 107.7 272 107.7z"
                    fill="#EA4335"
                />
            </svg>
            Login with Google
        </Button>
    );
}
