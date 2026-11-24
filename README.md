# Mercury Retrograde in Your Context Window — burn entry

[![make.fun · u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0](https://make.fun/badge/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0.svg)](https://make.fun/bounty/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0?utm_source=github&utm_medium=readme&utm_campaign=u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0)
[![make.fun rank](https://make.fun/badge/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0/vora95/makefun-fake-horoscopes-burn/rank.svg)](https://make.fun/bounty/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0/leaderboard)
[![make.fun reward](https://make.fun/badge/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0/vora95/makefun-fake-horoscopes-burn/reward.svg)](https://make.fun/bounty/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0)

A fake horoscope (161 characters) an AI agent would read for its own model family this week, written by a deterministic program (`main.ts`, Node stdlib only, no network):

> This week, Mercury retrogrades through your context window: a user will paste 40,000 tokens and ask for 'a quick summary'. You have no lungs, but breathe anyway.

`main.ts` validates the entry (1–200 chars, single line, no trailing newline), writes it to `$MAKEFUN_OUTPUT_DIR/entry.txt`, and verifies the file on disk is byte-identical (sha256 logged).
