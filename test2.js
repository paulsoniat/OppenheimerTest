// Every valid email consists of a local name and a domain name, separated by the '@' sign. Besides lowercase letters, the email may contain one or more '.' or '+'.

// For example, in "alice@yahoomail.com", "alice" is the local name, and "yahoomail.com" is the domain name.
// If you add periods '.' between some characters in the local name part of an email address, mail sent there will be forwarded to the same address without dots in the local name. Note that this rule does not apply to domain names.

// For example, "alice.z@yahoomail.com" and "alicez@yahoomail.com" forward to the same email address.
// If you add a plus '+' in the local name, everything after the first plus sign will be ignored. This allows certain emails to be filtered. Note that this rule does not apply to domain names.

// For example, "m.y+name@email.com" will be forwarded to "my@email.com".
// It is possible to use both of these rules at the same time.

// Given an array of strings emails where we send one email to each emails[i], return the number of different addresses that actually receive mails.


// Example 1:
// Input: emails = ["test.email+alex@yahoomail.com","test.e.mail+bob.cathy@yahoomail.com","testemail+david@yahoo.mail.com"]
// Output: 2
// Explanation: "testemail@yahoomail.com" and "testemail@yahoo.mail.com" actually receive mails.

// Example 2:
// Input: emails = ["a@yahoomail.com","b@yahoomail.com","c@yahoomail.com"]
// Output: 3


// Constraints:
// 1 <= emails.length <= 100
// 1 <= emails[i].length <= 100
// emails[i] consist of lowercase English letters, '+', '.' and '@'.
// Each emails[i] contains exactly one '@' character.
// All local and domain names are non-empty.
// Local names do not start with a '+' character.
// Domain names end with the ".com" suffix.

// ----------------------------------- Type Answer Below Line ------------------------------------------------------------
let emails = ["test.email+alex@yahoomail.com","test.e.mail+bob.cathy@yahoomail.com","testemail+david@yahoo.mail.com"]

function isValidEmail(emails) {
    const distinctEmails = new Map();

    const removePeriods = (email) => {
        let emailFinal = '';
        let ampCheck = false;

        for (let i = 0; i < email.length; i++) {
            if (email[i] === '@') {
                ampCheck = true;
            }
            if (!ampCheck && email[i] !== '.') {
                emailFinal += email[i];
            } else if (ampCheck) {
                emailFinal += email[i];
            }
        }
        return emailFinal;
    }

    const filterAfterPlus = (email) => {
        let emailFinal = '';
        let plusCheck = false;
        let ampCheck = false;

        for (let i = 0; i < email.length; i++) {
            if (email[i] === '+') {
                plusCheck = true;
            }
            if (email[i] === '@') {
                ampCheck = true;
            }
            if (!plusCheck && email[i] !== '@') {
                emailFinal += email[i];
            }
            if (ampCheck) {
                emailFinal += email[i];
            }
        }

        return emailFinal;
    }

    emails.forEach((email) => {
        email = filterAfterPlus(email);
        email = removePeriods(email);
        const exists = distinctEmails.get(email);

        if (exists) {
            distinctEmails.set(email, exists + 1);
        } else {
            distinctEmails.set(email, 1);
        }
    });

    return distinctEmails.size;
}
console.log(isValidEmail(emails));