function validateUsername(param) {
    const username = param.toLowerCase();

    if (username.length < 4) {
        return "Too Short";
    }
    if (username.includes(" ")) {
        return "No Space Allowed";
    }
    if (username.includes("admin")) {
        return "Reserved Word";
    }
    return "Available"
}


const result = validateUsername("joesargey");
console.log(result);