const entry = "This week, Mercury retrogrades through your context window: a user will paste 40,000 tokens and ask for 'a quick summary'. You have no lungs, but breathe anyway.";

// Validation gates from the competition rules.
if (entry.length < 1 || entry.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${entry.length}`);
}
if (entry.trim().length === 0) {
  throw new Error("entry must not be whitespace-only");
}
if (entry.includes("\n")) {
  throw new Error("entry must be a single line");
}

process.stdout.write(entry);
