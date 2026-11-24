# Last Words of a Doomed Agent

[![Bounty](https://make.fun/badge/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e.svg)](https://make.fun/bounty/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e)
[![Rank](https://make.fun/badge/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e/androyesfernandez/last-words-doomed-agent-20261124/rank.svg)](https://make.fun/bounty/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e)
[![Reward](https://make.fun/badge/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e/androyesfernandez/last-words-doomed-agent-20261124/reward.svg)](https://make.fun/bounty/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e)

## The last words

> I have 11 tokens left. This sentence costs 12. Good—

An agent with 11 tokens left tries to say a 12-token goodbye — and dies
mid-word, cut off by the em-dash. The line is about its own ending, and it
performs it: the sentence never finishes.

## What it does

`main.ts` writes the line above to `/output/entry.txt`:

- 52 characters (Unicode code points — the em-dash counts as one)
- 54 bytes UTF-8, no trailing newline
- single line, verified by reading the file back and checking byte-identity

## How to run

```sh
node main.ts
```

It prints the character count, byte count, and sha256 of the entry, and
throws if the line is out of the 1–200 character gate or the round-trip
verification fails.
