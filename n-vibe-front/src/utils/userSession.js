export default function userSession(data) {
    if (data)
            window.sessionStorage.setItem("velib_user", JSON.stringify(data))
    if (window.sessionStorage.getItem("velib_user"))
        return JSON.parse(window.sessionStorage.getItem("velib_user"));
}

export function deleteSession() {
        window.sessionStorage.clear("velib_user");
}