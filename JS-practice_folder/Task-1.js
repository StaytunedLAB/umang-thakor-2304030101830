// -------------------------------------------
//  BANKING SYSTEM – TRANSACTION VALIDATOR
//  WITH FULL USER INPUT
// -------------------------------------------

// Helper: Safely convert to number
function safeNumber(value) {
    const num = Number(value);
    return isNaN(num) ? null : num;
}

// Main processing function
function processBankAccount(accountData) {
    console.log("=== BANKING SYSTEM STARTED ===");

    const data = JSON.parse(JSON.stringify(accountData)); // Prevent modification

    const applied = [];
    const rejected = [];
    let finalBalance = 0;

    try {
        // Step 1: Validate opening balance
        const openingBalance = safeNumber(data.initialBalance);
        if (openingBalance === null || openingBalance < 0) {
            throw new Error("Invalid opening balance");
        }

        finalBalance = openingBalance;

        // Step 2: Process transactions
        for (let trx of data.transactions) {
            try {
                if (!trx || typeof trx !== "object") {
                    rejected.push({ transaction: trx, reason: "Invalid transaction format" });
                    continue;
                }

                const { type, amount } = trx;
                const amt = safeNumber(amount);

                // Validate amount
                if (amt === null || amt <= 0) {
                    rejected.push({ transaction: trx, reason: "Invalid amount" });
                    continue;
                }

                // Validate type
                if (!type) {
                    rejected.push({ transaction: trx, reason: "Missing transaction type" });
                    continue;
                }

                const t = type.toLowerCase();

                if (t === "deposit") {
                    finalBalance += amt;
                    applied.push({ type: "Deposit", amount: amt });

                } else if (t === "withdraw") {
                    if (amt > finalBalance) {
                        rejected.push({ transaction: trx, reason: "Insufficient balance" });
                    } else {
                        finalBalance -= amt;
                        applied.push({ type: "Withdraw", amount: amt });
                    }

                } else {
                    rejected.push({ transaction: trx, reason: "Unknown transaction type" });
                }

            } catch (innerErr) {
                rejected.push({ transaction: trx, reason: "System Error: " + innerErr.message });
            }
        }
    } catch (error) {
        console.log("SYSTEM ERROR:", error.message);
    } finally {
        console.log("--- Processing Completed (FINALLY BLOCK) ---");
        console.log("Audit Log: All transactions processed safely.");
    }

    // FINAL OUTPUT OBJECT
    return {
        accountNumber: data.accountNumber,
        accountHolder: data.accountHolder,
        currency: data.currency,
        initialBalance: data.initialBalance,
        finalBalance: finalBalance,
        appliedTransactions: applied,
        rejectedTransactions: rejected,
    };
}


// --------------------------------------------------------------
// USER INPUT SECTION
// --------------------------------------------------------------

function getUserInput() {

    const accountNumber = prompt("Enter Account Number:");
    const accountHolder = prompt("Enter Account Holder Name:");
    const initialBalance = prompt("Enter Opening Balance:");
    const currency = prompt("Enter Currency (e.g., INR):");

    const numberOfTransactions = Number(prompt("How many transactions?"));

    const transactions = [];

    for (let i = 0; i < numberOfTransactions; i++) {
        alert(`Enter details for transaction ${i + 1}`);

        const type = prompt("Type (Deposit / Withdraw):");
        const amount = prompt("Amount:");

        transactions.push({ type, amount });
    }

    return {
        accountNumber,
        accountHolder,
        initialBalance,
        currency,
        transactions,
    };
}

// --------------------------------------------------------------
// RUN PROGRAM USING USER INPUT
// --------------------------------------------------------------

const userInput = getUserInput();
const result = processBankAccount(userInput);

console.log("\n===== FINAL ACCOUNT SUMMARY =====");
console.log(JSON.stringify(result, null, 2));