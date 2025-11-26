// import { NextResponse } from "next/server";

// // This function can be marked `async` if using `await` inside
// export function proxy(request) {
//     const user = request.cookies.get("user");
//     console.log(user);

//     if (!user) {
//         return NextResponse.redirect(new URL("/", request.url));
//     }
// }

// // Alternatively, you can use a default export:
// // export default function proxy(request) { ... }

// // See "Matching Paths" below to learn more
// export const config = {
//     matcher: ["/shop/:path*"],
// };

import { NextResponse } from "next/server";

export function proxy(req) {
    const token =
        req.cookies.get("next-auth.session-token") ||
        req.cookies.get("__Secure-next-auth.session-token");

    if (!token) {
        return NextResponse.redirect(new URL("/login", req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/shop/:path*", "/addProduct/:path*", "/manageProduct/:path*"],
};
