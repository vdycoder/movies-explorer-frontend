export const headerShowRoutes = [
    "/",
    "/movies",
    "/saved-movies",
    "/profile",
];

export const footerShowRoutes = [
    "/",
    "/movies",
    "/saved-movies"
];

export function checkRoute(array, route) {
    return array.includes(route);
};
