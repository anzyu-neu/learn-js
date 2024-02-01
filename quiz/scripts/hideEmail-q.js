/* anonymizes the username(local part) of an email ID, that is, 
replace the username part with * characters.
*/
const emails = ['mary@northeastern.edu', 'ari@khoury.northeastern.edu', 'jk_neu.edu', 'jk@neu.edu', 'jsned@', 'ai_me@mugar.northeastern.edu'];
window.onload = function hideEmail() {
    const list = document.getElementById('emails')
    list.innerHTML = '';
    for (const email of emails) {
        // complete the loop
        const atIndex = email.indexOf("@"); // acquire the index of the @ symbol
        const domainNeu = "northeastern.edu";
        let anonEmail = ''; // initialize the anonymous email with empty string
        if (atIndex !== -1) { // if @ symbol exists
            const username = email.slice(0, atIndex); // acquire the username
            const domain = email.slice(atIndex + 1); // acquire the domain name  
            const validUsername = /^[a-zA-Z0-9_]+$/.test(username); // check valid username input (chars, numbers, _);
            const validDomain = domain.endsWith(domainNeu); // check that domain ends with northeastern.edu
            if (validUsername && validDomain) {
                anonEmail = '*'.repeat(username.length) + email.substring(atIndex); // replaces username with * and adds on domain 
            }
        }
        // add email to the list of anonymous emails
        const anonList = document.createElement('li'); // create new list 
        anonList.textContent = anonEmail;

        list.append(anonEmail);
    }
}